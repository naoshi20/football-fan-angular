import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

export const ABBREVIATED_TEAM_NAME: { [key: string]: string } = {
  アーセナル: 'ARS',
  アストンヴィラ: 'AVL',
  ウエストハム: 'WHU',
  ウォルバーハンプトン: 'WOL',
  エヴァートン: 'EVE',
  クリスタルパレス: 'CRY',
  サウサンプトン: 'SOU',
  チェルシー: 'CHE',
  トッテナム: 'TOT',
  ニューカッスル: 'NEW',
  ノッティンガムフォレスト: 'NOR',
  ブライトン: 'BHA',
  フラム: 'FLU',
  ブレントフォード: 'BRE',
  ボーンマス: 'BOM',
  マンチェスターシティ: 'MAC',
  マンチェスターユナイテッド: 'MAU',
  リーズ: 'LEE',
  リヴァプール: 'LIV',
  レスター: 'LES'
} as const

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  @Input() public teamName: string = ''
  @Output() toggleEvent: EventEmitter<any> = new EventEmitter()
  abbreviatedTeamName: string = ''

  constructor() {}

  ngOnInit(): void {
    this.abbreviatedTeamName = ABBREVIATED_TEAM_NAME[this.teamName]
  }

  toggle() {
    this.toggleEvent.emit()
  }
}
