import React from "react";
import { CircularTestimonials } from "./circular-testimonials";

/**
 * Line-up en actualización — Jornada de Ciberseguridad PUCP · Sáb 25 Jul
 * "Dragon Sphere Origins - Cyber Conference"
 * Los temas de cada charla se confirmarán más adelante.
 */
const speakerTestimonials = [
  {
    quote:
      "Founder & CEO de Strategos Consulting Services. Consultor y docente en gobierno de TI, gestión de riesgos, ciberseguridad y transformación digital para los sectores financiero, energético, salud y gobierno. Instructor internacional de ciberseguridad.",
    name: "Raúl Díaz Parra",
    designation: "Sáb 25 Jul · 10:00 – 11:00",
    src: "/ponentes/Ponente_1_RaulDiazParra.png",
  },
  {
    quote:
      "Pentester especializada en evaluación de vulnerabilidades y desarrollo de exploits. Apasionada por los CTFs y el hardware hacking. Presidenta de la comunidad CyberSen.",
    name: "Paola Gerig",
    designation: "Sáb 25 Jul · 11:00 – 12:00",
    src: "/ponentes/Ponente_2_PaolaGerig.png",
  },
  {
    quote:
      "Especialista en seguridad ofensiva y hacking ético, referente en la comunidad peruana e instructor habitual en eventos como PERÚHACK. Con amplia trayectoria en pentesting y una visión gerencial de la seguridad empresarial.",
    name: "Goblin Slayer",
    designation: "Sáb 25 Jul · 13:30 – 14:30",
    src: "/ponentes/Ponente_3_GoblinSlayer.png",
  },
  {
    quote:
      "Especialista en ciberseguridad e integrante del WomenLACCyberTeam, con destacada participación en CTFs internacionales como Ekoparty, She Speaks Power y la Women Cyber Champions League. Coordinadora de la comunidad CiberSec UNASAM.",
    name: "Meylin Baltazar",
    designation: "Sáb 25 Jul · 14:30 – 15:30",
    src: "/ponentes/Ponente_4_MeylinBaltazar.png",
  },
  {
    quote:
      "Consultor Senior en Digital Forensics and Incident Response (DFIR). Especializado en la adquisición, preservación y análisis forense de información electrónica, eDiscovery y gestión de incidentes de ciberseguridad.",
    name: "Marcelo Rojas",
    designation: "Sáb 25 Jul · 15:30 – 16:30 · Co-ponencia",
    src: "/ponentes/Ponente_5.1_MarceloRojas.png",
  },
  {
    quote:
      "Consultor en Digital Forensics and Incident Response (DFIR). Con experiencia en adquisición, preservación y análisis forense de evidencia electrónica, proyectos de eDiscovery y estrategias de Purple Teaming.",
    name: "Marcelo Carrión",
    designation: "Sáb 25 Jul · 15:30 – 16:30 · Co-ponencia",
    src: "/ponentes/Ponente_5.2_MarceloCarrion.png",
  },
];

/** Sección Speakers en la landing (tema oscuro) */
export default function SpeakersTestimonials() {
  return (
    <div
      className="items-center justify-center relative flex w-full"
      style={{ maxWidth: "1024px", margin: "0 auto" }}
    >
      <CircularTestimonials
        testimonials={speakerTestimonials}
        autoplay={true}
        colors={{
          name: "#f7f7ff",
          designation: "#e1e1e1",
          testimony: "#f1f1f7",
          arrowBackground: "#141414",
          arrowForeground: "#f1f1f7",
          arrowHoverBackground: "#ff8a1e",
        }}
        fontSizes={{
          name: "28px",
          designation: "18px",
          quote: "18px",
        }}
      />
    </div>
  );
}

export { CircularTestimonials };
