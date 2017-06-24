// COPIED FROM app.entry-list.component.ts; names changed accordingly

import {Component} from '@angular/core'; //import the Component decorator from the angular core

@Component({
    selector: 'app-entry', //use all lowercase letters for selector and use kebab case
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']

})

// create and export component class
export class EntryComponent {
    title: string = 'My First Photo';
    photo: string = 'http://placehold.it/800x500?text=Angular Basics';
    description: string = 'A Description of My First Photo';
    comments: any[] = [
        {name: "John", comment: "A comment"},
        {name: "Jim", comment: "A comment"},
        {name: "Jen", comment: "A comment"}
    ]

}