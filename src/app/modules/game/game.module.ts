import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './components/game/game.component';
import { SettingsComponent } from './components/game/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { PlayerSettingsComponent } from './components/game/settings/player-settings/player-settings.component';
import { StartComponent } from './components/game/start/start.component';
import { ShowIconDirective } from './directives/show-icon.directive';
import { GameEndComponent } from './components/game/start/game-end/game-end.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GameComponent,
    SettingsComponent,
    PlayerSettingsComponent,
    StartComponent,
    ShowIconDirective,
    GameEndComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class GameModule { }
