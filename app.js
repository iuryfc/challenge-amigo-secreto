let amigos = [];
function adicionarAmigo() {
    let campoNovoAmigo = document.querySelector ('input');
    let novoAmigo = campoNovoAmigo.value;
    if (novoAmigo == []) {
        alert ('Por favor, insira um nome.');
        return;
    } else {
        amigos.push (novoAmigo);
        campoNovoAmigo.value = "";
        campoNovoAmigo.focus ();
        console.log (amigos);
        exibirListaAmigos();
    }
}
function exibirListaAmigos() {
    let listaAmigos = document.getElementById ('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let index = 0; index < amigos.length; index++) {
        let amigoNaTela = document.createElement('li');
        amigoNaTela.textContent = amigos[index];
        listaAmigos.appendChild(amigoNaTela);
    }
}
function sortearAmigo(){
    if (amigos.length == 0) {
        alert ('Por favor, insira um nome.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultadoNaTela = document.getElementById('resultado');
    resultadoNaTela.innerHTML = `A pessoa sorteada foi ${amigoSorteado}`;
    let limparListaAmigos = document.getElementById ('listaAmigos');
    limparListaAmigos.innerHTML = '';
    amigos = [];
}

function começarJogo() {
    let limparAmigoSorteado = document.getElementById ('resultado');
    limparAmigoSorteado.innerHTML = '';
    amigoSorteado = [];
}