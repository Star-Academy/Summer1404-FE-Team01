import { Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: "book"
    },
    {
        title: 'Dashboard',
        path: 'book',
        loadChildren: () => import("./features/dashboard/dashboard.module").then(m => m.DashboardModule),
    }

]

export default routes;
