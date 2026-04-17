import Link from "next/link";
import { getWhatsAppLink } from "@/lib/site";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  className?: string;
  message?: string;
};

export function WhatsAppButton({
  children,
  className = "",
  message,
}: WhatsAppButtonProps) {
  return (
    <Link
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${className}`}
    >
      {children}
    </Link>
  );
}
