import { Player } from './Player'
import { Board } from './Board'
function main() {
    const player1 = new Player({
        name: 'a',
        cards: [0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8]
    })
    const player2 = new Player({
        name: 'b',
        cards: [0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8]
    })
    const board = new Board({
        player1,
        player2
    })
    board.startGame()
    board.drawPhase(3)
    console.log(board.currentPlayer.handcards)
    console.log(board.currentPlayer.cards)
    console.log(board.currentPlayer.name)
    console.log('----')
    console.log(player1.handcards)
    console.log(player1.cards)
    console.log(player1.name)
    console.log('----')
    console.log(player2.name)
    console.log(player2.handcards)
    console.log(player2.cards)
}
main()