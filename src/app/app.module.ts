// the root module of our application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component' // importing AppComponents into AppModule

// exporting the AppModule class so we can use it in our main.ts file
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent], // registering all our application's components
    bootstrap: [AppComponent] // start AppComponent at launch
})
export class AppModule {

}