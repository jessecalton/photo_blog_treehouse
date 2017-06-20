import { Component } from '@angular/core';

@Component({
    selector: 'app-root', // inserts component into placeholder element
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'] // pass this in as an array bc it can take multiple style sheets
    // Deleted template and styles properties and replaced them with URLs
    // template: '<h2>Hello World!</h2>',
    // styles: [
    //     `
    //     h2 {
    //         font-family: sans-serif;
    //         font-size: 1.2em;
    //     }
    //     `
    //]
})

export class AppComponent {
    emoji = ['🎉', '😍', '😜', '👍']; // setting the initial value at the property level
    // no need for a constructor if we do it this way
    activeEmoji: string;
    // need to declare it as a string so only strings can be assigned to activeEmoji
    
    changeEmoji() {
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    } // random emoji selector


    // emoji: string[]; // defining the type of the emoji property
    // constructor(){
    //     this.emoji =['🎉', '😍', '😜', '👍'];
    // }
}