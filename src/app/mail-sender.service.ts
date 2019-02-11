import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailSenderService {

  constructor(private http: HttpClient) { }

  sendMail() {
    return this.http.post('/sendMail', {
      tel: 'telephone',
      fio: 'fiofiofio'
    });
  }
}
