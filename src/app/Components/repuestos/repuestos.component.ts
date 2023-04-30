import { Component,OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableTemplateComponent } from '../table-template/table-template.component';

import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent {
   column:object;
   displayedColumns: string[] = [];
   dataSource: MatTableDataSource<any>;
   title:"Repuestos"
   service:"Repuestoes"


  
  constructor(public Api: ApiService, public dialog: MatDialog, public tableService: TableService ) {
    this.dataSource= new MatTableDataSource();
  }

  ngOnInit():void{
    this.GetRepuestosl();
  }

  openModal(){
    const dialogRef = this.dialog.open(FormComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

  public async GetRepuestosl(){
    await this.Api.Get("Repuestoes").then((res)=>{
      
      this.column=res
      this.displayedColumns=Object.keys(this.column[0])
      this.dataSource.data=res;
      
      
      

    });
    
  }


}
