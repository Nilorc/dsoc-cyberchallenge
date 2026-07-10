import React from "react";
import { CircularTestimonials } from "./circular-testimonials";

/** Foto compartida hasta publicar el lineup definitivo */
const PLACEHOLDER = "/ponentes/ponente1.jpg";

const speakerTestimonials = [
  {
    quote:
      "Ponencia magistral de ciberseguridad: ofensiva, defensa y buenas prácticas para quienes dan sus primeros pasos en el área.",
    name: "Ponente invitado",
    designation: "Sáb 25 Jul · 10:00 AM",
    src: PLACEHOLDER,
  },
  {
    quote:
      "Charla sobre el ecosistema de la seguridad digital y cómo prepararte para retos tipo CTF y el mundo profesional.",
    name: "Ponente invitado",
    designation: "Sáb 25 Jul · 11:00 AM",
    src: PLACEHOLDER,
  },
  {
    quote:
      "Sesión práctica orientada a principiantes: mentalidad de analista, metodología y errores comunes a evitar.",
    name: "Ponente invitado",
    designation: "Sáb 25 Jul · 1:30 PM",
    src: PLACEHOLDER,
  },
  {
    quote:
      "Exploración de temas actuales en ciberseguridad y su impacto en equipos, comunidades y la industria local.",
    name: "Ponente invitado",
    designation: "Sáb 25 Jul · 2:30 PM",
    src: PLACEHOLDER,
  },
  {
    quote:
      "Cierre de la jornada de charlas con perspectivas y aprendizajes para seguir creciendo después del evento.",
    name: "Ponente invitado",
    designation: "Sáb 25 Jul · 3:30 PM",
    src: PLACEHOLDER,
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
