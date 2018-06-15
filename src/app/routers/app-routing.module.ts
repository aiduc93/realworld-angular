import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        loadChildren: '../pages/signin/signin.module#SigninModule'
    },
    {
        path: 'signup',
        loadChildren: '../pages/signup/signup.module#SignupModule'
    },
    {
        path: '**',
        loadChildren: '../pages/no-found/no-found.module#NoFoundModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
   
    exports: [RouterModule]
})
export class AppRoutingModule { }