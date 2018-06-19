import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
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
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AuthComponent],
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule { }
