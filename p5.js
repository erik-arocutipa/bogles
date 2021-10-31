let a = prompt("ingrese un numero: ")
let b = prompt("ingrese un segundo numero: ")
let c = prompt("ingrese un tercer numero: ")
if(Math.abs(a - b) < Math.abs(c) && Math.abs(c) < Math.abs(a + b)){
    if (a==b && b==c){
        alert("el triangulo es equilatero");
    }
    else if (a==b || b==c || c==a){
        alert("el triangulo isoceles");
    }
    else {
        alert(" el triangulo es escaleno");
    }
}
else {
    alert ("el triangulo no existe");
}