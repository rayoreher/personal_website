import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  standalone: true,
  imports: [MatButtonModule],
  selector: 'app-root',
  template: `<div>
    <section>
  <div class="example-label">Basic</div>
  <div class="example-button-row">
    <button mat-button>Basic</button>
    <button mat-button disabled>Disabled</button>
    <a mat-button href="https://www.google.com/" target="_blank">Link</a>
  </div>
</section>
  </div>`,
})
export class AppComponent {
  value = 'baby babu';
}
