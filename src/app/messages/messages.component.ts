import { Component, OnInit, Input } from '@angular/core';
import {MessageService} from '../message.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent {
  @Input() selectedHero: Hero | undefined = undefined;

  constructor(public messageService: MessageService) {}
  ngOnInit() {}
}
