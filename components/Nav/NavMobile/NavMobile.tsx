"use client"; // Ajout de la directive "use client"

import { config } from "@/config/config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMenu } from "../useMobileMenu";

type Props = {};

/**
 * NavMobile component to display the mobile navigation menu with animations
 * @param {Props} props - Props for the NavMobile component
 * @returns JSX.Element - Rendered NavMobile component
 */
const NavMobile = (props: Props) => {
  const { isOpen } = useMenu();

  const menuVars = {
    initial: {
      scaleY: 0,
      y: "100%",
    },
    animate: {
      scaleY: 1,
      y: "100%",
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      y: "100%",
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileIconsVars = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      opacity: 1,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute bottom-0 z-20 border-t h-[30rem] w-full translate-y-full bg-background shadow-xl"
          style={{ transformOrigin: "top" }}
        >
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
            className="relative flex size-full flex-col items-center gap-4 pt-14"
          >
            {config.MenuLinks.map((link, index) => (
              <MobileNavLink
                key={index}
                aria-label={link.label}
                title={link.label}
                href={link.url}
              />
            ))}
            <div className="absolute bottom-4 flex gap-10">
              {config.social.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div variants={mobileIconsVars}>
                    <social.icon
                      className="text-foreground dark:text-foreground"
                      size={30}
                    />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

type MobileNavLinkProps = {
  title: string;
  href: string;
};

const mobileLinkVars = {
  initial: {
    y: "20px",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

/**
 * MobileNavLink component to display individual links in the mobile menu
 * @param {MobileNavLinkProps} props - Props for the MobileNavLink component
 * @returns JSX.Element - Rendered MobileNavLink component
 */
const MobileNavLink = ({ title, href }: MobileNavLinkProps) => {
  const { toggleMenu } = useMenu();

  return (
    <motion.div
      variants={mobileLinkVars}
      className={cn("text-2xl uppercase text-foreground")}
    >
      <motion.a
        aria-label="menu"
        whileHover={{ fontWeight: "bold" }}
        onClick={toggleMenu}
        href={href}
      >
        {title}
      </motion.a>
    </motion.div>
  );
};

export default NavMobile;
