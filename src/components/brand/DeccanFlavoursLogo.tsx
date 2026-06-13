import { cn } from "@/lib/utils";

type DeccanFlavoursLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  showSuburb?: boolean;
  tone?: "light" | "dark";
};

export function DeccanFlavoursLogo({ className, showSuburb = true, tone = "dark" }: DeccanFlavoursLogoProps) {
  const isDark = tone === "dark";

  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2.5", className)}>
      {/* Arch / dome icon */}
      <span
        className={cn(
          "relative inline-flex h-10 w-10 shrink-0 items-end justify-center overflow-hidden rounded-full",
          isDark ? "bg-turmeric-300" : "bg-forest-900",
        )}
      >
        <svg viewBox="0 0 40 40" fill="none" className="absolute inset-0 h-full w-full" aria-hidden>
          {/* Dome arch */}
          <path
            d="M8 32 Q8 12 20 10 Q32 12 32 32"
            stroke={isDark ? "#0a2e22" : "#f0c040"}
            strokeWidth="2"
            fill="none"
          />
          {/* Minaret left */}
          <rect x="7" y="20" width="3" height="12" rx="1" fill={isDark ? "#0a2e22" : "#f0c040"} />
          <circle cx="8.5" cy="19" r="1.5" fill={isDark ? "#0a2e22" : "#f0c040"} />
          {/* Minaret right */}
          <rect x="30" y="20" width="3" height="12" rx="1" fill={isDark ? "#0a2e22" : "#f0c040"} />
          <circle cx="31.5" cy="19" r="1.5" fill={isDark ? "#0a2e22" : "#f0c040"} />
          {/* Base */}
          <rect x="6" y="31" width="28" height="2" rx="1" fill={isDark ? "#0a2e22" : "#f0c040"} />
          {/* Center dot */}
          <circle cx="20" cy="23" r="2" fill={isDark ? "#0a2e22" : "#f0c040"} />
        </svg>
      </span>

      {/* Word mark */}
      <span className="inline-flex shrink-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            isDark ? "text-white" : "text-forest-900",
          )}
        >
          Deccan
          <span className={isDark ? " text-turmeric-300" : " text-turmeric-500"}> Flavours</span>
        </span>
        {showSuburb && (
          <span
            className={cn(
              "mt-0.5 text-[10px] font-black uppercase tracking-[0.22em]",
              isDark ? "text-turmeric-300/80" : "text-forest-500",
            )}
          >
            Wentworthville
          </span>
        )}
      </span>
    </span>
  );
}
