using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using FinanceManagementSystem.Models;

namespace FinanceManagementSystem.Controllers
{

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Route("api/AdminAPI")]
    public class AdminAPIController : ApiController
    {
        FinanceEntities db = new FinanceEntities();
        [Route("api/AdminAPI/GetAllCustomers")]
        [HttpGet]

        public IEnumerable<Customer> Get()
        {
            try
            {
                return db.Customers.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        [Route("api/AdminAPI/GetCustomerByID/{id}")]

        [HttpGet]
        public Customer Get(int id)
        {
            try
            {
                var data = db.Customers.Where(x => x.RegNumber == id).SingleOrDefault();
                if (data == null)
                    throw new Exception("Invalid RegNumber");
                else
                    return data;
            }
            catch (Exception ex)
            {
                throw ex;

            }

        }
        [Route("api/AdminAPI/AdminLogin/{name}/{pwd}")]

        [HttpGet]
        public string Get(string name, string pwd)
        {
            string result = "";
            try
            {
                var data = db.AdminCredentials.Where(x => x.AdminUsername == name && x.AdminPassword == pwd);
                if (data.Count() == 0)
                    result = "Inavalid credentials";
                else
                    result = "Login Successful";
            }
            catch (Exception e)
            {
                throw e;

            }
            return result;
        }
        [Route("api/AdminAPI/UpdateCustomer/{id}")]
        [HttpPut]
        public string Put(int id, [FromBody] Customer newcust)
        {
            string result = "";
            try
            {
                var olddata = db.Customers.Where(x => x.RegNumber == id).SingleOrDefault();
                if (olddata == null)
                    throw new Exception("Invalid Id");
                else
                {
                   // olddata.RegNumber = newcust.RegNumber;
                    olddata.CustName = newcust.CustName;
                    olddata.PhoneNo = newcust.PhoneNo;
                    olddata.CustEmail = newcust.CustEmail;
                    olddata.CustUsername = newcust.CustUsername;
                    olddata.CustPassword = newcust.CustPassword;
                    olddata.CustAddress = newcust.CustAddress;
                    olddata.CardType = newcust.CardType;
                    olddata.BankName = newcust.BankName;
                    olddata.AccountNumber = newcust.AccountNumber;
                    olddata.IFSCCode = newcust.IFSCCode;
                    //  olddata.ApprovalStatus = newcust.ApprovalStatus; 

                    var res = db.SaveChanges();
                    if (res > 0)
                        result = "Update Successful";
                    else
                        result = "Not updated";

                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return result;
        }
        [Route("api/AdminAPI/DeleteCustomer/{id}")]
         [HttpDelete]
          public bool Delete(int id)
          {
              try
              {

                  var del1 = db.Customers.Where(x => x.RegNumber == id).SingleOrDefault();
                  var del2 = db.OrderDetails.Where(x => x.RegNumber == id).SingleOrDefault();
                  var del3 = db.EMICards.Where(x => x.RegNumber == id).SingleOrDefault();
             if (del1 == null)
                    throw new Exception("Id cannot be null");

                else
                {
                    db.Customers.Remove(del1);
                    db.OrderDetails.Remove(del2);
                    db.EMICards.Remove(del3);
                    var res = db.SaveChanges();
                    if (res > 0)
                        return true;
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
            return false;
        }
    }

}
   