import Link from "next/link";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { StickyWhatsAppMobile } from "@/components/shared/sticky-whatsapp-mobile";

export default function HomePage() {
  return (
    <main className="bg-[#0b0b12] pb-24 text-white md:pb-0">
      <section className="border-b border-white/10 bg-white/[0.03] backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-bold text-[#0b0b12]">
                TW
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Tu Web Lista</p>
                <p className="text-[11px] text-white/55">
                  Webs simples y profesionales
                </p>
              </div>
            </div>

            <WhatsAppButton
              className="bg-white px-4 py-2 text-[#0b0b12] hover:bg-white/90"
              message="Hola, vi tu landing desde el QR del Uber. Me interesa una web para mi negocio y quiero saber cuál de tus opciones me conviene."
            >
              Consultar
            </WhatsAppButton>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_26%),radial-gradient(circle_at_top_right,rgba(244,114,182,0.14),transparent_24%),linear-gradient(180deg,#12121b_0%,#0b0b12_72%)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.18]" />

        <Container>
          <div className="relative py-12 sm:py-14 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/80 sm:text-sm">
                Webs para negocios y emprendedores
              </p>

              <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl lg:leading-[1.02]">
                ¿Vendés por Instagram o WhatsApp? Tené una web simple y
                profesional para mostrar mejor tu negocio.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Creo webs claras, modernas y listas para que tu negocio se vea
                más serio, dé más confianza y reciba consultas mejor
                organizadas.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Negocios", "Emprendimientos", "WhatsApp"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#ejemplos"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#0b0b12] transition hover:bg-white/90"
                >
                  Ver ejemplos de web
                </Link>

                <WhatsAppButton
                  className="border border-white/12 bg-white/8 text-white hover:bg-white/12"
                  message="Hola, vi tu landing desde el QR del Uber. Me interesa una web para mi negocio y quiero saber cuál de tus opciones me conviene."
                >
                  Consultar por WhatsApp
                </WhatsAppButton>
              </div>

              <p className="mt-3 text-xs text-white/50 sm:text-sm">
                Ideal para quienes hoy venden por Instagram o WhatsApp y quieren
                verse más profesionales.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#0f0f17] py-16 sm:py-20">
        <Container>
          <SectionTitle
            title="Una buena web te ayuda a vender mejor"
            description="No es solo estética. Una web clara mejora la percepción, ordena la información y facilita que te contacten con más intención."
            theme="dark"
          />

          <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Más confianza",
                text: "Tu negocio se ve más serio y profesional que usando solo redes sociales.",
              },
              {
                title: "Más claridad",
                text: "Mostrás servicios, productos, ubicación y contacto en un solo lugar.",
              },
              {
                title: "Más consultas útiles",
                text: "El cliente entiende mejor lo que ofrecés antes de escribirte.",
              },
              {
                title: "Mejor presencia online",
                text: "Tenés un lugar propio para compartir por WhatsApp, Instagram o QR.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-lg shadow-black/10"
              >
                <div
                  className={`mb-4 h-10 w-10 rounded-2xl ${
                    index === 0
                      ? "bg-violet-400/18"
                      : index === 1
                        ? "bg-pink-400/16"
                        : index === 2
                          ? "bg-amber-300/14"
                          : "bg-cyan-300/14"
                  }`}
                />
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/68 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="ejemplos"
        className="border-y border-white/8 bg-[linear-gradient(180deg,#12121b_0%,#151522_100%)] py-16 sm:py-20"
      >
        <Container>
          <SectionTitle
            title="Ejemplos de web"
            description="Podés ver dos estilos distintos según el tipo de negocio o servicio."
            theme="dark"
          />

          <div className="mt-8 grid gap-4 sm:mt-12 lg:grid-cols-2">
            {[
              {
                title: "Estética / belleza",
                text: "Una demo visual, moderna y pensada para negocios que quieren verse más atractivos y profesionales.",
                href: "/demo/estetica",
                accent:
                  "bg-[linear-gradient(135deg,rgba(244,114,182,0.22),rgba(255,255,255,0.04),rgba(168,85,247,0.18))]",
              },
              {
                title: "Profesional independiente",
                text: "Una demo más seria y confiable para profesionales que quieren explicar mejor sus servicios y generar más confianza.",
                href: "/demo/profesional",
                accent:
                  "bg-[linear-gradient(135deg,rgba(96,165,250,0.18),rgba(255,255,255,0.04),rgba(168,85,247,0.16))]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
              >
                <div className={`h-36 ${item.accent}`} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
                    {item.text}
                  </p>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#0b0b12] transition hover:bg-white/90"
                    >
                      Ver demo
                    </Link>

                    <WhatsAppButton
                      className="border border-white/10 bg-white/8 text-white hover:bg-white/12"
                      message={`Hola, vi la demo de ${item.title} desde tu landing. Me interesa una web similar para mi negocio.`}
                    >
                      Consultar
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[linear-gradient(180deg,#12121b_0%,#181823_100%)] py-16 sm:py-20">
        <Container>
          <SectionTitle
            title="Opciones de trabajo"
            description="Para que tengas una referencia real antes de escribir."
            center
            theme="dark"
          />

          <div className="mt-8 grid gap-4 sm:mt-12 lg:grid-cols-3">
            {[
              {
                name: "Web inicial",
                price: "Desde ARS 120.000",
                text: "Ideal para una presencia simple, clara y profesional.",
                items: [
                  "Diseño simple",
                  "Versión mobile",
                  "Botón a WhatsApp",
                  "Contacto y redes",
                ],
              },
              {
                name: "Web negocio",
                price: "Desde ARS 220.000",
                text: "Para mostrar mejor servicios y generar más confianza.",
                items: [
                  "Más secciones",
                  "Mejor estructura comercial",
                  "FAQ o galería",
                  "Más enfoque de conversión",
                ],
              },
              {
                name: "Web a medida",
                price: "Desde ARS 350.000",
                text: "Para casos con necesidades más personalizadas.",
                items: [
                  "Planteo a medida",
                  "Estructura personalizada",
                  "Más flexibilidad",
                  "Mayor complejidad",
                ],
              },
            ].map((plan, index) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] ${
                  index === 1
                    ? "border-violet-300/22 bg-[linear-gradient(180deg,rgba(168,85,247,0.14),rgba(255,255,255,0.04))]"
                    : "border-white/8 bg-white/[0.04]"
                }`}
              >
                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/62">{plan.text}</p>
                </div>

                <p className="mt-5 text-2xl font-bold text-white">
                  {plan.price}
                </p>

                <ul className="mt-5 space-y-3 text-sm text-white/76">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-white/8 bg-[#101019]/90 px-4 py-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <WhatsAppButton
                  className="mt-5 w-full bg-white text-[#0b0b12] hover:bg-white/90"
                  message={`Hola, vi tu landing desde el QR del Uber. Me interesa la opción ${plan.name} y quiero saber si me conviene para mi negocio.`}
                >
                  Consultar esta opción
                </WhatsAppButton>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-white/58 sm:mt-8 sm:text-base">
            Cada proyecto se define según el tipo de negocio, contenido y
            objetivo.
          </p>
        </Container>
      </section>

      <section className="bg-[#0f0f17] py-16 sm:py-20">
        <Container>
          <div className="rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.22),transparent_26%),linear-gradient(135deg,#ffffff_0%,#f5f3ff_45%,#fde7f3_100%)] p-6 text-[#0b0b12] shadow-[0_22px_70px_rgba(0,0,0,0.28)] sm:p-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:text-sm">
                CTA principal
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
                Si querés una web así para tu negocio, escribime
              </h2>
              <p className="mt-3 text-base text-zinc-700 sm:mt-4 sm:text-lg">
                Contame qué hacés y te digo qué tipo de web te conviene armar.
                Sin compromiso.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <WhatsAppButton
                  className="bg-[#0b0b12] text-white hover:bg-black"
                  message="Hola, vi tu landing desde el QR del Uber. Me interesa una web para mi negocio y quiero saber cuál de tus opciones me conviene."
                >
                  Hablar por WhatsApp
                </WhatsAppButton>

                <Link
                  href="#ejemplos"
                  className="inline-flex items-center justify-center rounded-2xl border border-zinc-300 bg-white/70 px-5 py-3 text-sm font-semibold text-[#0b0b12] transition hover:bg-white"
                >
                  Ver ejemplos
                </Link>
              </div>

              <p className="mt-3 text-xs text-zinc-600 sm:mt-4 sm:text-sm">
                Podés escribirme aunque todavía no tengas logo, fotos o textos.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/8 bg-[#0b0b12] py-16 sm:py-20">
        <Container>
          <SectionTitle
            title="Preguntas comunes"
            description="Lo importante es bajar fricción. Estas son las dudas más habituales."
            theme="dark"
          />

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2">
            {[
              {
                q: "¿Solo hacés webs simples?",
                a: "Sí. Priorizo webs claras, profesionales y orientadas a conversión.",
              },
              {
                q: "¿Sirve aunque hoy venda solo por Instagram?",
                a: "Sí. Justamente ayuda a ordenar mejor la información y dar más confianza.",
              },
              {
                q: "¿Tengo que tener todo preparado?",
                a: "No. Se puede arrancar con una estructura simple y después mejorarla.",
              },
              {
                q: "¿Incluye ecommerce completo?",
                a: "No en la opción base. Si necesitás algo más complejo, se evalúa aparte.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-white/8 bg-white/[0.04] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
              >
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65 sm:mt-3 sm:text-base">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <StickyWhatsAppMobile
        message="Hola, vi tu landing desde el QR del Uber. Me interesa una web para mi negocio y quiero saber cuál de tus opciones me conviene."
        label="Quiero una web para mi negocio"
      />
    </main>
  );
}
