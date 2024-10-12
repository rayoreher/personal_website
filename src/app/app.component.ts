import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PdfViewerModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website';
}
