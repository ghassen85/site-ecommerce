import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private htpp: HttpClient) {

  }
  login(data: any) {
    return this.htpp.post(environment.host + '/users/login2', data);
  }
  adduser(data : any){
    return this.htpp.post(environment.host+'/users//addUpload',data)
  }
  getAlluser(){
    return this.htpp.get(environment.host+'/users/getAll')
  }
}
