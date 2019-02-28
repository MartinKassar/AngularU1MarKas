import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserslistComponent } from './userslist/userslist.component';
import { EditusersComponent } from './editusers/editusers.component';
import { UserslistitemComponent } from './userslistitem/userslistitem.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserslistComponent,
    EditusersComponent,
    UserslistitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
