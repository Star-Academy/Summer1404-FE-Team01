import { Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: "dashboard"
    },
    {
        title: 'Dashboard',
        path: 'dashboard',
        loadChildren: () => import("./features/dashboard/dashboard.module").then(m => m.DashboardModule),
    }

]

export default routes;