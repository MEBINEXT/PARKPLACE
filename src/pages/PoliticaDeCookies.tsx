import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Cookie, ShieldCheck, Settings } from "lucide-react";
import { useEffect } from "react";

const PoliticaDeCookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-heading font-medium text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Link>

          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
            <Cookie className="w-10 h-10 text-primary" />
            Política de Cookies
          </h1>

          <p className="text-muted-foreground mb-12">Última actualización: Febrero 2026</p>

          <div className="space-y-10">
            <section className="glass-strong rounded-2xl p-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                1. ¿Qué son las cookies?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo local u ordenador para registrar y analizar los comportamientos de navegación de forma anónima, adaptando y mejorando su experiencia tecnológica en cada visita.
              </p>
            </section>

            <section className="glass-strong rounded-2xl p-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                2. Cómo utilizamos las cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En esta plataforma web empleada por PARK PLACE S.L., se utilizan cookies exclusivas de carácter técnico y de rendimiento. No albergamos ni solicitamos cookies publicitarias orientadas a intrusión.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Empleamos las mínimas esenciales (propias y de subproyectos de estilo, tipografías e hipervínculos) para que las animaciones inmersivas y estructura visual se sirvan a su dispositivo del modo más óptimo, veloz y compatible según la pantalla.
              </p>
            </section>

            <section className="glass-strong rounded-2xl p-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                3. Bloqueo y Eliminación
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Como usuario, es responsable y dueño de su equipo y red, por lo tanto posee las capacidades para poder restringir, bloquear o borrar las cookies de nuestro sitio web en cualquier momento a través del panel de configuración de seguridad o las herramientas avanzadas integradas en su navegador favorito (Chrome, Safari, Edge, etc). Considere que, si elimina o rechaza estas trazas técnicas amigables, su navegación por nuestra web podría ser menos inmersiva.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaDeCookies;
