import { Component, EventEmitter, Output } from '@angular/core';
import { ICON_CLASSES } from 'src/app/core/constans/data';
import { GameSettingsService } from 'src/app/shared/services/game-settings.service';

@Component({
  selector: 'amoba-player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.scss']
})
export class PlayerSettingsComponent {

   /**
   * Kiválasztható jelölők
   */
   icons = ICON_CLASSES;

  constructor(public gameSettingsService: GameSettingsService) {}
}
