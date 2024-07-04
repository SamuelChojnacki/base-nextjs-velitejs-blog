import React, { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import ButtonTheme from "./button-theme";
import { TailwindIndicator } from "./TailwindIndicator";
import { MenuProvider } from "@/lib/useMobileMenu";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

type Props = { children: ReactNode };

export default function Provider({ children }: Props) {
  return (
    <>
      <ThemeProvider>
        <MenuProvider>
          {children}
          <ButtonTheme />
          <SpeedInsights />
          <Analytics />
          <TailwindIndicator />
        </MenuProvider>
      </ThemeProvider>
    </>
  );
}
