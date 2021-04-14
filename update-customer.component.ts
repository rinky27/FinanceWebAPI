import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CustomerinfoService } from 'src/app/module/customerinfo.service';
import { CustomerinfoModule} from '../../module/customerinfo/customerinfo.module';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
 /* alert:boolean=false;
editCustomer=new FormGroup({
  CustName :new FormControl(''),
  PhoneNo : new FormControl(''),
  CustEmail :new FormControl(''),
  CustUsername : new FormControl(''),
  CustPassword :new FormControl(''),
  CustAddress:new FormControl(''),
  CardType:new FormControl(''),
  BankName:new FormControl(''),
  AccountNumber:new FormControl(''),
  IFSCCode:new FormControl('')
})
*/


RegNumber : number;
CustName : string;
PhoneNo : number;
CustEmail : string;
CustUsername : string;
CustPassword : string;
CustAddress:string;
CardType:string;
BankName:string;
AccountNumber:number;
IFSCCode:string;

  model : any = [];
  svc : CustomerinfoService;
  cust = new CustomerinfoModule();
  constructor(svc : CustomerinfoService,private router:ActivatedRoute) {
    this.svc = svc;
  }

  ngOnInit(): void {
  
   /* console.log(this.router.snapshot.params.id)
    this.svc.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
     this.editCustomer=new FormGroup({
        CustName :new FormControl(result['CustName']),
        PhoneNo : new FormControl(result['PhoneNo']),
        CustEmail :new FormControl(result['CustEmail']),
        CustUsername : new FormControl(result['CustUsername']),
        CustPassword :new FormControl(result['CustPassword']),
        CustAddress:new FormControl(result['CustAddress']),
        CardType:new FormControl(result['CardType']),
        BankName:new FormControl(result['BankName']),
        AccountNumber:new FormControl(result['AccountNumber']),
        IFSCCode:new FormControl(result['cname'])
    })
  })*/
}


/*UpdateCustomer(){
  this.svc.UpdateCustomer(this.router.snapshot.params.id,this.editCustomer.value).subscribe((result)=>{
    console.log(result,"Data Updated Successfully")
  })
}
*/

Update(updatecustomer : NgForm) : void
  {
    console.log(updatecustomer.value);
    this.cust.RegNumber =  updatecustomer.value.cid;
    this.cust.CustName =  updatecustomer.value.cname;
    this.cust.PhoneNo = updatecustomer.value.phone;
    this.cust.CustEmail = updatecustomer.value.custemail;
    this.cust.CustUsername=updatecustomer.value.custusername;
    this.cust.CustPassword=updatecustomer.value.password;
    this.cust.CustAddress = updatecustomer.value.custaddress;
    this.cust.CardType = updatecustomer.value.Card;
    this.cust.BankName = updatecustomer.value.Bank;
    this.cust.AccountNumber=updatecustomer.value.Accountno;
    this.cust.IFSCCode = updatecustomer.value.ifsc;
    //this.cust.ApprovalStatus = updatecustomer.value.ApprovalStatus;
    console.log(this.cust);
    this.svc.UpdateCustomer(this.cust.RegNumber, this.cust).subscribe((data:boolean)=>{
      if(data==true)
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
