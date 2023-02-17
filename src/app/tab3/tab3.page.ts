import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor() {
    this.n = 0;
    this.min = 0;
    this.max = 0;
  }
  matrix: number[][] = [];
  n: any;
  min: number;
  max: number;
  generateMatrix(n: string | undefined | number | null) {
    this.n = Number(n);
    this.matrix = Array(this.n);
    let i: number=0, j: number = 0;
    for (i = 0; i < this.n; i++) {
      this.matrix[i]=Array(this.n);
      for(j=0;j<this.n;j++){
        this.matrix[i][j]=this.generateRandom(1,50);
      }
    }
    this.getMaxAndMin();
  }
  generateRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  getMaxAndMin()
  {
    let i:number=0;
    let j:number=0;
    this.max=this.matrix[0][0];
    this.min=this.matrix[0][0];
    for(i=0;i<this.n;i++)
    {
      for(j=0;j<this.n;j++)
      {
        if(this.matrix[i][j]>this.max)
        {
          this.max=this.matrix[i][j];
        }
        if(this.matrix[i][j]<this.min)
        {
          this.min=this.matrix[i][j];
        }
      }
    }
  }
  getColor(b:number)
  {
    return b==this.min?'red':b==this.max?'green':'none';
  }
  ngOnInit(){}
}