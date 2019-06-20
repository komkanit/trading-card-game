import { Player } from './Player'

interface BoardArgs {
    player1: Player
    player2: Player
}

class Board {
    player1: Player
    player2: Player
    start: boolean
    private currentPlayerKey: 1 | 2
    maxHandSize: number
    constructor(args: BoardArgs) {
        this.player1 = args.player1
        this.player2 = args.player2
        this.start = false
        this.maxHandSize = 5
    }
    public startGame() {
        if (!this.player1 || !this.player2) {
            throw new Error('cannot start game. waiting for other player')
        }
        this.start = true
        this.currentPlayerKey = Math.floor(Math.random() * 2) + 1 as 1 | 2
    }
    get currentPlayer() {
        if (!this.currentPlayerKey) {
            return null
        }
        if (this.currentPlayerKey === 1) {
            return this.player1
        }
        return this.player2
    }
    public drawPhase(amount: number) {
        try {
            const cards = this.currentPlayer.drawCard(amount)
            if (this.currentPlayer.handCardCount < this.maxHandSize) {
                this.currentPlayer.addCardToHand(cards)
            }
        } catch(e) {
            this.currentPlayer.bleedingOut()
        }
    }
}

export {
    Board
}