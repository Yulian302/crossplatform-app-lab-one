import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor() {
    this.x=0;
    this.y=0;
    this.z=0;
    this.res=0;
  }
  x:number;
  y:number;
  z:number;
  res:number;
  calculate(x:number|undefined|null|string,y:number|undefined|null|string,z:number|undefined|null|string)
  {
    this.reset();
    this.x=Number(x);
    this.y=Number(y);
    this.z=Number(z);
    this.res+=this.x%7==0?Math.pow(this.x,3):0;
    this.res+=this.y%7==0?Math.pow(this.y,3):0;
    this.res+=this.z%7==0?Math.pow(this.z,3):0;
  }
  reset(){
    this.res=0;
  }
}
