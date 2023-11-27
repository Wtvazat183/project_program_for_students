const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0


const  moveChildBlock = () => {
    if (positionX < 449) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveChildBlock, 10)
    } else if ( positionX >= 448 && positionY < 448){
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveChildBlock, 10)
    }
}
moveChildBlock()