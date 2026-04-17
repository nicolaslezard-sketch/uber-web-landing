import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { StickyWhatsAppMobile } from "@/components/shared/sticky-whatsapp-mobile";
import { demos } from "@/lib/demos";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return demos.map((demo) => ({
    slug: demo.slug,
  }));
}

function getDemoTheme(slug: string) {
  if (slug === "profesional") {
    return {
      brand: "Estudio Nova",
      shortLabel: "Demo profesional",
      category: "Servicios profesionales",
      heroTitle: "Una presencia clara, seria y confiable.",
      heroDescription:
        "Una demo pensada para profesionales independientes que quieren explicar mejor lo que hacen y recibir consultas con una imagen más sólida.",
      badges: [
        "Consultas por WhatsApp",
        "Imagen profesional",
        "Presencia clara",
      ],
      previewGradient:
        "bg-[linear-gradient(135deg,rgba(96,165,250,0.16),rgba(255,255,255,0.05),rgba(168,85,247,0.16))]",
      previewAccent:
        "bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.20),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]",
      sectionAccent: "text-sky-200/80",
      iconA: "bg-sky-400/18",
      iconB: "bg-violet-400/16",
      iconC: "bg-cyan-300/14",
      iconD: "bg-indigo-300/14",
    };
  }

  return {
    brand: "Studio Glow",
    shortLabel: "Demo estética",
    category: "Centro de estética integral",
    heroTitle: "Tu espacio de belleza, cuidado y bienestar.",
    heroDescription:
      "Tratamientos faciales, corporales y servicios de belleza con una imagen moderna y profesional.",
    badges: [
      "Turnos por WhatsApp",
      "Atención personalizada",
      "Ubicación visible",
    ],
    previewGradient:
      "bg-[linear-gradient(135deg,rgba(244,114,182,0.24),rgba(255,255,255,0.05),rgba(168,85,247,0.22))]",
    previewAccent:
      "bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.20),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]",
    sectionAccent: "text-violet-200/80",
    iconA: "bg-violet-400/18",
    iconB: "bg-pink-400/16",
    iconC: "bg-amber-300/14",
    iconD: "bg-cyan-300/14",
  };
}

export default async function DemoPage({ params }: Props) {
  const { slug } = await params;
  const demo = demos.find((item) => item.slug === slug);

  if (!demo) {
    notFound();
  }

  const theme = getDemoTheme(demo.slug);

  return (
    <main className="bg-[#0b0b12] pb-24 text-white md:pb-0">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_26%),radial-gradient(circle_at_top_right,rgba(244,114,182,0.14),transparent_24%),linear-gradient(180deg,#12121b_0%,#0b0b12_72%)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.18]" />

        <Container>
          <div className="relative pt-4 sm:pt-6">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-bold text-[#0b0b12]">
                  {demo.slug === "profesional" ? "EN" : "SG"}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {theme.brand}
                  </p>
                  <p className="text-[11px] text-white/55 sm:text-xs">
                    {theme.shortLabel}
                  </p>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10 sm:text-sm"
              >
                Volver
              </Link>
            </div>
          </div>

          <div className="relative py-12 sm:py-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
            <div>
              <p
                className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm ${theme.sectionAccent}`}
              >
                {demo.eyebrow}
              </p>

              <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl lg:leading-[1.02]">
                {demo.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                {demo.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Visual", "Profesional", "Mobile", "WhatsApp"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  className="bg-white text-[#0b0b12] hover:bg-white/90"
                  message={`Hola, vi la demo de ${demo.slug} desde tu landing. Quiero una web similar para mi negocio.`}
                >
                  {demo.heroCta}
                </WhatsAppButton>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  Volver a la landing
                </Link>
              </div>

              <p className="mt-3 text-xs text-white/50 sm:text-sm">
                Esta demo muestra cómo podría verse una web real para este tipo
                de servicio.
              </p>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur sm:p-5">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
                  <div className="border-b border-white/10 bg-white/[0.03] px-4 py-4 sm:px-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-medium text-white/50 sm:text-sm">
                          Vista previa del sitio
                        </p>
                        <h2 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                          {theme.brand}
                        </h2>
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-semibold text-white/70 sm:text-xs">
                        Demo
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div
                      className={`rounded-[1.25rem] p-4 ring-1 ring-white/10 sm:p-6 ${theme.previewAccent}`}
                    >
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50 sm:text-sm">
                          {theme.category}
                        </p>
                        <h3 className="mt-3 max-w-md text-2xl font-bold tracking-tight text-white sm:text-3xl">
                          {theme.heroTitle}
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-6 text-white/68 sm:text-base">
                          {theme.heroDescription}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {theme.badges.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/80 sm:text-xs"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 rounded-[1.15rem] border border-white/10 bg-[#11111a] p-3">
                        <div
                          className={`h-36 rounded-[1rem] sm:h-44 ${theme.previewGradient}`}
                        />
                        <div className="mt-4 space-y-2">
                          <div className="h-3 w-24 rounded-full bg-white/18" />
                          <div className="h-3 w-full rounded-full bg-white/8" />
                          <div className="h-3 w-4/5 rounded-full bg-white/8" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {[
                        {
                          value: "+ confianza",
                          label: "presencia online más seria",
                        },
                        {
                          value: "WhatsApp",
                          label: "contacto rápido y directo",
                        },
                        { value: "Mobile", label: "adaptada a celular" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/10 bg-[#11111a]/80 px-4 py-4"
                        >
                          <p className="text-base font-semibold text-white sm:text-lg">
                            {item.value}
                          </p>
                          <p className="mt-1 text-xs text-white/58 sm:text-sm">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <WhatsAppButton
                        className="bg-white text-[#0b0b12] hover:bg-white/90"
                        message={`Hola, vi la demo de ${demo.slug}. Quiero una web similar para mi negocio.`}
                      >
                        Quiero una web así
                      </WhatsAppButton>

                      <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
                      >
                        Ver planes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#0f0f17] py-16 sm:py-20">
        <Container>
          <SectionTitle
            title="Servicios presentados de forma clara y profesional"
            description="La idea no es mostrar todo. La idea es mostrar lo importante, ordenar la oferta y facilitar la consulta."
            theme="dark"
          />

          <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {demo.services.map((service, index) => {
              const gradients =
                demo.slug === "profesional"
                  ? [
                      "bg-[linear-gradient(135deg,rgba(96,165,250,0.18),rgba(255,255,255,0.04),rgba(168,85,247,0.16))]",
                      "bg-[linear-gradient(135deg,rgba(56,189,248,0.14),rgba(255,255,255,0.04),rgba(99,102,241,0.16))]",
                      "bg-[linear-gradient(135deg,rgba(129,140,248,0.16),rgba(255,255,255,0.04),rgba(34,211,238,0.12))]",
                    ]
                  : [
                      "bg-[linear-gradient(135deg,rgba(244,114,182,0.22),rgba(255,255,255,0.04),rgba(168,85,247,0.18))]",
                      "bg-[linear-gradient(135deg,rgba(251,191,36,0.14),rgba(244,114,182,0.16),rgba(255,255,255,0.04))]",
                      "bg-[linear-gradient(135deg,rgba(103,232,249,0.14),rgba(168,85,247,0.16),rgba(255,255,255,0.04))]",
                    ];

              return (
                <div
                  key={service}
                  className="overflow-hidden rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                >
                  <div className={`h-28 ${gradients[index % 3]}`} />
                  <div className="p-5">
                    <p className="text-lg font-semibold text-white sm:text-xl">
                      {service}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/65 sm:text-base">
                      Presentado con una estructura clara para que el cliente
                      entienda rápido qué ofrecés y avance a consultar.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[linear-gradient(180deg,#12121b_0%,#151522_100%)] py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/8 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-10">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm ${theme.sectionAccent}`}
              >
                Presencia que transmite valor
              </p>

              <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Una buena primera impresión también vende.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/68 sm:mt-5 sm:text-lg sm:leading-8">
                Muchas personas ofrecen buenos servicios, pero online se ven
                improvisadas. Una web clara, prolija y bien presentada ayuda a
                que tu negocio transmita más confianza, más orden y más
                profesionalismo desde el primer segundo.
              </p>

              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                {[
                  "Tu negocio se percibe más serio",
                  "La información se entiende más rápido",
                  "El cliente confía más antes de escribir",
                  "Tu marca se ve más cuidada y profesional",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-[#11111a]/80 px-4 py-4 sm:px-5"
                  >
                    <p className="text-sm font-medium text-white/88 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/8 bg-white/[0.04] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-8">
              <div
                className={`rounded-[1.5rem] p-4 sm:p-5 ${theme.previewAccent}`}
              >
                <div className="grid gap-4">
                  <div className="rounded-[1.3rem] border border-white/10 bg-[#11111a] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="h-3 w-20 rounded-full bg-white/18" />
                        <div className="mt-3 h-4 w-32 rounded-full bg-white/10 sm:w-40" />
                      </div>
                      <div
                        className={`h-10 w-10 rounded-2xl ${theme.previewGradient}`}
                      />
                    </div>

                    <div
                      className={`mt-5 h-24 rounded-[1rem] sm:h-28 ${theme.previewGradient}`}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.3rem] border border-white/10 bg-[#11111a] p-4">
                      <div className="h-20 rounded-[1rem] bg-white/5" />
                      <div className="mt-4 h-3 w-20 rounded-full bg-white/14 sm:w-24" />
                      <div className="mt-2 h-3 w-full rounded-full bg-white/8" />
                      <div className="mt-2 h-3 w-4/5 rounded-full bg-white/8" />
                    </div>

                    <div className="rounded-[1.3rem] border border-white/10 bg-[#11111a] p-4">
                      <div className="h-20 rounded-[1rem] bg-white/5" />
                      <div className="mt-4 h-3 w-20 rounded-full bg-white/14 sm:w-24" />
                      <div className="mt-2 h-3 w-full rounded-full bg-white/8" />
                      <div className="mt-2 h-3 w-3/4 rounded-full bg-white/8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[linear-gradient(180deg,#12121b_0%,#181823_100%)] py-16 sm:py-20">
        <Container>
          <SectionTitle
            title="Qué logra una web así"
            description="No se trata solo de verse lindo. Se trata de vender mejor, ordenar la información y dar más confianza."
            center
            theme="dark"
          />

          <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
            {demo.benefits.map((benefit, index) => {
              const icons = [
                theme.iconA,
                theme.iconB,
                theme.iconC,
                theme.iconD,
              ];
              return (
                <div
                  key={benefit}
                  className="rounded-3xl border border-white/8 bg-white/[0.04] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                >
                  <div
                    className={`mb-4 h-10 w-10 rounded-2xl ${icons[index % 4]}`}
                  />
                  <p className="text-base font-semibold text-white sm:text-lg">
                    {benefit}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#0f0f17] py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-8">
              <SectionTitle
                title="Cómo sería una web así para un cliente real"
                description="Una estructura simple, bien pensada, puede verse profesional sin necesidad de hacer algo complejo."
                theme="dark"
              />

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {[
                  {
                    title: "1. Presentación clara",
                    text: "Un primer bloque que explique rápido qué hacés, para quién y cómo te contactan.",
                  },
                  {
                    title: "2. Servicios ordenados",
                    text: "Bloques simples para mostrar áreas de trabajo o servicios sin saturar al visitante.",
                  },
                  {
                    title: "3. Imagen profesional",
                    text: "Una presencia online más seria, clara y alineada con el tipo de servicio.",
                  },
                  {
                    title: "4. CTA directo",
                    text: "Botones visibles para que la persona pase de mirar a escribir por WhatsApp.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/8 bg-[#11111a]/80 px-4 py-4 sm:px-5 sm:py-5"
                  >
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/62 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-8">
              <SectionTitle
                title="Referencia de inversión"
                description="Sirve para filtrar curiosos y entender rápido si este tipo de solución encaja con tu negocio."
                theme="dark"
              />

              <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-[#11111a]/85 p-5 sm:mt-8 sm:p-6">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm ${theme.sectionAccent}`}
                >
                  Web inicial
                </p>
                <p className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Desde ARS 120.000
                </p>
                <p className="mt-3 text-sm leading-6 text-white/62 sm:text-base">
                  Ideal para una presencia profesional clara, simple y lista
                  para compartir por WhatsApp, Instagram o QR.
                </p>

                <ul className="mt-5 space-y-3 text-sm text-white/76 sm:mt-6">
                  {[
                    "Diseño simple y profesional",
                    "Versión mobile",
                    "Presentación clara del servicio",
                    "Botón directo a WhatsApp",
                    "Base lista para usar",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-white/8 bg-white/[0.04] px-4 py-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <WhatsAppButton
                className="mt-5 w-full bg-white text-[#0b0b12] hover:bg-white/90 sm:mt-6"
                message={`Hola, vi la demo de ${demo.slug} y quiero saber cuánto costaría una web así para mi negocio.`}
              >
                Consultar por una web similar
              </WhatsAppButton>

              <p className="mt-3 text-xs text-white/50 sm:mt-4 sm:text-sm">
                Si tu caso necesita algo más completo, se define una opción
                superior según el contenido y objetivo.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[linear-gradient(180deg,#12121b_0%,#151522_100%)] py-16 sm:py-20">
        <Container>
          <SectionTitle
            title="Preguntas comunes"
            description="Las dudas típicas antes de avanzar."
            theme="dark"
          />

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2">
            {demo.faq.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-white/8 bg-white/[0.04] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
              >
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65 sm:mt-3 sm:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#0f0f17] py-16 sm:py-20">
        <Container>
          <div className="rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.22),transparent_26%),linear-gradient(135deg,#ffffff_0%,#f5f3ff_45%,#fde7f3_100%)] p-6 text-[#0b0b12] shadow-[0_22px_70px_rgba(0,0,0,0.28)] sm:p-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:text-sm">
                CTA final
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
                ¿Querés una web así para tu negocio?
              </h2>
              <p className="mt-3 text-base text-zinc-700 sm:mt-4 sm:text-lg">
                Escribime por WhatsApp y te digo cuál de las opciones te
                conviene según lo que hacés.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <WhatsAppButton
                  className="bg-[#0b0b12] text-white hover:bg-black"
                  message={`Hola, vi la demo de ${demo.slug}. Quiero una web similar para mi negocio y quiero saber qué opción me conviene.`}
                >
                  Hablar por WhatsApp
                </WhatsAppButton>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-2xl border border-zinc-300 bg-white/70 px-5 py-3 text-sm font-semibold text-[#0b0b12] transition hover:bg-white"
                >
                  Volver a la landing
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StickyWhatsAppMobile
        message={`Hola, vi la demo de ${demo.slug}. Quiero una web similar para mi negocio y quiero saber qué opción me conviene.`}
        label="Quiero una web así"
      />
    </main>
  );
}
