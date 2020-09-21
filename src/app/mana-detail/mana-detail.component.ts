import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-mana-detail',
  templateUrl: './mana-detail.component.html',
  styleUrls: ['./mana-detail.component.css']
})
export class ManaDetailComponent implements OnInit {

  member: Member;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    this.data = this.route.data;
    this.getMember();
  }

  getMember(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.member = this.memberService.getMemberDetail(id);
  }
}
