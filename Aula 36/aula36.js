const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn_transferir=document.querySelector("#btn_transferir")
const cursosTodos=[...document.querySelectorAll(".curso")]

cursosTodos.map((elemento)=>{
    elemento.addEventListener("click",(event)=>{
        const curso=event.target
        //console.log(curso)
        curso.classList.toggle("selecionado")
    })
})

btn_transferir.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]
    //console.log(cursosNaoSelecionados)
    
    cursosSelecionados.map((elemento)=>{
        caixa2.appendChild(elemento)
    })

    cursosNaoSelecionados.map((elemento)=>{
        caixa1.appendChild(elemento)
    })
})

