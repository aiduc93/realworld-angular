import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthService]
  }
]
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
