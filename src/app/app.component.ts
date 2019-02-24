import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DailogComponent } from './dailog/dailog.component';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names;
  

  constructor(public dialog: MatDialog,private json:JsonService){
     this.json.getStrings().subscribe(
       (data)=>{this.names=data},
       ()=>{}
     )
  }

  openDailog(selected):void{

    const dialogRef = this.dialog.open(DailogComponent, {
      width: '550px',
      data: {info:selected}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      selected.name=result;
      this.json.updateStrings(selected).subscribe(
        ()=>{
          this.json.getStrings().subscribe(
            (data)=>{this.names=data},
            ()=>{}
          )
        },
        ()=>{}
      )
     
    });
  }

  openInsertDailog():void{
   let selected={name:""};
    const dialogRef = this.dialog.open(DailogComponent, {
      width: '250px',
      data: {info:selected}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      selected.name=result;
      this.json.insertStrings(selected).subscribe(
        ()=>{
          this.json.getStrings().subscribe(
            (data)=>{this.names=data},
            ()=>{}
          )
        },
        ()=>{}
      )
     
    });
  }
}
