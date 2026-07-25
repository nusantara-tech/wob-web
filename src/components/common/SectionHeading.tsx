import Link from "next/link";

interface SectionHeadingProps {
  title: string;
  description?: string;
  linkLabel?: string;
  linkHref?: string;
}

export function SectionHeading({
  title,
  description,
  linkLabel,
  linkHref = "#",
}: SectionHeadingProps) {
  return (
    <div className="mb-6 flex items-end justify-between gap-5">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
          {title}
        </h2>
        {description ? (
          <p className="mt-1 max-w-3xl text-sm leading-6 text-copy">
            {description}
          </p>
        ) : null}
      </div>
      {linkLabel ? (
        <Link
          className="shrink-0 text-sm font-bold text-brand hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          href={linkHref}
        >
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}
