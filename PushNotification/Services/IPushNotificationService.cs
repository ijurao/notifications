using PushNotification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PushNotification.Services
{
    public interface IPushNotificationService
    {
        
            Task SendNotification(PushNotificationItem notification);
            Task RegisterForPush(int userId, string token);
        
    }
}
