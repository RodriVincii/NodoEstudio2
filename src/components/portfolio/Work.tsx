import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const Work = () => {
  return (
    <section id="trabajo" className="py-32 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              · Proyectos seleccionados
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] max-w-3xl">
              Trabajo reciente que <em className="text-gradient">me enorgullece</em>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Una muestra de webs y tiendas online diseñadas y desarrolladas a medida
            para marcas reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
