import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OwnGoogleSearchComponent } from './components/own-google-search/own-google-search.component';
import { FormsModule } from '@angular/forms';
import { ShowResultComponent } from './components/show-result/show-result.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnGoogleSearchComponent,
    ShowResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
