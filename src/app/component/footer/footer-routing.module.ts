import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FooterComponent } from "./footer.component";

const routes: Routes = [
    {
        path: 'footer',
        component: FooterComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
            },
            {
                path: 'receitas',
                loadChildren: () => import('../../pages/receitas/receitas.module').then(m => m.ReceitasPageModule)
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