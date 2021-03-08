import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plague',
  templateUrl: './plague.component.html',
  styleUrls: ['./plague.component.css']
})
export class PlagueComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.toastr.info('The Data of Plague taken from the Wikipedia')
  }
  //Styling cards
  buttonSpace:object = {
    "margin-right" : '20px',
  }
  buttonAlign:object = {
    "margin-top":'40px',
  }

  confirmedCases: string = ' 475 Million'
  deathCases: string = '50 Milion'
}
