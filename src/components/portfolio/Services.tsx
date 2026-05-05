import { CheckCircle2, ClipboardList, Globe, MessageCircle, Sparkles } from "lucide-react";

const packages = [
  {
    icon: Globe,
    title: "Página Esencial",
    price: "Desde $150.000 ARS",
    desc: "Para negocios que necesitan una presencia online clara, profesional y conectada a WhatsApp.",
    features: [
      "Landing responsive",
      "Botón de WhatsApp con mensaje precargado",
      "Ubicación, horarios y datos de contacto",
      "Fotos, servicios principales y redes",
    ],
  },
  {
    icon: Sparkles,
    title: "Web Comercial",
    price: "Desde $280.000 ARS",
    desc: "Para marcas, comercios y emprendimientos que quieren mostrar mejor lo que ofrecen y generar más consultas.",
    features: [
      "Inicio, servicios, galería, preguntas frecuentes y contacto",
      "Textos comerciales y llamadas a la acción",
      "Diseño a medida adaptado a celular",
      "Optimización básica para carga rápida y Google",
    ],
    featured: true,
  },
  {
    icon: ClipboardList,
    title: "Web + Consultas Ordenadas",
    price: "Desde $450.000 ARS",
    desc: "Para negocios que reciben muchas consultas por WhatsApp y quieren que el cliente llegue con la información correcta.",
    features: [
      "Botones de WhatsApp según tipo de consulta",
      "Mensajes precargados para pedidos, turnos o reservas",
      "Formulario conectado a planilla si hace falta",
      "Estructura pensada para ahorrar respuestas repetidas",
    ],
  },
];

const businessTypes = [
  "Gastronomía",
  "Barberías y estética",
  "Quintas y alojamientos",
  "Ropa y emprendimientos",
  "Profesionales independientes",
  "Talleres y servicios locales",
];

export const Services = () => {
  return (
    <section id="servicios" className="py-32 relative">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            · Servicios
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
            Paquetes simples para negocios que quieren <em className="text-gradient">recibir más consultas</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Webs claras, rápidas y pensadas para que tus clientes encuentren información, vean tus servicios y te escriban directo por WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {packages.map((pack) => (
            <div
              key={pack.title}
              className={`relative group p-8 md:p-10 rounded-3xl card-elevated border transition-all glow-on-hover ${
                pack.featured ? "border-primary/50" : "border-border/60 hover:border-primary/40"
              }`}
            >
              {pack.featured && (
                <div className="absolute -top-4 left-8 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                  Más pedido
                </div>
              )}

              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <pack.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-serif text-3xl mb-3">{pack.title}</h3>
              <p className="text-primary font-medium mb-4">{pack.price}</p>
              <p className="text-muted-foreground leading-relaxed mb-7">{pack.desc}</p>

              <ul className="space-y-3 mb-8">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5491131440019?text=Hola%2C%20quiero%20consultar%20por%20una%20p%C3%A1gina%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-medium transition-colors ${
                  pack.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:border-foreground/40 hover:bg-secondary/50"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por este pack
              </a>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 rounded-3xl card-elevated border border-border/60 p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              · Ideal para
            </div>
            <h3 className="font-serif text-4xl md:text-5xl leading-none mb-6">
              Negocios locales que necesitan verse mejor y responder menos veces lo mismo.
            </h3>
            <div className="flex flex-wrap gap-3">
              {businessTypes.map((type) => (
                <span
                  key={type}
                  className="px-4 py-2 rounded-full bg-secondary/60 border border-border/40 text-sm text-muted-foreground"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-primary/30 bg-primary/10 p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              · Mantenimiento opcional
            </div>
            <h3 className="font-serif text-4xl leading-none mb-5">
              Tu web actualizada sin que tengas que tocar nada.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cambios de textos, fotos, precios, links, servicios y pequeños ajustes mensuales. Ideal si querés delegar la parte digital.
            </p>
            <p className="text-primary font-medium">Planes desde $30.000 ARS / mes</p>
          </div>
        </div>
      </div>
    </section>
  );
};
