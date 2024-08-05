"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { login } from "@/app/actions/login";
import { FormError } from "@/components/login/FormError";
import { FormSuccess } from "@/components/login/FormSuccess";
import GoogleButton from "@/components/login/GoogleButton";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas";
import Link from "next/link";
import { ReactNode, useState, useTransition } from "react";

interface LoginFormProps {
    trigger?: ReactNode;
}

export default function SignInForm({ trigger }: LoginFormProps) {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            login(values).then((data) => {
                setError(data.error);
                setSuccess(data.success);
            });
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger || <Button>Login</Button>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-3xl">Login</DialogTitle>
                    <DialogDescription>
                        Enter your email and password to log in to your account.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        className="space-y-8"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isPending}
                                            placeholder="email@example.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isPending}
                                            type="password"
                                            placeholder="••••••••"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormSuccess message={success} />
                        <FormError message={error} />
                        <Button
                            disabled={isPending}
                            type="submit"
                            className="w-full"
                        >
                            Login
                        </Button>
                    </form>
                </Form>
                <GoogleButton />
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <DialogClose asChild>
                        <Link href="/signup" className="underline">
                            Sign up
                        </Link>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
}
