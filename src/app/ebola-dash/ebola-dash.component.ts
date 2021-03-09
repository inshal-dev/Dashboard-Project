import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Chart }  from 'chart.js';
import { PlagueService } from '../services/plague.service';

@Component({
  selector: 'app-ebola-dash',
  templateUrl: './ebola-dash.component.html',
  styleUrls: ['./ebola-dash.component.css']
})
export class EbolaDashComponent implements OnInit {
 items:any
 ebolaItems:any;
 dataPlague:any
 Cases:any;
 TotalCases:any
 /* Charts */
 ctx:any;
 canvas:any;
  constructor(
    public PlagueService: PlagueService
  ) { 
    this.DataPlagues()
    
  }
  ngAfterViewInit() {
    setTimeout(()=>{
      this.basicChart();
    },100);
  }

  ngOnInit(): void {
   
  }
  DataPlagues(){
    this.PlagueService.GetEbola()
      // data =>{
      //  this.items = JSON.stringify(data)
      //   this.ebolaItems = JSON.parse(this.items)
      //  // console.log(this.ebolaItems)
      //   let global = this.ebolaItems;
      //   this.TotalCases = global.Date;
      //   console.log(this.TotalCases)
        // console.log(data)
      
    
  }
 

 basicChart(){
  this.canvas = document.getElementById('charts');
  this.ctx = this.canvas.getContext('2d');
   var myChart = new Chart(this.ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [this.TotalCases],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
}
 
}