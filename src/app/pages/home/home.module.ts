import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TabComponent } from '../../shared/tabs/tabs.component';
import { HomeAuthService } from '../../services/home-auth.service';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      isAuthenticated: HomeAuthService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    TabComponent
  ],
  providers: [
    HomeAuthService
  ]
})
export class HomeModule { }
