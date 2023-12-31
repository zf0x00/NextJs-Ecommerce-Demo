"use client";
import Button from "@/components/button/button";
import Currency from "@/components/product-card/currency";
import { useCart } from "@/hooks/use-store";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Summary() {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_STORE_URL}/checkout`,
      { productTds: items.map((item) => item.id) }
    );

    window.location = response.data.url;
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Completed");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  },[searchParams, removeAll]);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-90">Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
}
