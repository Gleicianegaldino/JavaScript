const soma=(...valores)=>{
    
    const somar=val=>{
        let res=0
        for(v of val) 
            res+=v
        return res
    }

    return somar(valores)
}

console.log(soma(2,1,5))