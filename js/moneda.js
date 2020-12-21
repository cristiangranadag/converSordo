'use strict'
document.getElementById('mostrar').style.display = "none"

const lista1 = document.getElementById('moneda');
const lista2 = document.getElementById('moneda2');

const fragmento1 = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();

let vector = [];
let vector2 = [];
let cantidad;
let res;
// let res2;

vector = ['Elige unidad del moneda:', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euros', 'Bolivar']
vector2 = ['Elige otra unidad del moneda:', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euros', 'Bolivar']

// const mensaje = document.createElement('h1');
// mensaje.textContent="Ejercicio Divisas";
// fragmento3.appendChild(mensaje)
// document.getElementById('Principal').appendChild(fragmento3)

for (let index = 0; index < vector.length; index++) {
    const opcion1 = document.createElement('option');
    opcion1.setAttribute('value', index)
    opcion1.textContent = vector[index];
    fragmento1.appendChild(opcion1);
}

for (let index = 0; index < vector2.length; index++) {
    const opcion2 = document.createElement('option');
    opcion2.setAttribute('value', index)
    opcion2.textContent = vector2[index];
    fragmento2.appendChild(opcion2);
}

lista1.appendChild(fragmento1)
lista2.appendChild(fragmento2)

function Convertir() {

    cantidad = Number(document.getElementById('unidad').value);
    while (isNaN(cantidad)){
        alert('Error, solo número')
        cantidad = Number(document.getElementById('unidad').value);
        break
    }

    document.getElementById('mostrar').style.display = "block"

    res = Calcular(cantidad);
    // res2 = Calcular(cantidad);

    document.getElementById('resultado').value = res;
    // document.getElementById('resultado2').value = res2;
    document.getElementById('mensaje').innerHTML =   'El resultado es'
}

function Calcular(cantidad) {

    const seleccionada1 = lista1.options[lista1.selectedIndex].value;
    const seleccionada2 = lista2.options[lista2.selectedIndex].value;

    console.log(seleccionada1);
    console.log(seleccionada2);

    if(seleccionada1==0 || seleccionada2==0) {
        alert('Error')
    }

    switch (seleccionada1){

        case '1':
            switch (seleccionada2){
                case '1':
                    res = cantidad
                    // res2 = "año:"
                    break;
                case '2':
                    res = cantidad * 19.8003
                    break;
                case '3':
                    res = cantidad * 3466.38
                    break;
                case '4':
                    res = cantidad * 0.824628
                    break;
                case '5':
                    res = cantidad * 9987.5
                    break;
                default:
                    break;
            }
            break;
        case '2':
            switch (seleccionada2){
                case '1':
                    res = cantidad * 0.0505108
                    break;
                case '2':
                    res = cantidad 
                    break;
                case '3':
                    res = cantidad * 175.05
                    break;
                case '4':
                    res = cantidad * 0.0416405
                    break;
                case '5':
                    res = cantidad * 504.329
                    break;
                default:
                    break;
            }
            break;
        case '3':
            switch (seleccionada2){
                case '1':
                    res = cantidad * 0.000288474
                    break;
                case '2':
                    res = cantidad * 0.00571318
                    break;
                case '3':
                    res = cantidad 
                    break;
                case '4':
                    res = cantidad * 0.000237911
                    break;
                case '5':
                    res = cantidad * 2.88143
                    break;
                default:
                    break;
            }
            break;
        case '4':
            switch (seleccionada2){
                case '1':
                    res = cantidad * 1.21295
                    break;
                case '2':
                    res = cantidad * 24.0224
                    break;
                case '3':
                    res = cantidad * 4203.89    
                    break;
                case '4':
                    res = cantidad 
                    break;
                case '5':
                    res = cantidad * 12115.23
                    break;
                default:
                    break;
            }
            break;
        case '5':
            switch (seleccionada2){
                case '1':
                    res = cantidad * 0.000100125
                    break;
                case '2':
                    res = cantidad * 0.00198248
                    break;
                case '3':
                    res = cantidad * 0.34695
                    break;
                case '4':
                    res = cantidad * 0.0000825311
                    break;
                case '5':
                    res = cantidad 
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    return res;
}   