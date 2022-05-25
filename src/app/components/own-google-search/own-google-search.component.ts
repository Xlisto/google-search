import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ShowResultComponent } from '../show-result/show-result.component';

@Component({
  selector: 'app-own-google-search',
  templateUrl: './own-google-search.component.html',
  styleUrls: ['./own-google-search.component.css']
})
export class OwnGoogleSearchComponent implements AfterViewInit {

  @Output()
  resultData: any;

  @ViewChild(ShowResultComponent, { static: false })
  showResultsRef!: ShowResultComponent;

  searchKeyword = '';

  disableBtnSave = true;

  constructor() { }

  ngAfterViewInit(): void {
  }

  search(): void {

    const url = new URL('https://customsearch.googleapis.com/customsearch/v1?cx=37a42e8d8c56c479c&key=AIzaSyABnHsvgW9dIkGf74QtrT8oXX6BZXthkK0');
    url.searchParams.append('q', this.searchKeyword);

    fetch(url.href, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json())
      .then(data => {
        this.resultData = data;
        this.showResultsRef.showResults(data);
        if (data.items) {
          this.disableBtnSave = false;
        }
        else {
          this.disableBtnSave = true;
        }
      })
      .catch(err => console.log(err));
  }

  save(): void {

    const fileContent = JSON.stringify(this.resultData);
    const bb = new Blob([fileContent], { type: 'text/plain' });
    const a = document.createElement('a');
    a.download = 'google_search.json';
    a.href = window.URL.createObjectURL(bb);
    a.click();

  }

}
