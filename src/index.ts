import { Player } from './Player'
import { Board } from './Board'
import { Card } from './Card'


function main() {
    const player1 = new Player({
        name: 'a',
        cards: [
            new Card({ mana: 3 }),
            new Card({ mana: 0 }),
            new Card({ mana: 1 }),
            new Card({ mana: 5 }),
            new Card({ mana: 2 }),
            new Card({ mana: 3 }),
            new Card({ mana: 6 }),
            new Card({ mana: 0 }),
            new Card({ mana: 3 }),
            new Card({ mana: 4 }),
            new Card({ mana: 3 }),
            new Card({ mana: 1 }),
            new Card({ mana: 2 }),
            new Card({ mana: 4 }),
            new Card({ mana: 8 }),
            new Card({ mana: 2 }),
            new Card({ mana: 5 }),
            new Card({ mana: 6 }),
            new Card({ mana: 4 }),
            new Card({ mana: 7 }),
        ]
    })
    const player2 = new Player({
        name: 'b',
        cards: [
            new Card({ mana: 1 }),
            new Card({ mana: 0 }),
            new Card({ mana: 6 }),
            new Card({ mana: 2 }),
            new Card({ mana: 5 }),
            new Card({ mana: 3 }),
            new Card({ mana: 4 }),
            new Card({ mana: 3 }),
            new Card({ mana: 2 }),
            new Card({ mana: 6 }),
            new Card({ mana: 3 }),
            new Card({ mana: 4 }),
            new Card({ mana: 0 }),
            new Card({ mana: 1 }),
            new Card({ mana: 4 }),
            new Card({ mana: 3 }),
            new Card({ mana: 8 }),
            new Card({ mana: 2 }),
            new Card({ mana: 7 }),
            new Card({ mana: 5 }),
        ]
    })
    const board = new Board({
        player1,
        player2
    })
    board.startGame(1)
    board.drawPhase(3)
    board.initialTurnPhase()
    board.actions([2, 1])
    board.endPhase()

    board.drawPhase(3)
    board.initialTurnPhase()
    board.actions([0,0])
    board.endPhase()

    board.drawPhase(1)
    board.initialTurnPhase()
    board.endPhase()

    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([1])
    board.endPhase()

    console.log(player1.health, player2.health)
}
main()
