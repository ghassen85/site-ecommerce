import { ActivatedRoute } from '@angular/router';
import { ProduitService } from './../../services/produit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailsproduits',
  templateUrl: './detailsproduits.component.html',
  styleUrls: ['./detailsproduits.component.css']
})
export class DetailsproduitsComponent implements OnInit {
  id;
  details:any;
  name:any;

  constructor( private produitservice: ProduitService,private activeroute : ActivatedRoute) {
    this.id = this.activeroute.snapshot.params.id;
   }

  ngOnInit(): void {
    console.log(this.id)
    this.getOneProduit(this.id)

  }
  getOneProduit(id :any){
    this.produitservice.getOneproduit(id).subscribe((res3 :any )=>{

      this.details=res3['data'];
      console.log(this.details);
    })
  }



}
