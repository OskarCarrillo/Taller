import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';
import { FormComponent } from '../form/form.component';
import { Form2Component } from '../form2/form2.component';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent {
  column:object;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  title:"vehiculos"
  service:"Vehiculoes"


 
 constructor(public Api: ApiService, public dialog: MatDialog, public tableService: TableService ) {
   this.dataSource= new MatTableDataSource();
 }

 ngOnInit():void{
   this.GetRepuestosl();
 }

 openModal(){
   const dialogRef = this.dialog.open(Form2Component);

 dialogRef.afterClosed().subscribe(result => {
   console.log(`Dialog result: ${result}`);
  });
}

 public async GetRepuestosl(){
   await this.Api.Get("Vehiculoes").then((res)=>{
     
     this.column=res
     this.displayedColumns=Object.keys(this.column[0])
     this.dataSource.data=res;
     
     
     

   });
   
 }


}
