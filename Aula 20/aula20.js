function canal(){
    let n1=10, n2=2, res=n1*n2
    //console.log("cursos")
    //return "retornando valores para quem chamou"

    if(res%2==0){
        return "Par"
    }else{
        return "Impar"
    }
    //return res
}

let num=canal()

//canal()
//console.log(canal())
console.log("retorno do let num: " + num)