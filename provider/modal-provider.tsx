"use client";

import PrevieModal from "@/components/preview-modal/preview-modal";
import React, { useEffect, useState } from "react";

function ModalProvider() {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PrevieModal />
    </>
  );
}

export default ModalProvider;
