function suma(x,y){
    x+=y;
    return x;
}

function resta (x,y){
    x-=y;
    return x;
}

function multiplicacion(x,y){
    x*=y;
    return x;
}

function dividir(x,y){
    if(y==0)
    {
        console.log("Y no puede ser ceroo");

    }else{
        x/=y;
        return x;
    }
}

Math.suma=suma;
Math.resta=resta;
Math.dividir=dividir;
Math.multiplicacion=multiplicacion;

module.exports=Math;
