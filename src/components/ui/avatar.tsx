"use client";

import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  fallback?: string;
}

function Avatar({ className, src, alt, fallback, ...props }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      {src && (
        <img
          className="aspect-square h-full w-full object-cover"
          src={src}
          alt={alt || ""}
        />
      )}
      {!src && fallback && (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
          {fallback}
        </div>
      )}
    </div>
  );
}

export { Avatar };