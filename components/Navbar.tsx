"use client";
import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";


const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="fixed w-full border-b border-primary/10 z-20 flex justify-between items-center py-2 px-4 bg-secondary">
      <div className="flex items-center w-full justify-between">
        <Menu className="md:hidden block" />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-2xl font-semibold",
              font.className
            )}
          >
            Compani
          </h1>
        </Link>
        <div className="flex items-center gap-x-3">
        <Button variant="premium" size="xsm">
           Upgrade
           <Sparkles className="h-4 w-4 ml-2 fill-white text-white"/>
        </Button>
         <ModeToggle />
         <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
