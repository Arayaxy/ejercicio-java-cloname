document.getElementById("visualizar").addEventListener("click", () => {
   
    
    

})





console.log("____________________** JSON JavaScript Trigonometria **_________________________________________ ")
//radio=2; //circulo
//a=3;     //triangulo equilatero
//l=5;     //cuadrado
//x=2;y=3; //rectangulo

function circulo(radio){
    const PI=3.14;
    perimetro_circulo=2*pi*radio;
    area_circulo=pi*radio**2;
}
circulo(2);
console.log(`El perimetro del circulo es ${perimetro_circulo.toFixed(2)} y el area ${area_circulo.toFixed(2)}`)

function triangulo(a){
    perimetro_triangulo=3*a;
    area_triangulo=((3**(1/2))*(a**2))/4;
}
triangulo(2);
console.log(`El perimetro del triangulo es ${perimetro_triangulo.toFixed(2)} y el area ${area_triangulo.toFixed(2)}`)

function cuadrado(l){
    perimetro_cuadrado=4*l;
    area_cuadrado=l**2;
}
cuadrado(2);
console.log(`El perimetro del cuadrado es ${perimetro_cuadrado.toFixed(2)} y el area ${area_cuadrado.toFixed(2)}`)

function rectangulo(x, y){
    perimetro_rectangulo=2*x+2*y;
    area_rectangulo=x*y;
}
rectangulo(2,4);
console.log(`El perimetro del rectangulo es ${perimetro_rectangulo.toFixed(2)} y el area ${area_rectangulo.toFixed(2)}`)








