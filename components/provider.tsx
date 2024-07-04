import React, { ReactNode } from "react";

import ButtonTheme from "./button-theme";
import { MenuProvider } from "./Nav/useMobileMenu";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { TailwindIndicator } from "./ui/TailwindIndicator";
import { ThemeProvider } from "./theme-provider";

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
