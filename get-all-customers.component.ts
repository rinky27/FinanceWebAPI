import { Component, OnInit } from '@angular/core';
import { CustomerinfoService } from 'src/app/module/customerinfo.service';
import { CustomerinfoModule } from 'src/app/module/customerinfo/customerinfo.module';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {
 
  svc : CustomerinfoService;
  custlist:CustomerinfoModule[];
  cust:CustomerinfoModule;
  constructor(svc : CustomerinfoService) {this.svc = svc;}
public collection:any=[];
  ngOnInit(): void {
    /*it will load the data on form loading*/
    this.svc.GetCustomers().subscribe((data:CustomerinfoModule[])=>{
      this.custlist = data;
      console.log(this.custlist);
    });
  }
  DeleteCustomer(item)
  {
 this.collection.splice(item.RegNumber,1)
 this.svc.DeleteCustomer(item).subscribe((result)=>{
   console.log("Data is Deleted",result)
 })
  }
  UpdateCustomer(item)
  {

    this.svc.UpdateCustomer(item.RegNumber, item).subscribe((result)=>{
      if(result==true)
      {
        alert("Update Successfull");
      }
      else
      {
        alert("Update Unsuccessfull");
      }
    });
  }

}



