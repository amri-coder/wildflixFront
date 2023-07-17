import { Router } from '@angular/router';
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
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.userMe().subscribe((response) => {
      this.email = response.email;
      this.firstname = response.firstname;
      this.lastname = response.lastname;
    });
  }
  Onclick() {
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
