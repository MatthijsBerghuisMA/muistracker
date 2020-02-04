const deAfbeeldingen = ['star', 'ster', 'sterr'];
let muisX = 0;
let muisY = 0;
const alleVolgers = []; //hierin komen alle gemaakte sterren

const haalMuisPositie = (e) => {
    muisX = e.clientX;
    muisY = e.clientY;
    document.getElementById('xpos').innerText = muisX;
    document.getElementById('ypos').innerText = muisY;
    bewegen()
}

window.onload = () => {
    for (i = 0; i < deAfbeeldingen.length; i++) {
        let sterretje = new Ster(100 + 130 * i, 50 + 80 * i);
        sterretje.maken(deAfbeeldingen[i]);
        alleVolgers.push(sterretje);
        console.log(sterretje)
    }
    window.addEventListener("mousemove", haalMuisPositie);
}

const bewegen = () => {
    // console.log('help')
    const verplaatsen = requestAnimationFrame(() => {
        // for (let i = 1; i < alleVolgers.length; i++) {
        //     alleVolgers[i].verplaatsen(alleVolgers[i - 1].x, alleVolgers[i - 1].y, i);
        // }
        for (i = 0; i < alleVolgers.length; i++) {
            alleVolgers[i].verplaatsen(alleVolgers[i].x, alleVolgers[i].y, (i + 1));
            // console.log(alleVolgers[i])
        }
    })
}

// const textstXp = document.getElementById('textX');
// const textstYp = document.getElementById('textY');
// const deAfbeeldingen = ['star.png', 'ster.png', 'sterr.png'];

// const alleVolgers = [];
// let muisX = 0,
//   muisY = 0;

// function bepaalMuisP(e) {
//   textstXp.innerHTML = e.clientX;
//   textstYp.innerHTML = e.clientY;
//   muisX = e.clientX;
//   muisY = e.clientY;
// }

// window.addEventListener("mousemove", bepaalMuisP);

// // plaatsen van sterren

// for (i = 0; i < deAfbeeldingen.length; i++) {
//   let ster = new Ster(500 + 100 * i, 500 - 150 * i, deAfbeeldingen[i]);
//   ster.plaatsen();
//   alleVolgers.push(ster);
// }


// bewegen = () => {
//   for (let i=0; i < alleVolgers.length; i++) {
//     const verplaatsen = requestAnimationFrame(() => {
//       console.log(alleVolgers[i]);
//       alleVolgers[i].verplaats();
//       bewegen();
//     });
//   }
// }

// bewegen();