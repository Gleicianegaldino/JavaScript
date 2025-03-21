// function soma(p1){
//     console.log(p1)
// }

// soma("Saori")
// soma(5+10)

// function soma(n1, n2){
//     console.log(n1+n2)
// }

// soma(5,20)

// function soma(n1=0, n2=0){ //valores padrões
//     console.log(n1+n2)
// }
// soma(5)

// function soma(n1=0, n2=0){
//     let res
//     res=n1+n2
//     return res
// }

// let resultado_soma=soma(1,1)
// console.log(resultado_soma)

// function soma(n1=0, n2=0){
//     return n1+n2
// }
// console.log(soma(5,15))

const valor_padrao=0

// let valor=0
// console.log(valor)

// function add(v){
//     return valor+v
// }

// valor=add(10)
// console.log(valor)
// valor=add(15)
// console.log(valor)

let valor=0
console.log(valor)

function add(v){
    valor+=v
}

add(10)
console.log(valor)
add(15)
console.log(valor)


function soma(n1=valor_padrao, n2=valor_padrao){
    let res
    res=n1+n2
    return res
}

let resultado=(soma(12,3))
//console.log(resultado)