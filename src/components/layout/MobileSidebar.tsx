"use client";

import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ChevronRightIcon, MenuIcon, MountainIcon } from "lucide-react";
import Link from "next/link";

export default function MobileSidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">
                        Toggle mobile navigation menu
                    </span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetTitle>
                    <VisuallyHidden>Menu</VisuallyHidden>
                </SheetTitle>
                <SheetDescription>
                    <VisuallyHidden>
                        Navigate through the mobile menu options.
                    </VisuallyHidden>
                </SheetDescription>
                <div className="grid gap-4">
                    <Link href="/" prefetch={false} className="mb-4">
                        <MountainIcon className="h-6 w-6" />
                        <span className="sr-only">Creepify</span>
                    </Link>
                    <Collapsible className="grid gap-2">
                        <CollapsibleTrigger className="flex items-center justify-between text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                            Explore
                            <ChevronRightIcon className="h-5 w-5 transition-all" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <div className="grid gap-4 px-4 py-2">
                                <Link
                                    href="/explore/categories"
                                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    Categories
                                </Link>
                                <Link
                                    href="/explore/featured-stories"
                                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    Featured Stories
                                </Link>
                                <Link
                                    href="/explore/latest-stories"
                                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    Latest Stories
                                </Link>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                    <Link
                        href="/pricing"
                        className="flex items-center gap-2 text-lg font-medium"
                        prefetch={false}
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 text-lg font-medium"
                        prefetch={false}
                    >
                        Contact
                    </Link>
                    <div className="flex items-center gap-2">
                        <Button variant="outline">Sign In</Button>
                        <Button>Sign Up</Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
