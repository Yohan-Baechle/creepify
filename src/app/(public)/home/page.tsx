import Logout from "@/components/login/LogoutButton";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export default async function HomePage() {
    const session = await auth();

    if (!session?.user) redirect("/");

    return (
        <div>
            <h1>{session.user.name}</h1>
            <Image
                src={session.user.image!}
                alt={session.user.name!}
                width={72}
                height={72}
            />
            <Logout />
        </div>
    );
}
