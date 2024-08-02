"use client";

import { MountainIcon } from "lucide-react";
import Link from "next/link";
import Menu from "./Menu";
import MobileSidebar from "./MobileSidebar";
import Profile from "./Profile";

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
                {/* Make sure MobileSidebar is only shown on mobile */}
                <div className="md:hidden">
                    <MobileSidebar />
                </div>
            </div>
        </header>
    );
}
