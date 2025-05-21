// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "i´m not a perfect person", time: 12 },
  { text: "There´s many things i wish i didn´t do", time: 17 },
  { text: "But i continue learning", time: 23 },
  { text: "i never meant to do those things to you", time: 30 },
  { text: "And so i have to say before i go", time: 35 },
  { text: "That i just want you to know", time: 41 },
  { text: "i´ve found a reason for me", time: 46 },
  { text: "To change who i used to be", time: 53 },
  { text: "a reason to start over new", time: 58 },
  { text: "and the reason is you", time: 65 },
  { text: "i´m sorry that i hurt you", time: 70 },
  { text: "it´s somethin´i must live with every day", time: 76 },
  { text: "And all the pain i put you through", time: 81 },
  { text: "i wish that i could take it all away", time: 87 },
  { text: "and be the one who catchees all your tears", time: 93 },
  { text: "Thas´s why i need you to hear", time: 100 },
  { text: "I´ve found a reason for me ", time: 105 },
  { text: "To change who i used to be", time: 109 },
  { text: "A reason to start over new", time: 116 },
  { text: "And the reason is you", time: 122 },
  { text: "And the reason is you", time: 127 },
  { text: "And the reason is you", time: 132 },
  { text: "And the reason is you", time: 139 },
  { text: "i´m not a perfect person", time: 151 },
  { text: "i never meant to do those things to you", time: 157 },
  { text: "And so i have to say before i go", time: 163 },
  { text: "that i just want you to know", time: 169 },
  { text: "i´ve found a reason for me", time: 173 },
  { text: "To change who i used to be", time: 180 },
  { text: "A reason to start over new", time: 186 },
  { text: "and the reason is you", time: 193 },
  { text: "i´ve found a reason to show", time: 197 },
  { text: "A side of me you didn´t know", time: 202 },
  { text: "A reason for all that i do", time: 206 },
  { text: "And the reason is you", time: 210 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);