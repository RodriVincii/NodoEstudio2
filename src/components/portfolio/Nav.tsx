import { useEffect, useState } from "react";
import { WhatsAppIcon } from "../WhatsAppIcon";

const whatsappHref =
  "https://wa.me/5491131440019?text=Hola%2C%20quiero%20consultar%20por%20una%20p%C3%A1gina%20para%20mi%20negocio.";

const links = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-serif text-lg">
            N
          </span>
          <span className="font-serif text-xl tracking-tight">Nodo Estudio</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-[#25D366] text-white hover:scale-105 transition-transform shadow-[0_10px_30px_-12px_rgba(37,211,102,0.65)]"
        >
          <WhatsAppIcon className="w-4 h-4" />
          WhatsApp
        </a>
      </nav>
    </header>
  );
};
