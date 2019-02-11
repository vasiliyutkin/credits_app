import { Component } from '@angular/core';
import { MailSenderService } from '../mail-sender.service';

@Component({
  selector: 'app-sixth-page',
  templateUrl: './sixth-page.component.html',
  styleUrls: ['./sixth-page.component.scss']
})
export class SixthPageComponent {

  model: { tel: number, fio: string } = { tel: null, fio: '' };

  constructor(private mailSenderService: MailSenderService) { }

  resetForm() {
    this.model.fio = '';
    this.model.tel = null;
  }

  onSubmit() {
    this.mailSenderService.sendMail(this.model.fio, this.model.tel).subscribe(this.resetForm);
  }
}
