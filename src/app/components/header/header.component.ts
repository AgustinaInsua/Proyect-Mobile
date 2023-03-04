import { Languages } from './../../model/emumLanguages';
import { LanguageService } from './../../service/language-service/language.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {MenuItem} from 'primeng/api';

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
  myColor = ['#67B5CF','write'];
  items!: MenuItem [];
  constructor(private langService: LanguageService) { }

  ngOnInit() {
    console.log(this.langService.getActualLang());
    this.items = [
      {
        label: "Home"
      },
      {
        label: "Actas",
        items: [
            {
              label: "Calculadora",
              command: (event) => {
                //this.showDialog();
            }}
        ]
      }
    ];
  }
  changeLangEs(lang: Languages){
    this.langService.setLang(lang);
    console.log(this.langService.getActualLang());  }

  changeLangEn(lang: Languages){
    this.langService.setLang(lang);
    console.log(this.langService.getActualLang());
  }

}
