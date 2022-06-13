import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Account } from 'src/app/models/account';
import {Customer} from 'src/app/models/customer';
import { AccountCreateService } from 'src/app/services/account-create.service';
import {CustomerServiceService} from 'src/app/services/customer-service.service';
import { Router } from '@angular/router';

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

  @Output() getId = new EventEmitter<any>();

  constructor(
    private customerService: CustomerServiceService, private accountService: AccountCreateService,
    private router: Router
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

  createCustomerAccount(customerIdNumber: any){
    console.log("*********************", customerIdNumber);
    
    this.router.navigate(['account', customerIdNumber]);

  }
    
    
  
}
