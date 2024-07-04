import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "@/assets/styles/globals.scss";
import Provider from "@/components/provider";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/Nav/Nav";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          bricolage.className,
          "w-screen overflow-x-hidden  min-h-screen"
        )}
      >
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
