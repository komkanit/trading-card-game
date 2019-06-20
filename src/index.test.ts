import { Player } from './Player'
import { Board } from './Board'
describe('Initial', () => {
    it('should random start player when start game', () => {
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
       expect(board.currentPlayer).toBeNull()
       board.startGame()
       expect(board.currentPlayer).toBeDefined()
    })
})
describe('Draw phase', () => {
    it('should draw 3 cards', () => {
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
       expect(board.currentPlayer.cards.length).toEqual(17)
       expect(board.currentPlayer.handCardCount).toEqual(3)
    })
    it('should not draw card when card on hand equal maxHandSize', () => {
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
       board.drawPhase(1)
       board.drawPhase(1)
       board.drawPhase(1)
       board.drawPhase(1)
       board.drawPhase(1)
       expect(board.currentPlayer.cards.length).toEqual(12)
       expect(board.currentPlayer.handCardCount).toEqual(board.maxHandSize)
    })
    it('should bleeding out when no card to draw', () => {
       const player1 = new Player({
           name: 'a',
           cards: []
       })
       const player2 = new Player({
           name: 'b',
           cards: []
       })
       const board = new Board({
           player1,
           player2
       })
       board.startGame()
       board.drawPhase(1)
       expect(board.currentPlayer.cards.length).toEqual(0)
       expect(board.currentPlayer.handCardCount).toEqual(0)
       expect(board.currentPlayer.health).toEqual(29)
    })
})