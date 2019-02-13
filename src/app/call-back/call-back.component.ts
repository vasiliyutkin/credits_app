import { Component } from '@angular/core';
import { MailSenderService } from '../mail-sender.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-call-back',
  templateUrl: './call-back.component.html',
  styleUrls: ['./call-back.component.scss']
})
export class CallBackComponent {

  model: { tel: string, fio: string } = { tel: '', fio: '' };
  showErrorMessage: boolean;
  showFeedback: boolean;
  policyVisible: boolean;

  toggleFeedbackForm() {
    this.showFeedback = !this.showFeedback;
  }

  constructor(private mailSenderService: MailSenderService, private toastr: ToastrService) { }

  resetForm() {
    this.model.fio = '';
    this.model.tel = null;
    this.showFeedback = false;
    this.showErrorMessage = false;
    this.toastr.success('С Вами свяжутся в течении 15 минут!', 'Запрос успешно отправлен');
  }

  onSubmit() {
    this.mailSenderService.sendMail(this.model.fio, this.model.tel)
      .subscribe(() => {
        this.resetForm();
      }, () => {
        this.showErrorMessage = true;
      });
  }
}
