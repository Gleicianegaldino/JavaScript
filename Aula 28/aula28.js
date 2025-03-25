// const cursos=['html','css','javascript','php','react']
// cursos.map((elemento,indice)=>{
//     console.log("Curso: " + elemento + " - Posição do cursos: " + indice)
// })


// const cursos=['html','css','javascript','php','react']
// let c = cursos.map((elemento,indice)=>{
//     //return elemento
//     return "<div>"+elemento+"</div>"
// })
// console.log(c)


// let elemento=document.getElementsByTagName("div")
// elemento=[...elemento]
// elemento.map((elemento,indice)=>{
//     console.log(elemento)
//     //console.log(elemento.innerHTML)
//     elemento.innerHTML="Todos os cursos"

// })

// //console.log(elemento)


// const elemento=document.getElementsByTagName("div")
// const valores=Array.prototype.map.call(elemento,({innerHTML})=>innerHTML)
// console.log(valores)

// const converterInt=(elemento)=>parseInt(elemento)
// let numero=['1','2','3','4','5','6'].map(converterInt) //converteu em inteiro
// console.log(numero)


const dobrarElemeto=(elemento)=>parseInt(elemento)
const dobrar=(elemento)=>elemento*2
let numero=['1','2','3','4','5','6'].map(dobrar)
console.log(numero)


//Map pode receber: elemento, posição e o próprio array