import { Component, OnInit } from '@angular/core';
import { JitCompiler } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:string='jim';
  constructor() { }

  ngOnInit() {
  }

}
