"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Footer = () => {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  const onThemeSelect = (value: string) => {
    setTheme(value);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 md:px-0">
      <div className="flex items-center gap-4">
        <div className="text-muted-foreground">Theme</div>

        <Select defaultValue={theme || "system"} onValueChange={onThemeSelect}>
          <SelectTrigger className="w-fit gap-2 border-none">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent align="center">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
