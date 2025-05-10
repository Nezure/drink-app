import type { ReactNode } from "react";
import { Card, CardFooter } from "./card";

interface FlexibleCardProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  badges?: ReactNode[] | ReactNode;
  onClick?: () => void;
  className?: string;
  imageAlt?: string;
  imageHeight?: number;
  icon?: ReactNode;
}

export function FlexibleCard({
  imageUrl,
  title,
  description,
  children,
  footer,
  badges,
  onClick,
  className = "",
  imageAlt = "Card image",
  imageHeight = 200,
  icon,
}: FlexibleCardProps) {
  return (
    <Card
      className={`overflow-hidden rounded-md border border-border bg-card text-card-foreground shadow-lg transition-all duration-200 hover:shadow-md ${onClick ? "cursor-pointer" : ""} ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-col">
        {imageUrl && (
          <div className="relative w-full">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              className="w-full object-cover"
              style={{ height: `${imageHeight}px` }}
            />
          </div>
        )}
        {title && (
          <div className="flex flex-col space-y-1.5 px-6 pt-6">
            {title && (
              <h3 className="flex gap-2 items-center text-2xl font-semibold leading-none tracking-tight">
                {icon}
                {title}
              </h3>
            )}
          </div>
        )}
        <div className="flex flex-col p-6">
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div>
          {children && <div className="p-6 pt-0">{children}</div>}

          {(footer || badges) && (
            <CardFooter className="p-6 pt-0">
              {badges && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.isArray(badges)
                    ? badges.map((badge, index) => (
                        <div key={index}>{badge}</div>
                      ))
                    : badges}
                </div>
              )}
              {footer && <div className="flex items-center">{footer}</div>}
            </CardFooter>
          )}
        </div>
      </div>
    </Card>
  );
}
