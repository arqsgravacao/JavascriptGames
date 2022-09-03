let btnCalcular = document.querySelector('#calcular');
btnCalcular.addEventListener('click', CalculaXP);

function CalculaXP() {

    let herois = document.querySelectorAll(".heroi");

    for (let i = 0; i < herois.length; i++) {

        let tdVelocidade = herois[i].querySelector(".velocidade").textContent;
        let tdAgilidade = herois[i].querySelector(".agilidade").textContent;
        let tdForca = herois[i].querySelector(".forca").textContent;
        let xp = (Number(tdVelocidade) + Number(tdAgilidade) + Number(tdForca));
        herois[i].querySelector(".xp-final").textContent = xp;

        if (xp < 250) {
            herois[i].classList.add("bg-warning");
        }
    }
}