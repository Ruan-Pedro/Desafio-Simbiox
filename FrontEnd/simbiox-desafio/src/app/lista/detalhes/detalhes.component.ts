import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.sass']
})
export class DetalhesComponent implements OnInit {

  url_img:string = 'https://logoeps.com/wp-content/uploads/2013/06/unip-vector-logo.png'
  curso:string = 'Análise e desenvolvimento de sistemas'
  level:string = 'Hard'
  nomeUniv:string = 'Unip'
  ScoreUniv:number = 100
  nomeCampus:string = 'Simbiox'
  cityCampus:string = 'São Paulo'
  full_price:number = 500
  constructor() { }

  ngOnInit(): void {
  }

}
