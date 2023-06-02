import { Component, OnInit } from '@angular/core';
import { dataDB } from 'src/app/models/typeData';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  listaCadstro: dataDB | any;

  constructor(private dadosLista:ListService) { 
   
  }

  ngOnInit(): void {
    this.getList();               /* NECESSARIO CHAMAR O METODO */

  }

  getList():void{
    this.dadosLista.getList().subscribe(response=>{
      this.listaCadstro = response
    })
  }

 
  deleteUser(id:number):void{
    this.dadosLista.deleteUser(id).subscribe(response=>{
      console.log('Usuário deletado')
    })
    
    this.getList();
  }

}
