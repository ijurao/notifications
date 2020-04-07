using Microsoft.Extensions.Configuration;
using PushNotification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PushNotification.Services
{
    public class FireBaseMessagingService: IPushNotificationService
    {
        private readonly IDbService dbService;
        private readonly string _serverKey;

        public FireBaseMessagingService(IConfiguration configuration, IDbService dbService)
        {
            _serverKey = configuration.GetSection("FCM:ServerKey").Value;
            this.dbService = dbService;
        }

        public async Task RegisterForPush(int username, string token)
        {
            dbService.SaveUser(new Models.User { UserId = username, Token = token });

            if (token != null)
            {
                await SendNotification(new PushNotificationItem()
                {
                    Title = "Notification Test",
                    Body = "Successfuly registered for push notifications"
                });
            }
        }

       

        public async Task SendNotification(PushNotificationItem notification)
        {
            var users = dbService.GetUsers();

            foreach (var token in users)
            {
                using (var fcm = new FireBaseSenderCore(_serverKey, token.UserId.ToString()))
                {
                    await fcm.SendAsync(token.Token,
                         new
                         {
                             notification = new
                             {
                                 title = notification.Title,
                                 body = notification.Body
                             },
                         });
                }
            }
        }
    }
}

