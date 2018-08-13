import { Component, OnInit } from '@angular/core';
import { OuthService } from '../Service/outh.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(public AuthSer: OuthService) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.AuthSer.CreateUser (this.email, this.password)
    .then( (res) => {
      console.log('Se creo un usuario y contrasena exitoso');
      console.log(res);
    }).catch( (err) => {
      console.log('Error al crear usuario');
      console.log(err);
    });
  }
}
