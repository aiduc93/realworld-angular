import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {  Tab } from '../../shared/tabs/tab.component';
import {  TabsComponent } from '../../shared/tabs/tabs.component';
const routes: Routes = [
  {
    path: 'index',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    Tab,
    TabsComponent
  ]
})
export class HomeModule { }
