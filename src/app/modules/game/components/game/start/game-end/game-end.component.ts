import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogoutService } from 'src/app/shared/services/logout.service';

@Component({
  selector: 'amoba-game-end',
  templateUrl: './game-end.component.html',
  styleUrls: ['./game-end.component.scss']
})
export class GameEndComponent {

  /**
   * Győztes játékos neve, mely a szülő komponenből kerül átadásra
   */
  @Input()
  winner: string = "";

  /**
   * A pálya megtelt-e
   */
  @Input()
  isDraw: boolean = false;

  /**
   * Játék újra kezdésének elindítása
   */
  @Output()
  gameReload = new EventEmitter<boolean>();

  /**
   * Új játék kezdése
   */
  @Output()
  newGame = new EventEmitter<boolean>();

  constructor(public logoutService: LogoutService) {}
}
