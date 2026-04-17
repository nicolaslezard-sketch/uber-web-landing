export type Demo = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroCta: string;
  services: string[];
  benefits: string[];
  faq: { question: string; answer: string }[];
};

export const demos: Demo[] = [
  {
    slug: "estetica",
    eyebrow: "Demo de web para estética / belleza",
    title:
      "Una web clara y profesional para mostrar tus servicios y recibir más consultas",
    subtitle:
      "Ideal para centros de estética, cosmetología, uñas, pestañas, depilación, masajes y servicios de belleza que hoy dependen solo de Instagram o WhatsApp.",
    heroCta: "Quiero una web similar",
    services: [
      "Limpiezas faciales",
      "Tratamientos corporales",
      "Perfilado de cejas",
      "Lifting de pestañas",
      "Depilación",
      "Masajes descontracturantes",
    ],
    benefits: [
      "Transmitís más confianza y profesionalismo",
      "Mostrás servicios y promociones en un solo lugar",
      "Facilitás que te escriban con intención de reservar",
      "Tenés una web lista para compartir por WhatsApp, Instagram o QR",
    ],
    faq: [
      {
        question: "¿Sirve aunque ya tenga Instagram?",
        answer:
          "Sí. La web ordena mejor tu propuesta, da más confianza y te permite centralizar toda la información importante.",
      },
      {
        question: "¿Se puede agregar botón a WhatsApp?",
        answer:
          "Sí. De hecho, es una de las partes más importantes para convertir visitas en consultas.",
      },
      {
        question: "¿Tengo que tener todo listo para empezar?",
        answer:
          "No. Se puede arrancar con una versión simple y después mejorarla con más contenido.",
      },
    ],
  },
  {
    slug: "profesional",
    eyebrow: "Demo de web para profesional independiente",
    title:
      "Una web seria y profesional para presentar tus servicios y generar más confianza",
    subtitle:
      "Ideal para profesionales que quieren una presencia online clara, prolija y confiable para explicar mejor lo que hacen y recibir consultas por WhatsApp.",
    heroCta: "Quiero una web profesional así",
    services: [
      "Presentación profesional clara",
      "Servicios o áreas de trabajo",
      "Preguntas frecuentes",
      "Botón directo a WhatsApp",
      "Información de contacto",
      "Presencia online más confiable",
    ],
    benefits: [
      "Tu perfil profesional se ve más serio y ordenado",
      "Explicás mejor tus servicios sin depender solo de chats",
      "Generás más confianza antes del primer contacto",
      "Tenés una web lista para compartir por WhatsApp, Instagram o QR",
    ],
    faq: [
      {
        question: "¿Sirve aunque ya tenga redes sociales?",
        answer:
          "Sí. La web te da un espacio propio para presentar mejor tu trabajo y transmitir una imagen más profesional.",
      },
      {
        question: "¿Puedo usarla aunque ofrezca servicios personalizados?",
        answer:
          "Sí. Justamente ayuda a explicar mejor tu propuesta, proceso de trabajo y formas de contacto.",
      },
      {
        question: "¿La web puede enfocarse en consultas por WhatsApp?",
        answer:
          "Sí. Se puede orientar toda la estructura para facilitar ese tipo de contacto.",
      },
    ],
  },
];

export function getDemoBySlug(slug: string) {
  return demos.find((demo) => demo.slug === slug);
}
