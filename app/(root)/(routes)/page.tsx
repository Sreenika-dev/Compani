import { Search } from "lucide-react";
import SearchInput from "@/components/search-input";
import Categories from "@/components/categories";
import prismadb from "@/lib/prismadb";

const root = async () => {
  const categories = await prismadb.category.findMany();

  return (
    <div className=" pt-6 pl-4 pr-4 h-full">
      <SearchInput />
      <Categories data = {categories} />
    </div>
  );
};

export default root;
