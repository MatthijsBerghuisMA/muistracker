class Ster {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 2;
        this.vy = 1;
        this.offset = -55;
        this.veerconstante = .05;
        this.demping = .8;
    }

    maken(url) {
        this.ster = document.createElement('img');
        this.ster.src = 'afb/' + url + '.png';
        this.ster.alt = 'ster' + url;
        this.ster.className = 'ster';
        document.body.appendChild(this.ster);
        this.ster.style.left = this.x + 'px';
        this.ster.style.top = this.y + 'px';
    }

    verplaats(doelX, doelY, i) {
        this.vx += (doelX -this.x)*this.veerconstante;
        this.vy += (doelY -this.y)*this.veerconstante;
        this.vx *= this.demping;
        this.vy *= this.demping;
        this.x += this.vx;
        this.y += this.vy;
        this.ster.style.left = this.x + this.offset + 'px';
        this.ster.style.top = this.y + this.offset + 'px';
        this.ster.style.transform = 'rotate(' + i + this.x + 'deg)'
        
    }
}

// class Ster {
//     constructor(x,y, url) {
//         this.y = y;
//         this.x = x;
//         this.url = 'afb/'+url;
//         this.vx = 1;
//         this.vy = 1;
//     }

//     plaatsen() {
//         this.afb = document.createElement('img');
//         this.afb.src = this.url;
//         this.afb.className = 'img';
//         this.afb.style.left = this.x + 'px';
//         this.afb.style.top = this.y + 'px';
//         document.body.appendChild(this.afb);
//     }

//     verplaats() {
//         this.x += this.vx;
//         this.y += this.vy;
//         this.afb.style.left = this.x+'px';
//         this.afb.style.top = this.y+'px';
//     }
// }