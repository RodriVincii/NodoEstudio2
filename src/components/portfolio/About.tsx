export const About = () => {
  return (
    <section id="sobre-mi" className="py-32 relative">
      <div className="container grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-border/60 card-elevated">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[12rem] text-gradient leading-none">
                N
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <span>Estudio independiente</span>
              <span>BA · AR</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            · Sobre mí
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1] mb-8">
            Diseño webs con la misma <em className="text-gradient">obsesión</em> con
            la que vos cuidás tu negocio.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              Soy diseñador y desarrollador web independiente. Trabajo con
              restaurantes, comercios y emprendimientos que necesitan una presencia
              online seria, sin las trabas ni los costos de una agencia tradicional.
            </p>
            <p>
              Cada proyecto que ves arriba lo pensé, diseñé y desarrollé de punta a
              punta — desde la identidad visual hasta el último detalle del código.
            </p>
            <p>
              Si tenés un proyecto en mente, me encantaría escucharlo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
