import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from 'src/app/model/emumLanguages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) { }

  setDefaultLang (lang: Languages){
    this.translate.setDefaultLang(lang);
  }
}
