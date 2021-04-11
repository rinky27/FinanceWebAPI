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
                var data = db.AdminCredentials.Where(x => x.AdminUsername == name && x.AdminPassword ==pwd);
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
    
    }
    }