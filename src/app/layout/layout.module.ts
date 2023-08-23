import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { SelectedDetailsComponent } from './post/list/selected-details/selected-details.component';
import { FilterSelectedDetailsComponent } from './post/component/filter-selected-details/filter-selected-details.component';


import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { VehicleComponent } from './vehicle/vehicle.component';
// import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatTableModule } from '@angular/material/table';
import { SearchBarModule } from './search-bar/search-bar.module';



@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    NewHeroComponent,
    SelectedDetailsComponent,
    FilterSelectedDetailsComponent,
    VehicleComponent,
    // SearchBarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    SearchBarModule,
  ]
})
export class LayoutModule { }
