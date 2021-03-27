import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../app/services/login.service';
import { AuthService } from '../../app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private loginService:LoginService,
	private authService: AuthService,
	private router:Router
  ) { }

  form = new FormGroup({
		email : new FormControl('', [Validators.required, Validators.email]),
		password : new FormControl()
	});

  onSubmit(): void {
    console.warn(this.form.value);
		if(this.form.valid) {
      debugger
			this.loginService.login(this.form.value).subscribe(data => {
				this.authService.updateAuth(true);
				localStorage.setItem('user', JSON.stringify(data))
				this.loginService.updateUser(data)
				this._snackBar.open("Login Success", "x", {
					duration: 2000,
				});
				this.router.navigate(['/']);
			}, error => {
				this._snackBar.open("Invalid Credentials!", "x", {
					duration: 2000,
				});
			})
		}
  }
}
