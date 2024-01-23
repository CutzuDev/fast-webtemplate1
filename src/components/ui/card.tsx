import { cn } from "@/lib/utils";
import React from "react";

function Card({
  children,
  className,
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        `flex h-[269px] w-[210px] flex-col items-center justify-start bg-[url("/assets/card.svg")] p-2.5 px-5`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
