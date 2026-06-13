import Image from "next/image";

import { cn } from "@/lib/utils";

type DeccanFlavoursLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  showSuburb?: boolean;
  tone?: "light" | "dark";
};

export function DeccanFlavoursLogo({ className, imageClassName, priority = false, showSuburb = true, tone = "dark" }: DeccanFlavoursLogoProps) {
  const isDark = tone === "dark";

  return (
    <span className={cn("inline-flex min-w-0 items-center gap-3", className)}>
      <span
        className={cn(
          "inline-flex shrink-0 items-center",
          isDark
            ? "rounded-lg bg-white/8 p-1.5"
            : "rounded-lg border border-black/8 bg-white p-1.5 shadow-sm",
        )}
      >
        <Image
          src="/brand/deccan-flavours-logo.png"
          alt="Deccan Flavours"
          width={180}
          height={52}
          priority={priority}
          className={cn(
            "block h-11 w-auto max-w-[160px] object-contain",
            imageClassName,
          )}
        />
      </span>
      {showSuburb ? (
        <span
          className={cn(
            "hidden h-9 border-l pl-3 leading-tight sm:flex sm:flex-col sm:justify-center",
            isDark ? "border-white/20 text-white" : "border-forest-500/30 text-ink",
          )}
        >
          <span
            className={cn(
              "block text-[10px] font-black uppercase tracking-[0.22em]",
              isDark ? "text-turmeric-300" : "text-turmeric-500",
            )}
          >
            Wentworthville
          </span>
          <span
            className={cn(
              "block text-[10px] font-bold uppercase tracking-[0.16em]",
              isDark ? "text-white/50" : "text-charcoal/50",
            )}
          >
            South Indian Cuisine
          </span>
        </span>
      ) : null}
    </span>
  );
}
