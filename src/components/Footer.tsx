const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={`${import.meta.env.BASE_URL}Master1024BlueR.png`}
              alt="PADHA Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-heading font-bold text-lg text-foreground">PADHA</span>
          </div>

          {/* Powered by */}
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Powered by
            <a
              href="https://phaetonai.com/padha"
              target="_blank"
              rel="noopener noreferrer"
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
