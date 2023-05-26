import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'try-vscode-debugger';

  constructor() {
    console.log(this.title + ' hello');
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
}
