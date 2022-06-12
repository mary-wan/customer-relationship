import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountCreateService } from 'src/app/services/account-create.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: any[] = [];
  account: Account = new Account();
  customerIdNumber!: String;

  constructor(private accountService: AccountCreateService,private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.customerIdNumber= this.route.snapshot.params['customerIdNumber'];

    console.log("!!!!!!!!!!!!!",this.customerIdNumber);
    
  }

  createAccount(): void {
    this.accountService.createAccount(this.account, this.customerIdNumber).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {

      },
     
    )

  }

}
