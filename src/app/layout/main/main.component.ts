import { Component, OnInit } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
})
export class MainComponent {

  username: string = '';
  email: string = '';
  oldPassword: string = '';
  newPassword: string = '';
  repeatNewPassword: string = '';
  message = false;

  showMessage(): void {
    this.message= true;
    setTimeout(() => {
      this.message = false;
    }, 5000);
  }

  saveClick(): void{
    this.showMessage();
  }

  constructor(public dialog: MatDialog) {}

  openEdit(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      height: '400px',
      width: '600px',
      data: {username: this.username, email: this.email}
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.username = result.username;
      this.email = result.email;
    });
  }

  

  openPassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      height: '400px',
      width: '600px',
      data: {oldPassword: this.oldPassword, 
        newPassword: this.newPassword, 
        repeatNewPassword: this.repeatNewPassword}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newPassword = result;
    });
  }
}
