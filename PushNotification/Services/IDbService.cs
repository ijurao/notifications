using PushNotification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PushNotification.Services
{
    public interface  IDbService
    {
        void SaveUser(User user);
        IEnumerable<User> GetUsers();
    }
}
