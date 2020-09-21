import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { MEMBERS } from '../models/members';

@Component({
  selector: 'app-mana',
  templateUrl: './mana.component.html',
  styleUrls: ['./mana.component.css']
})
export class ManaComponent implements OnInit {

  members: Member[];

  constructor() { }

  ngOnInit() {
    this.members = MEMBERS;
  }
}
