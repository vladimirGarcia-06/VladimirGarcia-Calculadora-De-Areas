function mostrarFormulario(figura) {
    // Ocultar formularios
    document.getElementById("form-cuadrado").style.display = "none";
    document.getElementById("form-rectangulo").style.display = "none";
    document.getElementById("form-triangulo").style.display = "none";
    document.getElementById("form-circulo").style.display = "none";

    // Mostrar formulario seleccionado
    if (figura === "cuadrado") {
        document.getElementById("form-cuadrado").style.display = "block";
    } else if (figura === "rectangulo") {
        document.getElementById("form-rectangulo").style.display = "block";
    } else if (figura === "triangulo") {
        document.getElementById("form-triangulo").style.display = "block";
    } else if (figura === "circulo") {
        document.getElementById("form-circulo").style.display = "block";
    }
    //Borra el resultado anterior
    document.getElementById("resultado").innerHTML = "";
}


function calcularArea(tipo, base, altura) {

    let area;

    if (tipo === "cuadrado") {
        area = base * base;
    }
    else if (tipo === "rectangulo") {
        area = base * altura;
    }
    else if (tipo === "triangulo") {
        area = (base * altura) / 2;
    }  
    else if (tipo === "circulo") {
        area = (base * base)*3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727;
    }  
    return area;
}

function calcularAreaCuadrado() {
    const lado = Number(document.getElementById("lado").value);
    const area = calcularArea("cuadrado", lado, lado);
    document.getElementById("resultado").innerHTML = "El área del cuadrado es: " + area;
}

function calcularAreaRectangulo() {
    const base = Number(document.getElementById("baseRectangulo").value);
    const altura = Number(document.getElementById("alturaRectangulo").value);
    const area = calcularArea("rectangulo", base, altura);
    document.getElementById("resultado").innerHTML = "El área del rectángulo es: " + area;
}
function calcularAreaTriangulo() {
    const base = Number(document.getElementById("baseTriangulo").value);
    const altura = Number(document.getElementById("alturaTriangulo").value);
    const area = calcularArea("triangulo", base, altura);
    document.getElementById("resultado").innerHTML = "El área del triángulo es: " + area;
}
function calcularAreaCirculo() {
    const radio = Number(document.getElementById("radio").value);
    const area = calcularArea("circulo", radio, 3.14159);
    document.getElementById("resultado").innerHTML = "El área del circulo es: " + area; 
}