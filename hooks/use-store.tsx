import { Products } from "@/types";
import { data } from "autoprefixer";
import { toast } from "react-hot-toast/headless";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  items: Products[];
  addItem: (data: Products) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Products) => {
        const currentItem = get().items;

        const existingItem = currentItem.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("Item Already in Cart");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart");
      },

      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item Removed from the cart");
      },

      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
