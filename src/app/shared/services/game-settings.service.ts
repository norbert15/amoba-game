import { Injectable } from '@angular/core';
import { PlayerModel } from '../models/player-model';
import { ICON_CLASSES } from 'src/app/core/constans/data';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {

  /**
   * Aktív játékosok listája
   */
  private _players: PlayerModel[] = [
    {
      color: "#ffffff",
      icon: ICON_CLASSES[0],
      id: 1,
      name: 'Játékos1'
    },
    {
      color: "#ffffff",
      icon: ICON_CLASSES[1],
      id: 2,
      name: 'Játékos2'
    }
  ];

  /**
   * Pálya mérete
   */
  private _mapSize: number = 10;

  /**
   * Számláló
   */
  private _counter: number = 5;

  /**
   * Kiválasztott játékos indexe
   */
  private _selectedPlayerId: number = -1;

  public get players(): PlayerModel[] {
    return this._players;
  }
  
  public set players(newPlayers : PlayerModel[]) {
    this._players = newPlayers;
  }
  
  public get mapSize(): number {
    return this._mapSize;
  }
  
  public set mapSize(newMapSize : number) {
    this._mapSize = newMapSize;
  }

  public get selectedPlayerId() : number {
    return this._selectedPlayerId;
  }
  
  public set selectedPlayerId(newPlayerId : number) {
    this._selectedPlayerId = newPlayerId;
  }
  
  public get counter() : number {
    return this._counter;
  }
  
  public set counter(newCounter : number) {
    this._counter = newCounter;
  }
  
}
