import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}Master1024BlueR.png`}
              alt="PADHA Logo"
              className="w-10 h-10 rounded-xl transition-all duration-300 group-hover:shadow-glow-intense"
            />
          </div>
          <span className="font-heading font-bold text-2xl tracking-tight">
            <span className="text-foreground">PADHA</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/docs"
            className="text-muted-foreground hover:text-aqua transition-colors font-medium"
          >
            Docs
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
