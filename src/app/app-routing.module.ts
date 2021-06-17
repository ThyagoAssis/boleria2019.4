import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { RoutersGuard } from './guards/routers.guard';

const routes: Routes = [
  {
    path: 'footer', loadChildren: () => import('./component/footer/footer.module').then( m => m.FooterModule), canActivate: [RoutersGuard]
  },
  {
    path: 'form/:id',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule), canActivate: [RoutersGuard]
  },
  {
    path: 'book/:id',
    loadChildren: () => import('./pages/book/book.module').then( m => m.BookPageModule), canActivate: [RoutersGuard]
  },
  {
    path: '',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule), canActivate: [LoginGuard]
  },
  {
    path: 'caduser',
    loadChildren: () => import('./login/caduser/caduser.module').then( m => m.CaduserPageModule), canActivate: [LoginGuard]
  }, 

]  

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
