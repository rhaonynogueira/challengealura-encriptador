var textInput = document.querySelector('#input-texto');
var outInput = document.querySelector('#output');

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textearea readonly id="input_texto">' + resultCripto +
    '</textearea>' + '<button class="btn_copiar" id="copiar" onclick="copiar()">Copiar</button>'

    textInput.value = "";
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textearea readonly id="input_texto">' + resultDescripto +
    '</textearea>' + '<button class="btn_copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar(){
    var textocop = document.getElementById('output');

    navigator.clipboard.writeText(textocop.innerText.split("\n")[0]).then((resultado)=>{
        alert("Texto copiado com sucesso")
    })
    // textocop.select();
    // document.execCommand('copy');
    // alert("Texto Copiado");
} 

function redirecionar(){
    let anchor = document.createElement("a")
    anchor.href = "/index.html"
    anchor.hidden = true
    document.body.appendChild(anchor)
    anchor.click()
    document.removeChild(anchor)
}






























// function btnEncriptar() {
//     const textoEncriptado = encriptar(textArea.value);
//     mensagem.value = textoEncriptado;
//     textArea.value = "";
// }

// function encriptar(stringEncriptada) {

//     let matrizCodigo = [['e', 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
//     stringEncriptada = stringEncriptada.toLowerCase();

//     for(let i = 0; i < matrizCodigo.length; i++) {
//         if(stringEncriptada.includes(matrizCodigo[i][0])) {
//             stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
//         }
//     }

//     return stringEncriptada
// }

// function btnDesencriptar() {
//     const textoDesencriptado = desencriptar(textArea.value);
//     mensagem.value = textoDesencriptado;
//     textArea.value = "";
// }

// function desencriptar(stringDesencriptar) {

//     let matrizCodigo = [['e', 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
//     stringDesencriptar = stringDesencriptar.toLowerCase();

//     for(let i = 0; i < matrizCodigo.length; i++) {
//         if(stringDesencriptar.includes(matrizCodigo[i][1])) {
//             stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
//         }
//     }

//     return stringDesencriptar
// }