import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SettingComponent } from './setting.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    canActivate: [AuthService]
  }
]
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingComponent]
})
export class SettingModule { }
