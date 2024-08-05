"use client";

import { ContactSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            subject: undefined,
            message: "",
            consent: false,
        },
    });

    const onSubmit = (data: z.infer<typeof ContactSchema>) => {
        setLoading(true);
        const sendMessage = async () => {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error("Error sending message.");
            return response.json();
        };

        toast.promise(sendMessage(), {
            loading: "Sending...",
            success: () => {
                form.reset({
                    firstname: "",
                    lastname: "",
                    email: "",
                    subject: "technical",
                    message: "",
                    consent: false,
                });
                setLoading(false);
                return "Message sent successfully!";
            },
            error: (err) => {
                setLoading(false);
                return err.message || "An error occurred.";
            },
        });
    };

    return (
        <Form {...form}>
            <Toaster />
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
                    {/* First Name */}
                    <FormField
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem className="col-span-1 md:col-span-2">
                                <FormLabel>
                                    First Name{" "}
                                    <span className="text-red-600">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="bg-primary/5"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Last Name */}
                    <FormField
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                            <FormItem className="col-span-1 md:col-span-2">
                                <FormLabel>
                                    Last Name{" "}
                                    <span className="text-red-600">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="bg-primary/5"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="col-span-1 md:col-span-4">
                                <FormLabel>
                                    Email{" "}
                                    <span className="text-red-600">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"
                                        className="bg-primary/5"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Subject */}
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem className="col-span-1 md:col-span-3">
                                <FormLabel className="sm:block sm:text-left">
                                    What’s your enquiry about?{" "}
                                    <span className="text-red-600">*</span>
                                </FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="bg-primary/5">
                                            <SelectValue placeholder="Select a subject" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="SelectContent">
                                        <SelectItem
                                            value="technical"
                                            className="bg-primary/5"
                                        >
                                            Technical Issue
                                        </SelectItem>
                                        <SelectItem
                                            value="commercial"
                                            className="bg-primary/5"
                                        >
                                            Commercial Inquiry
                                        </SelectItem>
                                        <SelectItem
                                            value="other"
                                            className="bg-primary/5"
                                        >
                                            Other
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Message */}
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="col-span-1 md:col-span-6">
                                <FormLabel>
                                    How can we help you?{" "}
                                    <span className="text-red-600">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        rows={12}
                                        className="bg-primary/5"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Consent */}
                    <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                            <FormItem className="col-span-1 flex flex-row items-center space-x-3 space-y-0 md:col-span-6 md:items-start">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="text-xs">
                                        I agree to the use of my data for
                                        communication purposes. It will not be
                                        disclosed or sold to third parties.
                                    </FormLabel>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full md:w-[200px]"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send"}
                    {loading ? (
                        <Loader className="ml-2 animate-spin" />
                    ) : (
                        <Send className="ml-2" />
                    )}
                </Button>
            </form>
        </Form>
    );
}
