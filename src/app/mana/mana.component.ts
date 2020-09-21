import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-mana',
  templateUrl: './mana.component.html',
  styleUrls: ['./mana.component.css']
})
export class ManaComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.members = this.memberService.getMembers();
  }
}
