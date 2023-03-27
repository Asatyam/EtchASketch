const main = document.querySelector('.main');

function createHeading() {
  const headingDiv = document.createElement('div');
  headingDiv.setAttribute('class', 'heading');

  const headingPara = document.createElement('p');
  headingPara.textContent = 'ETCH-A-SKETCH';

  headingDiv.appendChild(headingPara);
  main.appendChild(headingDiv);
}

function resetGrid(){

  const gridDiv = document.querySelector('.grid');
  gridDiv.innerHTML = "";

}
function generateGrid(gdSize) {
  let gridSize = gdSize;

  let gridDiv = document.querySelector('.grid');
  if(!gridDiv){
    
    gridDiv = document.createElement('div');
    gridDiv.setAttribute('class', 'grid');
    
  }
  for (let i = 0; i < gridSize ** 2; i++) {
    const elSize = 960 / gridSize;
    const gridElBtn = document.createElement('button');
    gridElBtn.setAttribute('class', `gridEl${i}`);

    gridElBtn.style.backgroundColor = 'aquaBlue';
    gridElBtn.style.width = `${elSize}px`;
    gridElBtn.style.height = `${elSize}px`;
    gridDiv.appendChild(gridElBtn);
  }

  main.appendChild(gridDiv);
}
function startHoverOnClick(x) {
  const gridBtns = document.querySelectorAll('.grid>button');
  gridBtns.forEach((btn) => {
    btn.addEventListener('click', createHover);
  });
}

function mE(e) {
  e.target.style.backgroundColor = colr;
}

function createHover(e) {
  const gridBtns = document.querySelectorAll('.grid>button');
  e.target.style.backgroundColor = colr;
  gridBtns.forEach((btn) => {
    if (x % 2 == 0) {
      btn.addEventListener('mouseenter', mE);
    } else {
      btn.removeEventListener('mouseenter', mE);
    }
  });
  x++;
}

function takeSizeInput(){

    const inputBtn = document.createElement('button');
    inputBtn.setAttribute('class','sizeBtn');
    const inputPara = document.createElement('p');
    inputPara.textContent = "Change Size ";

    inputBtn.appendChild(inputPara);
    inputBtn.addEventListener('click',function (e){

      let sizeInput;

      do{

        sizeInput = prompt('Enter the size of the grid (< 100)');

      }while(sizeInput>100);

      resetGrid();
      generateGrid(sizeInput);
      startHoverOnClick(x);
    });
    main.appendChild(inputBtn);
}

function changeColor(){

    const colorBtn = document.createElement('button');
    colorBtn.setAttribute('class','color');
    colorBtn.innerHTML = "Change Color";
    colorBtn.addEventListener('click',(e)=>{
      
      colr = getRandomColor();
      colorBtn.style.backgroundColor = colr;
    });
    main.appendChild(colorBtn);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


let x = 0;
let colr = 'black';
createHeading();
takeSizeInput();
changeColor();
generateGrid(16);
startHoverOnClick(x);
