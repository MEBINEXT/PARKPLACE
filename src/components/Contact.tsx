import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-heading font-medium tracking-[0.3em] text-primary mb-3 uppercase">
            Hablemos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5">
            Contacto
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            ¿Tiene un proyecto en mente? Contáctenos y le asesoraremos sin compromiso.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            {[
              { icon: Phone, label: "Teléfono", value: "+34 722 403 999" },
              { icon: Mail, label: "Email", value: "contacto@parkplace.es" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 glass-strong rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">{item.label}</h4>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-4 glass-strong rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Dirección</h4>
                <p className="text-muted-foreground text-sm">
                  Calle Ejemplo, 1<br />
                  04001 Almería, España
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
