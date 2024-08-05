import { auth } from "@/auth";
import { apiAuthPrefix, DEFAULT_LOGIN_REDIRECT, publicRoutes } from "./routes";

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = publicRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return new Response(null, { status: 204 });
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return new Response(null, { status: 204 });
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/", nextUrl));
    }

    return new Response(null, { status: 204 });
});

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
