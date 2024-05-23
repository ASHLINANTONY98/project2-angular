import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { Newcomp2Component } from './newcomp2/newcomp2.component';
import { Newcomp3Component } from './newcomp3/newcomp3.component';
import { Newcomp4Component } from './newcomp4/newcomp4.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    NewcompComponent,
    Newcomp2Component,
    Newcomp3Component,
    Newcomp4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
