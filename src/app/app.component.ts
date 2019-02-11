import { Component } from '@angular/core';
import { MailSenderService } from './mail-sender.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model: { tel: number, fio: string } = { tel: null, fio: '' };
  showErrorMessage: boolean;
  errorMessage = 'Что-то пошло не так. Пожалуйста отправьте форму повторно';

  showFeedback: boolean;
  toggleFeedbackForm() {
    this.showFeedback = !this.showFeedback;
  }

  constructor(private mailSenderService: MailSenderService) { }

  onSubmit() {
    this.mailSenderService.sendMail(this.model.fio, this.model.tel)
      .subscribe(() => { this.showFeedback = false; }, () => { this.showErrorMessage = true; });
  }
}