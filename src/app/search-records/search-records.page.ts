import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-records',
  templateUrl: './search-records.page.html',
  styleUrls: ['./search-records.page.scss'],
})
export class SearchRecordsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  paymentRecords (){
    this.router.navigate(['search-plans/search-records/actas-de-planes']);
  }
}
