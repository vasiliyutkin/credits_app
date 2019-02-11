import { Component } from '@angular/core';
import { MailSenderService } from './mail-sender.service';

import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFeedback: boolean;
  toggleFeedbackForm() {
    this.showFeedback = !this.showFeedback;
  }

  constructor(private mailSenderService: MailSenderService) {
    mailSenderService.sendMail().subscribe((r) => console.log('r'));
  }


}
