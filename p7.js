let a = prompt("ingrese un numero: ")
if(a<0){
    alert("ERROR")
}
else if(a%4 !=0 || (a %100==0 && a%400 !=0)){
    alert("no es bisiesto")
}
else {
    alert("si es bisiesto")
}
