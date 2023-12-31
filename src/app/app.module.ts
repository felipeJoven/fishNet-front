import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { InventarioAliComponent } from './views/inventario-ali/inventario-ali.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { LoginComponent } from './auth/login/login.component';
import { Interceptor } from './interceptor/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HomeComponent,
    SidenavComponent,
    WelcomeComponent,
    InventarioAliComponent,
    SublevelMenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
