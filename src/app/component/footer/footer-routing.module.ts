import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FooterComponent } from "./footer.component";

const routes: Routes = [
    {
        path: '',
        component: FooterComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
            },
            {
                path: 'about',
                loadChildren: () => import('../../pages/about/about.module').then(m => m.AboutPageModule)
            },
            {
                path: '',
                redirectTo: '/footer/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/footer/home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FooterComponentRoutingModule { }