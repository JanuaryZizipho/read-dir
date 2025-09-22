import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsRowComponent } from './search-results-row.component';

describe('SearchResultsRowComponent', () => {
  let component: SearchResultsRowComponent;
  let fixture: ComponentFixture<SearchResultsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchResultsRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
