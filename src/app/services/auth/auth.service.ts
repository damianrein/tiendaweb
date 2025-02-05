import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKEN_KEY = 'authToken';

  constructor() {}

  // Guarda el token en sessionStorage
  setToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  // Obtiene el token desde sessionStorage
  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  // Elimina el token para cerrar sesión
  logout(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
}
