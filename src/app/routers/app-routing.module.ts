import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
   
    {
        path: 'index',
        loadChildren: '../pages/home/home.module#HomeModule'
    },
    {
        path: '**',
        loadChildren: '../pages/no-found/no-found.module#NoFoundModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
   
    exports: [RouterModule]
})
export class AppRoutingModule { }