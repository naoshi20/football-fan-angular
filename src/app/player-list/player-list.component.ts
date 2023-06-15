import { Component, OnInit } from '@angular/core'
import { Player, SupabaseService } from '../supabase.service'

export const PLAYERS_DISPLAYED_PAR_PAGE: number = 10
const MAI_TEAM: string[] = [
  'ブレントフォード',
  'ボーンマス',
  'ウエストハム',
  'リヴァプール'
]

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: any = []
  loading = false
  lastPlayerId: number = 0

  constructor(private readonly supabaseService: SupabaseService) {}

  async ngOnInit(): Promise<void> {
    await this.retrieveMaiTeamPlayers(MAI_TEAM)
  }

  public async onChangePageMaiTeam() {
    const from = this.lastPlayerId + 1
    await this.retrieveMaiTeamPlayers(MAI_TEAM, from)
  }

  async retrieveMaiTeamPlayers(team?: string[], from?: number): Promise<void> {
    try {
      this.loading = true

      let {
        data: players,
        error,
        status
      } = await this.supabaseService.retrievePlayersFromSpecificId(team, from)

      this.loading = false

      if (error && status !== 406) {
        throw error
      }

      if (players) {
        // players.mai_team
        this.players = [...this.players, ...players]
        this.lastPlayerId = this.players.slice(-1)[0].id
        return
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }
  }

  trackByFn(index: number, player: Player) {
    return player.id
  }
}
