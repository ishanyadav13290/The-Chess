let allCells = document.querySelectorAll(".cells");

let chosen=[]
for (const cells of allCells) {
       cells.addEventListener("click",()=>{
        let id = cells.getAttribute("id")
        let src = document.getElementById(id).innerHTML;

        if(chosen.length>0){
            chosen[0].classList.remove("chosen")
            chosen.pop()
        }
        if(src.includes("white") || src.includes("black")){
            // document.getElementById(id).style.backgroundColor="Yellow"
            document.getElementById(id).classList.add("chosen")
            chosen.push(document.getElementById(id) )
        }
        
    })
}