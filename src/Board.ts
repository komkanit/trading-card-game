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
    maxMana: number
    constructor(args: BoardArgs) {
        this.player1 = args.player1
        this.player2 = args.player2
        this.start = false
        this.maxHandSize = 5
        this.maxMana = 10
    }
    public startGame(number: 1 | 2) {
        if (!this.player1 || !this.player2) {
            throw new Error('cannot start game. waiting for other player')
        }
        this.start = true
        // this.currentPlayerKey = Math.floor(Math.random() * 2) + 1 as 1 | 2
        this.currentPlayerKey = number
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
    get enemyPlayer() {
        if (!this.currentPlayerKey) {
            return null
        }
        if (this.currentPlayerKey === 1) {
            return this.player2
        }
        return this.player1
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
    public initialTurnPhase() {
        if (this.isGameEnd()) {
            return
        }
        if (this.maxMana > this.currentPlayer.mana) {
            this.currentPlayer.mana++
        }
        this.currentPlayer.currentMana = this.currentPlayer.mana
    }
    public actions(cards: number[]) {
        if (this.isGameEnd()) {
            return
        }
        cards.forEach((card) => {
            try {
                const useCard = this.currentPlayer.useCard(card)
                useCard.action(this.enemyPlayer)
            } catch (error) {
                console.log(error)
            }
            if (this.isGameEnd()) {
                return
            }
        })
    }
    public isGameEnd() {
        return this.enemyPlayer.health <= 0 || this.currentPlayer.health <= 0
    }
    public endPhase() {
        if (this.isGameEnd()) {
            console.log(`game end, player ${this.currentPlayer.name} is win.`)
        }
        console.log('current')
        console.log(this.currentPlayer.toJson())
        console.log('enemy')
        console.log(this.enemyPlayer.toJson())
        if (this.currentPlayerKey === 1) {
            this.currentPlayerKey = 2
        } else {
            this.currentPlayerKey = 1
        }
        console.log('---------------------------')
    }
}

export {
    Board
}