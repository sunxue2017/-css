const container = document.getElementById('container')
const colors = ["lightpink","lightskyblue","lightgreen","lightblue ","lightpink ","lightskyblue"," lightgoldenrodyellow"]
const squareTotal = 500;
setTimeout(()=>{
    for (let i = 0;i<squareTotal; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    //mouseover鼠标移动就触发
    square.addEventListener('mouseover',()=>{
        setColorToEl(square)    
    })

    //mouseout鼠标移出触发
    square.addEventListener('mouseout',()=>{
        removeColorFromEl(square)
    })

    container.appendChild(square)
    }
},1000)

//填色
function setColorToEl(element){
    const color = getRandomColor();
    element.style.background = color
    element.style.boxShadow = `0 0 3px ${color},0 0 10px ${color}`
}
//清色
function removeColorFromEl(element){
    element.style.background = "rgb(190, 238, 238)"
    element.style.boxShadow = `0 0 3px rgb(142, 207, 235)`
}

// getRandomColor 获取随机颜色
function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}