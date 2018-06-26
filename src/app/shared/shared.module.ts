import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppBootstrapModule } from '../app-bootstrap.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpTokenInterceptor } from '../interceptors/http-token-interceptor'
import { TabComponent } from './components/tabs/tabs.component';
import { ShowAuthDirective } from '../directives/show-auth.directive';
import { ArticleInfoComponent, ArticlePreviewComponent, ArticleListComponent } from './components/article';
import { FollowButtonComponent, FavoriteButtonComponent } from './components/button';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppBootstrapModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    CollapseModule.forRoot(),

  ],
  declarations: [
    TabComponent,
    ShowAuthDirective,
    ArticleListComponent,
    ArticlePreviewComponent,
    ArticleInfoComponent,
    FollowButtonComponent,
    FavoriteButtonComponent
  ],
  exports: [
    TabComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ShowAuthDirective,
    ArticleListComponent,
    ArticlePreviewComponent,
    ArticleInfoComponent,
    FollowButtonComponent,
    FavoriteButtonComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
