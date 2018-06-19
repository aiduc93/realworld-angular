import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ArticleComponent } from './article.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    canActivate: [AuthService]
  }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
