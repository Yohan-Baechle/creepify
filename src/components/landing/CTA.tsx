import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function CTA() {
    return (
        <div className="w-full pb-32">
            <Link href="/signup">
                <div
                    className="flex flex-col items-center gap-8 rounded-md p-4 text-center lg:p-14"
                    style={{
                        backgroundImage: "url('/images/cta-banner3.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div>
                        <Badge className="bg-black">Get started</Badge>
                    </div>
                    <div className="flex flex-col gap-2 text-white">
                        <h3 className="font-regular max-w-xl text-3xl tracking-tighter md:text-5xl">
                            Try our platform today!
                        </h3>
                        <p className="max-w-xl text-lg leading-relaxed tracking-tight text-gray-200">
                            Join Creepify today to read spine-chilling tales,
                            share your own stories, and connect with other
                            horror enthusiasts. Experience the thrill of horror
                            like never before!
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
