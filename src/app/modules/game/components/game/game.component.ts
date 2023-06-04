import { Component } from '@angular/core';

@Component({
  selector: 'amoba-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  /**
   * A játék elkezdődőtt-e
   */
  isGameStarted: boolean = false;

}
