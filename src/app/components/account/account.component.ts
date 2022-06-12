import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountCreateService } from 'src/app/services/account-create.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: any[] = [];
  account: Account = new Account();

  constructor(private accountService: AccountCreateService
    ) { }

  ngOnInit(): void {
  }

}
