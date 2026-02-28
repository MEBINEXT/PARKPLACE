import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, UserCheck, Lock } from "lucide-react";
import { useEffect } from "react";

const PoliticaDePrivacidad = () => {
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
            <Shield className="w-10 h-10 text-primary" />
            Política de Privacidad
          </h1>

          <p className="text-muted-foreground mb-12">Última actualización: Febrero 2026</p>

          <div className="space-y-10">
            <section className="glass-strong rounded-2xl p-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                1. Responsable del Tratamiento
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                PARK PLACE S.L., con domicilio en Calle Ejemplo 1, 04001 Almería, España, es el responsable del tratamiento de los datos personales que usted nos facilite a través de este sitio web. Puede contactarnos en contacto@parkplace.es para cualquier cuestión relativa al tratamiento de sus datos.
              </p>
            </section>

            <section className="glass-strong rounded-2xl p-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-primary" />
                2. Datos Recogidos y Finalidad
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Los datos personales que podemos recopilar incluyen: nombre, dirección de correo electrónico, número de teléfono y cualquier información adicional que usted nos proporcione voluntariamente a través de nuestro formulario de contacto.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Estos datos se utilizan exclusivamente para responder a sus consultas, gestionar solicitudes de presupuesto y mantenerle informado sobre nuestros servicios, siempre con su consentimiento previo.
              </p>
            </section>

            <section className="glass-strong rounded-2xl p-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                3. Derechos del Usuario
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Usted tiene derecho a acceder, rectificar, suprimir, limitar el tratamiento, portar y oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, puede enviar una comunicación escrita a nuestro domicilio social o al correo electrónico contacto@parkplace.es, adjuntando copia de su documento identificativo.
              </p>
            </section>

            <section className="glass-strong rounded-2xl p-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                4. Seguridad de los Datos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                PARK PLACE S.L. ha adoptado los niveles de seguridad de protección de datos personales legalmente requeridos, e implementa medidas técnicas y organizativas adicionales para garantizar la confidencialidad, integridad y disponibilidad de sus datos personales.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidad;
