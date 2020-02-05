let contadorA = 0;
let contadorB = 0;
// let limitePuntos=50; ESTA PARTE SOLO LA OCUPAREMOS CUNDO ESTE LISTO EL FORMULARIO

//Obtenemos accion de los botones
const botonA = document.getElementById('A');
const botonB = document.getElementById('B');
const botonR = document.getElementById('R');


//Tablero
const marcadorA = document.getElementById('playerA-score');
const marcadorB = document.getElementById('playerB-score');
const proceso = document.getElementById('accion');
const mined = document.getElementById('noesun');
const mined2 = document.getElementById('noesun2');




function persona(punto) {
    if (punto == 'A') {
        return 1;//GREGAR BOTON NUEVA PARTIDA :D
    } else {
        if (punto == 'B') {
            return 2;//GREGAR BOTON NUEVA PARTIDA :D
        } else {
            if (punto == 'R') {
                return 3;
            } else {
                return punto;
            }
        }
    }
}


function tableros(completo) {
    if (persona(completo) == 1) {
        contadorA++;
        marcadorA.innerHTML = contadorA;
        proceso.innerHTML = "Gano jugador 1 ";
        
    } else {
        if (persona(completo) == 2) {
            contadorB++;
            marcadorB.innerHTML = contadorB;
            proceso.innerHTML = "Gano jugador 2 ";
            
        } else {
            contadorA = 0;
            contadorB = 0;
            marcadorA.innerHTML = contadorA;
            marcadorB.innerHTML = contadorB;
            proceso.innerHTML = "El juego se reinicia" ;
        }
    }

}

function sideMatch(pos) {
    
}





function game(punto) {

    const movidaUser = punto;
    tableros(movidaUser);
    // mostrarMarcdorA(movidaUser);
    // mostrarMarcdorB(movidaUser);
    // reiniciarMarcador(movidaUser);
}

function main() {
    botonA.addEventListener('click', () => game("A"));
    botonB.addEventListener('click', () => game("B"));
    botonR.addEventListener('click', () => game("R"));
    //botonR.addEventListener('click', () => game("R"));
    /**botonA.addEventListener("click", function(){
    marcadorA.innerHTML = 1;});**/
}


main();