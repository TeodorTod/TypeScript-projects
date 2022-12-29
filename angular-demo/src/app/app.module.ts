import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AllusersComponent } from './allusers/allusers.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
;


@NgModule({
  declarations: [
    AppComponent,
    AllusersComponent,
    UserdetailComponent,
   
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
