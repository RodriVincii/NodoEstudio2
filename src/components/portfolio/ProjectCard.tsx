import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isExternal = project.url !== "#";
  return (
    <a
      href={isExternal ? project.url : undefined}
      target={isExternal ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group relative block rounded-3xl overflow-hidden card-elevated glow-on-hover border border-border/60"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={`Vista previa de ${project.title}`}
          loading={index < 2 ? "eager" : "lazy"}
          className="w-full h-full object-cover object-top transition-transform duration-[1.2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Floating tag */}
        <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-background/70 backdrop-blur-md border border-border/60 text-xs">
          {project.year}
        </div>

        {isExternal && (
          <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-7">
        <div className="text-xs uppercase tracking-wider text-primary mb-3">
          {project.category}
        </div>
        <h3 className="font-serif text-3xl md:text-4xl mb-3 group-hover:text-gradient transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-secondary/60 border border-border/40 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
