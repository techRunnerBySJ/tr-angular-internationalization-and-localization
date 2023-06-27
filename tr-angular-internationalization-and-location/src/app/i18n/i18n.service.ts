import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  constructor(private translateService: TranslateService) {}

  switchLanguage(lang: string): void {
    this.translateService.use(lang);
  }
}
