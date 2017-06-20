// Import global stylesheet
import './styles/main.css';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// platform browser dynamic helps us with debugging. Change it back to 
// platformBrowser when you're ready to deploy
import {AppModule} from './app/app.module';

//bootstrap our AppModule and attach it to our web page
platformBrowserDynamic().bootstrapModule(AppModule)