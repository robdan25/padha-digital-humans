import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001';

// Generate a unique client ID for this session
const CLIENT_ID = `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

export interface ChatResponse {
  response: string;
  model: string;
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

class ChatService {
  private apiUrl: string;
  private clientId: string;

  constructor() {
    this.apiUrl = API_BASE_URL;
    this.clientId = CLIENT_ID;
  }

  /**
   * Send a chat message to the AI backend
   */
  async sendMessage(message: string): Promise<string> {
    try {
      const response = await axios.post<ChatResponse>(
        `${this.apiUrl}/api/chat`,
        {
          message: message,
          client_id: this.clientId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 30000, // 30 second timeout
        }
      );

      return response.data.response;
    } catch (error: any) {
      console.error('Error sending message to AI:', error);

      // Return a helpful error message
      if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
        return "I'm having trouble connecting to the AI backend. Please make sure the backend server is running.";
      } else if (error.response?.status === 500) {
        return "I encountered an error processing your message. Please try again.";
      } else {
        return "I'm temporarily unavailable. Please try again in a moment.";
      }
    }
  }

  getClientId(): string {
    return this.clientId;
  }
}

// Export singleton instance
export const chatService = new ChatService();
