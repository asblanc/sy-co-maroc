import { cn } from "@/lib/utils";

type SealProps = {
  variant?: "confiance" | "qualite";
  className?: string;
};

/**
 * Self-contained SVG brand seal (no external asset, no trademark).
 * Textes volontairement factuels et vérifiables — pas de mention de
 * certification ou de note client que SY&CO ne peut pas prouver.
 * `confiance` = sceau de marque (hero), `qualite` = sceau ancrage panafricain.
 */
export function TrustSeal({ variant = "confiance", className }: SealProps) {
  const isConfiance = variant === "confiance";
  const ring = isConfiance ? "#097D7A" : "#FD8B15";
  const accent = isConfiance ? "#FD8B15" : "#097D7A";
  const topText = isConfiance
    ? "· FORMATION · CONSEIL ·"
    : "· CADRES & DIRIGEANTS ·";
  const bottomText = isConfiance
    ? "· DEPUIS 2020 ·"
    : "· MAROC · SÉNÉGAL · CI ·";

  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label={
        isConfiance
          ? "SY&CO, cabinet de formation et de conseil depuis 2020"
          : "SY&CO, présent au Maroc, au Sénégal et en Côte d'Ivoire"
      }
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

      {/* center emblem — checkmark (neutre, sans revendication chiffrée) */}
      <circle cx="60" cy="55" r="20" fill={ring} />
      <path
        d="M52 55 l5 5 l11 -12"
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
