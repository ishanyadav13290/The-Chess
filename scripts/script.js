let a=["a","b","c","d","e","f","g","h"];
let columns = document.querySelectorAll(".columns")
let cells = document.querySelectorAll("cells")

let fileName=0
for(let cols of columns){
    let counter=1
    for (const elements of cols.children) {
        elements.setAttribute("id", a[fileName]+counter)
        // console.log()
        counter++
    }
    fileName++
}




    
