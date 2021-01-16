const divProizvodi = document.querySelector('.proizvodi')

// Klasa Proizvod
export class Proizvod {
    constructor(naziv, cena, kolicina) {
        this.naziv = naziv;
        this.cena = cena;
        this.kolicina = kolicina
    }
}

export class BelaTehnika extends Proizvod {
    constructor(naziv, cena, kolicina, garancija) {
        super(naziv, cena, kolicina);
        this.garancija = garancija;
    }
}

export class Prehrambeni extends Proizvod {
    constructor(naziv, cena, kolicina, rok) {
        super(naziv, cena, kolicina);
        this.rok = rok;
    }
}

// Niz proizvoda
export let proizvodi = [
    new Prehrambeni('Jogurt', 100, 2, 1),
    new BelaTehnika('Frizider', 50000, 2, 5),
    new BelaTehnika('Ves masina', 45000, 3, 3),
    new Prehrambeni('Mleko', 89, 1, 2)
];

export const prikaziProizvod = (p) => {
    let divProizvod = document.createElement('div');
    let pNaziv = document.createElement('p');
    pNaziv.textContent = `Naziv: ${p.naziv}`;
    let pCena = document.createElement('p');
    pCena.textContent = `Cena : ${p.cena} dinara`;
    let inputKolicina = document.createElement('input');
    inputKolicina.type = 'number';
    inputKolicina.id = 'kolicina';
    let dodajUkorpuBtn = document.createElement('button')
    dodajUkorpuBtn.textContent = 'Dodaj u korpu';
    dodajUkorpuBtn.className = 'add-btn';
    divProizvod.append(pNaziv, pCena, inputKolicina, dodajUkorpuBtn);
    divProizvodi.appendChild(divProizvod);
    if ('garancija' in p) {
        let pGarancija = document.createElement('p');
        pGarancija.textContent = `Garancija: ${p.garancija} god`;
        divProizvod.insertBefore(pGarancija, inputKolicina);
    } else {
        let pRok = document.createElement('p');
        pRok.textContent = `Rok: ${p.rok} m`
        divProizvod.insertBefore(pRok, inputKolicina);
    }

    dodajUkorpuBtn.addEventListener('click', (e) => {
        let objKorpa = {
            naziv: e.target.parentNode.childNodes[0].innerText,
            cena: e.target.parentNode.childNodes[1].innerText,
            kolicina: Number(inputKolicina.value)
        };

        console.log(objKorpa); 
        inputKolicina.value = '';
})};

