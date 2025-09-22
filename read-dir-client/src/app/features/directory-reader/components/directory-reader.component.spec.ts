import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectoryReaderComponent } from './directory-reader.component';

describe('DirectoryReaderComponent', () => {
  let component: DirectoryReaderComponent;
  let fixture: ComponentFixture<DirectoryReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectoryReaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoryReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
