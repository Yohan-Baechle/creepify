import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function CTA() {
    return (
        <div className="w-full pb-32">
            <Link href="/signup">
                <div className="flex flex-col items-center gap-8 rounded-md bg-[url('/images/cta-banner.jpg')] bg-cover bg-bottom p-8 text-center lg:p-16">
                    <Badge className="bg-black">Get started</Badge>
                    <div className="flex flex-col gap-2 text-white">
                        <h3 className="font-regular max-w-xl text-3xl tracking-tighter md:text-5xl">
                            Try our platform today!
                        </h3>
                        <p className="max-w-xl text-lg leading-relaxed tracking-tight text-gray-200">
                            Join Creepify today and experience the thrill of
                            horror like never before!
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
