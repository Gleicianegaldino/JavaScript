const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn_copiar")
const cursosTodos=[...document.querySelectorAll(".curso")]

cursosTodos.map((elemento)=>{
    elemento.addEventListener("click",(event)=>{
        const curso=event.target
        //console.log(curso)
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    //console.log(cursosSelecionados)
    
    cursosSelecionados.map((elemento)=>{
        caixa2.appendChild(elemento)
    })
})

