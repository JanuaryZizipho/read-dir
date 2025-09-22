import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icon, ICONS, CompressedType, COMPRESSED_TYPES } from '../../../models/directory-reader.model';
import { getFileExtention } from '../../../../../shared/utils/directory-reader-utils';
import { FileResponse } from '../../../models/response.model';

@Component({
  selector: 'app-search-results-row',
  imports: [CommonModule],
  templateUrl: './search-results-row.component.html',
  styleUrl: './search-results-row.component.scss'
})
export class SearchResultsRowComponent {
  @Input() file: any;
  @Input() indexPrefix: string = '';

  @Output() rowSelected = new EventEmitter<FileResponse>();

  icons: Icon[] = ICONS;
  compressedTypes: CompressedType[] = COMPRESSED_TYPES;

  getSubFile(file: any) {
    return file.subFiles;
  }

  fileExtention(row: FileResponse) { return getFileExtention(row); }

  getIcon(file: any) {
    const list = file.name.split('.');
    const type = list.pop();

    const isCompressed = this.compressedTypes.find(ct =>
      ct.value === type.toLowerCase()
    );

    if (isCompressed) {
      return this.icons.filter(icon => icon.type === 'zipped_folder');
    }
    return this.icons.filter(icon => icon.type === file.type);
  }

  isDisabledRow(file: FileResponse) {
    return file.type !== 'directory' || file.subFiles?.length === 0;
  }

  onSubFileSelected(file: FileResponse) {
    console.log('in here', file)
    this.rowSelected.emit(file);
  }
}
