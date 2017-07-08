// COPIED FROM app.entry-list.component.ts; names changed accordingly

import { Component, Input } from '@angular/core'; //import the Component decorator from the angular core
import { Entry } from '../shared/entry.model';

@Component({
    selector: 'app-entry', //use all lowercase letters for selector and use kebab case
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']

})

// create and export component class
export class EntryComponent {
    @Input() entry: Entry;
    // assigning the Entry type to the entry property
    onCommentAdded(comment: {name: string; comment: string;}) { //setting the type defition of our comment. Also called inline definition
        this.entry.comments.push(comment)
    }
}