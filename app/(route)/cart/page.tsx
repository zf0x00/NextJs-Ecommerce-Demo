"use client";
import Container from "@/components/ui/container/container";
import { useCart } from "@/hooks/use-store";
import React, { useEffect, useState } from "react";
import CardItem from "./components/card-item";
import Summary from "./components/summary";

export default function Cartpage() {
  //For hydration error
  const [isMounted, setisMounted] = useState(false);

  const cart = useCart();

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No Items added to Cart</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CardItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}
