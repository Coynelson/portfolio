import { NavLink } from "react-router";
import { useState } from "react";
// import Logo from "./logo";
// import { ThemeSelect } from "./theme-select";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
];

export function Navigation() {
  return (
    <>
      <div className="hidden sm:block fixed top-0 right-0 p-4">
        {/* <ThemeSelect /> */}
      </div>

      <MobileNavigation />

      {/* Desktop Navigation */}
      <nav className="ml-auto sm:flex-col mt-[40vh] px-10 sm:w-[150px] md:w-[320px] hidden sm:flex">
        <div className="flex flex-col gap-30">
          <ul className="flex flex-col gap-2 mt-[0.5rem]">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block transition-colors duration-200 text-xl lg:text-3xl ${
                      isActive
                        ? "text-text font-medium"
                        : "text-text-muted hover:text-text"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* <Logo /> */}
        </div>
      </nav>
    </>
  );
}
function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navigation */}
      <div className="z-50 sm:hidden flex fixed justify-between top-0 left-0 w-full p-6 bg-background border-b border-border">
        {/* Menu Toggle Button */}

        {/* <ThemeSelect /> */}

        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>
      <div>
        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-all duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full px-8">
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block transition-all duration-200 text-2xl ${
                        isActive
                          ? "text-text font-semibold scale-110"
                          : "text-text-muted hover:text-text hover:scale-105"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-16">
              {/* <Logo /> */}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
