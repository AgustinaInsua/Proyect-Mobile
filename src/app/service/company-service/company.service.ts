import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from 'src/app/model/Company';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  companies!: Company[];
  id: any;
  mail: any;
  apiURL= environment.apiURLBoleta + 'companies';
  constructor(private http: HttpClient) { }

  setCompanyInformation(companyInformation: any){
    this.companies = companyInformation;  }

  getCompanyInformation(){
    return this.companies;
  }

  setCompanyInformationID(id: any){
    this.id = id;
  }

  getCompanyInformationID(){
    return this.id;
  }

  setCompanyInformationMail(mail: any){
    this.mail = mail;
  }

  getCompanyInformationMail(){
    return this.mail;
  }
  
}
