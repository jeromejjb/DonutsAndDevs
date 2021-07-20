import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Donut } from './donut';

@Injectable({
    providedIn: 'root'
})
export class DonutService {
    
    
    //This inject the HTTP Client and now we can use all its methods
    constructor(private http: HttpClient) {

    }
    id: number[] = [1,2,3,4,5,6,7,8];
    baseURL: string = `https://grandcircusco.github.io/demo-apis/donuts/${this.id}.json`;
    CurrentDonut: any;
    getDonut(): any {
  
        return this.http.get<results>(this.baseURL);
       
    }


}