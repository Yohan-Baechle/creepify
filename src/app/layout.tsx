import Provider from "@/components/layout/ThemeProvider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cookies } from "next/headers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Creepify",
    description: "Your platform description",
}

function getTheme() {
    const cookieStore = cookies()
    const themeCookie = cookieStore.get("theme")
    const theme = themeCookie ? themeCookie.value : "dark"
    return theme
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const theme = getTheme()
    return (
        <html lang="en" className={theme} style={{ colorScheme: theme }}>
            <body className={inter.className}>
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}
