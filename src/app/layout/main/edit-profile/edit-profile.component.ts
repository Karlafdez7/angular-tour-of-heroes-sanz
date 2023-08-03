import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
export interface DialogData {
  username: string;
  email: string
}


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.sass']
})
export class EditProfileComponent {
  @Output() saveClick = new EventEmitter<void>();

  save() {
    this.saveClick.emit();
  }
  // message= true;
  
  constructor(
    public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  // showMessage(): void {
    
  //   setTimeout(() => {
  //     this.message = false;
  //   }, 5000);
  // }
}
