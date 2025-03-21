// function soma(...valores){
//     return valores.length
// }

// console.log(soma(10,5,5,5))//quantidade de elementos dentro do array


// function soma(...valores){
//     let tam=valores.length
//     let res=0
//     for(let i=0;i<tam;i++){
//         res+=valores[i]
//     }
//     return res
// }

// console.log(soma(1,2,3,5))

function soma(...valores){
    let res=0
    for(let v of valores){
        res+=v
    }
    return res
}

console.log(soma(1,2,3,5))