import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(100, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SearchBarComponent {

  @Input() dataApi: any
  @Input('placeholder') placeholder!: string;
  @Input('results') results = [];
  // @Input('showListFull') showListFull: boolean = false;
  // @Input('listName') listName!: string;
  
  showResults: boolean;
  searchValue: string | null = ''; 

  searchBarSubscription!: Subscription;

  searchField = new FormControl<string|null>(null, [])

  @Output('getValue') sendValue = new EventEmitter();
  // @Output('itemClicked') itemClicked = new EventEmitter();

  constructor() { 
    this.showResults = false;
  }

  ngOnInit() {
    if (this.searchBarSubscription) this.searchBarSubscription.unsubscribe();
    
    this.searchBarSubscription = this.searchField.valueChanges.subscribe(value => this.searchValue = value);
  }

  // onClickAction(index: any) {
  //   this.showResults = false;
  //   this.itemClicked.emit(index);
  // }

  onSearchValueChange() {
    this.showResults = this.searchValue !== ''? true : false;
    this.sendValue.emit(this.searchValue);
    console.log('onChange',this.searchValue)
  }

  delete() {
    this.searchField.patchValue('');
    this.sendValue.emit('');
  }


}
