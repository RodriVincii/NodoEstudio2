import { Mail } from "lucide-react";
import { WhatsAppIcon } from "../WhatsAppIcon";

const whatsappHref =
  "https://wa.me/5491131440019?text=Hola%2C%20quiero%20consultar%20por%20una%20p%C3%A1gina%20para%20mi%20negocio.";

export const Contact = () => {
  return (
    <section id="contacto" className="py-32 relative">
      <div className="container">
        <div className="relative rounded-[2rem] overflow-hidden card-elevated border border-border/60 p-10 md:p-20 grain">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-[140px]" />

          <div className="relative z-10 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-6">
              · Trabajemos juntos
            </div>
            <h2 className="font-serif text-5xl md:text-8xl leading-[0.95] mb-8">
              ¿Tenés un proyecto <em className="text-gradient">en mente</em>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Contame qué necesitás y vemos qué pack encaja mejor con tu negocio.
              Respondo en menos de 24hs.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#25D366] text-white font-medium hover:scale-105 transition-transform shadow-[0_10px_40px_-10px_rgba(37,211,102,0.7)]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Consultar por WhatsApp
              </a>
              <a
                href="mailto:rodrivinciguerra@gmail.com?subject=Consulta%20sobre%20p%C3%A1gina%20web"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-border hover:border-foreground/40 hover:bg-secondary/50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Escribime un mail
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
              <span>WhatsApp: +54 11 3144-0019</span>
              <span className="hidden sm:inline text-border">·</span>
              <span>Mail: rodrivinciguerra@gmail.com</span>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} · Nodo Estudio</span>
          <span className="font-serif italic">Hecho con cariño en Argentina.</span>
        </footer>
      </div>
    </section>
  );
};
