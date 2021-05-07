let inputDirection = {x:0, y:0}

let lastInputDirection = {x:0, y:0}

//Event Listener for controlling input, if statements make sure the snake can't go back
window.addEventListener('keydown',e => {
    switch(e.key){
        case 'ArrowUp':
            if(lastInputDirection.y == 0) inputDirection = {x:0, y:-1} 
            break
        case 'ArrowDown':
            if(lastInputDirection.y == 0) inputDirection = {x:0, y:1}
            break
        case 'ArrowLeft':
            if(lastInputDirection.x == 0) inputDirection = {x:-1, y:0}
            break
        case 'ArrowRight':
            if(lastInputDirection.x == 0) inputDirection = {x:1, y:0}
            break
    }
})

export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}