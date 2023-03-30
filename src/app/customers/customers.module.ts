import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        CustomerPageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class CustomersModule { }
