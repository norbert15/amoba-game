import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  /**
   * Játékos kiléptetése
   */
  logout(): void {
    localStorage.removeItem("amoba");
    this.router.navigate(['']);
  }
}
