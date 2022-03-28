import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../services/api-data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  apiTitle:any;
  constructor(private apiData:ApiDataService) {
    apiData.getTitle().subscribe((data) => {
    console.log("data", data);
    this.apiTitle = data
  })
   }

  ngOnInit(): void {
  }

}
