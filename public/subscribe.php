<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed']);
  exit();
}

$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['email']) || empty($input['email'])) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'Email is required']);
  exit();
}

$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'Invalid email address']);
  exit();
}

// Save to file as backup
$log_file = 'email_signups.txt';
$log_entry = date('Y-m-d H:i:s') . " - " . $email . "\n";
file_put_contents($log_file, $log_entry, FILE_APPEND);

$to = 'join@padhacoin.com';
$subject = 'New PADHA Early List Signup';
$message = "New email signup for the PADHA early list:\n\nEmail: " . $email . "\n\nTime: " . date('Y-m-d H:i:s');

// Use proper headers for Hostinger
$headers = "From: noreply@padhacoin.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$mail_sent = mail($to, $subject, $message, $headers);

// Send auto-reply to the subscriber
$subscriber_subject = 'Welcome to the PADHA Early List!';
$subscriber_message = "Hi there!\n\nThank you for joining the PADHA early list. You're now on the list to be among the first to experience Phae and our digital human technology.\n\nWe'll keep you updated on:\n- Launch dates and demos\n- Exclusive early access\n- Special airdrops and rewards\n\nStay tuned!\n\nBest regards,\nThe PADHA Team\n\npadhacoin.com";

$subscriber_headers = "From: join@padhacoin.com\r\n";
$subscriber_headers .= "Reply-To: join@padhacoin.com\r\n";
$subscriber_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

mail($email, $subscriber_subject, $subscriber_message, $subscriber_headers);

// Always return success since we're logging to file
http_response_code(200);
echo json_encode(['success' => true, 'message' => 'Successfully added to the early list!']);
?>
