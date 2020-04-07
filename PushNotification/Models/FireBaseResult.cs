using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PushNotification.Models
{
    public class FireBaseResult
    {
        [JsonProperty("message_id")]
        public string MessageId { get; set; }

        public string Error { get; set; }
    }
}
