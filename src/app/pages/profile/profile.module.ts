import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProfileResolveService } from '../../services/profile-resolve.service';
const routes: Routes = [
  {
    path: ':username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolveService
    },
    children: [
      {
        path: '',
        component: ProfileComponent
      },
      {
        path: 'favorites',
        component: ProfileComponent
      }
    ]
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
