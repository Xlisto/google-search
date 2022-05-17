import { Component, AfterViewInit } from '@angular/core';
import { ItemResult } from '../../models/ItemResult.model';

@Component({
  selector: 'app-save-results',
  templateUrl: './save-results.component.html',
  styleUrls: ['./save-results.component.css']
})
export class SaveResultsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
  }

  save(): void {
    const itemResults = [];

    const result = document.getElementsByClassName('gsc-result');
    const showResult = document.getElementsByClassName('gsc-results-wrapper-visible');

    if (showResult.length > 0) {

      Array.from(result).forEach(item => {

        const itemResult = new ItemResult();
        const title = item.getElementsByClassName('gs-title');
        const topUrl = item.getElementsByClassName('gs-visibleUrl-breadcrumb');
        const body = item.getElementsByClassName('gs-snippet');


        if (title[0]) {
          itemResult.title = title[0].textContent;
        }

        if (title[1]) {
          itemResult.url = title[1].getAttribute('href');
        }

        if (topUrl[0]) {
          itemResult.breadcrumb = topUrl[0].textContent;
        }

        if (body[0]) {
          itemResult.body = body[0].textContent;
        }

        itemResults.push(itemResult);

      });
    }

    const fileContent = JSON.stringify(itemResults);
    const bb = new Blob([fileContent], { type: 'text/plain' });
    const a = document.createElement('a');
    a.download = 'google_search.json';
    a.href = window.URL.createObjectURL(bb);
    a.click();

  }

}
