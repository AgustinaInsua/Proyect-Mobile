import { Languages } from './../../model/emumLanguages';
import { LanguageService } from './../../service/language-service/language.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';
import {isNullOrUndefined} from 'is-what';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  @Input() title!: any;
  @Input () icon!: any;
  es = Languages.es;
  en = Languages.en;
  myColor = ['#67B5CF','write'];
  items: MenuItem [] = [];
  home!: MenuItem;
  constructor(private langService: LanguageService,private router: Router, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    console.log(this.langService.getActualLang());
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.items = this.createBreadcrumbs(this.activatedRoute.root)
      });
    this.home = {icon: 'pi pi-home', routerLink: '/home'};
  }
  changeLangEs(lang: Languages){
    this.langService.setLang(lang);
    console.log(this.langService.getActualLang());  }

  changeLangEn(lang: Languages){
    this.langService.setLang(lang);
    console.log(this.langService.getActualLang());
  }

  private createBreadcrumbs(route: ActivatedRoute, routerLink: string = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        routerLink += `/${routeURL}`;
      }

      const label = child.snapshot.data[HeaderComponent.ROUTE_DATA_BREADCRUMB];
      if (!isNullOrUndefined(label)) {
        breadcrumbs.push({label, routerLink});
      }

      return this.createBreadcrumbs(child, routerLink, breadcrumbs);
    }
    return breadcrumbs;
  }

}
