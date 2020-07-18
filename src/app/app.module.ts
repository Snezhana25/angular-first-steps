import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLoginComponent } from './components/my-login/my-login.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyTableComponent } from './components/my-table/my-table.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MyLoginComponent,
    MyHomeComponent,
    MyTableComponent,
    MyHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
