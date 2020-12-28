import { ProduitService } from './../../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  produitForm: FormGroup;
  submitted = false;
  fileToUpload: any = null;
  resultat2:any;



  constructor(private formBuilder: FormBuilder, private produitservice: ProduitService) {
    this.produitForm = this.formBuilder.group({
      name: ['', Validators.required],
      prix: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      souscollection:['', Validators.required]
    });

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
    formdata.append('souscollection',this.produitForm.value.souscollection)



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

  ngOnInit(): void {
    this.getsc();
  }
  getsc(){
    return this.produitservice.getAllsouscollection().subscribe((res:any)=>{
      this.resultat2=res.data
      console.log(this.resultat2)

    })
  }

}

