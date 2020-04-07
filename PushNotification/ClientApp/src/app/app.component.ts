import { Component } from '@angular/core';
import { MessagingService } from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'psuh';
    message;
    constructor(private messagingService: MessagingService) { }
    ngOnInit() {
        this.messagingService.getPermission()
        this.messagingService.receiveMessage()
        this.message = this.messagingService.currentMessage
    }

}
