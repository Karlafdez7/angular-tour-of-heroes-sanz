import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/list.service';
import listModel from 'src/app/listModel';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

item!:listModel;
listApiId! : number;

constructor(private listService: ListService, private route: ActivatedRoute){
  console.log(this.item);
}

ngOnInit():void{
  this.route.params.subscribe(params => {
    this.listApiId = params['id'];
  if (this.listApiId){
    this.fetchItemDetails()
  }
  })
}

fetchItemDetails(){
  this.listService.getItemId(this.listApiId).subscribe(response =>{
    this.item = response;
    console.log('este es el fetch', this.item)
  });
}
// getItemDetails():void{
//   const id= Number(this.route.snapshot.paramMap.get('id'));

// }

}
