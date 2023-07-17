import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {

  ngOnInit() {
    document.getElementById('acceptBtn').addEventListener('click', () => this.acceptCookies());
    document.getElementById('declineBtn').addEventListener('click', () => this.declineCookies());

    if (!localStorage.getItem('cookiesAccepted') && !localStorage.getItem('cookiesDeclined')) {
      const cookieBar = document.getElementById('cookie-bar');
      if (cookieBar) {
        cookieBar.style.display = 'block';
      }
    }
  }

  acceptCookies() {
    if (localStorage) {
      localStorage.setItem('cookiesAccepted', 'true');
    }
    const cookieBar = document.getElementById('cookie-bar');
    if (cookieBar) {
      cookieBar.style.display = 'none';
    }
  }

  declineCookies() {
    if (localStorage) {
      localStorage.setItem('cookiesDeclined', 'true');
    }
    const cookieBar = document.getElementById('cookie-bar');
    if (cookieBar) {
      cookieBar.style.display = 'none';
    }
  }
}

declare const localStorage: Storage;