using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PushNotification.Models;
using PushNotification.Services;

namespace PushNotification.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PushNotificationsController : ControllerBase
    {
       
      
            private readonly IPushNotificationService pushNotificationService;

            public PushNotificationsController(IPushNotificationService pushNotificationService)
            {
                this.pushNotificationService = pushNotificationService;
            }

            [HttpPost]
            [Route("register")]
            public async Task Register(User user)
            {
                await pushNotificationService.RegisterForPush(1, user.Token);
            }

            [HttpPost]
            [Route("send")]
            public async Task Send(PushNotificationItem pushNotificationItem)
            {
                await pushNotificationService.SendNotification(pushNotificationItem);
            }
        }
    
}