import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { HttpClientModule } from '@angular/common/http'
import { PlayerDetailComponent } from './player-detail/player-detail.component'
import { PlayerDetailService } from './service/player-detail.service'

import { HeaderButtonComponent } from './header-button/header-button.component'
import { StarButtonComponent } from './star-button/star-button.component'
import { FavoritePlayerListComponent } from './favorite-player-list/favorite-player-list.component'
import { AllPlayerListComponent } from './all-player-list/all-player-list.component'
import { PlayerListComponent } from './player-list/player-list.component'
import { PlayerListPageComponent } from './player-list-page/player-list-page.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component'

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailComponent,
    HeaderButtonComponent,
    PlayerListPageComponent,
    PlayerListComponent,
    AllPlayerListComponent,
    StarButtonComponent,
    FavoritePlayerListComponent,
    ToggleButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PlayerDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
