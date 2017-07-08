import { Injectable } from '@angular/core';
import { Entry } from './entry.model';
import { Http } from '@angular/http';

@Injectable()
export class EntryService {
    // our getEntries() method allows us to use Angular's HTTP service to fetch data from the server
    // it will return a promise that is an array of entries

    // We need a constructor function so we can inject the HTTP Service
    constructor(private http: Http) {

    }
    // use a colon after the parentheses and type the return type; in our case, it's an array entries
    
    addComment(entryId: number, comment: { name: string; comment: string; }) {
        return this.http.post(`/app/entries/${entryId}/comments`, comment)
            .toPromise();
    }

    getEntries(): Promise<Entry[]> { 
        return this.http.get('/app/entries')
        .toPromise()
        .then(response => response.json().data as Entry[]);
    }
    // the 'as' operator sets the type of the return value
}