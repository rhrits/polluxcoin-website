

"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = useCallback(
    (index: number) => {
      setHoveredIndex(index);
      setOpenDropdownIndex(index);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
    setTimeout(() => {
      if (hoveredIndex === null) {
        setOpenDropdownIndex(null);
      }
    }, 200);
  }, [hoveredIndex]);

  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "Developers",
      dropdown: ["Documentation", "Grant Program", "Build"],
    },
    {
      title: "Networks",
      dropdown: [
        "Validator App",
        "Nominator App",
        "Pollux Explorer",
        "Pollux Staking",
      ],
    },
    {
      title: "Community",
      dropdown: ["Community", "Partner With Us", "Blog", "News & Events"],
    },
    { title: "Ecosystem", href: "/ecosystem" },
    { title: "About", dropdown: ["About Us", "Contact"] },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-md bg-opacity-70 z-50 shadow-lg">
      <div className="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto">
        {/* Left: Logo Only */}
        <div className="flex items-center space-x-2">
          <img
            src="/polluxlogowhite.png"
            alt="Polluxcoin Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Center: Navigation Menu */}
        <NavigationMenu className="flex space-x-4">
          <NavigationMenuList className="flex space-x-4">
            {menuItems.map((item, index) => (
              <NavigationMenuItem
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <NavigationMenuTrigger className="flex items-center space-x-1 text-white hover:text-[#8af969]">
                  <span>{item.title}</span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        openDropdownIndex === index ? "rotate-180" : ""
                      }`}
                      size={16}
                    />
                  )}
                </NavigationMenuTrigger>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdownIndex === index && (
                  <NavigationMenuContent
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={handleMouseLeave}
                    className="absolute left-0 mt-2 w-max bg-black text-white rounded-lg shadow-lg"
                  >
                    <ul className="p-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="hover:bg-[#8af969] hover:text-black rounded-md transition-all"
                        >
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/${subItem
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="block px-4 py-2"
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
        {/* <Button variant="primary">Get $POLLUX</Button> */}

        <Button
  variant="primary"
  className="bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] hover:bg-[#8af969] hover:text-black transition-all duration-300"
>
  Get $POLLUX
</Button>


    

      </div>
    </nav>
  );
}
