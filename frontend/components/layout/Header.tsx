"use client";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/MobileNav";
import logo from "@/assets/logo/HKM.png";

export const navLinks = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Programs",
    href: "#",
  },
  {
    label: "Achivements",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

const Header = () => {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-transparent border-b", {
        "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-25 w-full max-w-5xl items-center justify-between px-4">
        <a className="rounded-md p-2" href="#">
          <img src={logo.src} alt="HKFA Logo" className="w-30" />
        </a>
        <div className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <Button asChild key={link.label} size="lg" variant="ghost">
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
          <Button size="sm">Call: (123) 456-7890</Button>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Header;
