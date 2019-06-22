import { Card } from "./Card";

interface PlayerArgs {
    name: string
    cards: Card[]
}
class Player {
    maxMana: number
    currentMana: number
    handcards: Card[]
    cards: Card[]
    health: number
    name: string
    mana: number
    constructor(args: PlayerArgs) {
        this.maxMana = 0
        this.currentMana = 0
        this.mana = 0
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
    public useCard(number: number) {
        const card = this.handcards[number]
        if (!card || card.mana > this.currentMana) {
            throw new Error(`cannot use this card number ${number}`)
        }
        this.handcards.splice(number, 1)
        this.currentMana -= card.mana
        return card
    }
    public addCardToHand(cards: Card[]) {
        this.handcards.push(...cards)
    }
    get handCardCount() {
        return this.handcards.length
    }
}

export {
    Player
}