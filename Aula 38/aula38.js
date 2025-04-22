const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

// console.log(btn_c)

// console.log(caixa1)

// console.log(caixa1.children) //todos os elementos/filhos

//console.log(caixa1.firstElementChild)//primeiro elemento/filho

//console.log(caixa1.children[2]) //escolhe a posição

//console.log(caixa1.lastElementChild)//escolhe o último elemento/filho

// console.log(caixa1.children[caixa1.children.length-1])//escolhe a úlltima posição/filho

//console.log(document.getRootNode()) //nó raiz

//console.log(btn_c[0].getRootNode()) // primeiro elemento da coleção -> document sempre é o nó raiz

console.log(btn_c[0].ownerDocument) // Proprietário -> document 