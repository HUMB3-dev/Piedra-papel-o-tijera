
let ganadas=0
let perdidas=0
function aleatorio(min, max) {
  pc = Math.floor(Math.random() * max) + min;
  return pc;
}
function validar(seleccion) {
  let selecciondo;
  if (seleccion == 1) {
    return (selecciondo = "Piedra 🥌");
  } else if (seleccion == 2) {
    return (selecciondo = " 2.Papel 📄");
  } else {
    return (selecciondo = " 3.Tijera ✂");
  }
}

function comparar(jugador, pc) {
  let resultado;
  if (jugador - pc == 0) {
    return (resultado =
      "Empate💢seleccionaste " +
      validar(jugador) +
      "la pc seleeciono  " +
      validar(pc));
  } else if (jugador - pc == 1) {
    ganadas++
    return (resultado =
      "Ganaste🥇 seleccionaste " +
      validar(jugador) +
      "la pc seleeciono  " +
      validar(pc));
  } else if (jugador - pc == -2) {
    ganadas++
    return (resultado =
      "Ganaste🥇 seleccionaste " +
      validar(jugador) +
      "la pc seleeciono  " +
      validar(pc));
  } else {
     perdidas++
    return (resultado =
      "Perdiste❌ seleccionaste " +
      validar(jugador) +
      "la pc seleeciono  " +
      validar(pc));
  }
}
while(ganadas<3 && perdidas<3){
 jugador = prompt("Seleccione que comparar 1.Piedra 🥌 2.Papel 📄 3.Tijera ✂");
 aleatorio(1, 3);
 alert(comparar(jugador,pc))
  switch (ganadas) {
    case 3:
       alert('Le ganaste a la PC 💥'+ ganadas+ 'a' +perdidas)
      break;
    default:
      break;
  }
  switch (perdidas) {
    case 3:
      alert('Perdiste contra la PC ❌'+ ganadas+ 'a' +perdidas)
      break;
  
    default:
      break;
  }
}

