const placeholder = document.getElementById('texto');
const areaTexto = document.getElementById('texto-area');

//Funcion para encriptar el texto
function encriptar() {
let text = placeholder.value;
let textoEncriptado = '';
// Bucle para verificar la letra en cada posicion
    for (let i = 0; i < text.length; i++) {
        // Switch por si la letra coincide con alguno de los casos
        switch (text[i]) {
            case 'a':
                textoEncriptado += 'ai';
                break;

            case 'e':
                textoEncriptado += 'enter';
                 break;

             case 'i':
                textoEncriptado += 'imes';
                break;

            case 'o':
                 textoEncriptado += 'ober';
                break;
            
            case 'u':
                 textoEncriptado += 'ufat';
                 break;
        // Si no se cumple ningun caso
            default:
                textoEncriptado += text[i];
                break;
        }
    }
    guardarValor(textoEncriptado);
    placeholder.value = '';
    return;
}

function guardarValor(text) {
 let valor = document.getElementById('texto-area').value = text;

 return;
}

//Funcion para desencriptar 

function desencriptar() {
let textoEncriptado = placeholder.value;
let textoDesencriptado = textoEncriptado


// Desencriptar cada secuencia encriptada
// g es para que se aplique a todas las veces que ocurra en la cadena
// replace reemplaza una expresion por otra
try {
textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a');
textoDesencriptado = textoDesencriptado.replace(/enter/g, 'e');
textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i');
textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u');
} catch (error) {
    areaTexto.value = 'No se permiten caracteres especiales'
}


areaTexto.value = textoDesencriptado;
placeholder.value = '';
return textoDesencriptado;

}

function copiar() {
    let text = areaTexto.value;

    if (text) {
        navigator.clipboard.writeText(areaTexto.value)
            .then(() => {
                areaTexto.value=('Texto copiado!');
            })
            .catch(err => {
                areaTexto.value=('No se pudo copiar el texto', err);
            });
    } 
}