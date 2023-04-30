import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {}
   url="https://localhost:7280/api/"
   async Get(controller:string){
      var response:any
      await this.http.get(this.url+controller).toPromise().then(res=>{
        response=res
        console.log(res);
      })

      return response
  }
}
