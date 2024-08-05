import * as z from "zod";

export const ContactSchema = z.object({
    firstname: z.string().min(1, {
        message: "Please enter your first name",
    }),
    lastname: z.string().min(1, {
        message: "Please enter your last name",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    subject: z.enum(["technical", "commercial", "other"], {
        message: "Please select a subject",
    }),
    message: z.string().min(1, {
        message: "Please enter your message",
    }),
    consent: z.boolean().refine((val) => val === true, {
        message:
            "You must accept the processing of your personal data to continue",
    }),
});

export const registerSchema = z
    .object({
        email: z.string().email("Invalid email address"),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters long"),
        confirmPassword: z.string().min(1, "Password confirmation is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export const loginSchema = z.object({
    email: z.string().email({ message: "Email is required" }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
});
