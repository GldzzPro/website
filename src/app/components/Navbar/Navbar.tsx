"use client";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { navbarConfig } from "../../_configs/navbar.config";
import { usePathname } from 'next/navigation'


function NavLink({ to, children , selected }: NavLinkProps) {
  return (
    <a
      href={to}
      className={cn("p-3 m-1 font-extrabold	text-base rounded-full border-[0.3px] border-transparent hover:border-red-600",selected && "bg-red-200")}
    >
      {children}
    </a>
  );
}
function MobileNav({ open, setOpen }: MobileNavbarProps) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { links, logoAlt, logoPath } = navbarConfig;
  const [open, setOpen] = useState(false);
  const ref = useRef(null); 
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {}, ref);
    return () => ctx.revert(); // cleanup
  }, []);

  const currentPath = usePathname()
  return (
    <nav
      {...{ ref }}
      className={cn(
        "w-full",
        "flex",
        "justify-center",
        "items-center",
        "p-5",
        "sticky top-0",
        "z-10",
        "bg-white",
        "bg-opacity-30",
        "backdrop-filter",
        "backdrop-blur-lg",
        "shadow-md"
      )}
    >
      <ul className={cn("flex items-center justify-between  ps-4 pe-4 w-full")}>
        <span className="text-xl font-semibold">
          <Image
            className={"p-2"}
            src={logoPath}
            alt={logoAlt}
            height={100}
            width={130}
          />
        </span>
        <span >
          {links.map(({ name, path }, key) => (
            <NavLink key={key} to={path} selected={path==currentPath}>
              {name?.toUpperCase()}
            </NavLink>
          ))}
        </span>
      </ul>
      <MobileNav open={open} setOpen={setOpen} />
    </nav>
  );
}
