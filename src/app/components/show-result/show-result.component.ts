import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OwnGoogleSearchComponent } from '../own-google-search/own-google-search.component';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements AfterViewInit {

  items = [];

  constructor() { }

  ngAfterViewInit(): void {
  }

  public showResults(data: any): any {
    this.items = data.items;
  }


}
