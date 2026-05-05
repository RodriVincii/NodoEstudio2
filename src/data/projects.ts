import atardecer from "@/assets/projects/atardecer.png";
import benny from "@/assets/projects/benny.png";
import lasede from "@/assets/projects/lasede.jpg";
import mirak from "@/assets/projects/mirak.png";

export type Project = {
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  year: string;
};

export const projects: Project[] = [
  {
    title: "Atardecer de Uribe",
    category: "Quinta · Turismo rural",
    description:
      "Sitio para una quinta familiar en Uribelarrea. Hero inmersivo, galería, tarifas y reservas pensados para transmitir calma y desconexión.",
    url: "https://atardecerdeuribe.lovable.app",
    image: atardecer,
    tags: ["Landing", "Reservas", "Branding"],
    year: "2025",
  },
  {
    title: "Benny Pizza",
    category: "Pizzería napolitana",
    description:
      "Web para una pizzería de horno a leña en Cañuelas. Carta digital, historia, reseñas y CTA directo al teléfono para reservar.",
    url: "https://bennys-best-bite.lovable.app",
    image: benny,
    tags: ["Gastronomía", "Carta", "Local"],
    year: "2025",
  },
  {
    title: "La Sede Resto",
    category: "Restaurante & Brunch",
    description:
      "Showcase para el restaurante del Club Cañuelas. Brunch, pastas, parrilla y milanesas con identidad cálida y elegante.",
    url: "#",
    image: lasede,
    tags: ["Restaurante", "Brunch", "Showcase"],
    year: "2025",
  },
  {
    title: "Mirak",
    category: "E-commerce · Indumentaria",
    description:
      "Tienda online en Shopify para una marca de indumentaria femenina. Catálogo, carrito y checkout con identidad visual propia.",
    url: "https://mirak.online/",
    image: mirak,
    tags: ["Shopify", "E-commerce", "Moda"],
    year: "2025",
  },
];
