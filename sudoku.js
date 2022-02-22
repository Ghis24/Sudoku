const plateauEl=document.querySelector("#plateau");
const input=document.querySelector("#number");
let hasWon=false;

const sudoku=[
    [1,0,6,0,3,0,0,0,0],
    [0,0,0,0,0,8,2,0,0],
    [9,0,0,0,0,0,0,0,0],
    [0,7,0,8,0,4,0,0,0],
    [0,0,0,0,0,0,0,9,1],
    [0,0,0,2,0,0,0,0,0],
    [5,0,0,0,1,0,0,6,0],
    [0,4,0,0,0,8,0,0,0],
    [0,0,0,0,0,0,0,0,8],
];


function isColumnOk(value,columnNumber){
   const theColumn=plateauEl.children;
      for (let index = 0; index < theColumn.length; index++) {
        if(theColumn[index].children[columnNumber].firstChild.value==value){
            alert("Erreur!");
      }
};
}

function isRowOk(value,rowNumber){
    const theRow=plateauEl.children;
    for (let index = 0; index < theRow.length; index++) {
      if(theRow[index].children[rowNumber].firstChild.value==value){
          alert("Erreur!");
    }
};
}
   
function isSquareOk(value,rowNumber,columnNumber){
    const theRow=(Math.floor(theRow/3)*3);
    const theColumn=(Math.floor(theColumn/3)*3);

    for (let i= 0; i <3; i++) {
        for (let j = 0; j <3; j++) {
            if(theRow[index].children[columnNumber].theColumn[index].children[rowNumber].value==value){
                    alert("Doublon dans carré!");
            }
                
        }      
            
    };
}
    
function checkIwon(){
    if(hasWon){
        const theWin =document.createElement("p");
        theWin.classList.add("Winner");
        theWin.innerText="You win !"
        document.body.append(theWin);
    }
}

function checkValue(value,rowNumber,columnNumber,el){
    if (value<1 || value>9) {
        el.value = "";
        const theError = document.createElement("p");
        theError.classList.add("toCorrect");
        theError.innerText = "Ne saisir qu'un chiffre entre 1 et 9 !";
        document.body.append(theError);
        setTimeout(() => {
            theError.remove()
        }, 3000);
    }else{
        isRowOk(value,rowNumber);
        isColumnOk(value,columnNumber);
        isSquareOk(value,rowNumber,columnNumber);
    }
}

sudoku.forEach((row,rowNum)=>{
    row.forEach((boite,colNum)=>{
        const input = plateauEl.children[rowNum].children[colNum].firstChild;
        if (boite==0) {
            input.classList.add("toModify");
        }else{
            input.value = boite;
            input.setAttribute("readonly","readonly");
        } 
        input.addEventListener("focusout",()=>{
            if(input.value!=""){
                checkValue(input.value,rowNum,colNum,input);
            };
        });
    });
});
