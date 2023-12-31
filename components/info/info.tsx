import { Products } from "@/types";
import React from "react";
import Currency from "../product-card/currency";
import Button from "../button/button";
import { ShoppingCartIcon } from "lucide-react";

interface InfoProps {
  data: Products;
}

export default function Info({ data }: InfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-500">{data.name}</h1>
      <div className="mt-3 flex item justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      {/* Add to cart */}
      <div className="mt-10 flex items-center gap-x-2">
        <div>
          <Button className="flex gap-x-2">
            <ShoppingCartIcon className="h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
