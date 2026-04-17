export const siteConfig = {
  name: "Tu Web Lista",
  description:
    "Webs simples, profesionales y pensadas para negocios, emprendimientos y profesionales que venden por Instagram o WhatsApp.",
  whatsappNumber: "54911XXXXXXXX",
  whatsappMessage:
    "Hola, vi tu web desde el QR del Uber. Me interesa tener una web para mi negocio y quiero saber cuál de tus opciones me conviene.",
};

export function getWhatsAppLink(customMessage?: string) {
  const message = encodeURIComponent(
    customMessage || siteConfig.whatsappMessage,
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}
