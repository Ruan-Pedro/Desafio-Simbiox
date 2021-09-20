import { ApiService } from './../../services/api.service';
import { ApiModel, Course, University, Campus } from '../../models/api-model'
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {
  DATA_ARRAY: any = []
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

  ) {
    //  const users = Array.from({length: 100}, (_, k) => createNewCurso(k + 1));

    // // Assign the data to the data source for the table to render
    //  this.dataSource = new MatTableDataSource(users);
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
//   private filterBrands(value: string): string[] {
//     let filterValue = value.toLocaleLowerCase();
//     return this.brands.filter(brand =>
//     brand.toLocaleLowerCase().includes(filterValue)
//   );
// }
  ngOnInit(): void {

    // this.brandAC = this.brandField.valueChanges.pipe(
		// 	startWith(''),
		// 	map(value => this.filterBrands(value))
		// );

    // this.searchFilters = this._formBuilder.group({
    //   CodigoPedido:[],
    //   StatusPedido:[''],
    //   CriacaoMin:[],
    //   CriacaoMax:[],
    //   EntregaMin:[],
    //   EntregaMax:[]
    // })

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
      console.log(this.DATA_ARRAY,'fon')
    })
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource = new MatTableDataSource(this.DATA_ARRAY)

  //   function createNewCurso(full_price: number): CursoDetails {
  //     const nameX = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
  //       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
  //     return {
  //       name: nameX.toString(),
  //       city: nameX,
  //       full_price: Math.round(Math.random() * 100),
  //       logo_url: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  //       enabled:true
  // }

  // }
}

}

