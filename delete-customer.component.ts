import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerinfoService } from 'src/app/module/customerinfo.service';
@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  model : any = [];
  svc : CustomerinfoService;
  custid: number;
  constructor(svc : CustomerinfoService) {this.svc = svc;}

  ngOnInit(): void {
  }

  Delete(DeleteForm : NgForm) : void
  {
    this.custid = DeleteForm.value.cid;
    this.svc.DeleteCustomer(this.custid).subscribe((data : boolean)=>{
      if(data == true)
      {
        alert('Record Deleted Successfully');
      }
    });
  }
}




  