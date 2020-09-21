import { Injectable } from '@angular/core';
import { Member } from '../models/member';
import { MEMBERS } from '../models/members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor() { }
  getMembers(): Member[]{
    return MEMBERS;
  }
  getMemberDetail(id: number): Member {
    return MEMBERS.find( (member: Member) => member.id = id );
  }
}
