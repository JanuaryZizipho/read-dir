import { Injectable, ApplicationRef, ComponentRef, createComponent, EnvironmentInjector } from '@angular/core';
import { ErrorDialogComponent } from '../components/dialogs/error-dialog.component/error-dialog.component';

@Injectable({ providedIn: 'root' })
export class ErrorDialogService {
  private dialogRef?: ComponentRef<ErrorDialogComponent>;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  show(message: string) {
    if (!this.dialogRef) {
      this.dialogRef = createComponent(ErrorDialogComponent, {
        environmentInjector: this.injector,
      });
      this.appRef.attachView(this.dialogRef.hostView);
      document.body.appendChild(this.dialogRef.location.nativeElement);
    }

    this.dialogRef.instance.show(message);
  }
}
