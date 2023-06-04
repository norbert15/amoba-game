import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICON_CLASSES } from 'src/app/core/constans/data';
import { PlayerModel } from 'src/app/shared/models/player-model';
import { GameSettingsService } from 'src/app/shared/services/game-settings.service';

@Component({
  selector: 'amoba-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  /**
   * Játékosok száma
   */
  playerCount: number = 2;

  /**
   * Játék indítása
   */
  @Output()
  start = new EventEmitter<boolean>();

  constructor(
    public gameSettingsService: GameSettingsService, 
    private elementRef: ElementRef,
    private router: Router) {
      this.playerCount = gameSettingsService.players.length
    }

  /**
   * A játékosok számának minden módosításakor ellenőrzi hogy a bevit
   * karakter valid-e
   * - maximum 12 játékos, ha túllépi akkor a megadható érték a maximum lesz
   * - minimum 2 játékos (egyedül nem vicces), ha kisebb vagy null akkor a megadható
   * érték a minimum lesz
   * 
   * @param {any} event - kiváltó esemény (input)
   */
  onChangeSetPlayers(event: any): void {
    // Az aktívan kiválasztótt játékos indexének visszaállítása az alapértelmezetté,
    // akkor érvényes, hogy ha több az index mint a játékosok száma.
    if (this.gameSettingsService.selectedPlayerId > this.playerCount) {
      this.gameSettingsService.selectedPlayerId = -1;
    }

    // Játékosok számának ellenőrzése és visszaállítása
    if (!this.playerCount || this.playerCount < 2) {
      this.playerCount = 2;
      event.target.value = 2;

    } else if (this.playerCount > 12) {
      event.target.value = 12;
      this.playerCount = 12;
    }

    // Új játékos felvétele
    for (let index = 1; index <= this.playerCount; index++) {
      if (index > this.gameSettingsService.players.length) {
        this.gameSettingsService.players.push({
          color: "#ffffff",
          icon: ICON_CLASSES[index - 1],
          id: index,
          name: 'Játékos' + index
        });
      }
    }

    // Ha a különbség kisebb mint 0 a játékosok száma és a játékosok listája között,
    // akkor törölni kell a különbséget a játékosok listájából
    const difference: number = this.playerCount - this.gameSettingsService.players.length;

    if (difference < 0) {
      this.gameSettingsService.players.splice((this.playerCount), Math.abs(difference));
    }

    // Pálya méretének módosítása játékosok számának függőségétől
    if (this.gameSettingsService.mapSize <= this.gameSettingsService.players.length) {
      this.gameSettingsService.mapSize = this.gameSettingsService.players.length + 1;
      this.elementRef.nativeElement.querySelector("#map-size").value = this.gameSettingsService.players.length + 1;

      // Számláló módosítása
      if (this.gameSettingsService.counter > this.gameSettingsService.mapSize) {
        this.gameSettingsService.counter = this.gameSettingsService.mapSize;
        this.elementRef.nativeElement.querySelector("#counter").value = this.gameSettingsService.mapSize;
      }
    }
  }

  /**
   * Pálya méretének minden változása esetén ellenőrzí hogy a bevit
   * karakter valid-e,
   * - ha túllépi a maximumot (50-et) akkor a megadható méret a maximum lesz
   * - ha kisebb mint a minimum (játékosok száma + 1) vagy null akkor 
   * megadható méret a minimum lesz  
   * 
   * @param {any} event - kiváltó esemény (input)
   */
  onChangeCheckSize(event: any): void {
    if (!this.gameSettingsService.mapSize || this.gameSettingsService.mapSize < (this.gameSettingsService.players.length + 1)) {
      this.gameSettingsService.mapSize = this.gameSettingsService.players.length + 1;
      event.target.value = this.gameSettingsService.players.length + 1;

    } else if (this.gameSettingsService.mapSize > 50) {
      this.gameSettingsService.mapSize = 50;
      event.target.value = 50;
    }

    // Számláló módosítása
    if (this.gameSettingsService.counter > this.gameSettingsService.mapSize) {
      this.gameSettingsService.counter = this.gameSettingsService.mapSize;
      this.elementRef.nativeElement.querySelector("#counter").value = this.gameSettingsService.mapSize;
    }
  }

  /**
   * Játék inditása előtt ellenőrzi, hogy a játékos nevek validak-e,
   * hiányzó játékos név esetén a "Játék indítása" gomb fölött egy 
   * hiba üzenet jelenik meg, különben a játék elindul
   */
  checkBeforeStart(): void {
    const invalidElement: HTMLElement = this.elementRef.nativeElement.querySelector("#invalid");
    let invalid: boolean = false;

    // Hiányzó játékos név keresése
    this.gameSettingsService.players.forEach((player: PlayerModel) => {
      if (!player.name) {
        invalid = true;
      }
    });

    // Hiba üzenet megjelenítése, elrejtése
    if (!invalid) {
      invalidElement.classList.add("d-none");
      this.start.emit(true);
    } else {
      invalidElement.classList.remove("d-none");
    }
  }

  /**
   * A számláló minden változása esetén ellenőrzí hogy a bevit
   * karakter valid-e,
   * - a számláló nem lehet nagyobb mint a pálya mérete, mert akkor esélytelen nyerni,
   * - a számláló nem lehet nagyobb mint 50.
   * - a számláló nem lehet kisebb mint 3 vagy null
   * 
   * @param {any} event - kiváltó esemény (input)
   */
  onChangeSetCounter(event: any): void {
    if (!this.gameSettingsService.counter || this.gameSettingsService.counter < 3) {
      this.gameSettingsService.counter = 3;
      event.target.value = 3;
    } else if (this.gameSettingsService.counter > this.gameSettingsService.mapSize) {
      this.gameSettingsService.counter = this.gameSettingsService.mapSize;
      event.target.value = this.gameSettingsService.mapSize;
    }
    else if (this.gameSettingsService.counter > 50) {
      this.gameSettingsService.counter = 50;
      event.target.value = 50;
    } 
  }

  /**
   * Játékos kiléptetése
   */
  logout(): void {
    localStorage.removeItem("amoba");
    this.router.navigate(['']);
  }
}
