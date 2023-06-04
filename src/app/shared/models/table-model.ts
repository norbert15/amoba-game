import { PlayerModel } from "./player-model";

export interface TableModel {
    id: string;
    isOccupied: boolean;
    icon: string;
    color: string;
    playerId: number;
}