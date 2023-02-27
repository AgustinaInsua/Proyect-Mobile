import { Languages } from './../../model/emumLanguages';
import { LanguageService } from './../../service/language-service/language.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title!: any;
  @Input () icon!: any;
  es = Languages.es;
  en = Languages.en;
  constructor(private langService: LanguageService) { }

  ngOnInit() {
    console.log(this.langService.getActualLang());
  }
  changeLang(lang: Languages){
    this.langService.setLang(lang);
    console.log(this.langService.getActualLang());
  }
}
