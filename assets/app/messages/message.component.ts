import { Component } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
     styles: [`
    .author {
        display: inline-block;
        font-style: italic;
        font-size: 1.6rem;
        width: 80%;
    }
    .config {
        display: inline-block;
        text-align: right;
        font-size: 1.6rem;
        width: 19%;
    }
    `]
})

export class MessageComponent {

}