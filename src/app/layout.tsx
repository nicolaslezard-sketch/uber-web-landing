import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webs simples y profesionales",
  description:
    "Webs simples, profesionales y pensadas para negocios, emprendimientos y personas que venden por Instagram o WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
