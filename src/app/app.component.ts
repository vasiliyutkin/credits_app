import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFeedback: boolean;
  toggleFeedbackForm () {
    this.showFeedback = !this.showFeedback;
  }
}
