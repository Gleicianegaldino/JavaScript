const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySql","React Native"]

cursos.map((elemento,chave)=>{
    // console.log(chave)
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    // novoElemento.setAttribute("id","c"+chave+1) // começando o id com 1
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=elemento
    caixa1.appendChild(novoElemento)

})


// const novoElemento=document.createElement("div")
// novoElemento.innerHTML="React Native"
// novoElemento.setAttribute("id","c7")
// novoElemento.setAttribute("class","curso c1")

// caixa1.appendChild(novoElemento)