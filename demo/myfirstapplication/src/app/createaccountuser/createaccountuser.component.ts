import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createaccountuser',
  templateUrl: './createaccountuser.component.html',
  styleUrls: ['./createaccountuser.component.css']
})
export class CreateaccountuserComponent implements OnInit {
  userform:FormGroup;
  submitted = false;
  fileToUpload: any =null;

  constructor(private userservice:UsersService, private fromBuilder: FormBuilder) {
    this.userform = this.fromBuilder.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    image: ['', Validators.required],
}, {
    validator: this.MustMatch('password', 'confirmPassword')
}); }

  ngOnInit(): void {
  }
  get f(){return this.userform.controls;}
  onReset() {
    this.submitted = false;
    this.userform.reset();
  }
  uploadimage(event : any) {

    this.fileToUpload = (event.target).files[0];
    console.log(this.fileToUpload);

  }
  AjouteUser(){
    const formdata = new FormData();
    formdata.append('name', this.userform.value.name);
    formdata.append('lastname', this.userform.value.lastname);
    formdata.append('email', this.userform.value.email);
    formdata.append('password', this.userform.value.password);
    formdata.append('number', this.userform.value.number);
    formdata.append('image', this.fileToUpload);


    this.submitted = true;

    // stop here if form is invalid
    if (this.userform.invalid) {
      return;
    }
    console.log(this.userform.value);
    // display form values on success
    this.userservice.adduser(formdata).subscribe(res => {
      console.log(res);
    });
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

}
