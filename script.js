const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncripitar () {
    const textoEncriptado = encripitar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encripitar(stringEncripitada) {
    let matrizcodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u", "ufat"]];
    stringEncripitada = stringEncripitada.toLowerCase();

    for(let i =0; i < matrizcodigo.length; i++) {
      if(stringEncripitada.includes(matrizcodigo[i][0])) {
        stringEncripitada = stringEncripitada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
      } 
    }
    console.log(stringEncripitada)
    return stringEncripitada;
}


function btnDesencripitar () {
    const textoDesencriptado = desencripitar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencripitar(stringDesencripitar) {
    let matrizcodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u", "ufat"]];
    stringDesencripitar = stringDesencripitar.toLowerCase();

    for(let i =0; i < matrizcodigo.length; i++) {
      if(stringDesencripitar.includes(matrizcodigo[i][1])) {
        stringDesencripitar = stringDesencripitar.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);
      } 
 
  }
    return stringDesencripitar;
}
