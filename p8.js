let a = prompt("ingrese un numero: ");
let b = prompt("ingrese un segundo un numero: ");
let c = prompt("ingrese un tercer un numero: ");
if(a<b && b<c && a<c){
    alert("C")
}
else if(a>b && b>c && a>c){
    alert("D")
}
else if ( a==b && b == c && a==c){
    alert("I")
}
else{
    alert("X")
}