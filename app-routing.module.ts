import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {RegistrationComponent } from './components/registration/registration.component';
import{GetCustomerByIdComponent}from './components/get-customer-by-id/get-customer-by-id.component';
import{ GetAllCustomersComponent }from'./components/get-all-customers/get-all-customers.component';
import{AdminSelectComponent}from'./components/admin-select/admin-select.component';
import{UserLoginComponent}from'./components/user-login/user-login.component';
import{ActivateUserComponent}from'./components/activate-user/activate-user.component';
import{UpdateCustomerComponent}from'./components/update-customer/update-customer.component';
import{DeleteCustomerComponent}from'./components/delete-customer/delete-customer.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:"full"},
  {path:'Home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegistrationComponent},
  {path:'Admin',component:AdminComponent},
  {path:'GetCustomerById',component:GetCustomerByIdComponent},
  {path:'GetAllCustomers',component:GetAllCustomersComponent},
  {path:'AdminSelect',component:AdminSelectComponent},
  {path:'UserLogin',component:UserLoginComponent},
  {path:'ActivateUser',component:ActivateUserComponent},
  {path:'UpdateCustomer/:id',component:UpdateCustomerComponent},
  {path:'DeleteCustomer',component:DeleteCustomerComponent},
  {path:'UpdateCustomer',component:UpdateCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
