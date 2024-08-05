import { CircleCheck } from "lucide-react";

interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="bg-success/15 text-y text-success flex items-center gap-x-2 rounded-md p-3 text-sm">
            <CircleCheck className="h-4 w-4" />
            <p>{message}</p>
        </div>
    );
};
