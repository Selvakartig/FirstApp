import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CurrencySelectComponent } from './currency-select/currency-select.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { AModule } from './a/a.module';
import { BModule } from './b/b.module';
import { FormsModule } from "@angular/forms";
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from "@angular/common/http";
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AModule,
    BModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
