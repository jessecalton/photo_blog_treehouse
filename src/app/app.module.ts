// the root module of our application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; // this so all of Angular can use the package
import { AppComponent } from './app.component'; // importing AppComponents into AppModule
import { EntryListComponent, EntryComponent, EntryService } from './entries';
import { InMemoryEntryService } from './backend'; // from the backend file we created

// exporting the AppModule class so we can use it in our main.ts file
@NgModule({
    // imports array is where all additional Angular modules are referenced
    // rendering the modules in the imports array allows us to use them all within our application
    // imports array only contains Angular modules, not JavaScript ones
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService)
    ],
    providers: [ EntryService ],
    declarations: [AppComponent, 
    EntryComponent,
    EntryListComponent], // registering all our application's components
    bootstrap: [AppComponent] // start AppComponent at launch
})
export class AppModule {

}