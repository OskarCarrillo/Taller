import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  responsable:any
  displayedColumsTable:string[]
  tittleTbale:string
  dataSource:any
  
}
