import { TestimonialSection } from "./testimonials";

const organizersData = [
  {
    id: 1,
    quote: "",
    name: "IEEE COMSOC PUCP",
    role: "Organizador",
    imageSrc: "/aliados/comsoc.png",
    logoSize: "sm" as const,
    href: "https://www.comsoc-pucp.com/",
  },
  {
    id: 2,
    quote: "",
    name: "IEEE CS PUCP",
    role: "Co-organizador",
    imageSrc: "/aliados/ieee-cs-pucp.png",
    href: "https://www.ieeecspucp.com/",
  },
  {
    id: 3,
    quote: "",
    name: "OverPwnZ",
    role: "Co-organizador",
    imageSrc: "/aliados/overpwnz.png",
    square: true,
    href: "https://www.overpwnz.com/",
  },
  {
    id: 4,
    quote: "",
    name: "IEEE ComSoc UPC",
    role: "Aliado",
    imageSrc: "/aliados/comsoc_upc.png",
    href: "https://www.comsoc.lat/",
  },
  {
    id: 5,
    quote: "",
    name: "Telecom PUCP",
    role: "Aliado",
    imageSrc: "/aliados/imagotipo-telecom-blanco.png",
    href: "https://www.instagram.com/telecom_pucp/",
  },
  {
    id: 6,
    quote: "",
    name: "AITEL PUCP",
    role: "Aliado",
    imageSrc: "/aliados/AITEL_ASOCIACION_logo.png",
    href: "https://www.instagram.com/aitel.pucp/",
  },
];

export default function TestimonialSectionDemo() {
  return (
    <TestimonialSection
      title="Organizadores y aliados"
      subtitle="Impulsado por la comunidad IEEE, OverPwnZ y aliados de la carrera de Telecomunicaciones de la PUCP."
      testimonials={organizersData}
    />
  );
}
