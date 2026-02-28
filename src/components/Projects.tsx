import { useState } from "react";
import { MapPin } from "lucide-react";

import projectResidencial from "@/assets/project-residencial-1.jpg";
import projectObraPublica from "@/assets/project-obra-publica.jpg";
import projectReforma from "@/assets/project-reforma.jpg";
import projectEnCurso from "@/assets/project-en-curso-1.jpg";
import projectFinalizado from "@/assets/project-finalizado-2.jpg";

type Tab = "en-curso" | "finalizados";

const projects = {
  "en-curso": [
    { title: "Residencial Mar de Alborán", location: "Aguadulce", image: projectEnCurso },
    { title: "Urbanización Las Salinas", location: "Roquetas de Mar", image: projectResidencial },
    { title: "Centro Deportivo Municipal", location: "Almería Capital", image: projectObraPublica },
  ],
  finalizados: [
    { title: "Villas del Mediterráneo", location: "Mojácar", image: projectFinalizado },
    { title: "Reforma Integral Casco Histórico", location: "Almería Capital", image: projectReforma },
    { title: "Puente Río Andarax", location: "Almería Capital", image: projectObraPublica },
  ],
};

const Projects = () => {
  const [tab, setTab] = useState<Tab>("en-curso");

  return (
    <section id="proyectos" className="py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-heading font-medium tracking-[0.3em] text-primary mb-3 uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5">
            Nuestros Proyectos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Descubra nuestras obras en curso y proyectos finalizados por toda la provincia de Almería.
          </p>
        </div>

        {/* Animated pill toggle */}
        <div className="flex justify-center mb-14">
          <div className="glass-strong rounded-full p-1.5 flex gap-1">
            <button
              onClick={() => setTab("en-curso")}
              className={`relative px-7 py-3 rounded-full font-heading font-semibold text-sm tracking-wide transition-all duration-300 ${
                tab === "en-curso"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              En Curso
            </button>
            <button
              onClick={() => setTab("finalizados")}
              className={`relative px-7 py-3 rounded-full font-heading font-semibold text-sm tracking-wide transition-all duration-300 ${
                tab === "finalizados"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Finalizados
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects[tab].map((project, i) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Glass overlay on hover */}
              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-full glass-dark p-6">
                  <h3 className="text-lg font-heading font-bold text-primary-foreground mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-primary-foreground/70 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    {project.location}
                  </div>
                </div>
              </div>

              {/* Always-visible info on mobile */}
              <div className="lg:hidden bg-card p-5 border-t border-border">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
