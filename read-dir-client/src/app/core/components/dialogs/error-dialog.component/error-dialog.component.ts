import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="modal fade"
      tabindex="-1"
      role="dialog"
      [class.show]="visible"
      [style.display]="visible ? 'block' : 'none'"
      style="background: rgba(0,0,0,0.5);"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-secondary text-white">
            <span class="material-symbols-outlined">error</span>
            <h5 class="modal-title ms-2">Error</h5>
            <button type="button" class="btn-close btn-close-white" aria-label="Close" (click)="hide()"></button>
          </div>
          <div class="modal-body" style="max-height: 300px; overflow-y: auto; font-size: 1rem">
            <p class="text-break mb-0">{{ message }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" (click)="hide()">Close</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ErrorDialogComponent {
  @Input() message = 'An unexpected error occurred';
  visible = false;

  show(message: string) {
    this.message = message;
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}
