import { cn } from "@/lib/utils";

type SealProps = {
  variant?: "confiance" | "qualite";
  className?: string;
};

/**
 * Self-contained SVG "trust label" seal (no external asset, no trademark).
 * `confiance` = client-trust badge (hero), `qualite` = certification badge.
 */
export function TrustSeal({ variant = "confiance", className }: SealProps) {
  const isConfiance = variant === "confiance";
  const ring = isConfiance ? "#097D7A" : "#FD8B15";
  const accent = isConfiance ? "#FD8B15" : "#097D7A";
  const topText = isConfiance
    ? "· LABEL DE CONFIANCE ·"
    : "· QUALITÉ CERTIFIÉE ·";
  const bottomText = isConfiance
    ? "· CLIENTS SATISFAITS ·"
    : "· CONSEIL · FORMATION ·";

  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label={isConfiance ? "Label de confiance" : "Qualité certifiée"}
      className={cn("h-auto w-full", className)}
    >
      <defs>
        <path
          id={`ring-top-${variant}`}
          d="M60,60 m-44,0 a44,44 0 1,1 88,0"
          fill="none"
        />
        <path
          id={`ring-bottom-${variant}`}
          d="M60,60 m-44,0 a44,44 0 1,0 88,0"
          fill="none"
        />
      </defs>

      <circle cx="60" cy="60" r="58" fill="#fff" />
      <circle
        cx="60"
        cy="60"
        r="57"
        fill="none"
        stroke={ring}
        strokeWidth="4"
      />
      <circle
        cx="60"
        cy="60"
        r="47"
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        strokeDasharray="2 3"
      />

      <text
        fill={ring}
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="1.2"
        fontFamily="Arvo, serif"
      >
        <textPath href={`#ring-top-${variant}`} startOffset="50%" textAnchor="middle">
          {topText}
        </textPath>
      </text>
      <text
        fill={ring}
        fontSize="8"
        fontWeight="700"
        letterSpacing="1"
        fontFamily="Arvo, serif"
      >
        <textPath
          href={`#ring-bottom-${variant}`}
          startOffset="50%"
          textAnchor="middle"
        >
          {bottomText}
        </textPath>
      </text>

      {/* center emblem */}
      <circle cx="60" cy="55" r="20" fill={ring} />
      {isConfiance ? (
        <text
          x="60"
          y="60"
          textAnchor="middle"
          fontSize="12"
          fill={accent}
          fontFamily="Arvo, serif"
        >
          ★★★★★
        </text>
      ) : (
        <path
          d="M52 55 l5 5 l11 -12"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      <text
        x="60"
        y="84"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill={accent}
        fontFamily="Arvo, serif"
      >
        SY&amp;CO
      </text>
    </svg>
  );
}
