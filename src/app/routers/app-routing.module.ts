import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'editor',
        loadChildren: '../pages/article/article.module#ArticleModule'
    },
    {
        path: 'setting',
        loadChildren: '../pages/setting/setting.module#SettingModule'
    },
    {
        path: 'profile',
        loadChildren: '../pages/profile/profile.module#ProfileModule'
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