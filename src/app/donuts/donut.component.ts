import { Component, Input, OnInit } from '@angular/core';
import { DonutService } from '../donuts.service';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css'],
  providers: [DonutService]

})
export class DonutComponent {

constructor(private donut: DonutService) { 
    this.getDonut();
  }


@Input() index: number = 0;

  getDonut(){
    this.donut.getDonut()
    .subscribe((topCount: any ) => {
    console.log(topCount.result[this.index].name.results.name);
    this.donut = topCount.result[this.index].name;
  });


  }

}
