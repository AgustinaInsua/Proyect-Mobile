import { LanguageService } from './service/language-service/language.service';
import { Component } from '@angular/core';
import { Languages } from './model/emumLanguages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private langService: LanguageService) {
    this.langService.setDefaultLang(Languages.en);
  }
}
