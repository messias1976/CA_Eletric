import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // Defina aqui as rotas que podem ser acessadas sem login
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};