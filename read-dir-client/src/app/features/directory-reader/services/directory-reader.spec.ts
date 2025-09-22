import { TestBed } from '@angular/core/testing';

import { DirectoryReaderComponent } from './directory-reader.service';

describe('DirectoryReaderComponent', () => {
  let service: DirectoryReaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectoryReaderComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
