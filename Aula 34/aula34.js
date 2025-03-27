// function msg(){
//     alert('clicou')
// }

// const msg=()=>{
//     alert('Mensagem para c1')
// }

//const c1=document.getElementById("c1")
//const c1=document.querySelector("#c1")

//c1.addEventListener("click", msg)

// c1.addEventListener("click",()=>{
//     alert("clicou em c1")
// })

// c1.addEventListener("click",()=>{
//     msg()
// })

// c1.addEventListener("click",(event)=>{
//     console.log(event.target) //captura o elemento que foi clicado
// })

// c1.addEventListener("click",(event)=>{
//     const elemento=event.target
//     elemento.classList.add("destaque")
// })

const curso=[...document.querySelectorAll(".curso")]

curso.map((elemento)=>{
    elemento.addEventListener("click",(event)=>{
        const elemento=event.target
        elemento.classList.add("destaque")
        //console.log(elemento.id+" elemento foi clicado")
        console.log(elemento.innerHTML+" elemento foi clicado")
    })
})