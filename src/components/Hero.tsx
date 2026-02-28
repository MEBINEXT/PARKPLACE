import heroImg from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Proyecto de construcción moderna en Almería"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <p className="text-sm sm:text-base font-heading font-medium tracking-[0.3em] text-primary mb-6 uppercase">
            Constructora en Almería
          </p>
        </div>
        <h1
          className="text-5xl sm:text-6xl lg:text-8xl font-heading font-extrabold text-primary-foreground mb-8 animate-fade-in-up tracking-tight leading-[1.05]"
          style={{ animationDelay: "0.15s" }}
        >
          Construyendo<br />
          el futuro en<br />
          <span className="text-primary">Almería</span>
        </h1>
        <p
          className="text-base sm:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-12 font-body animate-fade-in-up leading-relaxed"
          style={{ animationDelay: "0.3s" }}
        >
          Más de 20 años de experiencia en edificación residencial, obra pública
          y reformas integrales con los más altos estándares de calidad.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="#proyectos"
            className="glass-btn inline-flex items-center gap-3 text-foreground font-heading font-semibold px-10 py-4 rounded-full text-base tracking-wide group"
          >
            <span>Ver Proyectos</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
