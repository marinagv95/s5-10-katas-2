function add(a,b){
    let soma = (a+b)
    return soma;
}
add ()

// obs: o b vai ser a quantidade de vezes que vai ser somado o a, exemplo: multiply (4,8),
// logo, vai ser somado o 4, 8x, por isso torna-se uma multiplicação.
function multiply(a,b){
    let multiplicacao = 0
    for(let i = 0; i < b; i++){
        multiplicacao = add(multiplicacao, a)
    }
     return multiplicacao;   
        
    
}
multiply()

// o expoente precisa ser 1, pois qualquer numero elevado a 0 será 1.
// no loop, eu coloquei o n como limitador, pois será o ultimo número a ser chamado na função
// ocorre o mesmo que o multiply, o calculo é feito (1*2)*8, ou seja o 2 é multiplicado 8 vezes, pois foram os números usados p chamar a função
function power(x,n){
let expoente = 1
for(let i = 1; i <= n; i++){
    expoente = multiply(expoente,x)

}
return expoente

}
power()

// o fatorial se da pela multiplicação de seus antecessores 
// o fator precisa ser = 1 pois se trata de uma multiplicação
// 

function fatorial(f){
let fator = 1
for(let i = 1; i <= f; i++){
fator *= power(i, 1)
    
    
}
return fator


}
fatorial()












