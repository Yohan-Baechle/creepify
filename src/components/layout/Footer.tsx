import Link from "next/link"

interface NavigationItem {
    title: string
    href?: string
    description?: string
    items?: { title: string; href: string }[]
}

const navigationItems: NavigationItem[] = [
    {
        title: "Explorer",
        description: "Discover a variety of horror stories.",
        items: [
            { title: "Categories", href: "/categories" },
            { title: "Featured Stories", href: "/featured-stories" },
            { title: "Latest Stories", href: "/latest-stories" },
        ],
    },
    {
        title: "Pricing",
        description: "Choose a plan that fits your needs.",
        items: [
            { title: "Free Plan", href: "/pricing#free" },
            { title: "Premium Plan", href: "/pricing#premium" },
        ],
    },
    {
        title: "Contact",
        description: "Get in touch with us.",
        items: [{ title: "Contact Us", href: "/contact" }],
    },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <div className="w-full border-t bg-background pt-20">
            <div className="container mx-auto">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div className="flex flex-col items-start gap-8">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
                                Creepify
                            </h2>
                            <p className="max-w-lg text-left text-lg leading-relaxed tracking-tight text-foreground/75">
                                Dive into a world of chilling tales and connect
                                with horror enthusiasts.
                            </p>
                        </div>
                        <div className="flex flex-row gap-20">
                            <div className="flex max-w-lg flex-col text-left text-sm leading-relaxed tracking-tight text-foreground/75">
                                <p>123 Spooky Lane</p>
                                <p>Haunted Town</p>
                                <p>GH 66666</p>
                            </div>
                            <div className="flex max-w-lg flex-col text-left text-sm leading-relaxed tracking-tight text-foreground/75">
                                <Link href="/terms">Terms of Service</Link>
                                <Link href="/privacy">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid items-start gap-10 lg:grid-cols-3">
                        {navigationItems.map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col items-start gap-1 text-base"
                            >
                                <div className="flex flex-col gap-2">
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="flex items-center justify-between"
                                        >
                                            <span className="text-xl">
                                                {item.title}
                                            </span>
                                        </Link>
                                    ) : (
                                        <p className="text-xl">{item.title}</p>
                                    )}
                                    {item.items &&
                                        item.items.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                href={subItem.href}
                                                className="flex items-center justify-between text-foreground/75"
                                            >
                                                <span>{subItem.title}</span>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center text-sm">
                <p>&copy; {currentYear} | All Rights Reserved </p>
            </div>
        </div>
    )
}
