import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  sideNavStatus: boolean = false;
  @Output() fileUploaded = new EventEmitter<File>();
  file: any;
  name: string = '';

  uploadFile(event: any) {
    this.file = event.target.files[0];
    // Implement logic to upload the file to your server using HTTP or other methods
    console.log('File uploaded:', this.file); // Example: Log the file details
  }

  hasDroppedFile = false;
  droppedFile: File | null = null;

  constructor() {}

  ngOnInit() {}

  onFileDropped(event: DragEvent) {
    event.preventDefault();
    this.hasDroppedFile = true;

    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      // Check for existence and files
      const droppedFile = event.dataTransfer.files[0];
      if (droppedFile.type === 'application/pdf') {
        this.fileUploaded.emit(droppedFile);
        this.hasDroppedFile = false; // Reset for next upload
      } else {
        alert('Only PDF files allowed.');
        this.hasDroppedFile = false;
      }
    } else {
      alert('No File Dropped');
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.hasDroppedFile = true; // Visually indicate drop zone
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.hasDroppedFile = false; // Reset drop zone indicator
  }
}
