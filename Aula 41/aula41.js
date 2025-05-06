const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySql","React Native"]

cursos.map((elemento,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=elemento

    const btn_lixeira=document.createElement("img")
    btn_lixeira.setAttribute("src", "icon-lixeira.png");
    btn_lixeira.setAttribute("class","btn-lixeira")

    novoElemento.appendChild(btn_lixeira)

    btn_lixeira.addEventListener("click",(evento)=>{
        // console.log(evento.target.parentNode)
        caixa1.removeChild(evento.target.parentNode)
    })
    // novoElemento.addEventListener("click",(evento)=>{
    //     // console.log(evento.target)
    //     caixa1.removeChild(evento.target)
    // })

    caixa1.appendChild(novoElemento)

})

