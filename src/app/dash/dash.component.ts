import { Binary } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {HttpClient} from '@angular/common/http';
import { Chart }  from 'chart.js';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  /* Api Data var */
  @Input()
  
  user:any;
  data:any;
   like:number=0 ;
  /* Charts */
  ctx:any;
  canvas:any;
  ngAfterViewInit() {
    setTimeout(()=>{
      this.mychart();
    },100);
  }
 
  mychart(){
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    var myChart = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
            labels: ['Spanish-Flu','Covid-19','Ebola'  ],
            datasets: [{
                label: 'pandemic',
                data: [10000,8000,2000],
                weight:1,
                order:2,
                backgroundColor: [
                'transparent' 
                ],
                borderColor: [
                  'rgba(255, 255, 74, 1)',
                  '#99FF33',
                  '#FF3333'  
                ],
                borderWidth: 2
            },],
            
        },
        options: {
          rotation: 1 * Math.PI,
          circumference: 1 * Math.PI,
          responsive: true,
          legend: { position: 'left',},
          title: { display: true, text: 'Major Pandemic Chart' },
          animation: { animateScale: true, animateRotate: true },
          cutoutPercentage: 70
      }
    });
}

  constructor(private apiService:ApiService) { 
  }
  ngOnInit(): void {
    
  }
}
