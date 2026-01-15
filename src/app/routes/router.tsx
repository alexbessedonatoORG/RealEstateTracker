import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { MainLayout } from '../../common/components/MainLayout/MainLayout';
import { Dashboard } from '../../pages/Dashboard/Dashboard';

export const rootRoute = createRootRoute({
    component: MainLayout,
})

export const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Dashboard,
});

const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({ routeTree });
