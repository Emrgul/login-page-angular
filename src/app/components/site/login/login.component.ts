import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators , FormGroup , FormControl , FormBuilder  } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup ;

  constructor(private router:Router , private formBuilder:FormBuilder , private userService:UserService) { }

  ngOnInit(): void {

    this.createLoginForm();
    
  }


  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  


  login(){

    if(this.loginForm.valid){

      this.userService.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value)
      .pipe(first())
      .subscribe(data =>{
        this.router.navigate(["home"])
     } )

    }else{
      console.log("valid olamadın")
    }
    



   
  }
}
