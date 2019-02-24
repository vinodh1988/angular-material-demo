import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
httpOptions;
  constructor(private http:HttpClient) { 
     
  }

  getStrings():Observable<Object>{
     return this.http.get("http://localhost:3000/names");
  }

  updateStrings(data):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })}
     return this.http.put("http://localhost:3000/names/"+data.id,data,this.httpOptions);
  }

   insertStrings(data):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })}
     return this.http.post("http://localhost:3000/names",data,this.httpOptions);
  }
}