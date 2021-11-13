const gridContainer=document.querySelector(".container");
const btnlvl=document.querySelector(".btnLvl");
const lvl=document.getElementById("lvl");
let size=0;
const bomb=16;
const bombNumberColector=[];

btnlvl.addEventListener("click", function() {
    gridContainer.innerHTML="";
    switch (lvl.value) {
        case "Hard":
            size=49;
            col=7;
            break;
        case "Medium":
            size=81;   
            col=9;
            break;  
        case "Easy":
            size=100;   
            col=10;
            break;
    }
    for (let i = 0; i < size; i++) {
        gridContainer.innerHTML+=`<div class="box col${col}">${i+1}</div>`;
        boxes=document.getElementsByClassName("box");
    }
    for (let i = 0; i < bomb; i++) {
        let n=0;
        do {
            n=randBomb(size);
        } while (bombNumberColector.includes(n));
        bombNumberColector.push(n);
    }
    
    
    for (let i = 0; i < size; i++) {
    boxes[i].addEventListener("click", function(){
        this.classList.add("box-blue");
        if(document.getElementsByClassName("box-blue").length===(size-bomb)){
            endgame();
        }
    })
    
    
    }
    bombNumberColector.forEach(bomb => {
        boxes[bomb].addEventListener("click", function(){
            this.classList.add("box-red");
            this.classList.remove("box-blue");
            endgame();
        })  
    });
    
});

function endgame() {
       
    bombNumberColector.forEach(bomb => {
        boxes[bomb].classList.add("box-red");
    })
    alert(`Il tuo punteggio è di:${document.getElementsByClassName("box-blue").length}`);
    location.reload();
}
function randBomb(range) {
    return Math.floor(Math.random()*range);   
}