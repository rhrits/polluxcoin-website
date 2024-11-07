import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button"; // Correct path based on your project structure
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-md bg-opacity-70 z-50 shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Left: Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Polluxcoin Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-white">POLLUXCHAIN</span>
        </div>

        {/* Center: Navigation Menu */}
        <NavigationMenu className="flex space-x-4">
          <NavigationMenuList className="flex space-x-4">
            {[
              { title: "Home", href: "/" },
              { title: "Developers", dropdown: ["Documentation", "Grant Program", "Build"] },
              { title: "Networks", dropdown: ["Validator App", "Nominator App", "5ire Explorer", "5ire Staking"] },
              { title: "Community", dropdown: ["Community", "Partner With Us", "Blog", "News & Events"] },
              { title: "Ecosystem", href: "/ecosystem" },
              { title: "About", dropdown: ["About Us", "Contact"] },
            ].map((item, index) => (
              <NavigationMenuItem key={index} className="group">
                <NavigationMenuTrigger className="text-white hover:text-green-500">
                  {item.title}
                </NavigationMenuTrigger>
                {item.dropdown && (
                  <NavigationMenuContent className="absolute z-10">
                    <ul className="p-2 bg-black text-white rounded-lg shadow-md">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex} className="group/item hover:bg-green-700 rounded-md">
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                              className="block p-2 text-white"
                            >
                              {subItem}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Get $POLLUX Button */}
        <Button variant="primary">Get $POLLUX</Button>
      </div>
    </nav>
  );
}
