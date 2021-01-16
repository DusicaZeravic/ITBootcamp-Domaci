// Klasa Kupac
export class Kupac {
    username
    password
    korpa
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.korpa = [];
    }
    add(obj) {
        this.korpa.push(obj);
    }
    delete() {

    }
}

// Registrovani kupci
export let registrovaniKupci = [new Kupac('Ana', '12345'), new Kupac('Danilo', '4859'), new Kupac('Aca', '9000')];


export const ispisiKorpu = (proizvodKorpa) => {
    let parNaziv = document.createElement('p');
    parNaziv.textContent = `${proizvodKorpa.naziv}`;
    let parCena = document.createElement('p');
    parCena.textContent = `${proizvodKorpa.cena}`;
    let parKolicina = document.createElement('p');
    parKolicina.textContent = `Kolicina: ${proizvodKorpa.kolicina}`;
    let delBtn = document.createElement('button');
    delBtn.textContent = 'Obrisi iz korpe'
}

