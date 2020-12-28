import { ProduitService } from './../services/produit.service';
import { UsersService } from './../services/users.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email: any;
  Password: any;
  constructor(private route: ActivatedRoute, private router: Router, private loginservice: UsersService,
    private produitservice: ProduitService) {

  }


  ngOnInit(): void {
  }
  goToHome() {

    this.router.navigate(['/home']);
  }
  login1(form: NgForm) {

    console.log(this.Email, this.Password);
    const data = {
      email: this.Email,
      password: this.Password
    };

    this.loginservice.login(data).subscribe((res: any) => {
      console.log(res);
      if (res.message === 'Invalid email') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'mail went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }

      if (res.message === 'Invalid password') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'password went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }
      if (res.message === 'user found') {
        //this.router.navigate(['/home']);
        localStorage.setItem('userconnect',JSON.stringify(res['data']))

      }
      else {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'somthing went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })

      }
    })
  }

}
