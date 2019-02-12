import { Component } from '@angular/core';
import { MailSenderService } from '../mail-sender.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sixth-page',
  templateUrl: './sixth-page.component.html',
  styleUrls: ['./sixth-page.component.scss']
})
export class SixthPageComponent {

  model: { tel: string, fio: string } = { tel: '', fio: '' };

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
