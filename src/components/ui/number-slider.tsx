"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface NumberSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  label?: string;
  showRange?: boolean;
  onChange?: (value: number) => void;
  className?: string;
}

export default function NumberSlider({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 1,
  label = "Value",
  showRange = false,
  onChange,
  className,
}: NumberSliderProps) {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = (newValue: number[]) => {
    setValue(newValue[0]);
    onChange?.(newValue[0]);
  };

  return (
    <div className={`w-full max-w-md mx-auto p-2 rounded-md ${className}`}>
      <div className="space-y-0">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold">{label}</h3>
          <div className="bg-accent text-accent-foreground rounded-full px-2 text-sm py-1 min-w-[3rem] text-center">
            {value}
          </div>
        </div>

        <Slider
          defaultValue={[defaultValue]}
          max={max}
          min={min}
          step={step}
          onValueChange={handleValueChange}
          className="py-4"
        />
        {showRange && (
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{min}</span>
            <span>{max}</span>
          </div>
        )}
      </div>
    </div>
  );
}
