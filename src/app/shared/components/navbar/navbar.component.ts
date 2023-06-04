import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'amoba-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  /**
   * Játék újra töltésének jelzése
   */
  @Output()
  gameReload = new EventEmitter<boolean>();

  /**
   * Új játék létrehozásának jelzése
   */
  @Output()
  newGame = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  /**
   * Játékos kiléptetése
   */
  logout(): void {
    localStorage.removeItem("amoba");
    this.router.navigate(['']);
  }
}
