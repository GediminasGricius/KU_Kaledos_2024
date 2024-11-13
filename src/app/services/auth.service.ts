import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseData } from '../models/authResponseData';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public idToken:string="";

  constructor(private http:HttpClient) { }


  public login(email:string, password:string, isLogin:boolean){

      const authType=isLogin?"signInWithPassword":"signUp";
      
      
    
      console.log(authType);
      return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:'+authType+'?key=AIzaSyA156lESk7uItrSKe-ysck1J2ZTsW0dJrQ',{
        email:email,
        password:password,
        returnSecureToken:true
      }).pipe(tap((response)=>{
        this.idToken=response.idToken;

      }));
      

  }
}
