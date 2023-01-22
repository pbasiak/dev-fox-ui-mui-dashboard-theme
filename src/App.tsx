import {
  RouterProvider,
  createReactRouter,
  createRouteConfig
} from "@tanstack/react-router";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppTheme } from './theme/theme';
import { Dashboard } from './pages/dashboard/Dashboard';

const rootRoute = createRouteConfig(),

  indexRoute = rootRoute.createRoute({
    "path": "/",
    "component": Dashboard
  }),

  aboutRoute = rootRoute.createRoute({
    "path": "/about",
    "component": Dashboard
  }),

  routeConfig = rootRoute.addChildren([
    indexRoute,
    aboutRoute
  ]),

  router = createReactRouter({routeConfig});

export function App () {
  return <ThemeProvider theme={AppTheme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>;
}

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router
  }
}
