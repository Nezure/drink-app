import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useState } from "react";

interface ButtonRadioGroupProps {
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function ButtonRadioGroup({
  options,
  defaultValue,
  onChange,
  className = "",
}: ButtonRadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || ""
  );

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <div className={clsx("flex flex-wrap gap-0", className)} role="radiogroup">
      {options.map((option, index) => {
        const isSelected = selectedValue === option.value;
        const isFirst = index === 0;
        const isLast = index === options.length - 1;

        return (
          <Button
            size="sm"
            key={option.value}
            variant={isSelected ? "default" : "ghost"}
            onClick={() => handleSelect(option.value)}
            aria-checked={isSelected}
            role="radio"
            className={clsx(
              "transition-all",
              "rounded-none",
              isFirst ? "rounded-l-md" : !isLast && "rounded-none",
              isLast && "rounded-r-md"
            )}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
