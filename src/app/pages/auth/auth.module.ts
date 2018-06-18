import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NoAuthGuard } from '../../services/no-auth.service';
const routes: Routes = [
  {
    path: 'signin',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'signup',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [AuthComponent],
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule { }
