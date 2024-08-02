// app/actions/index.ts
"use server";

import { signIn, signOut } from "../../auth";

export async function doSocialLogin(formData: FormData) {
    const action = formData.get("action") as string;
    await signIn(action, { redirectTo: "/home" });
}

export async function doLogout() {
    await signOut({ redirectTo: "/" });
}
