import { Component, ElementRef, EventEmitter, OnInit, Output  } from '@angular/core';
import { DIRECTIONS } from 'src/app/core/constans/data';
import { PlayerModel } from 'src/app/shared/models/player-model';
import { TableModel } from 'src/app/shared/models/table-model';
import { GameSettingsService } from 'src/app/shared/services/game-settings.service';

@Component({
  selector: 'amoba-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  /**
   * Pálya mely tartalmazza a mező adatait
   */
  table: TableModel[][] = [];

  /**
   * Lépés számláló
   */
  moveCounter: number = 0;

  /**
   * Körök száma
   */
  round: number = 1;

  /**
   * Következő játékos indexe
   */
  currentPlayerIndex: number = 0;

  /**
   * Játék állapota
   */
  isGameEnd: boolean = false;

  /**
   * Győztes játékos neve
   */
  winner: string = "";

  /**
   * Gyöztes lépések
   */
  winnerPositions: string[] = [];

  /**
   * Győztes írány
   */
  winnerDirectionClass: string = "";

  /**
   * Új játék kezdés
   */
  @Output()
  newGame = new EventEmitter<boolean>();

  constructor(public gameSettingsService: GameSettingsService, private elementRef: ElementRef) {
  }

  /**
   * 
   * @returns {boolean} A pálya megtelt-e
   */
  isTableFull(): boolean {
    return this.moveCounter === Math.pow(this.table.length, 2);
  }

  /**
   * Játékos lépésének beállítása paraméterben megadott sor és oszlop alapján.
   * 
   * @param {number} row - aktuális sor
   * @param {number} col - aktuális oszlop
   */
  playerMove(row: number, col: number): void {
    // Ha a játék véget ért ne fusson tovább
    if (this.isGameEnd) {
      return;
    }

    // Aktuális játékos
    const currentPlayer: PlayerModel = this.gameSettingsService.players[this.currentPlayerIndex];

    // Tábla adatainak beállítása
    this.table[row][col].color = currentPlayer.color;
    this.table[row][col].icon = currentPlayer.icon;
    this.table[row][col].playerId = currentPlayer.id;
    this.table[row][col].isOccupied = true;

    // Lépés számláló
    this.moveCounter++;

    // Játék állapotának ellenőrzése, hogy a lépéssel véget ért-e a játék
    for (let i = 0; i < this.table.length; i++) {
      for (let j = 0; j < this.table[i].length; j++) {
        DIRECTIONS.forEach(directon => {
          if (this.afterMoveCheckWinner(i, j, currentPlayer, directon.items)) {
            this.isGameEnd = true;
            this.winner = currentPlayer.name;
            this.winnerDirectionClass = directon.class;
            this.elementRef.nativeElement.querySelector("#open-modal").click();
            return;
          }

          if (!this.isGameEnd) {
            this.winnerPositions = [];
          }
        });

        if (this.isGameEnd) {
          return;
        }
      }   
      
      if (this.isGameEnd) {
        return;
      }
    }

    // Ha elfogytak a mezők
    if (this.isTableFull()) {
      this.winner = "Döntetlen";
      this.isGameEnd = true;
      this.elementRef.nativeElement.querySelector("#open-modal").click();
      return;
    }

    // Ha a játék véget ért ne fusson tovább
    if (this.isGameEnd) {
      return;
    }

    // Következő játékos és körök számának változtatása
    if ((this.currentPlayerIndex + 1) >= this.gameSettingsService.players.length) {
      this.currentPlayerIndex = 0;
      this.round++;
    } else {
      this.currentPlayerIndex++;
    }
  }

  /**
   * Játék állapotának ellenőrzése rekurzióval. Paraméterben megadott adatok alapján ellenőrzi, hogy
   * az adot sor és oszlopon az aktuális játékosnak elhelyzett jelölője szerepel, ha igen újra meg hívja
   * magát és a direction alapján módosítsa a sor és oszlopoka.
   * 
   * @param {number} row - akutális sor 
   * @param {number} col - akutális oszlop
   * @param {PlayerModel} player - aktuális játékos
   * @param {number[]} direction - írány, mely a sor és oszlopok értékét növelik pl: [1, 0] függőlegesen
   * @param {number} prevCount - előző számláló értéke, 5 találat esetén nyert a játékos 
   * @returns {boolean} true ha a játék véget ért, false ha még nincs találat
   */
  afterMoveCheckWinner(
    row: number, 
    col: number, 
    player: PlayerModel, 
    direction: number[], 
    prevCount: number = 0
  ): boolean {
    if (row > this.table.length - 1 || col > this.table.length - 1 || col < 0 || row < 0) {
      return false;
    }

    let count: number = prevCount;

    if (count === this.gameSettingsService.counter) {
      return true;
    }

    if (this.table[row][col].playerId === player.id) {
      count++;

      if (this.winnerPositions.length < this.gameSettingsService.counter) {
        this.winnerPositions.push(`${row}-${col}`)
      }
      
    } else {
      return false;
    }

    /* if (count === this.gameSettingsService.counter) {
      return true;
    } */

    const [rowD, colD] = direction;

    return this.afterMoveCheckWinner(row + rowD, col + colD, player, direction, count);
  }

  /**
   * Pálya létrehozása, alapértelmezett adatok beállítása
   */
  start(): void {
    const SIZE: number = this.gameSettingsService.mapSize;
    this.table = [];
    this.round = 1;
    this.currentPlayerIndex = 0;
    this.winnerPositions = [];
    this.winnerDirectionClass = "";
    this.winner = "";
    this.moveCounter = 0;
    this.isGameEnd = false;

    for (let row = 0; row < SIZE; row++) {

      let rowTable: TableModel[] = [];

      for (let col = 0; col < SIZE; col++) {
        rowTable.push({
          id: `${row}-${col}`,
          isOccupied: false,
          icon: '',
          color: '',
          playerId: -1
        })
      }      

      this.table.push(rowTable);
    }
  }

  ngOnInit(): void {
    this.start();
  }
}
