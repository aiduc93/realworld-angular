import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NoFoundComponent } from './no-found.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    component: NoFoundComponent
  }
]
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NoFoundComponent
  ]
})
export class NoFoundModule { }
