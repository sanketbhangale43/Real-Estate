import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-inner-navbar',
  templateUrl: './inner-navbar.component.html',
  styleUrls: ['./inner-navbar.component.css']
})
export class InnerNavbarComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  logout(): void {
    // Dlete the token
    this.cookieService.delete('token');

    // Navigate to login
    this.router.navigate(['/login']);
  }

}
