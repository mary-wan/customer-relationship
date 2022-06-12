import {Component, OnInit} from '@angular/core';
import { Account } from 'src/app/models/account';
import {Customer} from 'src/app/models/customer';
import { AccountCreateService } from 'src/app/services/account-create.service';
import {CustomerServiceService} from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  accounts: any[] = [];
  account: Account = new Account();
  customerIdNumber:any

  customers: any[] = [];
  customer: Customer = new Customer();
  customerId!: String;

  constructor(
    private customerService: CustomerServiceService, private accountService: AccountCreateService
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getAllCustomers().subscribe(
      (res: any) => {
        this.customers = res;
        console.log(res);

      },
      (error: any) => {

      }
    )
  }

  createCustomer(): void {
    this.customerService.createCustomer(this.customer).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {

      },
      () => {
        this.getCustomers();
      }
    )

  }

  getCustomerById(): void {
    this.customerService.getCustomerById(this.customerId).subscribe(
      (res: any) => {
        this.customer = res;
        console.log(res);

      },
      (error: any) => {

      }
    )

  }

  createAccount(): void {
    this.customerService.createAccount(this.account, this.customerIdNumber).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {

      },
      () => {
        this.getCustomers();
      }
    )

  }

  onClick(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log("****************************", value);

    this.customerService.createAccount(this.account, value).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {

      },
      () => {
        this.getCustomers();
      }
    )


    
    
  }
}
