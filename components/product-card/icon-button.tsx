import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: React.ReactElement;
  className?: string;
}

export default function IconButton({
  onClick,
  icon,
  className,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-full bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}>
      {icon}
    </button>
  );
}
