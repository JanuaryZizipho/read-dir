import { Routes } from '@angular/router';
import { DirectoryReaderComponent } from './features/directory-reader/components/directory-reader.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'directory-reader',
    pathMatch: 'full'
  },
  {
    path: 'directory-reader',
    component: DirectoryReaderComponent,
  }
];
