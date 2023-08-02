"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { ChangeEventHandler, useEffect, useState } from "react";
import useDebounce from "@/hooks/use-debounced";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); //extracts additional info from url, where we can use this additional info for customization

  const name = searchParams.get("name"); //getting the name from the url
  const categoryId = searchParams.get("categoryId"); //getting the category id from the url

  const [value, setValue] = useState(name || ""); //extracting the name and assigning it to the value "value = name"
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: debouncedValue,
      categoryId: categoryId,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router, categoryId]);

  return (
    <div className="relative">
      <Search
        size={20}
        className="absolute top-2 left-3 text-muted-foreground"
      />
      <Input
        onChange={onChange}
        value={value}
        placeholder="Search..."
        className="pl-10 bg-primary/10 text-base border-0 outline-none"
      />
    </div>
  );
};

export default SearchInput;
