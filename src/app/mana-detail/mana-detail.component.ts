import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { MEMBERS } from '../models/members';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mana-detail',
  templateUrl: './mana-detail.component.html',
  styleUrls: ['./mana-detail.component.css']
})
export class ManaDetailComponent implements OnInit {

  members: Member[];
  member: Member;
  data: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.data = this.route.data;
    this.members = MEMBERS;
    this.member = this.members.find( (member: Member) => member.id = parseInt(id) );
  }
}
