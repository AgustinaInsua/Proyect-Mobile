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
  myColor = ['#67B5CF','write'];
  constructor(private langService: LanguageService) { }

  ngOnInit() {
    console.log(this.langService.getActualLang());
  }
  changeLangEs(lang: Languages){
    this.langService.setLang(lang);
    console.log(this.langService.getActualLang());  }

  changeLangEn(lang: Languages){
    this.langService.setLang(lang);
    console.log(this.langService.getActualLang());
    this.sap()
  }
  sap(){
   if (this.myColor[0] == 'write' && this.myColor[1] == '#67B5CF'){
    this.myColor = ['#67B5CF','write'];
   }
   else if (this.myColor[1] == 'write' && this.myColor[0] == '#67B5CF'){
    console.log("pase por aca");
    this.myColor = ['write','#67B5CF'];
   }
  }
}
