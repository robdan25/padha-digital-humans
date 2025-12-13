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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
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
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#docs"
            onClick={(e) => scrollToSection(e, 'docs')}
            className="text-muted-foreground hover:text-aqua transition-colors font-medium"
          >
            Docs
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
