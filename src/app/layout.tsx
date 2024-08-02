import Provider from "@/components/layout/ThemeProvider";
import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
    title: "Creepify",
    description: "Your platform description",
};

function getTheme() {
    const cookieStore = cookies();
    const themeCookie = cookieStore.get("theme");
    const theme = themeCookie ? themeCookie.value : "dark";
    return theme;
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const theme = getTheme();
    return (
        <html
            lang="en"
            className={`${theme} scroll-smooth`}
            style={{ colorScheme: theme }}
        >
            <body className={`${inter.className} ${cinzel.variable}`}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
