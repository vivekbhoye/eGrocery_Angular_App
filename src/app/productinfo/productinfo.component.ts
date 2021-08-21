import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getValues(val:any){
    console.warn(val)
  }

}
