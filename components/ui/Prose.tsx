import { cn } from "@/lib/utils";

/** Renders a list of paragraphs as readable body copy. */
export function Prose({
  paragraphs,
  className,
}: {
  paragraphs: string[];
  className?: string;
}) {
  return (
    <div className={cn("space-y-5", className)}>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-base leading-relaxed text-ink/80">
          {p}
        </p>
      ))}
    </div>
  );
}
