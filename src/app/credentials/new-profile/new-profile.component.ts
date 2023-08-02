import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.sass']
})
export class NewProfileComponent {
  newProfile: FormGroup;

  constructor(private router: Router, private fb: FormBuilder){
    this.newProfile= this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.email , Validators.required]],
      password: ["", [Validators.minLength(8), Validators.required]]

    })
  }

}
