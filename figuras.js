//---------------funciones de mostrar u ocultar los inputs para introducir valores
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

//-----------funciones de calcular y pintar el resultado--------------

const num_radio = document.getElementById("radio")
var calcular_radio = document.getElementById("cal_r");
const nuevo_hijo = document.getElementById("circulo");

calcular_radio.addEventListener("click", () => {
    nuevo_hijo.innerHTML = circulo()
    nuevo_hijo.classList.add('circulo_hijo')
});

function circulo() {
    const radio1 = Number(num_radio.value);
    const PI = 3.14;
    const per_circulo = 2 * PI * radio1;
    const area_circulo = PI * (radio1 ** 2);

    if (isNaN(radio1)) {
        alert ("Por favor Introduce un caracter numérico");
    }
    else {
        let resultado = `<p>el perimetro del circulo es: ${per_circulo}
        y el area es: ${area_circulo}</p>`
       return resultado;
    }

}


function triangulo(a){
    perimetro_triangulo=3*a;
    area_triangulo=((3**(1/2))*(a**2))/4;
}
triangulo(2);
console.log(`El perimetro del triangulo es ${perimetro_triangulo.toFixed(2)} y el area ${area_triangulo.toFixed(2)}`)

<<<<<<< HEAD
function rectangulo(x, y){
    perimetro_rectangulo=2*x+2*y;
    area_rectangulo=x*y;
=======
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
>>>>>>> ca2d6648b6f0822e4a9bf1c1366b93cc507aed45
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



