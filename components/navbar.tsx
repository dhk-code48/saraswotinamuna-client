import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import { Category } from "@/types";

const Navbar = async ({ categories }: { categories: Category[] }) => {
  return (
    <div>
      <div className="bg-primary">
        <div className="hidden container text-white lg:flex justify-between items-center h-10">
          <div className="flex items-center gap-x-5">
            <Phone size={20} />
            (+977) 065-412186
          </div>
          <div className="flex items-center gap-x-5">
            <MapPin size={20} />
            Shuklagandaki 7, Khaireni Tanahuns
          </div>
        </div>
      </div>
      <div className="container h-auto flex flex-col justify-between items-center lg:flex-row lg:h-20">
        <Image
          src="/logo-light.png"
          className="h-full w-auto"
          alt="School Logo"
          width={624}
          height={134}
        />
        {categories && <MainNav data={categories} />}
      </div>
    </div>
  );
};

export default Navbar;
