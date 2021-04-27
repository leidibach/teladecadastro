import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { Usuario } from './usuario.model'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;

  form: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    firstName: ['', []],
    lastName: ['', []],
    email: ['', [Validators.required, Validators.email]],
    password: ['', []],
    phone: ['', []],
    userStatus: ['', []]
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
  ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  async registrar() {
    if (this.form.invalid) {
      alert("Deu ruim")
    } else {
      this.usuario = new Usuario()
      this.usuario.username = this.form.controls.username.value;
      this.usuario.lastName = this.form.controls.lastName.value;
      this.usuario.phone = this.form.controls.phone.value;
      this.usuario.userStatus = this.form.controls.userStatus.value;
      this.usuario.email = this.form.controls.email.value;
      this.usuario.password = this.form.controls.password.value;
      this.usuario.firstName = this.form.controls.firstName.value;
      alert("Deu boa")

      await this.service.cadastrar(this.usuario)
    }

  }
}
