import { Component } from '@angular/core';

interface Customer {
    name: string;
    phone: string;
    email: string;
}

@Component({
    selector: 'app-customer-page',
    templateUrl: './customer-page.component.html',
    styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent {
    showForm = false;

    customers: Array<Customer> = [
        {
            name: "Matilda",
            phone: "039990000",
            email: "matilda@email.com"
        }, {
            name: "mina",
            phone: "025555555",
            email: "mina@gmail.com",
        },
        {
            name: "oliver",
            phone: "025550000",
            email: "twist@gmail.com"
        }
    ];

    customerTotal(): number {
        return this.customers ? this.customers.length : 0;
    }

    toggleForm() {
        this.showForm = !this.showForm;
    }
}
