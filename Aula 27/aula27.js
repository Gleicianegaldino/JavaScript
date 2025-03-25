function* cores(){ //função geradora tem *
    yield 'Vermelhor'
    yield 'Verde'
    yield 'Azul'
}

// const interacao_cores=cores() //primeira chamda
// console.log(interacao_cores.next().value) //segunda chamada
// console.log(interacao_cores.next().value) //terceira chamada
// console.log(interacao_cores.next().value) //quarta chamada
// console.log(interacao_cores.next().value) //quinta chamada - Underfined (nesse exemplo não tem mais nada pra executar)

function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}

// const interador_perguntas=perguntas()
// console.log(interador_perguntas.next().value)
// console.log(interador_perguntas.next('Saori').value)
// console.log(interador_perguntas.next('Vôlei').value)

function* contator(){
    let i=0
    while(true){
        yield i++
        if(i>5)
            break
    }
}

const interador_contator=contator()
for( let c of interador_contator){
    console.log(c)
}

// for(let i=0; i<5;i++){
    
// console.log(interador_contator.next().value)

// }