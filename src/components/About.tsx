import { CheckCircle } from "lucide-react";

const stats = [
  { value: "20+", label: "Años de experiencia" },
  { value: "150+", label: "Proyectos completados" },
  { value: "50+", label: "Profesionales" },
  { value: "100%", label: "Compromiso" },
];

const values = [
  "Calidad y excelencia en cada detalle",
  "Cumplimiento de plazos y presupuestos",
  "Innovación y sostenibilidad",
  "Atención personalizada al cliente",
];

const About = () => {
  return (
    <section id="sobre-nosotros" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-heading font-medium tracking-[0.3em] text-primary mb-3 uppercase">
            Quiénes Somos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5">
            Sobre Nosotros
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base">
            Park Place S.L. es una constructora con sede en Almería, comprometida con la excelencia en cada proyecto.
            Desde nuestros inicios, hemos construido con pasión, profesionalidad y un profundo respeto por el entorno.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center glass-strong rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-heading font-extrabold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="max-w-xl mx-auto">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-8 text-center">
            Nuestros Valores
          </h3>
          <div className="space-y-4">
            {values.map((v) => (
              <div key={v} className="flex items-center gap-4 glass-strong rounded-xl px-6 py-4">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
