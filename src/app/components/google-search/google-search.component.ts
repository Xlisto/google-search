import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-google-search',
  templateUrl: './google-search.component.html',
  styleUrls: ['./google-search.component.css']
})
export class GoogleSearchComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const cx = '37a42e8d8c56c479c';
    const gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }


}
