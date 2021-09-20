import { ApiService } from './../../services/api.service';
import { ApiModel, Course, University, Campus } from '../../models/api-model'
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface CursoDetails {
  name: string,
  city: string,
  full_price: number,
  logo_url: string,
  enabled: boolean
}
const COLUMN_NAMES = {
  'Curso': 'Nome do Curso',
  'Cidade': 'Cidade do Campus',
  'Preço': 'Preço do Curso',
  'Logo': 'Logo da Universidade',
  'Visualizar': 'botão'
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {
  title: string = 'Simbiox Challenge'
  // MatPaginator Inputs
  length = 10;
  pageSize = 2;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent!: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  DATA_ARRAY: any = [];
  displayedColumns: string[] = ['Curso', 'Cidade', 'Preço', 'Logo', 'Visualizar'];
  columnNames = COLUMN_NAMES;

  dataSource!: MatTableDataSource<CursoDetails>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  details!: ApiModel[]
  name!: Course[]
  logo_url!: University[]
  city!: Campus[]
  enabled!: ApiModel[]
  constructor(
    private apiService: ApiService
    // private _formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.apiService.read().subscribe(data => {
      data.data.forEach(res => {
        this.details = res.full_price
        this.city = res.campus.city
        this.logo_url = res.university.logo_url
        this.name = res.course.name
        this.enabled = res.enabled
        console.log(this.details, this.city, this.logo_url, this.name, this.enabled)
        this.DATA_ARRAY.push({
          'name': res.course.name,
          'city': res.campus.city,
          'full_price': res.full_price,
          'logo_url':  res.university.logo_url,
          'enabled': res.enabled
        })
      });
      console.log(this.DATA_ARRAY)
      this.dataSource = new MatTableDataSource(this.DATA_ARRAY)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}

