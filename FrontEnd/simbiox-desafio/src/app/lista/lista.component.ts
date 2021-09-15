import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {

  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.read().subscribe( apiData =>{
      console.log(apiData.data[0].full_price)
    })
  }

}
