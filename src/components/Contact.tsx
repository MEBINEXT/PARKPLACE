import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensaje enviado correctamente. Nos pondremos en contacto pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 space-y-5">
            <div>
              <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Nombre</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                placeholder="Su nombre completo"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Teléfono</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Mensaje</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all"
                placeholder="Describa brevemente su proyecto..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-heading font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-sm tracking-wide hover:shadow-lg hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              Enviar Mensaje
            </button>
          </form>

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
