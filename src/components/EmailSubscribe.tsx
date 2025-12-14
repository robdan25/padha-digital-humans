import { useState } from "react";
import { Loader2, CheckCircle2, Mail } from "lucide-react";

const EmailSubscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(`${import.meta.env.BASE_URL}subscribe.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        console.error('Email submission failed:', data);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
      console.error('Email submission error:', error);
    }
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-2xl">
        {/* Glowing card */}
        <div className="relative opacity-0 animate-fade-in-up">
          {/* Outer glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-aqua/20 via-purple/20 to-aqua/20 rounded-3xl blur-2xl" />
          
          <div className="relative glass-card rounded-3xl p-8 md:p-12 neon-border">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aqua/20 to-purple/20 flex items-center justify-center border border-aqua/30">
                <Mail className="w-8 h-8 text-aqua" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-center font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
              Be first in line when <span className="text-primary glow-text">Phae</span> goes live
            </h2>

            {/* Subtitle */}
            <p className="text-center text-muted-foreground mb-8 max-w-md mx-auto">
              Join the early list for updates, demos, airdrops, and launch access.
            </p>

            {/* Form */}
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-8">
                <div className="w-16 h-16 rounded-full bg-aqua/20 flex items-center justify-center animate-scale-in">
                  <CheckCircle2 className="w-8 h-8 text-aqua" />
                </div>
                <p className="text-foreground font-medium text-lg">You're on the list!</p>
                <p className="text-muted-foreground text-sm">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 rounded-xl bg-muted/50 border border-border focus:border-aqua/50 focus:outline-none focus:ring-2 focus:ring-aqua/20 text-foreground placeholder:text-muted-foreground transition-all duration-300"
                    />
                    {status === "error" && (
                      <p className="absolute -bottom-6 left-0 text-sm text-destructive">{errorMessage}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative px-8 py-4 rounded-xl font-medium transition-all duration-300 overflow-hidden disabled:opacity-70"
                  >
                    {/* Button gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-aqua to-purple opacity-100 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple to-aqua opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Button glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style={{ boxShadow: '0 0 30px hsl(var(--aqua) / 0.5)' }} />
                    
                    <span className="relative flex items-center justify-center gap-2 text-primary-foreground font-semibold whitespace-nowrap">
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        "Join the Early List"
                      )}
                    </span>
                  </button>
                </div>
              </form>
            )}

            {/* Disclaimer */}
            <p className="text-center text-muted-foreground/70 text-xs mt-8 max-w-sm mx-auto">
              You'll receive occasional emails about PADHA, digital humans, and launch events. 
              Unsubscribe anytime. No spam — ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscribe;
