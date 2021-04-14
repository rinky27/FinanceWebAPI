import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import {CustomerinfoModule } from '../module/customerinfo/customerinfo.module';
import { Observable } from 'rxjs/internal/observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerinfoService {
  cust : CustomerinfoModule;
  http : HttpClient;
  url : string = "http://localhost:56054/api/AdminAPI"
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http:HttpClient) {this.http=http}
  GetCustomers() : Observable<CustomerinfoModule[]>
  {
    return this.http.get<CustomerinfoModule[]>(this.url + "/" + "GetAllCustomers");
  }

  GetCustomerById(id : number) : Observable<CustomerinfoModule>
  {
    return this.http.get<CustomerinfoModule>(this.url + "/" + "GetCustomerById" + "/" + id);
  }

  AdminLogin(name : string, password : string) : Observable<string>
  {
    return this.http.get<string>(this.url + "/" + "AdminLogin" + "/" + name + "/" + password);
  }
  /*
  UpdateCustomer(id,data)
  {
    return this.http.put('$(this.url)/${id}',data) ;
  }

  DeleteCustomer(id:number) 
  {
    return this.http.delete('$(this.url)/${id}') ;
  }
*/
UpdateCustomer(id : number, emp : CustomerinfoModule) : Observable<boolean>
{
  return this.http.put<boolean>(this.url + "/" + "UpdateCustomer" + "/" + id, emp, this.httpOptions);
}

DeleteCustomer(id : number) : Observable<boolean>
{
  return this.http.delete<boolean>(this.url + "/" + "DeleteCustomer" + "/" + id);
}

  getCurrentData(id:number)
  {
    return this.http.get(this.url + "/" + "GetCustomerById" + "/" + id) ;
  }
}






  

  
  