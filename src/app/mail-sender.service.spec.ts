import { TestBed } from '@angular/core/testing';

import { MailSenderService } from './mail-sender.service';

describe('MailSenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailSenderService = TestBed.get(MailSenderService);
    expect(service).toBeTruthy();
  });
});
