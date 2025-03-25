const div1=document.getElementById("c1")
const div2=document.getElementById("c2")
const div3=document.getElementById("c3")
const div4=document.getElementById("c4")
const div5=document.getElementById("c5")
const div6=document.getElementById("c6")

const arrayCursos=[div1,div2,div3,div4,div5,div6]

//const colecaoHTML=document.getElementsByTagName("div")

const colecaoHTML=[...document.getElementsByTagName("div")] //Forma reduzida - mais direta

// let colecaoHTML=document.getElementsByTagName("div") //Forma comum
// colecaoHTML=[...colecaoHTML]

//console.log(arrayCursos)
console.log(colecaoHTML)


colecaoHTML.map((elemento)=>{gir
    console.log(elemento)
})