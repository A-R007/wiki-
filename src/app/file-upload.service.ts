import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Make service available throughout the application
})
export class FileUploadService {
  uploadFile(file: File) {
    // Implement logic to upload the file to your server using HTTP or other methods
    console.log('File uploaded:', file); // Example: Log the file details
  }
}
