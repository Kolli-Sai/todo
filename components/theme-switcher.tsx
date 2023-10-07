// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Moon, Sun } from "lucide-react";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // console.log({ theme });
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" ? (
        <Button isIconOnly color="default" onClick={() => setTheme("light")}>
          <Sun />
        </Button>
      ) : (
        <Button isIconOnly color="default" onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
      )}
    </div>
  );
}
