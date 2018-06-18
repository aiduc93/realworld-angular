import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { AppRoutingModule } from './routers/app-routing.module';
import { AppBootstrapModule } from './app-bootstrap.module';
import { HeaderComponent } from './shared/header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './pages/auth/auth.module';
import {  } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    HomeModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
