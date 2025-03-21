// const f=function(v1,v2){
//     return v1+v2
// }

// console.log(f(1,2))

// const f=function(...valores){
//     let res=0
//     for(v of valores){
//         res+=v
//     }
//     return res
// }

// console.log(f(1,2,5))


const f = new Function("v1","v2","v3","return v1+v2+v3")// função Constritor anônima
   
console.log(f(1,5,5)) 