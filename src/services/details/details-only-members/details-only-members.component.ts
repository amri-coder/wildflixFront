import {Component, Input} from '@angular/core';
import {DetailsOnlyMembers} from "../../../interfaces/details-only-members";

@Component({
  selector: 'app-details-only-members',
  templateUrl: './details-only-members.component.html',
  styleUrls: ['./details-only-members.component.scss']
})
export class DetailsOnlyMembersComponent {
  @Input() detailsOnlyMembers! : DetailsOnlyMembers;
}
