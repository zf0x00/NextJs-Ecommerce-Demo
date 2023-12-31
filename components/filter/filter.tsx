"use client";

import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React from "react";
import Button from "../button/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

export default function Filter({ data, name, valueKey }: FilterProps) {
  const searchparams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchparams.get(valueKey);

  const onClick = (id: string) => {
    //when user click any of filter we se what current url and add the filter url
    const current = qs.parse(searchparams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    //use click that filter now he want top remove the filter
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-500 bg-white border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}>
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
