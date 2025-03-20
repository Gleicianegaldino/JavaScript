let num=[10,20,30,40,50]

// for(let i=0; i < num.length; i++){
//     // imprime a posição dentro do array
//     //console.log(i)
//
//     // imprime os elementos do array
//      console.log(num[i])
// }

// for(n in num){ //IN posição de cada elemento do array
//     console.log(n)
//     //console.log(num[n]) //->Mostra os elementos
// }

// for(n of num){ //OF mostra os elementos
//     console.log(n)
// }

const objs=document.getElementsByTagName("div")

for(o of objs){
    console.log(o)
    //console.log(o.innerHTML="OOOOOOI")
}

for(o in objs){
    console.log(o)
    //console.log(objs[o].innerHTML)
}