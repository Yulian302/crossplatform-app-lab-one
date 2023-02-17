import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {
    this.a=0;
    this.b=0;
    this.res=0;
  }
  a:number;
  b:number;
  res:number;
  get_sum(a:string|number|null|undefined,b:string|number|null|undefined){
    this.reload();
    for (let i = Number(a); i <=Number(b); i++) {
      if(i%11==0&&i%8==5)this.res+=i;
    }
  }
  reload()
  {
    this.res=0;
  }
}
