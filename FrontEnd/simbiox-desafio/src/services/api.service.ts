import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiModel } from '../models/api-model'
const BASE_URL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  read():Observable<{data:ApiModel[]}>{
    return this.http.get<{data:ApiModel[]}>(`${BASE_URL}`)
  }
}
