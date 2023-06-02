import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { dataDB } from 'src/app/models/typeData';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  tamanhoListaUser:dataDB | any;

  userId: number | any = ''

  dadosUser: dataDB | any;


  constructor(
    private fb:FormBuilder, 
    private dadosService: ListService, 
    private actRoute:ActivatedRoute, 
    private router:Router){ 

    this.userForm = this.fb.group({
      id:0,
      nome: '',
      sobrenome:'',
      idade:0,
      profissao:''
    })
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params =>{
      this.userId = params.get('id')
      console.log(this.userId)
      if(this.userId > 0){
        this.dadosService.getUser(this.userId).subscribe(response=>{
          this.dadosUser = response
          this.userForm.patchValue({
            id: this.dadosUser.id,
            nome: this.dadosUser.nome,
            sobrenome:this.dadosUser.sobrenome,
            idade:this.dadosUser.idade,
            profissao:this.dadosUser.profissao
          })
        })
      }
    })

    this.numberOfUsers()
   
  }

  numberOfUsers(){
    this.dadosService.getList().subscribe(result =>{
      this.tamanhoListaUser = result.length;
      
    })
  }

  createUser(){
    this.userForm.get('id')?.patchValue(this.tamanhoListaUser + 1)
    this.dadosService.postUser(this.userForm.value).subscribe(result =>{
      console.log(`Usuário ${result.nome} ${result.sobrenome} cadastrado com sucesso`)
    })
    this.router.navigate(['/listUsers'])
  }

  updateUser(){
    this.dadosService.updateUser(this.userId, this.userForm.value).subscribe(result =>{
      console.log(`Usuário ${result.nome} ${result.sobrenome} atualizado com sucesso`)
    })
    this.router.navigate(['/listUsers'])
  }

  actionButton(){
    if(this.userId > 0){
      this.updateUser()
      console.log('update')
     
    }else{
      this.createUser()
      console.log("create")
    }

  }

}

