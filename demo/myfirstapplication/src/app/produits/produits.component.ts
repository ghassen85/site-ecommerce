import { Produit } from './../model/produit';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProduitService } from './../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit , TemplateRef} from '@angular/core';
import Swal from 'sweetalert2';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-produits',

templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],

})
export class ProduitsComponent implements OnInit {
  name: any;
  resultat: any;

  image:any;
  p: number = 1;
  modalRef: BsModalRef ;
  message: any;
  recherche :any;
  produitForm: FormGroup;
  submitted = false;
  fileToUpload: any = null;

produit = new Produit();
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router, private produitservice: ProduitService,private modalService: BsModalService) {
    this.produitForm = this.formBuilder.group({
      name: [''],
      prix: [''],
      description: [''],
      image: ['']
    });

   }

  ngOnInit(): void {
    this.produitservice.getproduit().subscribe((res1: any) => {
      this.resultat = res1.data;

      console.log(this.resultat);
    });
  }
  recupere(name :any,prix :any,description :any,image:any,id:any){
    this.produit.name=name;
    this.produit.prix=prix;
    this.produit.description=description;
    this.produit.image=image;
    this.produit.id=id;
    console.log(this.produit)


  }
  getProduit(){
    this.produitservice.getproduit().subscribe((res5 :any )=>{

      console.log(res5);
    })}
  upadte(){
    this.produitservice.updateproduit(this.produit.id,this.produitForm.value).subscribe(res4 =>{
      console.log(res4);
      this.message = 'Confirmed!';
      this.getProduit();
      this.modalRef.hide();

    })

  }


  delete(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.produitservice.deleteproduit(id).subscribe((res2: any)=>{
          console.log(res2)

        });
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.ngOnInit();

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{class: 'modal-lg'});
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
  get f() {
    return this.produitForm.controls;
  }

  uploadimage(event : any) {

    this.fileToUpload = (event.target).files[0];
    console.log(this.fileToUpload);

  }
  save() {
    const formdata = new FormData();
    formdata.append('name', this.produitForm.value.name);
    formdata.append('prix', this.produitForm.value.prix);
    formdata.append('description', this.produitForm.value.description);
    formdata.append('image', this.fileToUpload);


    this.submitted = true;

    // stop here if form is invalid
    if (this.produitForm.invalid) {
      return;
    }
    console.log(this.produitForm.value);
    // display form values on success
    this.produitservice.save(formdata).subscribe(res => {
      console.log(res);
    });
  }


  onReset() {
    this.submitted = false;
    this.produitForm.reset();
  }


}



