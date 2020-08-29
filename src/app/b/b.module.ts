import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { FormsModule } from "@angular/forms";
import { CustomerComponent } from '../customer/customer.component';

@NgModule({
  declarations: [ContactDetailsComponent,TooltipComponent,CustomerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ContactDetailsComponent,TooltipComponent,CustomerComponent]
})
export class BModule { }
