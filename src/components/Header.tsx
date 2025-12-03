import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-aqua to-purple flex items-center justify-center glow-box transition-all duration-300 group-hover:shadow-glow-intense">
              <span className="text-primary-foreground font-heading font-bold text-lg">P</span>
            </div>
          </div>
          <span className="font-heading font-bold text-2xl tracking-tight">
            <span className="text-foreground">PADHA</span>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
