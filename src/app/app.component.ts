import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  value=50;
  decimal =2.55555;
  jsondata={name:"niru",age:30}
  date=Date();

  convert(value:number,rate:number){
    return value*rate;
  }
}
