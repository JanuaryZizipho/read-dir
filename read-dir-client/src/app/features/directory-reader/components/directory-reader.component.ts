import { Component } from '@angular/core';
import { SearchResultsComponent } from "./search-results/search-results.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DirectoryReaderService } from '../services/directory-reader.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { pathValidator } from '../../../core/validators/pathValidator';

@Component({
  selector: 'app-directory-reader',
  imports: [SearchResultsComponent, ReactiveFormsModule, FormsModule, NgClass, CommonModule],
  templateUrl: './directory-reader.component.html',
  styleUrl: './directory-reader.component.scss'
})
export class DirectoryReaderComponent {

  searchForm = new FormGroup({
    path: new FormControl('', [Validators.required, pathValidator()]),
    depth: new FormControl('', Validators.required)
  });

  get path() {
    return this.searchForm.controls.path;
  }

  get depth() {
    return this.searchForm.controls.depth;
  }

  constructor(
    private directoryReaderService: DirectoryReaderService,
    private router: Router
  ) {}

  onSearchClick() {
    const depthValue = this.depth.value ?? '';
    const payload = { path: this.cleanedPath, depth: +depthValue };

    this.router.navigate([], {
      queryParams: payload,
      queryParamsHandling: 'merge'
    });

    this.directoryReaderService.getFullDirectoryListing(payload);
  }

  get cleanedPath() {
    const pathValue = this.path.value ?? '';
    return pathValue.replace(/^['"]|['"]$/g, '');
  }

  get isPathValid() { return this.path?.valid; }

  get isDepthValid() { return this.depth?.valid; }

  get requiredDepthError() { return this.depth?.hasError('required'); }

  get invalidCharsError() { return this.path.hasError('invalidChars'); }

  get invalidFormatError() { return this.path.hasError('invalidFormat'); }

  get requiredPathError() { return this.path?.hasError('required'); }

  get rangeError() {
    return this.depth?.hasError('max') || this.depth?.hasError('min');
  }

}
