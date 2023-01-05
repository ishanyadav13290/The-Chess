// capturing ids of both black and white pawns
let pawnIdBlack = [];
let pawnIdWhite=[];
for (let i = 0; i < 8; i++) {
    pawnIdBlack.push(document.querySelector(`#${a[i]}${2}`))
}
for (let i = 0; i < 8; i++) {
    pawnIdWhite.push(document.querySelector(`#${a[i]}${7}`))
}

let onePawn=[]
// marking above steps as accesible 
function pawnStep(pawn,color){
let id=pawn.getAttribute("id");
// column and row name 
let next= +id[1];
let constant =id[0]
// array to store next two cells
let temp =[]


for(let i=0;i<2;i++){
    color=="black"?next++:next--
    temp.push(`${constant}${next}`)
}
let tempOne=[]
for (let i = 0; i < temp.length; i++) {
    
    const el = temp[i]
    let one =document.getElementById(el)
    tempOne.push(one)
    one.innerHTML = `<img class="here" src="imgs/here.png" alt="here" srcset="">`
}
onePawn.push(tempOne)
if(onePawn.length>1){
    onePawn[0].forEach(el=>{
        el.innerHTML=""
    })
    onePawn.shift()
}
}

pawnIdBlack.forEach(pawn => {
    pawn.addEventListener("click",()=>{
        pawnStep(pawn,color="black")
    })
});
pawnIdWhite.forEach(pawn => {
    pawn.addEventListener("click",()=>{
        pawnStep(pawn,color="white")
    })
});

