import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public content:string = "Secret Password - tuna";
  public display:boolean = true;
  public clicks:any = [];
  public now:Date = new Date();

  onClick(){
    this.display = !this.display;
    this.clicks.push("Content : " +this.content+" Display status: "+this.display+" Current timestamp : " +this.now );
  }
  getBackColor(index:number){
    return (index>=4) ? 'blue':'none';
  }
}
