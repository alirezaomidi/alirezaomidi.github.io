"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { FaCircleHalfStroke } from "react-icons/fa6";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  // next-themes owns persistence and the prefers-color-scheme listener. A second
  // listener writing its own storage key used to overwrite an explicit choice
  // whenever the OS theme changed.
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Rendered before the resolved theme is known, so it must be legible on
    // either ground: currentColor inherits the already-painted text color.
    return (
      <FaCircleHalfStroke
        className="h-[14px] w-[14px]"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      id="theme-toggle"
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center p-[5px] -m-[5px] transition-opacity duration-300 hover:opacity-90"
    >
      <FaCircleHalfStroke
        aria-hidden="true"
        className={`h-[14px] w-[14px] ${
          isDark ? "text-[#D4D4D4]" : "text-[#1c1c1c]"
        }`}
      />
    </button>
  );
};
