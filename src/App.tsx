import {
  Link,
  Outlet,
  RouterProvider,
  createReactRouter,
  createRouteConfig
} from "@tanstack/react-router";

const rootRoute = createRouteConfig({
    "component": () => <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
    </>

  }),

  indexRoute = rootRoute.createRoute({
    "path": "/",
    "component": Index
  }),

  aboutRoute = rootRoute.createRoute({
    "path": "/about",
    "component": About
  }),

  routeConfig = rootRoute.addChildren([
    indexRoute,
    aboutRoute
  ]),

  router = createReactRouter({routeConfig});

export function App () {
  return <RouterProvider router={router} />;
}

function Index () {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}

function About () {
  return <div>Hello from About!</div>;
}


declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router
  }
}
