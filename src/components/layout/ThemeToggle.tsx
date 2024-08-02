"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => {
                const newTheme = resolvedTheme === "dark" ? "light" : "dark";
                setTheme(newTheme);
                document.cookie = `theme=${newTheme}; path=/;`;
            }}
        >
            <Sun className="h-6 w-[1.3rem] dark:hidden" />
            <Moon className="hidden size-5 dark:block" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
