import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import "@/app/globals.css";
import Image from "next/image";
import ShinyText from "@/components/shiny-text";

const Header = () => {
  return (
    <header className="bg-blue-600 py-4 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="flex items-center gap-3 px-20 text-3xl font-bold"
              >
                <a href="/">
                  <Image
                    src="/assets/Logo (white).png"
                    alt="Logo"
                    width={36}
                    height={36}
                    priority
                  />
                  n8nfast
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Menu Center */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center justify-center space-x-8 md:space-x-16">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#" className="hover:text-gray-300">
                  VPS n8n
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#" className="hover:text-gray-300">
                  Tính năng
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#" className="hover:text-gray-300">
                  Bảng giá
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#" className="hover:text-gray-300">
                  Hỗ trợ
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Menu Right */}
        <NavigationMenu>
          <NavigationMenuList className="mx-20 flex items-center space-x-4">
            <NavigationMenuItem className="hidden rounded-md bg-white/10 px-4 py-2 transition-transform duration-300 hover:scale-110 hover:bg-white/20 md:block">
              <NavigationMenuLink asChild>
                <a
                  href="/login"
                  className="group flex items-center justify-center gap-2 font-bold"
                >
                  Đăng nhập
                  <span className="arrow inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
