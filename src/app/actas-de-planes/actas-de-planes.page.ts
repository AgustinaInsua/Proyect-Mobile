import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from '../service/api-service/api.service';

@Component({
  selector: 'app-actas-de-planes',
  templateUrl: './actas-de-planes.page.html',
  styleUrls: ['./actas-de-planes.page.scss'],
})
export class ActasDePlanesPage implements OnInit {

  companies!:any;
  constructor(private router: Router,private messageService: MessageService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get(ApiService.apiURLCompaniesActas).subscribe({next: companies => {
      this.companies = companies;
      console.log(companies);
    },
    error: (error: { message: any; }) =>{
      console.log(error.message);
      this.messageService.add({severity:'error', summary:error.message, life:2000});
    }
  })
  }

}
