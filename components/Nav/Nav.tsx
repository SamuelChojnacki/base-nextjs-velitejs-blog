import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import LinksDesk from "./LinksDesk";
import MenuButton from "./NavMobile/MenuButton/MenuButton";
import NavMobile from "./NavMobile/NavMobile";
import { config } from "@/config/config";

type NavProps = {};

/**
 * Navigation component for the landing page
 * @param {} NavProps - Props for the Nav component
 * @returns JSX.Element - Rendered Nav component
 */
const Nav = ({}: NavProps): JSX.Element => {
  return (
    <>
      {/* Main navigation bar */}
      <div className="relative h-28 w-screen bg-background">
        <div className="absolute bottom-0 z-30 flex size-full items-center justify-between gap-8 px-4 shadow-xl 2xl:px-16 ">
          {/* Logo & title */}
          <Link href="/" className={cn("flex items-end gap-2")}>
            <h1 className="text-3xl font-bold">LOGO</h1>
            <Typography
              variant="large"
              className="text-2xl text-secondary dark:text-foreground"
            ></Typography>
          </Link>
          {/* Desktop navigation links */}
          <nav
            role="navigation"
            id="nav"
            className="hidden flex-1 justify-center gap-5 text-nowrap xl:flex"
          >
            <LinksDesk />
          </nav>

          <div className="flex gap-3 ">
            {config.social.map((social, index) => (
              <Link key={index} href={social.href}>
                <social.icon
                  className="hover:text-slate-500 dark:hover:text-slate-500 cursor-pointer"
                  size={25}
                />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <MenuButton className="xl:hidden" />
        </div>

        {/* Mobile navigation */}
        <NavMobile />
      </div>
    </>
  );
};

export { Nav };
