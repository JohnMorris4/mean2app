import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageComponent } from './messages/message.component';
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}