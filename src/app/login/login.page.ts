import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from './../model/User';
import { LoginService } from './../service/login-service/login.service';
import { Component, OnInit } from '@angular/core';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user !: User;
  constructor(private loginService: LoginService, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.messageService.add({severity:'error', summary:"hola", life:2000});
  }

  login(){
    if (this.loginService.validateUser(this.user)== HttpStatusCode.Ok){
      //this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
      this.router.navigate(['home']);
    }else {
      this.messageService.add({severity:'error', summary:'Usuario y/o Contraseña incorrecta',detail:'Verifique los datos ingresados.', life:2000});
    }
  }

}
