import { Products } from "@/types";
import { data } from "autoprefixer";
import { create } from "zustand";

interface PreviewModalStore {
  open: boolean;
  data?: Products;
  isOpen: (data: Products) => void;
  onClose: () => void;
}

export const usePreviewModal = create<PreviewModalStore>()((set) => ({
  open: false,
  data: undefined,
  isOpen: (data: Products) => set({ open: true, data }),
  onClose: () => set({ open: false }),
}));
