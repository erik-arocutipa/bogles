let a = prompt("ingrese un numero: ");
let b = prompt("ingrese un segundo un numero: ");
let c = prompt("ingrese un tercer un numero: ");
if(a!=0){
    let d=b*b-4*a*c;
    if(d>0){
        let x1=(-b+Math.sqrt(d))/(2*a);
        let x2=(-b-Math.sqrt(d))/(2*a);
        alert("x1="+x1 + ", x2="+x2);
    }
    else if(d==0){
        let x = -b/(2*a);
        alert("x="+x);
    }
    else {
        alert("No tiene solución en los reales");
    }
}
else{
    if(b==0 && c!=0){
        alert("la ecuación es absurda");
    }
    else{
        alert("la ecuación es lineal")
        alert("x="+ -c/b);
    }
}