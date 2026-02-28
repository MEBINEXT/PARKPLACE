import { Building2, Landmark, Wrench, HardHat, Ruler, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Edificación Residencial",
    description: "Construcción de viviendas unifamiliares, adosados y edificios residenciales con los más altos estándares de calidad.",
  },
  {
    icon: Landmark,
    title: "Obra Pública",
    description: "Infraestructuras civiles, viales, urbanizaciones y obras hidráulicas para el sector público.",
  },
  {
    icon: Wrench,
    title: "Reformas Integrales",
    description: "Renovación completa de interiores y exteriores, adaptando espacios a las necesidades actuales.",
  },
  {
    icon: HardHat,
    title: "Gestión de Proyectos",
    description: "Dirección y coordinación integral de obras, garantizando plazos y presupuestos.",
  },
  {
    icon: Ruler,
    title: "Diseño y Planificación",
    description: "Asesoramiento técnico y diseño arquitectónico para materializar su visión.",
  },
  {
    icon: ShieldCheck,
    title: "Rehabilitación",
    description: "Restauración y rehabilitación de edificios históricos y patrimoniales.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-sm font-heading font-medium tracking-[0.3em] text-primary mb-3 uppercase">
            Nuestras Especialidades
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5">
            Servicios
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Ofrecemos soluciones integrales de construcción, adaptadas a cada proyecto y cliente.
          </p>
        </div>

        {/* Uniform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative glass-strong rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-default p-8 flex flex-col h-full`}
            >
              {/* Subtle gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex-1 flex flex-col">
                <div
                  className={`rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 w-14 h-14`}
                >
                  <service.icon
                    className={`text-primary group-hover:text-primary-foreground transition-colors duration-300 w-7 h-7`}
                  />
                </div>
                <h3
                  className={`font-heading font-bold text-foreground mb-4 text-xl`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-muted-foreground leading-relaxed text-base`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
