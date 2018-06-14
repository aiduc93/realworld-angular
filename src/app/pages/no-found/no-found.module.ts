import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NoFoundComponent
  ]
})
export class NoFoundModule { }
