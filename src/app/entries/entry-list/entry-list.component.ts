import { Component, OnInit } from '@angular/core'; //import the Component decorator from the angular core
import { EntryService } from '../shared/entry.service'; // connecting the EntryService to the EntryListComponent
import { Entry } from '../shared/entry.model';

@Component({
    selector: 'app-entry-list', //use all lowercase letters for selector and use kebab case
    templateUrl: 'entry-list.component.html',
    styleUrls: ['entry-list.component.css']

})

// create and export component class // we say "implements OnInit" when we want the OnInit interface
export class EntryListComponent implements OnInit {
    entries: Entry[];
    constructor(private entryService: EntryService) {
// make the injected service private or public so it gets added to the prototype and can be available on other methods inside the component
    }
    ngOnInit() {

    }
}