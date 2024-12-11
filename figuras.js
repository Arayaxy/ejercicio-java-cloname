function togglefigure() {
    //Selecciona el elemento con la clase "visualizar"
    const visualizarDiv = document.querySelector('.visualizar');
    //Alterna la clase "show" en este elemento
    if (visualizarDiv) {
        visualizarDiv.classList.toggle('show');
    }
}
function togglefigure2() {
    // Selecciona el elemento con la clase "visualizar"
    const visualizarDiv = document.querySelector('.visualizar2');
    // Alterna la clase "show" en este elemento
    if (visualizarDiv) {
        visualizarDiv.classList.toggle('show');
    }
}
function togglefigure3() {
    // Selecciona el elemento con la clase "visualizar"
    const visualizarDiv = document.querySelector('.visualizar3');
    // Alterna la clase "show" en este elemento
    if (visualizarDiv) {
        visualizarDiv.classList.toggle('show');
    }
}
function togglefigure4() {
    // Selecciona el elemento con la clase "visualizar"
    const visualizarDiv = document.querySelector('.visualizar4');
    // Alterna la clase "show" en este elemento
    if (visualizarDiv) {
        visualizarDiv.classList.toggle('show');
    }
}


// document.getElementById("square").addEventListener("click", () => {
//     document.getElementById("visualizar").className = "";

// });

document.getElementById("calcular").addEventListener("click", () => {
    var valor = Number(document.getElementById("lado_square").value);
    console.log(valor);
    if (isNaN(valor)){
        alert ("Por favor introduce un caracter numérico")
    }
    else if (valor){
        cuadrado(valor); 
        const result=document.createElement("div");
        result.innerHTML =`<p>El perimetro del cuadrado es ${perimetro_cuadrado.toFixed(2)} y el area ${area_cuadrado.toFixed(2)}</p>`;
        document.getElementById("shape-container").appendChild(result); 
        result.classList.add('result_square');
        return;
    }
    else{
        alert("Completa los campos");
    }
    
 });

console.log("____________________** JSON JavaScript Trigonometria **_________________________________________ ")
//radio=2; //circulo
//a=3;     //triangulo equilatero
//l=5;     //cuadrado
//x=2;y=3; //rectangulo

function cuadrado(l){
    perimetro_cuadrado=4*l;
    area_cuadrado=l**2;
}
cuadrado(2);
console.log(`El perimetro del cuadrado es ${perimetro_cuadrado.toFixed(2)} y el area ${area_cuadrado.toFixed(2)}`)


function circulo(radio){
    const PI=3.14;
    perimetro_circulo=2*PI*radio;
    area_circulo=PI*radio**2;   
}
circulo(2);
console.log(`El perimetro del circulo es ${perimetro_circulo.toFixed(2)} y el area ${area_circulo.toFixed(2)}`)

function triangulo(a){
    perimetro_triangulo=3*a;
    area_triangulo=((3**(1/2))*(a**2))/4;
}
triangulo(2);
console.log(`El perimetro del triangulo es ${perimetro_triangulo.toFixed(2)} y el area ${area_triangulo.toFixed(2)}`)

function rectangulo(x, y){
    perimetro_rectangulo=2*x+2*y;
    area_rectangulo=x*y;
}
rectangulo(2,4);
console.log(`El perimetro del rectangulo es ${perimetro_rectangulo.toFixed(2)} y el area ${area_rectangulo.toFixed(2)}`)




//----------------codigo de togle de menu hamburguesa antes de adpatarlo a nuestro codigo

// <button class="menu-btn"  onclick="toggleMenu()">☰</button>
// function toggleMenu() { 
//     document.querySelector('nav').classList.toggle('show'); 
// }
//nav.show {
//     display: flex;
//     flex-direction: row; 
//     margin-left: -2em;
// }



