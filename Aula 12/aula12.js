//let n1=[10,20,30]
//let n2=[11,22,33,44,55]

//let n3=n1
//let n3=[...n1]

//let n3=[n1, n2]

//let n3=[...n1,...n2] //pega os elementos de um array e retorna elemento por elemento desse array

//console.log("Tipo de N3: " + typeof(n3))

//console.log(n1)
//console.log(n2)
//console.log(n3)

//const jogador1={nome:"Leandro",energia:100,vidas:3}
//const jogador2={nome:"Saori",energia:100,vidas:5}
//const jogador3={...jogador1,...jogador2}  //imprime { nome: 'Saori', energia: 100, vidas: 5 } já que os dados do jogador 1 e 2 são os mesmos ele vai usar os valores do últimos jogador utilizado

//console.log(jogador3)


//const jogador1={nome:"Leandro",energia:100,vidas:3,magia:150}
//const jogador2={nome:"Saori",energia:100,vidas:5,velocidade:80}
//const jogador3={...jogador1,...jogador2}  

//console.log(jogador3)

// const soma=(v1,v2,v3)=>{
//     return v1+v2+v3
// }

// let valores=[1,5,4,10,15]//sempre vai pegar os 3 primeiros e relacionar com as propriedades que tem (no caso v1,v2,v3)

// console.log(soma(...valores))

const objs1=document.getElementsByTagName("div")//Só recebe elementos html
const objs2=[...document.getElementsByTagName("div")]//Coleção de elementos diversos

objs2.forEach(element => {
    //console.log(element)
    element.innerHTML="CURSO"
});

console.log(objs1)
console.log(objs2)

