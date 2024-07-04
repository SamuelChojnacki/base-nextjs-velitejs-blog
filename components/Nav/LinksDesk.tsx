"use client";
import Link from "next/link";
import Image from "next/image";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {};

/**
 * LinksDesk component for displaying navigation links with icons
 * @param {Props} props - Props for the LinksDesk component
 * @returns JSX.Element - Rendered LinksDesk component
 */
const LinksDesk = (props: Props): JSX.Element => {
  return (
    <>
      {config.navigationLinks.map((link, index) => (
        <NavLink key={index} href={link.href} label={link.label} />
      ))}
    </>
  );
};

/**
 * NavLink component for individual navigation links
 * @param {string} href - The URL the link points to
 * @param {string} label - The text label for the link
 * @param {ReactNode} icon - The icon component to display
 * @returns JSX.Element - Rendered NavLink component
 */
const NavLink = ({
  href,
  label,
}: {
  href: string;
  label: string;
}): JSX.Element => {
  const path = usePathname();
  return (
    <Link
      aria-label={label}
      className={cn(
        "relative text-base 2xl:text-xl flex gap-1 items-center",
        path === href ? "font-bold text-white py-2 px-4 bg-primary rounded-2xl" : ""
      )}
      href={href}
    >
      {label}
    </Link>
  );
};

export default LinksDesk;
