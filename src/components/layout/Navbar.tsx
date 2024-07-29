"use client"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon, MountainIcon } from "lucide-react"
import Link from "next/link"
import Menu from "./Menu"
import Profile from "./Profile"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background shadow-md">
            <div className="container h-[60px] py-2">
                <nav className="hidden items-center justify-between gap-6 md:flex">
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                        prefetch={false}
                    >
                        <MountainIcon className="size-6" />
                        <span className="text-lg font-semibold">Creepify</span>
                    </Link>
                    <Menu />
                    <Profile />
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                        >
                            <MenuIcon className="size-6" />
                            <span className="sr-only">Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="md:hidden">
                        <SheetTitle>Menu</SheetTitle>
                        <div className="grid gap-6 p-4">
                            <Link
                                href="#"
                                className="text-sm font-medium hover:text-primary"
                                prefetch={false}
                            >
                                Accueil
                            </Link>
                            <Link
                                href="#"
                                className="text-sm font-medium hover:text-primary"
                                prefetch={false}
                            >
                                Rechercher
                            </Link>
                            <Link
                                href="#"
                                className="text-sm font-medium hover:text-primary"
                                prefetch={false}
                            >
                                Mes réservations
                            </Link>
                            <Link
                                href="#"
                                className="text-sm font-medium hover:text-primary"
                                prefetch={false}
                            >
                                Profil
                            </Link>
                            <Link
                                href="#"
                                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                prefetch={false}
                            >
                                Sign up
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
