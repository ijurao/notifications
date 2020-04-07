import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { MessagingService } from '../services/messaging.service';
import { IPushNotification } from '../Models/IPushNotification';

@Component({
  selector: 'app-push-sender',
  templateUrl: './push-sender.component.html',
  styleUrls: ['./push-sender.component.css']
})
export class PushSenderComponent implements OnInit {


    formGroup: any;

    constructor(private fb: FormBuilder, private messaging: MessagingService) { }

    ngOnInit(): void {

        this.formGroup = this.fb.group({
            title: new FormControl('', [Validators.required]),
            body: new FormControl('', [Validators.required])
           

        });
  }

    save() {

        let notification: IPushNotification = Object.assign({}, this.formGroup.value);
        this.messaging.sendNotification(notification);
    }
}
