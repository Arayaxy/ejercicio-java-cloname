function togglefigure() {
    // Selecciona el elemento con la clase "visualizar"
    const visualizarDiv = document.querySelector('.visualizar');
    // Alterna la clase "show" en este elemento
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

function rectangulo(x, y) {
    return {
        perimetro: 2 * x + 2 * y,
        area: x * y
    };
}

// Función cuadrado
function calcular() {
    const ancho = parseFloat(document.getElementById('ancho_rectangle').value);
    const largo = parseFloat(document.getElementById('largo_rectangle').value);

    if (isNaN(ancho) || isNaN(largo)) {
        alert("Introduce valores numéricos válidos.");
        return;
    }

    const { perimetro, area } = rectangulo(ancho, largo);

    // Mostrar el resultado debajo del botón
    const resultadoContainer = document.querySelector('.visualizar4');
    resultadoContainer.classList.add('result');
    resultadoContainer.innerHTML += `
        <p>Perímetro: <strong>${perimetro.toFixed(2)}</strong></p>
        <p>Área: <strong>${area.toFixed(2)}</strong></p>
    `;
}




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



