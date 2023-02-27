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
  selectedEs !: boolean;
  selectedEn !: boolean;
  constructor(private langService: LanguageService) { }

  ngOnInit() {
    console.log(this.langService.getActualLang());
  }
  changeLangEs(lang: Languages){
    this.langService.setLang(lang);
    console.log(this.langService.getActualLang());
    this.selectedEs = true;
    this.selectedEn = false;
  }

  changeLangEn(lang: Languages){
    this.langService.setLang(lang);
    console.log(this.langService.getActualLang());
    this.selectedEn = true;
    this.selectedEs = false;
  }
}
