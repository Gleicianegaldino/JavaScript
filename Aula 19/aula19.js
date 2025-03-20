let n=0, max=1000,pares=0

// while(n<max){
//     console.log("valor " + n)
//     n++
// }
// console.log("fim")

// while(n<max){
//     console.log("valor " + n)
//     if(n>10){
//         break
//     }
//     n++
// }
// console.log("fim")

// for(let i=n; i<max; i++){
//     console.log("valor : " + i)
//     if(i%2==0){
//         pares++
//     }
// }
// console.log("Quantidade de pares: " + pares)
// console.log("fim")

for(let i=n; i<max; i++){
    
    if(i%2!=0){
        continue //se verdadeiro
    }
    pares++ // fez o incremento quando a condição foi falsa
}
console.log("Quantidade de pares: " + pares)
console.log("fim")