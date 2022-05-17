import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveResultsComponent } from './save-results.component';

describe('SaveResultsComponent', () => {
  let component: SaveResultsComponent;
  let fixture: ComponentFixture<SaveResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
