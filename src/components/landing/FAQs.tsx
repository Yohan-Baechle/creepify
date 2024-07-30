import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function FAQs() {
    return (
        <div className="w-full pb-32">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <Badge variant="outline">FAQ</Badge>
                    <div className="flex flex-col gap-2">
                        <h2>All you need to know</h2>
                        <p className="max-w-xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground">
                            Have questions about Creepify? Find the answers to
                            our most commonly asked questions below. If you
                            still need help, feel free to reach out.
                        </p>
                    </div>
                    <div>
                        <Link
                            href="/contact"
                            className={`gap-4 ${buttonVariants({ variant: "outline" })}`}
                        >
                            Any questions? Reach out
                            <Mail className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                How do I share my own story?
                            </AccordionTrigger>
                            <AccordionContent>
                                To share your story, sign up for an account and
                                navigate to the &apos;Share Your Story&apos;
                                section. Follow the prompts to submit your tale
                                for others to read and enjoy.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                Is there a premium membership?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes, Creepify offers a premium membership that
                                provides ad-free access, exclusive content, and
                                other benefits. Check out our Pricing page for
                                more details.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                How can I participate in events?
                            </AccordionTrigger>
                            <AccordionContent>
                                Creepify hosts various events such as live
                                readings and writing workshops. You can find
                                more information and sign up for events on the
                                Events page.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                How do I report a problem or issue?
                            </AccordionTrigger>
                            <AccordionContent>
                                If you encounter any issues or have concerns,
                                please visit our Help Center or contact us
                                directly through the Contact page.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>
                                How can I upgrade to a premium membership?
                            </AccordionTrigger>
                            <AccordionContent>
                                To upgrade to a premium membership, go to the
                                Pricing page and select the premium plan that
                                suits you best. Follow the instructions to
                                complete your upgrade and enjoy exclusive
                                benefits.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>
                                What types of stories can I find on Creepify?
                            </AccordionTrigger>
                            <AccordionContent>
                                Creepify offers a wide range of horror stories,
                                including ghost stories, thrillers, supernatural
                                tales, and more. You can explore different
                                categories to find stories that match your
                                interests.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
