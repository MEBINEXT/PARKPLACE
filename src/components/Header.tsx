import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/parkplace-logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (!isHome) {
      window.location.href = "/" + href;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="flex-shrink-0 relative z-50">
            <img src={logo} alt="Park Place S.L. Constructora" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                className={`px-4 py-2 rounded-lg text-sm font-heading font-medium tracking-wide transition-all duration-300 ${
                  scrolled
                    ? "text-foreground hover:text-primary hover:bg-accent"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors ${
              open ? "text-foreground" : scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label="Abrir menú"
          >
            {open ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 glass-strong" />
          <nav className="relative z-10 flex flex-col items-start justify-center h-full px-8 gap-2">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={() => handleNavClick(link.href)}
                className="stagger-item text-4xl sm:text-5xl font-heading font-bold text-foreground hover:text-primary transition-colors py-3"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {link.label}
              </a>
            ))}
            <div
              className="stagger-item mt-8 pt-8 border-t border-border w-full"
              style={{ animationDelay: `${navLinks.length * 0.08}s` }}
            >
              <p className="text-sm text-muted-foreground font-body">
                Park Place S.L. — Constructora en Almería
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
