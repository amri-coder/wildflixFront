import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  email: string = '';
  firstname: string = '';
  lastname: string = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userMe().subscribe((response) => {
      this.email = response.email;
      this.firstname = response.firstname;
      this.lastname = response.lastname;
    });
  }

}
