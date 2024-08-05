/**
 * An array of routes that are accessible to the public
 * These routes do not require authentification
 * @types {string[]}
 */
export const publicRoutes = ["/", "/pricing", "/contact", "/signup"];

/**
 * An array of routes that are used for authentification
 * These routes will redirect logged in users to /dashboard
 * @types {string[]}
 */
export const authRoutes = ["/dashboard"];

/**
 * The prefix for API authentification routes
 * Routes that start with this prefix are used for API
 * authentification purposes
 * @types {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after loggin in
 * @types {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
