import { createNEMO } from "@rescale/nemo";
import { checkRouteMiddleware } from "./lib/middlewares/checkRoute.global";
import { authenticatedMiddleware } from "./lib/middlewares/authenticated";

const adminPrefix = "/" + process.env.ADMIN_PREFIX || "/dashboard";

const globalMiddlewares = {
  before: [checkRouteMiddleware],
};

const middlewares = {
  [adminPrefix]: authenticatedMiddleware,
};

export const middleware = createNEMO(middlewares, globalMiddlewares);

export const config = {
  matcher: ["/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)"],
};
