import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoletasService {

  apiURL = environment.apiURLBoleta + 'boletas';

  constructor(private http: HttpClient) { }
}
