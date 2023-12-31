import { usePreviewModal } from "@/hooks/use-preview-modal";
import React from "react";
import Modal from "./modal";
import Gallery from "../gallery/gallery";
import Info from "../info/info";

export default function PrevieModal() {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }
  return (
    <Modal open={previewModal.open} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>

        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
}
