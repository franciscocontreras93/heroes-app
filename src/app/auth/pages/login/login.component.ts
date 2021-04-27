import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private service:AuthService
    ) { }

  ngOnInit(): void {
  }


  login() {

   this.service.login().subscribe(
     (resp) => {
       if(resp.id) {
         this.router.navigate(['./heroes'])
         console.log(resp)
       }
     } 
     

   )
   
    

  }
}
