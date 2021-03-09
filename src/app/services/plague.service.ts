import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlagueService {
  
  constructor(
    private http: HttpClient,
    
  ) { }
  GetPlague(){
    return this.http.get('assets/Plague.json');
  }
  GetEbola(){
    return this.http.get('assets/ebola.json');
  }
}
