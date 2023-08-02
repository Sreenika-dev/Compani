"use client";

import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoriesProps {
  data: Category[];
}

const Categories = ({ data }: CategoriesProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };
    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    });

    router.push(url);
  };

  return (
    <div className="flex pt-4 w-full overflow-x-auto space-x-2">
      <button
        onClick={() => onClick(undefined)}
        className={cn(
          " flex items-center text-xs px-4 py-4 rounded-full  text-center bg-primary/10 hover:opacity-75 transition md:text-sm"
        )}
      >
        Newest
      </button>

      {data.map((item) => (
        <button
          onClick={() => onClick(item.id)}
          className={cn(
            "flex items-center text-xs px-4 py-4 rounded-full  text-center hover:opacity-75 transition bg-primary/10 md:text-sm"
          )}
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
