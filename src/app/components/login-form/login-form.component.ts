import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  public email:string|null=null;
  public password:string|null=null;
  public isLogin:boolean=true;

  public constructor(private auth:AuthService, private router:Router){

  }

  public login(){
    if (this.email!=null && this.password!=null){
      this.auth.login(this.email,this.password, this.isLogin).subscribe((data)=>{
       this.router.navigate(['list']);
      });

    }
  }

}
