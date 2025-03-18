/*
let n1=1,n2="1"

console.log(n1==n2)
console.log(n1===n2)
*/

/*
let v1={nome:"Saori"}
let v2={nome:"Saori"}

console.log(v1===v2)//FALSE - são objetos e tem o mesmo valor, a posição de memória é diferente
console.log(v1==v2)//FALSE - são objetos e tem o mesmo valor, a posição de memória é diferente
*/

/*
let v1={nome:"Saori"}
let v2=v1//TRUE - nesse caso a referência da posição de memória é a mesma

console.log(v1===v2)
*/

/*
let nome=prompt("Digite seu nome")
console.log(nome)
*/

if(navigator.userAgent.match(/Android/i)
    ||navigator.userAgent.match(/webOS/i)
    ||navigator.userAgent.match(/iPhone|iPad |iPod/i)
    ||navigator.userAgent.match(/BlackBerry/i)
    ||navigator.userAgent.match(/Opera Mini/i)
    ||navigator.userAgent.match(/Windows Phone/i)
    ||navigator.userAgent.match(/IEMobile/i)
){
    console.log("Celular")
}else{
    console.log("PC")
}