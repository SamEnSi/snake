import { update as updateSnake, draw as drawSnake,
     getSnakeHead, snakeIntersection, SNAKE_SPEED} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    if(gameOver){
        if(confirm('You lost. Press ok to restart.')){
            window.location = '/JS/Snake/index.html' // refresh page
        }
        return
    }

    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000 
    
    if(!(secondsSinceLastRender < 1 / SNAKE_SPEED)) //Do this x times per second
    {
        lastRenderTime = currentTime
        
        update()
        draw()
    }
    
    
}

window.requestAnimationFrame(main)

function update()
{
    updateFood()
    updateSnake()
    checkDeath()
}

function draw()
{
    gameBoard.innerHTML = '' // clears the board before drawing
    drawFood(gameBoard)
    drawSnake(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}