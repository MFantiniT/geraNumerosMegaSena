//Função que gera os numeros aleatórios
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
}

//Lista onde os números serão armazenados
listNumeroDaMega = []

//gera os números e os adiciona na lista
for (i = 0; i < 6; i++) {
    listNumeroDaMega.push(getRandomInt(0, 60))
}

listNumeroDaMega.sort((a, b) => a - b)
console.log(listNumeroDaMega)


//OBS: LEMBRAR DE CORRIGIR OS NÚMEROS IGUAIS.