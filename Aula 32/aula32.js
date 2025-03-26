//const elementosTodos=document.getElementsByClassName("curso")

const elementosTodos=[...document.getElementsByClassName("curso")]
const c1=[...document.getElementsByClassName("curso c1")]
const c2=[...document.getElementsByClassName("curso c2")]

const elementosEspecial=document.getElementsByClassName("curso")[8] //elemento da posição 8

console.log(elementosTodos)
console.log(c1)
console.log(c2)
console.log(elementosEspecial)


// elementosTodos.map((el)=>{
//     el.classList.add("destaque")
// })

// c1.map((el)=>{
//     el.classList.add("destaque")
// })

c2.map((el)=>{
    el.classList.add("destaque")
})

