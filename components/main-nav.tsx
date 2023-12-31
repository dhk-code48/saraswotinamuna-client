"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="flex justify-center items-center py-5 gap-x-4">
      <Link
        key="/"
        href="/"
        className={cn(
          "font-semibold tracking-wide transition-colors hover:text-black",
          pathname === "/" ? "text-primary" : "text-gray-800"
        )}
      >
        Home
      </Link>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "font-semibold tracking-wide transition-colors hover:text-black",
            route.active ? "text-primary" : "text-gray-800"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
