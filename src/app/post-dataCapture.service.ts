import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({providedIn:"root"})
export class postDataCaptureService { 


    constructor(private http:HttpClient){

    }

    getAlluser(){
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
    getAllPost(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1');
    }
    
    getUserOnSelect(id:number){
      let url:string = 'https://jsonplaceholder.typicode.com/posts?id='+id ;
      return this.http.get(url);
    }

}