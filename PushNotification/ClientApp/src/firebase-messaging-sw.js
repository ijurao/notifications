importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyAByIB8HLm5c52R7N4GhC1TlYYx58BfCkA",
    authDomain: "testpushnotifications-621d7.firebaseapp.com",
    databaseURL: "https://testpushnotifications-621d7.firebaseio.com",
    projectId: "testpushnotifications-621d7",
    storageBucket: "testpushnotifications-621d7.appspot.com", 
    messagingSenderId: "1059835257954",
    appId: "1:1059835257954:web:f345bdb43811ea76e69d3b",
    measurementId: "G-LP1GNSE54K"
});
const messaging = firebase.messaging();
