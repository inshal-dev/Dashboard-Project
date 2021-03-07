import { Component, OnInit } from '@angular/core';

import {Chart} from 'chart.js';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
  import { from } from 'rxjs';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  canvas:any; 
  ctx:any;
  ngAfterViewInit() {
    setTimeout(()=>{
      this.mychart();
      this.lineChart();
      this.polarChart();
      this.barChart();
    },100);
  }

  mychart(){
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    var myChart = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
            labels: ['Total Confirmed','Recovered','Death'  ],
            datasets: [{
                label: 'Covid-19 chart',
                data: [20000, 5000,1000],
                weight:2,
                order:1,
                backgroundColor: [
                  'rgba(255, 255, 74, 1)',
                  ' #99FF33', 
                    '#FF3333', 
                ],
                borderColor: [
                  '#FFFF',
                  '#FFFF',
                  '#ffff'  
                ],
                borderWidth: 2
            },]
        },
        options: {
          rotation: 1 * Math.PI,
          circumference: 1 * Math.PI,
          responsive: true,
          legend: { position: 'left',},
          title: { display: true, text: 'Doughnut Chart' },
          animation: { animateScale: true, animateRotate: true },
          cutoutPercentage: 70
      }
    });
}
 lineChart(){
  this.canvas = document.getElementById('lineChart');
  this.ctx = this.canvas.getContext('2d');
  var mylineChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Red'],
        datasets: [{
            label: 'Total Cases',
            data: [1,10000],
           
            borderWidth: 1
        },
        {
          label: 'Recovered' ,
          data:[1,80000],
          borderWidth: 1
        },
        {
          label: 'Death' ,
          data:[1,20000],
          borderWidth: 1
        },
      ]
    },
      options: {
        responsive: true,
      }    
  });
}
barChart(){
  this.canvas = document.getElementById('barChart');
  this.ctx = this.canvas.getContext('2d');
  var myBarChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ['Covid'],
          datasets: [{
              label:'Confirmed',
              data: [100000],  
              backgroundColor: [
                'rgba(255, 255, 74, 1)',
                ' #99FF33', 
                  '#FF3333',         
              ],
              borderColor: [
                '#FFFF',
                '#FFFF',
                '#ffff'
              ],
              borderWidth: 2
          },
          {
            label:'Recovered',
            data: [ 80000,1],  
            backgroundColor: [
             '#45CE30'       
            ],
            borderWidth: 2
        },
        {
          label:'Death',
          data: [ 20000, 1],  
          backgroundColor: [
            '#E44236',         
          ],
         
          borderWidth: 2
      },]
      },
      options: {
        responsive: true,
    }
  });
}
polarChart(){
  this.canvas = document.getElementById('polarChart');
  this.ctx = this.canvas.getContext('2d');
  var myPolarChart = new Chart(this.ctx, {
      type: 'polarArea',
      data: {
          labels: ['Covid'],
          datasets: [{
              label:'Confirmed',
              data: [80000],  
              backgroundColor: [
                'rgba(255, 255, 74, 1)',
                ' #99FF33', 
                  '#FF3333',         
              ],
              borderColor: [
                '#FFFF',
                '#FFFF',
                '#ffff'
              ],
              borderWidth: 2
          },
          {
            label:'Recovered',
            data: [ 50000],  
            backgroundColor: [
             '#45CE30'       
            ],
            borderWidth: 2
        },
        {
          label:'Death',
          data: [ 20000 ],  
          backgroundColor: [
            '#E44236',         
          ],
          borderWidth: 2
      },]
      },
      options: {
        responsive: true,
    }
  });
}
  constructor(private route: ActivatedRoute,) { 
  }
  ngOnInit(): void {
  }
}
