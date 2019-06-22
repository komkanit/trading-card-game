import { Player } from './Player'
interface CardArgs {
  mana: number
}
class Card {
  mana: number
  constructor(args: CardArgs) {
    this.mana = args.mana
  }
  public action(enemyPlayer: Player) {
    enemyPlayer.health -= this.mana
  }
}

export {
  Card
}