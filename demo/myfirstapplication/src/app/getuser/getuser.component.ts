import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {
resultat:any;
  constructor(private usersservice:UsersService) { }

  ngOnInit(): void {
    this.usersservice.getAlluser().subscribe((res1: any) => {
      this.resultat = res1.data;

      console.log(this.resultat);
    });

  }

}
