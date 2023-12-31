"use client";
import React, { useEffect, useState } from "react";
import Button from "../button/button";
import { ShoppingBagIcon } from "lucide-react";
import { useCart } from "@/hooks/use-store";
import { useRouter } from "next/navigation";

export default function NavbarActions() {
  //For hydration error
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  //use to add to cart
  const cart = useCart();

  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center bg-black py-2 px-4">
        <ShoppingBagIcon size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {" "}
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
