import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailSenderService {

  constructor(private http: HttpClient) { }

  sendMail(fio: string, tel: number) {
    return this.http.post('/sendMail', { tel, fio });
  }
}
