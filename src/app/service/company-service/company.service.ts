import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Company } from 'src/app/model/Company';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  constructor() { }

}
