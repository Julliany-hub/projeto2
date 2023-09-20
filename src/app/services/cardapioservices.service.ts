import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cardapio } from '../home/pages/cardapio/cardapio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardapioservicesService {

  private apiUrl= 'http://localhost:3000/cardapio'

  constructor (private http: HttpClient){ }

  getAll(): Observable<Cardapio[]>{
    return this.http.get<Cardapio[]>(this.apiUrl)
  }

}
