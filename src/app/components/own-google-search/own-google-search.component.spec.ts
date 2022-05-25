import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnGoogleSearchComponent } from './own-google-search.component';

describe('OwnGoogleSearchComponent', () => {
  let component: OwnGoogleSearchComponent;
  let fixture: ComponentFixture<OwnGoogleSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnGoogleSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnGoogleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
