const divTodas=[...document.getElementsByTagName("div")]
const elementosTodos=[...document.getElementsByClassName("curso")]
const c1=[...document.getElementsByClassName("c1")]
const c2=[...document.getElementsByClassName("c2")]
const elementoEspecial=document.getElementById("c1")

//const query_divTodas=document.querySelector("div") //retorna o primeiro da chave que espeficiquei no caso a "div"
//const query_divTodas=document.querySelectorAll("div")

//const query_divTodas=[...document.querySelectorAll("div")]
//const query_divTodas=[...document.querySelectorAll("div,p")]
//const query_divTodas=[...document.querySelectorAll("div[class]")] // todas as divs que tem o atributo class
const query_divTodas=[...document.querySelectorAll("div > p")]// div que tem o elemento p dentro dela

const query_ElemetosTodos=[...document.querySelectorAll(".curso")]
//const query_c1=[...document.querySelectorAll(".c1")] //mais dinâmico -> basta apenas espeficar class, div ou id (nesse caso)
const query_c1=[...document.querySelectorAll(".c1,p")] 
const query_c2=[...document.querySelectorAll(".c2")]
//const query_elementoEspecial=document.querySelector("#c1") //elemento com id c1    .    query é mais dinamica -> basta apenas espeficar class, div ou id (nesse caso)
//const query_elementoEspecial=document.querySelectorAll("#c1")
const query_elementoEspecial=document.querySelectorAll("#c1")[0]// só o elemento da posição 0


console.log(query_divTodas)

// console.log(divTodas)
// console.log(elementosTodos)
// console.log(c1)
// console.log(c2)
// console.log(elementoEspecial)