import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    CalendarIcon,
    ChevronRightIcon,
    ClockIcon,
    LayoutGridIcon,
    MenuIcon,
    MountainIcon,
    QuoteIcon,
    StarIcon,
    TagIcon,
} from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import UserNav from "./UserNav";

export default function Profile() {
    return (
        <div className="flex items-center gap-2">
            <ThemeToggle />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                    >
                        <UserNav />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <MenuIcon className="size-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="md:hidden">
                    <div className="grid gap-6 p-6">
                        <Link
                            href="#"
                            className="flex items-center gap-2"
                            prefetch={false}
                        >
                            <MountainIcon className="h-6 w-6" />
                            <span className="text-lg font-semibold">
                                Acme Inc
                            </span>
                        </Link>
                        <Collapsible className="grid gap-4">
                            <CollapsibleTrigger className="flex items-center justify-between text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                                Explore
                                <ChevronRightIcon className="h-5 w-5 transition-all" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className="-mx-6 grid gap-4 bg-muted p-6">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2"
                                        prefetch={false}
                                    >
                                        <LayoutGridIcon className="h-5 w-5" />
                                        Categories
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2"
                                        prefetch={false}
                                    >
                                        <StarIcon className="h-5 w-5" />
                                        Featured Stories
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2"
                                        prefetch={false}
                                    >
                                        <ClockIcon className="h-5 w-5" />
                                        Latest Stories
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2"
                                        prefetch={false}
                                    >
                                        <TagIcon className="h-5 w-5" />
                                        Popular Tags
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2"
                                        prefetch={false}
                                    >
                                        <CalendarIcon className="h-5 w-5" />
                                        Events
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2"
                                        prefetch={false}
                                    >
                                        <QuoteIcon className="h-5 w-5" />
                                        Testimonials
                                    </Link>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                        <Link
                            href="#"
                            className="flex items-center gap-2"
                            prefetch={false}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2"
                            prefetch={false}
                        >
                            Contact
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
