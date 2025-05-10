import type { HTMLAttributes, ReactNode } from "react";

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  header: string;
  children?: ReactNode; // explicitly type children
}

export function Page({ header, children, className, ...restProps }: PageProps) {
  return (
    <div className={`${"md:pl-64 max-w-max"} ${className}`} {...restProps}>
      <div className="p-4 md:p-6 flex flex-col flex-wrap gap-4">
        <div className="text-3xl ">{header}</div>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
