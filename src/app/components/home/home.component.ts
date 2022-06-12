import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customers:any[]=[];
  customerId!: String;
  customer: Customer = new Customer();


  constructor(
    private customerService:CustomerServiceService
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getAllCustomers().subscribe(
      (res: any) => {
        // console.log(res);
        this.customers = res;
        console.log(res);
        

      },
      (error: any) => {

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

}
