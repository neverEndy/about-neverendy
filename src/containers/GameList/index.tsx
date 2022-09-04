import React from 'react'
import Card from '../../components/Card'

const GameList = () => {
  return (
    <div className="GameList">
      <Card
        title='Snake'
        author='andy.chen.neverend'
        moreLink='https://github.com/neverEndy/sudoku.git'
        imgSrc='./images/snake-shot.png'
        imgLink={window.location.origin + '/snake'}
        >
        <p>Snake is a video game genre where the player maneuvers a growing line that becomes a primary obstacle to itself.</p>
        <br />
        <p>This version was build by <i>andy.chen.neverend</i>, using React with Typescript.</p>
      </Card>
      <Card
        title='Sudoku'
        author='andy.chen.neverend'
        moreLink='https://github.com/neverEndy/snake.git'
        imgSrc='./images/sudoku-shot.png'
        imgLink={window.location.origin + '/sudoku'}>
        <>
          <p>A puzzle in which players insert the numbers one to nine into a grid consisting of nine squares subdivided into a further nine smaller squares in such a way that every number appears once in each horizontal line, vertical line, and square.</p>
          <br />
          <p>With help of <a href='https://github.com/robatron/sudoku.js'><strong>robatron</strong></a>, This game was finally complete, using React with Typescript.</p>
        </>
      </Card>
    </div>
  )
}

export default GameList
