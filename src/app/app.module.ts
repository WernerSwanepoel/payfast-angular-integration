import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponentComponent } from './payment-component/payment-component.component';
import { PaymentEntranceComponentComponent } from './payment-entrance-component/payment-entrance-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponentComponent,
    PaymentEntranceComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
