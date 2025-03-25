const div1=document.getElementById("c1")
const div2=document.getElementById("c2")
const div3=document.getElementById("c3")
const div4=document.getElementById("c4")
const div5=document.getElementById("c5")
const div6=document.getElementById("c6")

const arrayCursos=[div1,div2,div3,div4,div5,div6]

//console.log(arrayCursos)

// for(d of arrayCursos){
//    d.innerHTML="oooooooooooi"
// }

arrayCursos.map((elemento)=>{
    elemento.innerHTML="de novoo"
    console.log(elemento)
})


// console.log(div1)
// console.log(div1.id)
// console.log(div1.innerHTML)
// div1.innerHTML="Alterei aqui"

