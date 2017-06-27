// the root module of our application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component'; // importing AppComponents into AppModule
import { EntryListComponent, EntryComponent, EntryService } from './entries';

// exporting the AppModule class so we can use it in our main.ts file
@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [ EntryService ],
    declarations: [AppComponent, 
    EntryComponent,
    EntryListComponent], // registering all our application's components
    bootstrap: [AppComponent] // start AppComponent at launch
})
export class AppModule {

}