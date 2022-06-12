import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer!: Customer;
  customerIdNumber!: String;

  constructor(
    private customerService:CustomerServiceService, private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.customer = new Customer();
    this.customerIdNumber= this.route.snapshot.params['customerIdNumber'];
    

    this.customerService.getCustomerById(this.customerIdNumber).subscribe(data => {
      
      this.customer = data;
    }, error => console.log(error));
  }

  updateCustomer(){
    this.customerService.updateCustomer(this.customer,this.customerIdNumber).subscribe(
      data => {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@",this.customer)
      }, error => console.log(error));
    this.router.navigate(['/home']);
  }
 

}
