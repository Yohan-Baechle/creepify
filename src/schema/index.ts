import * as z from "zod"

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
            "You must accept the processing of your personal data to continue.",
    }),
})
