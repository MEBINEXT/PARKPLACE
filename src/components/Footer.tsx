import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold tracking-wider mb-1">
              <span className="text-primary-foreground font-light">PARK</span>
              <span className="text-primary-foreground font-bold">PLACE</span>
              <span className="text-primary-foreground font-light"> S.L</span>
            </h3>
            <p className="text-xs tracking-[0.3em] text-white/90 mb-4 font-heading font-medium">
              CONSTRUCTORA — ALMERÍA
            </p>
            <p className="text-sm leading-relaxed text-footer-foreground/80">
              Especialistas en edificación residencial, obra civil y reformas integrales. Calidad y compromiso en cada proyecto.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">
              Contacto
            </h4>
            <div className="space-y-4 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/70" />
                <span>+34 722 403 999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/70" />
                <span>contacto@parkplace.es</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/70 mt-0.5" />
                <div>
                  <p>Calle Ejemplo, 1</p>
                  <p>04001 Almería, España</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">
              Síguenos
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-footer-foreground/80 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-footer-foreground/80 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-footer-foreground/80">
          <p>
            Plataforma desarrollada por{" "}
            <a href="https://mebinext.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-bold">
              MEBI NEXT
            </a>{" "}
            2026 © PARK PLACE S.L. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terminos-y-condiciones" className="hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
            <Link to="/politica-de-privacidad" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/politica-de-cookies" className="hover:text-white transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
