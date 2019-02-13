import { Component } from '@angular/core';
import { MailSenderService } from '../mail-sender.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.scss']
})
export class FourthPageComponent {
  model: { tel: string, fio: string } = { tel: '', fio: '' };
  policyVisible: boolean;

  constructor(private mailSenderService: MailSenderService, private toastr: ToastrService) { }

  resetForm() {
    this.model.fio = '';
    this.model.tel = null;
    this.toastr.success('С Вами свяжутся в течении 15 минут!', 'Запрос успешно отправлен');
  }

  onSubmit() {
    this.mailSenderService
      .sendMail(this.model.fio, this.model.tel)
      .subscribe(() => {
        this.resetForm();
      });
  }
}
