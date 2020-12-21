'use strict'
document.getElementById('mostrar').style.display = "none"
const lista1 = document.getElementById('tiempo');
const lista2 = document.getElementById('tiempo2');

const fragmento1 = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();

let vector = [];
let vector2 = [];
let cantidad;
let res;
// let res2;

vector = ['Elige unidad del tiempo:', 'Año', 'Mes', 'Semana', 'Dia', 'Hora', 'Minuto', 'Segundo']
vector2 = ['Elige otra unidad del tiempo:', 'Año', 'Mes', 'Semana', 'Dia', 'Hora', 'Minuto', 'Segundo']

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
                    res = cantidad * 12
                    break;
                case '3':
                    res = cantidad * 52.1785714286
                    break;
                case '4':
                    res = cantidad * 365.25
                    break;
                case '5':
                    res = cantidad * 8766
                    break;
                case '6':
                    res = cantidad * 525960
                    break;
                case '7':
                    res = cantidad * 31557600
                    break;
                default:
                    break;
            }
            break;
        case '2':
            switch (seleccionada2){
                case '1':
                    res = cantidad / 12
                    break;
                case '2':
                    res = cantidad 
                    break;
                case '3':
                    res = cantidad * 4.3482142857
                    break;
                case '4':
                    res = cantidad * 30.4375
                    break;
                case '5':
                    res = cantidad * 730.5
                    break;
                case '6':
                    res = cantidad * 43830
                    break;
                case '7':
                    res = cantidad * 2629800
                    break;
                default:
                    break;
            }
            break;
        case '3':
            switch (seleccionada2){
                case '1':
                    res = cantidad / 52.1785714286
                    break;
                case '2':
                    res = cantidad / 4.3482142857
                    break;
                case '3':
                    res = cantidad 
                    break;
                case '4':
                    res = cantidad * 7
                    break;
                case '5':
                    res = cantidad * 168
                    break;
                case '6':
                    res = cantidad * 10080
                    break;
                case '7':
                    res = cantidad * 604800
                    break;
                default:
                    break;
            }
            break;
        case '4':
            switch (seleccionada2){
                case '1':
                    res = cantidad / 365.25
                    break;
                case '2':
                    res = cantidad / 30.4375
                    break;
                case '3':
                    res = cantidad / 7
                    break;
                case '4':
                    res = cantidad 
                    break;
                case '5':
                    res = cantidad * 24
                    break;
                case '6':
                    res = cantidad * 1440
                    break;
                case '7':
                    res = cantidad * 86400
                    break;
                default:
                    break;
            }
            break;
        case '5':
            switch (seleccionada2){
                case '1':
                    res = cantidad / 8766
                    break;
                case '2':
                    res = cantidad / 730.5
                    break;
                case '3':
                    res = cantidad / 168
                    break;
                case '4':
                    res = cantidad / 24
                    break;
                case '5':
                    res = cantidad 
                    break;
                case '6':
                    res = cantidad * 60
                    break;
                case '7':
                    res = cantidad * 3600
                    break;
                default:
                    break;
            }
            break;
        case '6':
            switch (seleccionada2){
                case '1':
                    res = cantidad / 525960
                    break;
                case '2':
                    res = cantidad / 43830
                    break;
                case '3':
                    res = cantidad / 10080
                    break;
                case '4':
                    res = cantidad / 1440
                    break;
                case '5':
                    res = cantidad / 60
                    break;
                case '6':
                    res = cantidad 
                    break;
                case '7':
                    res = cantidad * 60
                    break;
                default:
                    break;
            }
            break;
        case '7':
            switch (seleccionada2){
                case '1':
                    res = cantidad / 31557600
                    break;
                case '2':
                    res = cantidad / 2629800
                    break;
                case '3':
                    res = cantidad / 604800
                    break;
                case '4':
                    res = cantidad / 86400
                    break;
                case '5':
                    res = cantidad / 3600
                    break;
                case '6':
                    res = cantidad / 60
                    break;
                case '7':
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