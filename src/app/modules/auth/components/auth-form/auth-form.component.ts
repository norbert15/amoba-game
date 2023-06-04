import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PASSWORD, USERNAME } from 'src/app/core/constans/data';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {

  /**
   * Sikertelen bejelentkezés
   */
  isFailed: boolean = false;

  /**
   * Megadott felhasználónév
   */
  username: string = "";

  /**
   * Megadott jelszó
   */
  password: string = "";

  constructor(private router: Router) {}

  /**
   * Bejelentkezés validálása
   */
  login(): void {
    if (this.username == USERNAME && this.password == PASSWORD) {
      localStorage.setItem("amoba", this.username);
      this.router.navigate(["game"]);

    } else {
      this.isFailed = true;
    }

  }
}
