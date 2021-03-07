import { Component, OnInit } from '@angular/core';
import {Table} from '../data';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  case : Table[]=[
  {
    country:'America',
    casesConfirmed:100002,
    casesRecovered:20000,
    casesDeath:80000
  },
  {
    country:'India',
    casesConfirmed:100002,
    casesRecovered:20000,
    casesDeath:80000
  },
  {
    country:'Brazil',
    casesConfirmed:100002,
    casesRecovered:20000,
    casesDeath:80000
  },
  {
    country:'America',
    casesConfirmed:100002,
    casesRecovered:20000,
    casesDeath:80000
  },
  {
    country:'India',
    casesConfirmed:100002,
    casesRecovered:20000,
    casesDeath:80000
  },
  {
    country:'Brazil',
    casesConfirmed:100002,
    casesRecovered:20000,
    casesDeath:80000
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
