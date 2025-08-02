import { createNEMO } from "@rescale/nemo";
import { authMiddleware } from "./lib/middlewares/auth";
import { checkRouteMiddleware } from "./lib/middlewares/checkRoute.global";

const adminPrefix = "/" + process.env.ADMIN_PREFIX || "/dashboard";

const globalMiddlewares = {
  before: [checkRouteMiddleware],
};

const middlewares = {
  // [adminPrefix]: authMiddleware,
};

export const middleware = createNEMO(middlewares, globalMiddlewares);

export const config = {
  matcher: ["/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)"],
};
