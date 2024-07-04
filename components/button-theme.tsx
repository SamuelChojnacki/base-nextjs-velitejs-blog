"use client";

import { ArrowBigLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CoolMode } from "./magicui/cool-mode";
import { useRouter } from "next/navigation";

const ButtonTheme = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
const backHistory = () => { 
  router.back()
}
  if (!mounted) {
    return null;
  }

  return (
    <>
    <CoolMode>
      <button
        aria-label="changement de theme"
        className="fixed bottom-5 right-5 z-[1000] flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-xl backdrop-blur-[0.5rem]
      transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </CoolMode> 
    <CoolMode>
      <button
        aria-label="changement de theme"
        className="fixed bottom-5 right-20 z-[1000] flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-xl backdrop-blur-[0.5rem]
      transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
        onClick={backHistory}
      >
        <ArrowBigLeft/>
      </button>
    </CoolMode> 

   

    </>
  );
};

export default ButtonTheme;
