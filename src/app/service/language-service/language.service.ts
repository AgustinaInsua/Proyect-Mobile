import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from 'src/app/model/emumLanguages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) { }

  setDefaultLang (lang: Languages){
    this.translate.addLangs([Languages.en, Languages.es]);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  getActualLang(){
    return this.translate.currentLang;
  }

  setLang(lang: Languages){
    console.log('Ahora el lenguage es:' + lang);
    this.translate.use(lang);
    console.log (this.translate.getLangs());
  }
}
