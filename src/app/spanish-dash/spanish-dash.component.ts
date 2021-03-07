import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-spanish-dash',
  templateUrl: './spanish-dash.component.html',
  styleUrls: ['./spanish-dash.component.css']
})
export class SpanishDashComponent implements OnInit {
  buttonSpace:object = {
    "margin-right" : '20px',
  }
  buttonAlign:object = {
    "margin-top":'40px',
  }
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
