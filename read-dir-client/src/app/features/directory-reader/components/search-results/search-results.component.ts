import { Component } from '@angular/core';
import { DirectoryReaderService } from '../../services/directory-reader.service';
import { distinctUntilChanged, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FileResponse } from '../../models/response.model';
import { SearchResultsRowComponent } from './search-results-row.component/search-results-row.component';
import { getFileExtention } from '../../../../shared/utils/directory-reader-utils';

@Component({
  selector: 'app-search-directory-results',
  imports: [SearchResultsRowComponent, CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
[x: string]: any;

  searchResults$ = new Observable<any>();
  private _selectedFile: FileResponse | null = null;

  constructor(private directoryReaderService: DirectoryReaderService) {}

  ngOnInit(): void {
    this.searchResults$ = this.directoryReaderService.directoryListing;
  }

  fileExtention(row: FileResponse) { return getFileExtention(row); }

  onSubRowSelected(file: FileResponse) {
    this._selectedFile = file;
  }

  get selectedRow() {
    return this._selectedFile;
  }

}
