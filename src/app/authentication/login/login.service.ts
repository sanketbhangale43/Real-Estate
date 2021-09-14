import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiUrls } from 'src/app/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loading = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private cookieService: CookieService
  ) { }

  lognForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  login(): void {
    if (this.lognForm.valid) {
      this.loading = true;
      const formdata = this.lognForm.value;

      // Request
      const requestObservable = this.http.post<any>(
        ApiUrls.LoginApi, formdata,
        {
          observe: 'response', headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      // Response
      requestObservable.subscribe(
        res => {
          this.loading = false;
          if (res.status === 200) {
            if (res.body.msg === 'success') {
              // Get and set the token
              const token = res.body.token;
              this.cookieService.set('token', token);

              // Navigate to the dashboard
              this.router.navigate(['/dashboard']);
            }

            if (res.body.msg === 'invalid credentials') {
              this.lognForm.reset();
              this.snackBar.open('Invalid credentials', '', { duration: 2000 });
            }
          }

          if (res.status === 500 && res.body.msg === 'failed') {
            this.snackBar.open('Something goes wrong! Please try again', '', { duration: 2000 });
          }
        },
        err => {
          this.loading = false;
        },
      );
    } else {
      this.loading = false;
      this.snackBar.open('Please fill all the fields carefully', '', { duration: 2000 });
    }
  }
}
