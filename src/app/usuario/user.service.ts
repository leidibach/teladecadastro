import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  async cadastrar(user: Usuario) {
    return await this.http.post('https://petstore.swagger.io/v2/user',user).toPromise()
  }
}
