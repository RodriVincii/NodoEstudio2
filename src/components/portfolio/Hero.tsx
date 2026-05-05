import { WhatsAppIcon } from "../WhatsAppIcon";

const whatsappHref =
  "https://wa.me/5491131440019?text=Hola%2C%20quiero%20consultar%20por%20una%20p%C3%A1gina%20para%20mi%20negocio.";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 grain overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10">
        <div className="flex items-center gap-2 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground tracking-wide uppercase">
            Disponible para nuevos proyectos · 2026
          </span>
        </div>

        <h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] mb-8 max-w-5xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Diseño y desarrollo
          <br />
          de webs que <em className="text-gradient">venden</em>.
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Trabajo con marcas, restaurantes, emprendimientos y comercios para crear
          sitios y tiendas online que se ven hermosos, cargan rápido y convierten
          visitantes en clientes.
        </p>

        <div
          className="flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#trabajo"
            className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.6)]"
          >
            Ver mi trabajo
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#25D366] text-white font-medium hover:scale-105 transition-transform shadow-[0_10px_40px_-10px_rgba(37,211,102,0.7)]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Escribime por WhatsApp
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="container relative z-10 mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up"
        style={{ animationDelay: "0.4s" }}
      >
        {[
          { n: "4+", l: "Proyectos lanzados" },
          { n: "100%", l: "Diseñados a medida" },
          { n: "Shopify", l: "E-commerce" },
          { n: "<2s", l: "Tiempos de carga" },
        ].map((s) => (
          <div key={s.l} className="border-l border-border/60 pl-4">
            <div className="font-serif text-4xl text-gradient">{s.n}</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
