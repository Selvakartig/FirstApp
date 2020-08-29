import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../list-item/list-item.component';
import { CurrencySelectComponent } from '../currency-select/currency-select.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ListItemComponent,CurrencySelectComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[ListItemComponent,CurrencySelectComponent]
})
export class AModule { }
