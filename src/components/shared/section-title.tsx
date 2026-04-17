type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  theme?: "light" | "dark";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
  theme = "light",
}: SectionTitleProps) {
  const titleColor = theme === "dark" ? "text-white" : "text-zinc-950";
  const descriptionColor = theme === "dark" ? "text-white/65" : "text-zinc-600";
  const eyebrowColor =
    theme === "dark" ? "text-violet-200/75" : "text-zinc-500";

  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${descriptionColor}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
