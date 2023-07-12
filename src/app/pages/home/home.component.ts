import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  email: string = '';
  firstname: string = '';
  lastname: string = '';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.email = this.authService.getEmail();
    this.firstname = this.authService.getFirstname();
    this.lastname = this.authService.getLastname();
  }
}
