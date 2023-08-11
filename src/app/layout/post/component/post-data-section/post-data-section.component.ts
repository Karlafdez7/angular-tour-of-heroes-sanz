import { Component,Input, OnInit } from '@angular/core';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-post-data-section',
  templateUrl: './post-data-section.component.html',
  styleUrls: ['./post-data-section.component.sass']
})
export class PostDataSectionComponent{
  @Input() postDetails!:listModel

}
