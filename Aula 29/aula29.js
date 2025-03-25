function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    //console.log(nome)
    //console.log(nota)
    

    //setTimeout gera um atraso na execução
    this.dados_anonimo=function(){ 
        setTimeout(function(){//faz referência a uma nova estância do THIS que foi criada para o setTimeout
            console.log(this.nome)
            console.log(this.nota)
        }, 1000)
    }

    this.dados_arrow=function(){
        setTimeout(()=>{//utiliza o contexto do pai(função aluno)
            console.log(this.nome)
            console.log(this.nota)
        }, 1000)
    }
}

const aluno1=new aluno("Saori",100)

aluno1.dados_anonimo()
aluno1.dados_arrow()

//aluno("Saori", 100)