import "./reset.css";
import "./style.css";
import  {createGrid} from "./functions/grid";
import { tetrominoes} from "./constants/tetrominos";
import {GRID_WIDTH, startingpoint} from "./constants/grid";

const  blocks = createGrid();

const getRandomNumber = (max) => {
    const randomNumber=Math.floor( Math.random() *max);
    return randomNumber;
}
const  currentTetromino=tetrominoes[getRandomNumber(5)];
const currentRotation=currentTetromino[getRandomNumber(currentTetromino.length)]


const colors=["#845ec2","#ffc75f","#f9f871","#ff5e78","#6930c3"]
const randomColor=colors[getRandomNumber(colors.length)];
currentRotation.forEach((index) =>{
    blocks[ startingpoint+index].classList.add("filled");
    blocks[ startingpoint+index].style.background=randomColor;
});