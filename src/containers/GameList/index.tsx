import React from 'react'
import Card from '../../components/Card'

const GameList = () => {
  return (
    <div className="GameList">
      <Card title='Snake' imgSrc='./images/snake-shot.png' imgLink={window.location.origin + 'snake'}>
        Snake is a video game genre where the player maneuvers a growing line that becomes a primary obstacle to itself.
        This version was build by ME, using React with Typescript.
      </Card>
      <Card title='Sudoku' imgSrc='./images/sudoku-shot.png' imgLink={window.location.origin + 'sudoku'}>
        A puzzle in which players insert the numbers one to nine into a grid consisting of nine squares subdivided into a further nine smaller squares in such a way that every number appears once in each horizontal line, vertical line, and square.
        This version was build by ME, using React with Typescript.
      </Card>
    </div>
  )
}

export default GameList
