interface PlayerArgs {
    name: string
    cards: number[]
}
class Player {
    maxMana: number
    currentMana: number
    handcards: number[]
    cards: number[]
    health: number
    name: string
    constructor(args: PlayerArgs) {
        this.maxMana = 0
        this.currentMana = 0
        this.cards = args.cards
        this.health = 30
        this.name = args.name
        this.handcards = []
    }
    public bleedingOut() {
        this.health--
    }
    public drawCard(amount: number) {
        const len = this.cards.length
        if (len === 0) {
            throw new Error('Cannot draw card')
        }
        const cards = this.cards.splice(0, amount)
        return cards
    }
    public addCardToHand(cards: number[]) {
        this.handcards.push(...cards)
    }
    get handCardCount() {
        return this.handcards.length
    }
}

export {
    Player
}