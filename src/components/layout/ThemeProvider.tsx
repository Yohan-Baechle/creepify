"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ProviderProps {
    children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    return (
        <ThemeProvider
            attribute="class"
            storageKey="theme"
            defaultTheme="dark"
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
};

export default Provider;
