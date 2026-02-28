import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Scale, AlertTriangle, BookOpen } from "lucide-react";
import { useEffect } from "react";

const TerminosYCondiciones = () => {
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
            <FileText className="w-10 h-10 text-primary" />
            Términos y Condiciones
          </h1>

          <p className="text-muted-foreground mb-12">Última actualización: Febrero 2026</p>

          <div className="space-y-10">
            <section className="glass-strong rounded-2xl p-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                1. Objeto y Aceptación
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Los presentes Términos y Condiciones regulan el uso del sitio web de PARK PLACE S.L. (en adelante, "la Empresa"). El acceso y uso de este sitio web implica la aceptación plena y sin reservas de todas las condiciones incluidas en este documento. Si no está de acuerdo con estas condiciones, le rogamos que se abstenga de utilizar este sitio web.
              </p>
            </section>

            <section className="glass-strong rounded-2xl p-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-primary" />
                2. Propiedad Intelectual
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de PARK PLACE S.L. o de terceros que han autorizado su uso, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación.
              </p>
            </section>

            <section className="glass-strong rounded-2xl p-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                3. Limitación de Responsabilidad
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                PARK PLACE S.L. no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de la falta de disponibilidad o continuidad del sitio web, ni de los errores en los contenidos o la presencia de virus u otros elementos dañinos. La Empresa se reserva el derecho de modificar estos términos en cualquier momento sin previo aviso.
              </p>
            </section>

            <section className="glass-strong rounded-2xl p-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                4. Legislación Aplicable
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de la ciudad de Almería, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TerminosYCondiciones;
