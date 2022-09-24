import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  model : any = {};
  
  constructor(private http:HttpClient , private toastr:ToastrService) { }


  login(email : string , password : string){
   
    this.model.email= email;
    this.model.password=password;
    return this.http.post(environment.apiUrl+"login",this.model)
    .pipe(map((user : any)=>{

      if(user){
        sessionStorage.setItem('currentUser',JSON.stringify(user))
        console.log(user)
      }else{
        this.toastr.error("Kullanıcı adı veya şifre hatalı")
      }
      
    }));
  }

}
