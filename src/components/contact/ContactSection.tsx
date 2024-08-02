import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <div className="w-full py-20 lg:py-40">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <Badge>Contact us</Badge>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
                                We&apos;re Here to Help
                            </h1>
                            <p className="max-w-sm text-left text-lg leading-relaxed tracking-tight text-muted-foreground">
                                From technical issues to general inquiries, our
                                support team is here to ensure you have the best
                                experience on Creepify.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-start gap-6 text-left">
                        <Check className="mt-2 h-4 w-4 text-primary" />
                        <div className="flex flex-col gap-1">
                            <p>Dedicated Support</p>
                            <p className="text-sm text-muted-foreground">
                                Our team is dedicated to providing you with the
                                best support possible.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-start gap-6 text-left">
                        <Check className="mt-2 h-4 w-4 text-primary" />
                        <div className="flex flex-col gap-1">
                            <p>24/7 Availability</p>
                            <p className="text-sm text-muted-foreground">
                                We&apos;re here for you around the clock, ready
                                to assist with any issues you may face.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-start gap-6 text-left">
                        <Check className="mt-2 h-4 w-4 text-primary" />
                        <div className="flex flex-col gap-1">
                            <p>Personalized Assistance</p>
                            <p className="text-sm text-muted-foreground">
                                Receive personalized help tailored to your
                                specific needs from our knowledgeable support
                                team.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
