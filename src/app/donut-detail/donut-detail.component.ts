import { Component, Input, OnInit } from '@angular/core';
import { DonutService } from '../donuts.service';
import { ResultData } from '../donut-detail';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css'],
  providers: [DonutService]
})
export class DonutDetailComponent implements OnInit {

  constructor(private donut: DonutService) {
    this.getDonut();
   }

   @Input() index: number = 0;

   getDonut(){
     this.donut.getDonut()
     .subscribe((id: any) => {
     console.log(Results.id[this.index].id.name);
     
    })
   }


  }

}
