import { TestimonialSection } from "./testimonials";

const organizersData = [
  {
    id: 1,
    quote: "",
    name: "IEEE COMSOC PUCP",
    role: "Organizador",
    imageSrc: "/aliados/comsoc.png",
    logoSize: "sm" as const,
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
  },
];

export default function TestimonialSectionDemo() {
  return (
    <TestimonialSection
      title="Organizadores"
      subtitle="Impulsado por la comunidad IEEE y OverPwnZ en la PUCP."
      testimonials={organizersData}
    />
  );
}
