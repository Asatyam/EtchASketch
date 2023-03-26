const main = document.querySelector('.main');


function createHeading(){
    
      const headingDiv = document.createElement('div');
      headingDiv.setAttribute('class', 'heading');

      const headingPara = document.createElement('p');
      headingPara.textContent = 'ETCH-A-SKETCH';

      headingDiv.appendChild(headingPara);
      main.appendChild(headingDiv);
    
}
function generateGrid(gridSize){

    gridSize = 16;
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


createHeading();
generateGrid();