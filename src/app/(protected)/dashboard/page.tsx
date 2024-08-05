import { auth } from "@/auth";

export default async function DashboardPage() {
    const session = await auth();
    return (
        <main className="container">
            Protected page : {JSON.stringify(session)}
        </main>
    );
}
