import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  baseUrl = environment.API_ENDPOINT;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCustomers(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl + 'all/customers');
  }

  createCustomer(custObj: any): Observable<any> {
    return this.httpClient.post<any>
      (this.baseUrl + 'customer', custObj);
  }

  getCustomerById(idNumber: any): Observable<any> {
    return this.httpClient.get<any>
      (this.baseUrl + 'get/customer/'+ idNumber);
  }

  createAccount(accountObj: any,customerIdNumber: any): Observable<any> {
    return this.httpClient.post<any>
      (this.baseUrl + 'account/'+customerIdNumber, accountObj);
  }
}
