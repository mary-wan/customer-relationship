import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountCreateService {

  baseUrl = environment.API_ENDPOINT;

  constructor(
    private httpClient: HttpClient
  ) { }

  createAccount(accountObj: any,customerIdNumber: any): Observable<any> {
    return this.httpClient.post<any>
      (this.baseUrl + 'account/'+customerIdNumber, accountObj);
  }

  getCustomerAccounts(customerIdNumber: any): Observable<any> {
    return this.httpClient.get<any>
      (this.baseUrl + 'customer/accounts/'+ customerIdNumber);
  }
}
