import { Component } from '@angular/core';

@Component({
  selector: 'app-videos-all-users',
  templateUrl: './videos-all-users.component.html',
  styleUrls: ['./videos-all-users.component.scss']
})
export class VideosAllUsersComponent {
  currentSection = 'home';

  constructor() { }

  ngOnInit(): void {

  }
  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar') as HTMLInputElement;
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }

    const mybutton = document.getElementById("back-to-top") as HTMLInputElement;
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }

  }
  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarSupportedContent')?.classList.toggle('show');
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

}
