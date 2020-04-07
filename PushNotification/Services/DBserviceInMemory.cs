using PushNotification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PushNotification.Services
{
    public class DBserviceInMemory: IDbService
    {

        private List<User> users;
        public DBserviceInMemory()
        {
            this.users = new List<User>();
         
        }
        public IEnumerable<User> GetUsers()
        {
            return this.users;
        }

        public void SaveUser(User user)
        {
            this.users.Add(user);
        }

     
    }
}
