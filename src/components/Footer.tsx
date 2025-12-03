const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-aqua to-purple flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-sm">P</span>
            </div>
            <span className="font-heading font-bold text-lg text-foreground">PADHA</span>
          </div>

          {/* Powered by */}
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Powered by 
            <a 
              href="#" 
              className="text-aqua underline-glow hover:text-aqua-glow transition-colors"
            >
              Phaeton AI
            </a>
          </p>

          {/* Copyright */}
          <p className="text-muted-foreground/60 text-xs">
            © 2025 PADHA Coin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
