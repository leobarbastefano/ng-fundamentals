import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession } from '../shared/index';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';


@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styles: ['collapsible-well h6 {margin-top: -5px; margin-botton:10px;}']
})

export class SessionListComponent implements OnChanges {

   @Input() sessions: ISession[];
   @Input() filterBy: string;
   @Input() sortBy: string;
   @Input() eventId: number;
   visibleSessions: ISession[] = [];

   constructor(public auth: AuthService, private voterService: VoterService) {

   }

   ngOnChanges() {
     if (this.sessions) {
       this.filterSessions(this.filterBy);
       this.sortBy === 'name'
          ? this.visibleSessions.sort(sortByNameAsc)
          : this.visibleSessions.sort(sortByVoteDesc);
     }
   }

   toggleVote(session: ISession) {
     if (this.userHasVoted(session)) {
       this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
     } else {
        this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
     }
     if (this.sortBy === 'votes') {
       this.visibleSessions.sort(sortByVoteDesc);
     }
   }

   userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
   }

  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0); // slice will duplicate(clone) array
    } else {
       this.visibleSessions = this.sessions.filter(
         session => {
           return session.level.toLocaleLowerCase() === filter;
       });
    }
  }

}

// this is outside the class because they don't need to methods of the class
function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
     return -1;
    }
}

function sortByVoteDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
