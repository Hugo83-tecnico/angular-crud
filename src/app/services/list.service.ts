import { Injectable } from '@angular/core';
import { dataDB } from '../models/typeData';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private baseUrl:string = '';  /* Novo crair cabeçalho */

  httpOptions = {
    headers : new Headers({
      'Content-type': 'application/json',
      'token': '123456'
    })
  }

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:3004/results';
  }

  /* GET-OBTEM A LISTA DE USUARIOS  */
  getList():Observable<dataDB[]>{
    return this.http.get<dataDB[]>(`${this.baseUrl}`) /* NÃO HOUVE A NECESSIDADE DE ARMAZENAR EM UMA VARIAVEL */
   
  }

  /* POST- SALVA UM USUARIO NO BANCO DE DADOS */
  postUser(user:dataDB):Observable<dataDB>{
    return this.http.post<dataDB>(this.baseUrl,user)
  }

 
  /* DELETE- DELETA USUARIO NO BANCO DE DADOS*/
  deleteUser(id:number):Observable<dataDB>{
    return this.http.delete<dataDB>(`${this.baseUrl}/${id}`)
  }

  /* UPDATE - ATUALIZA USUARIO */
  updateUser(id:number, user:dataDB):Observable<dataDB>{
    return this.http.put<dataDB>(`${this.baseUrl}/${id}/`,user);
  }

  /* OBTER APENAS UM USUARIO */
  getUser(id:number):Observable<dataDB[]>{
    return this.http.get<dataDB[]>(`${this.baseUrl}/${id}`) 
   
  }

}
