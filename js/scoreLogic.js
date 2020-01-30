let playerA = 0;
let playerB = 0;
let scoreGeneral = 0;
let limitePuntos = 100;
let puntosGanar = 10;



var text = " ";
var text2 = " ";

var nuevoArray = new Array();//SE DECLARA EL ARRAY
nuevoArray[0] = new Array(2); //SE DECLARA LAS POSICIONES QUE TENDRA EN ESTE CASO 2 Y EL 0 ES EL NOMBRE DE NUESTRO ARREGLO
nuevoArray[1] = new Array(2); //SE DECLARA LAS POSICIONES QUE TENDRA EN ESTE CASO 2 Y EL 1 ES EL NOMBRE DE NUESTRO ARREGLO
//Metemos un dato en cada posición


//BOTONES DE MARCADOR
<<<<<<< HEAD
const botonA= document.getElementById('A');
const botonB= document.getElementById('B');
const botonR= document.getElementById('R');
=======
const botonA = document.getElementById('A');
const botonB = document.getElementById('B');
const botonR = document.getElementById('R');
>>>>>>> Se agrego un boton para restablecer el marcador


//Marcador
const marcadorA = document.getElementById('playerA-score');
const marcadorB = document.getElementById('playerB-score');
const proceso = document.getElementById('accion');
const mined = document.getElementById('noesun');
const mined2 = document.getElementById('noesun2');



function persona(punto) {
  if (punto == 'A') {
    return "Gano jugador 1";//GREGAR BOTON NUEVA PARTIDA :D
  } else {
    if (punto == 'B') {
      return "Gano jugador 2";//GREGAR BOTON NUEVA PARTIDA :D
<<<<<<< HEAD
    }else{
      if (punto == 'R') {
        return 3;
      }else{
=======
    } else {
      if (punto == 'R') {
        return "Es un reinicio";
      } else {
>>>>>>> Se agrego un boton para restablecer el marcador
        return punto;
      }
    }
  }
}

function persona2(punto) {
  if (punto == 'A') {
    return 1;
  } else {
    if (punto == 'B') {
      return 2;
<<<<<<< HEAD
    }else{
      return punto;
=======
    } else {
      if (punto == 'R') {
        return 3;
      } else {
        return punto;
      }
>>>>>>> Se agrego un boton para restablecer el marcador
    }
  }
}


function scoreCompleto(completo) {

  if (playerA >= puntosGanar || playerB >= puntosGanar) {
    if (playerA == 10) {
      proceso.innerHTML = "Fin del juego gano jugador 1";
      alert("Gano jugador 1!!");
<<<<<<< HEAD
      text=" ";
    }else{
      if (playerB==10) {
        proceso.innerHTML = "Fin del juego gano jugador 2";
        alert("Gano jugador 2!!");
        text2=" ";
      }else{}
    }
  }else{

    scoreGeneral++;

  if (persona2(completo)==1) {
    playerA++
    marcadorA.innerHTML = playerA;
    proceso.innerHTML = persona(completo);

    nuevoArray[0][scoreGeneral]=playerA;
    text=" "; //RECORDAR ESTA LINEA ES ARA REINICIAR EL MARCADOR EN SIN QUE SE SUME ASI MISMO
    //noesun.innerHTML = nuevoArray[0][scoreGeneral];
  }else{
    if (persona2(completo)==2) {
      playerB++
      marcadorB.innerHTML = playerB;
      proceso.innerHTML = persona(completo);
      nuevoArray[1][scoreGeneral]=playerB;
      text2=" "; //RECORDAR ESTA LINEA ES ARA REINICIAR EL MARCADOR EN SIN QUE SE SUME ASI MISMO
      //noesun.innerHTML = nuevoArray[1][scoreGeneral];
    }else{
      mined.innerHTML = persona2(completo);
=======
      text = " ";
    } else {
      if (playerB == 10) {
        proceso.innerHTML = "Fin del juego gano jugador 2";
        alert("Gano jugador 2!!");
        text2 = " ";
      } else { }
    }
  } else {
    if (persona2(completo) == 3) {
      proceso.innerHTML = persona(completo);
    } else {

      scoreGeneral++;

      if (persona2(completo) == 1) {
        playerA++
        marcadorA.innerHTML = playerA;
        proceso.innerHTML = persona(completo);

        nuevoArray[0][scoreGeneral] = playerA;
        text = " "; //RECORDAR ESTA LINEA ES ARA REINICIAR EL MARCADOR EN SIN QUE SE SUME ASI MISMO
        //noesun.innerHTML = nuevoArray[0][scoreGeneral];
      } else {
        if (persona2(completo) == 2) {
          playerB++
          marcadorB.innerHTML = playerB;
          proceso.innerHTML = persona(completo);
          nuevoArray[1][scoreGeneral] = playerB;
          text2 = " "; //RECORDAR ESTA LINEA ES ARA REINICIAR EL MARCADOR EN SIN QUE SE SUME ASI MISMO
          //noesun.innerHTML = nuevoArray[1][scoreGeneral];
        } else {
          console.log("COMO EST");
        }
      }
>>>>>>> Se agrego un boton para restablecer el marcador
    }


  }
  //mined.innerHTML = persona2(completo);
  //mined.innerHTML = nuevoArray[0][scoreGeneral] + "ejemplo";
}

function mostrarMarcdorA(entregaA) {
  var i;
  for (i = 0; i <= limitePuntos; i++) {

<<<<<<< HEAD
    if (persona2(entregaA)==1) {
      if (nuevoArray[0][i]==null) {
        nuevoArray[0][0]= "-"; //Si se deja seleccionado [o] como i este cambiara todos los resultados. PERO SE DEBE MODIFICAR
      }else{
        //text = " ";
        text += "Jugador A: "+ nuevoArray[0][i] +  " Posicion "+i+"<br>"; //DE IGUAL FORMA SE DEBE QUITAR EL +, si lo dejas se suma
=======
    if (persona2(entregaA) == 1) {
      if (nuevoArray[0][i] == null) {
        nuevoArray[0][0] = "-"; //Si se deja seleccionado [o] como i este cambiara todos los resultados. PERO SE DEBE MODIFICAR
      } else {
        //text = " ";
        text += "Jugador A: " + nuevoArray[0][i] + " Posicion " + i + "<br>"; //DE IGUAL FORMA SE DEBE QUITAR EL +, si lo dejas se suma
>>>>>>> Se agrego un boton para restablecer el marcador

      }
    }
    else {
      //mined2.innerHTML = "gokuuu ";
      //mined.innerHTML = text;
    }
  }
  mined.innerHTML = text;
  //mined2.innerHTML = "GOKUUU!!!"
}

function mostrarMarcdorB(entregaB) {

  var i;
  for (i = 0; i <= limitePuntos; i++) {
<<<<<<< HEAD
    if (persona2(entregaB)==2) {
      if (nuevoArray[1][i]==null) {
          nuevoArray[1][0]= "-";
        }else{
          text2 += "Jugador B: "+ nuevoArray[1][i]+  " Posicion "+i+"<br>"; //DE IGUAL FORMA SE DEBE QUITAR EL +, si lo dejas se suma
        }
=======
    if (persona2(entregaB) == 2) {
      if (nuevoArray[1][i] == null) {
        nuevoArray[1][0] = "-";
      } else {
        text2 += "Jugador B: " + nuevoArray[1][i] + " Posicion " + i + "<br>"; //DE IGUAL FORMA SE DEBE QUITAR EL +, si lo dejas se suma
      }
    } else {
      //mined2.innerHTML = "vegetaaa!! ";
      mined2.innerHTML = text2;
>>>>>>> Se agrego un boton para restablecer el marcador
    }
  }
  mined2.innerHTML = text2;
}

function reiniciarMarcador(regresoP) {
  if (persona2(regresoP) == 3) {
    playerA = 0;
    playerB = 0;
    scoreGeneral = 0;
    var elimanarElemrnto;
    console.log("Numeros presentes");
    console.log(nuevoArray);
    mined.innerHTML = " ";
    nuevoArray[0] = 0;
    nuevoArray[1] = 0;
    marcadorA.innerHTML = playerA;
    marcadorB.innerHTML = playerB;
    mined.innerHTML = " ";
    mined2.innerHTML = " ";
    text = " ";
    text2 = " ";

  }
}

function regresarMarcador(regresoP){
  if (persona(regresoP)==3) {
    mined2.innerHTML ="VALOR DE ARRAY "+nuevoArray[0][6];
    /**for (i = nuevoArray.length; i <= limitePuntos; i++) {
    }**/
  }
}



function game(punto) {

<<<<<<< HEAD
    const movidaUser= punto;
    scoreCompleto(movidaUser);
    mostrarMarcdorA(movidaUser);
    mostrarMarcdorB(movidaUser);
    regresarMarcador(movidaUser);
=======
  const movidaUser = punto;
  scoreCompleto(movidaUser);
  mostrarMarcdorA(movidaUser);
  mostrarMarcdorB(movidaUser);
  reiniciarMarcador(movidaUser);
>>>>>>> Se agrego un boton para restablecer el marcador
  /**switch (movidaUser) {
    case 'A':
      scoreCompleto(movidaUser);//GANAR
    break;
    case 'B':
      scoreCompleto(movidaUser);//GANAR
    break;
  }**/
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