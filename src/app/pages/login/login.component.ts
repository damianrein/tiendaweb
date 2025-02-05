import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  login(): void {
    this.http.post<{ token: string }>('http://localhost:8080/auth/login', { email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          this.authService.setToken(response.token);
          this.router.navigate(['/home']); // Redirigir después del login
        },
        error: (err) => {
          console.error('Error en el login', err);
        }
      });
  }

  ngOnInit(): void {
  }

}
