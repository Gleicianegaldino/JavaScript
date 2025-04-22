const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")

//console.log(caixa1.hasChildNodes()) // verifica sem o elemento possui filhos -> retorna true ou false

//console.log(btn_c[0].hasChildNodes()) // verifica sem o elemento possui filhos 

//console.log(btn_c[0].childNodes)// retorna tudo inclusive o text
//console.log(btn_c[0].children) // elementos da coleção

// if(btn_c[0].children.length > 0){
//     console.log("Possui filhos")
// }else{
//     console.log("Não possui filhos")
// }

// if(btn_c[0].childNodes.length > 0){
//     console.log("Possui filhos")
// }else{
//     console.log("Não possui filhos")
// }

// if(caixa1.childNodes.length > 0){
//     console.log("Possui filhos")
// }else{
//     console.log("Não possui filhos")
// }

//console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos")
//console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "Não possui filhos")


//firstElementChild -> retorna a div
// console.log(caixa1.firstElementChild.innerHTML="TESTE")

// console.log(caixa1.children[1].innerHTML="TESTE 2")

//console.log(c1_2)
//console.log(c1_2.parentNode)//retorna o pai -> div c1_1
console.log(c1_2.parentNode.parentNode)//retorna o avô -> div c1 
//console.log(c1_2.parentNode.parentNode.children[2])
