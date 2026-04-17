import { WhatsAppButton } from "@/components/shared/whatsapp-button";

type StickyWhatsAppMobileProps = {
  message?: string;
  label?: string;
};

export function StickyWhatsAppMobile({
  message,
  label = "Hablar por WhatsApp",
}: StickyWhatsAppMobileProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <WhatsAppButton
        className="w-full bg-zinc-950 text-white hover:bg-zinc-800"
        message={message}
      >
        {label}
      </WhatsAppButton>
    </div>
  );
}
