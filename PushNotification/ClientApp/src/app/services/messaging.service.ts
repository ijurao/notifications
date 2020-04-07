import { Injectable, Inject } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'
import { UserToken } from '../Models/User'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import * as firebase from 'firebase/app'
import '@firebase/messaging';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { IPushNotification } from '../Models/IPushNotification';

@Injectable()
export class MessagingService {
    currentMessage = new BehaviorSubject(null);
    mess = firebase.messaging()
    apiUrl: string
    constructor(private http: HttpClient, private angularFireMessaging: AngularFireMessaging, @Inject('BASE_URL') private baseUrl: string, private aut: AngularFireAuth,

   private db: AngularFireDatabase) {
        this.apiUrl = baseUrl + "pushnotifications";
    
        
    }

    getPermission() {


        this.mess.requestPermission()
            .then(() => {
                console.log("token otrogadp" )
                return this.mess.getToken();
            })

            .then(token => {
                console.log(token)
                this.updateToken(token)
                this.RegisterToken(token)
            })
    }
    private updateToken(token) {

        this.aut.authState.subscribe(user => {
            if (!user) return;

            const data = { [user.uid]: token }
            this.db.object("fcmTokens/").update(data)
        })

    }
    requestPermission() {
        this.angularFireMessaging.requestToken.subscribe(
            (token) => {
                console.log("Received Token" + token);
                this.RegisterToken(token)
            },
            (err) => {
                console.error('Unable to get permission to notify.', err);
            }
        );
    }
    RegisterToken(token: string) {

        
        const c = <UserToken><unknown>{
            token: token,
            UserId: 1
        }
      //  console.log(this.apiUrl + "/register")
        return this.http.post(this.apiUrl + "/register", c).subscribe(res => console.log(res), error=> console.log(error));
    }
    receiveMessage() {
        this.mess.onMessage((payload) => {

            console.log("received" + payload)
        });



            
    }

    sendNotification(notification: IPushNotification) {

        return this.http.post(this.apiUrl + "/send", notification).subscribe(res => console.log(res), error => console.log(error));
    }

}

