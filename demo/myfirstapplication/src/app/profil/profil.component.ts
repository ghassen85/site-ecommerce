import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
user:any;
userjson:any;
a:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
 this.user=localStorage.getItem('userconnect');

 this.userjson=JSON.parse(this.user)['user']
 console.log(this.userjson)
  }
  remove(){
    this.user=localStorage.clear();

    this.router.navigate(['/'])
  }

}
