const main = document.querySelector('.main');


function createHeading(){
    
      const headingDiv = document.createElement('div');
      headingDiv.setAttribute('class', 'heading');

      const headingPara = document.createElement('p');
      headingPara.textContent = 'ETCH-A-SKETCH';

      headingDiv.appendChild(headingPara);
      main.appendChild(headingDiv);
    
}
function generateGrid(gdSize){

    let gridSize = gdSize;
    const gridDiv = document.createElement('div');
    gridDiv.setAttribute('class','grid');

    for(let i=0;i<gridSize **2;i++){

        const elSize = 960/gridSize;
        const gridElBtn = document.createElement('button');
        gridElBtn.setAttribute('class',`gridEl${i}`);

        gridElBtn.style.backgroundColor = "aquaBlue";
        gridElBtn.style.width = `${elSize}px`;
        gridElBtn.style.height = `${elSize}px`;
        gridDiv.appendChild(gridElBtn);

    }
    
    main.appendChild(gridDiv);

}
function startHoverOnClick(x){

    const gridBtns = document.querySelectorAll('button');
    gridBtns.forEach((btn) => {
        
        if(x%2==0){
            btn.addEventListener('click', createHover);
        } else{
            btn.removeEventListener('click',createHover);
        }
    });
    
}

function mE(e){
     e.target.style.backgroundColor = 'black';
}

function createHover(e){

    
    const gridBtns = document.querySelectorAll('button');
    e.target.style.backgroundColor = "black";
    gridBtns.forEach((btn)=>{
        if(x%2==0){
               btn.addEventListener('mouseenter', mE);
               
        } else{
               btn.removeEventListener('mouseenter',mE);
        }
    });
    x++;
}

let x =0;
createHeading();
generateGrid(16);
startHoverOnClick(x);