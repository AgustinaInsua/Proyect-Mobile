import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-plans',
  templateUrl: './search-plans.page.html',
  styleUrls: ['./search-plans.page.scss'],
})
export class SearchPlansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchRecords(){
    this.router.navigate(['search-records']);
  }
}
