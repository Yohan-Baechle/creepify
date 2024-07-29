import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UserNav() {
    return (
        <Avatar>
            <AvatarImage
                src="https://github.com/shadcn.png"
                alt="user avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
