Before going into detail about the implementation, I am going to tell you a little about what technology for the use of messaging I have used here.
I chose Firebase cloud Messaging (FCM) as a provider for a simple reason: it is capable of receiving notifications and sending them regardless of the platform the user is using. In other words, if the user receives notifications on their android, iOS or web browser, it is something that FCM will take care of.

The basic flow of notifications is:

1) Client must agree to subscribe to notifications
2) Once you accept, FCN will grant you a registration token which we MUST register in our backend for subsequent notifications.
3) If the token expires, FCM will notify us.

When working with push notifications, it is very important that we have our clients well implemented, whether they are native or similar applications. For that, FCM provides us with a pair of unique keys and values ​​that must be correctly configured in the client as in the backend part (ServerKey, ApiKey and SenderId).

For this test I have created a simple FCM project which gave me these credentials. Such keys were entered in the JSON configuration file of the application for later use when sending notifications (backend). This configuration must also be implemented in a "worker" type service in the frontend (firebase-messaging-sw.js file in the frontend application folder)

The project has two POST endpoints:

1) The first is used so that once the user has accepted to receive notifications, the token is registered in a persistent data layer.

2) The second is used by the interface that the superadmin will access to send notifications, the webservice will be in charge of sending all the tokens that we have previously registered.

To test this API you can configure clients you want, in my case configure an angular project (ClientApp folder) that is in charge of receiving notifications, here is also a simple interface where the superadmin can access for the massive sending of notifications. 

Configuring the client is a task that I have not been asked, therefore I can have its failures at runtime, but the code shows how the mechanisms to send and receive notifications were implemented. I suggest taking a look at the file so that we can fully understand the concept of sending and receiving push notifications.
