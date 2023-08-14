function TocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDETeclas = document.querySelectorAll('.tecla');

let contador = 0


for (let contador = 0; contador < ListaDETeclas.length; contador++) {

    const tecla = ListaDETeclas[contador]
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        TocaSom(idAudio);
    }
}