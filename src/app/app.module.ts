import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoogleSearchComponent } from './components/google-search/google-search.component';
import { SaveResultsComponent } from './components/save-results/save-results.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleSearchComponent,
    SaveResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
