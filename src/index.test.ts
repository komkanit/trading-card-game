import { Player } from './Player'
import { Board } from './Board'
import { Card } from './Card'
describe('Initial', () => {
    it('should random start player when start game', () => {
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
       expect(board.currentPlayer).toBeNull()
       board.startGame(1)
       expect(board.currentPlayer).toBeDefined()
    })
})
describe('Draw phase', () => {
    it('should draw 3 cards', () => {
       const player1 = new Player({
           name: 'a',
           cards: [
               new Card({ mana: 0 }),
               new Card({ mana: 0 }),
               new Card({ mana: 0 }),
           ]
       })
       const player2 = new Player({
           name: 'b',
           cards: []
       })
       const board = new Board({
           player1,
           player2
       })
       board.startGame(1)
       board.drawPhase(3)
       expect(board.currentPlayer.cards.length).toEqual(0)
       expect(board.currentPlayer.handCardCount).toEqual(3)
    })
    it('should not draw card when card on hand equal maxHandSize', () => {
       const player1 = new Player({
           name: 'a',
           cards: [
               new Card({ mana: 0 }),
               new Card({ mana: 0 }),
               new Card({ mana: 0 }),
               new Card({ mana: 0 }),
               new Card({ mana: 0 }),
               new Card({ mana: 0 }),
               new Card({ mana: 0 }),
            ]
       })
       const player2 = new Player({
           name: 'b',
           cards: []
       })
       const board = new Board({
           player1,
           player2
       })
       board.startGame(1)
       board.drawPhase(3)
       board.drawPhase(1)
       board.drawPhase(1)
       board.drawPhase(1)
       board.drawPhase(1)
       expect(board.currentPlayer.cards.length).toEqual(0)
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
       board.startGame(1)
       board.drawPhase(1)
       expect(board.currentPlayer.cards.length).toEqual(0)
       expect(board.currentPlayer.handCardCount).toEqual(0)
       expect(board.currentPlayer.health).toEqual(29)
    })
})
describe('snapshots test', () => {
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
    const snap: any[] = []
    //1
    board.startGame(1)
    board.drawPhase(3)
    board.initialTurnPhase()
    board.actions([2, 1])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //2
    board.drawPhase(3)
    board.initialTurnPhase()
    board.actions([0,0])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //1
    board.drawPhase(1)
    board.initialTurnPhase()
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //2
    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([1])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //1
    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([0])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //2
    board.drawPhase(1)
    board.initialTurnPhase()
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //1
    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([2])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //2
    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([2])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //1
    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([0])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //2
    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([1])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //1
    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([1])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //2
    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([0])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //1
    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([0,0,0])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //2
    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([0,0])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //1
    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([0])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    //2
    board.drawPhase(1)
    board.initialTurnPhase()
    board.actions([0,0])
    snap.push({
        player1: player1.toJson(),
        player2: player2.toJson(),
        isEnd: board.isGameEnd()
    })
    board.endPhase()
    expect(snap).toMatchSnapshot()
})