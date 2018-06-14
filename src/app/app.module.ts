import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './routers/app-routing.module';
import { AppBootstrapModule } from './app-bootstrap.module';
// import { HeaderModule } from './shared/header/header.module';
import { HeaderComponent } from './shared/header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    NgbModule.forRoot(),
    CollapseModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
