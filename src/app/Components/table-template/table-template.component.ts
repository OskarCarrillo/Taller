import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, matSortAnimations } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/Services/table.service';
import { ApiService } from 'src/app/Services/api.service';




@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent {
  @Input()service: string;
  @Input()column:object;
  @Input()displayedColumns: string[] = [];
  @Input()dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public Api: ApiService){


    this.dataSource= new MatTableDataSource();
    
   
    }

    // ngOnInit(): void {
    //   //this.service
    // }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
  
      applyFilter(event: Event) {
       const filterValue = (event.target as HTMLInputElement).value;
       this.dataSource.filter = filterValue.trim().toLowerCase();
   
       if (this.dataSource.paginator) {
         this.dataSource.paginator.firstPage();
       }
     }
 }
