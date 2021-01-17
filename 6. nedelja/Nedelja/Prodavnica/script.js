// 1. Korisnik unosi username i password i na klik Login dugmeta se kreira objekat klase Kupac.
// Klasa kupac sadrzi ime ,sifru i korpu (niz proizvoda) .
// Div korpa se prikazuje tek kada se korisnik ulogovao. Ako postoji kupac u nizu kupaca ispisuje se taj div korpa, a ako ne postoji ispisuje se greska o nepostojanju kupca
// 2. Na stranici su sve vreme izlistani svi dostupni proizvodi iz niza proizvoda kreiranih klasom Proizvod
// jedan proizvod treba da sadrzi naziv , cenu , dostupnu kolicinu 
// proizvod moze biti prehrambeni ili bela tehnika
// ako je bela tehnika ima i garanciju
// ako je prehrambeni ima rok trajanja
// 3. Korisnik moze da doda proizvod u korpu, ako unese kolicinu vecu od dostupne kolicine ispisati poruku o gresci 
// Proizvod iz korpe moze da se obrise klikom na dugme Obrisi iz korpe
// 4. Ako je korisnik admin moze da doda nov proizvod

import {Kupac, registrovaniKupci} from './Kupac.js';
import { Proizvod, BelaTehnika, Prehrambeni, proizvodi, prikaziProizvod } from './Proizvod.js';

// Selektovanje elemenata
const forma = document.querySelector('.forma');
const inputName = document.querySelector('#username');
const inputPass = document.querySelector('#password');
const divKorpa = document.querySelector('.korpa');

// Logovanje kupca i kreiranje diva u kojem se ispisuje sta ima u korpi datog kupca
const isValidKupac = kupac => {
    return registrovaniKupci.some(k => k.username === kupac.username && k.password === kupac.password)
}

forma.addEventListener('submit', (e) => {
    e.preventDefault();
    let k = new Kupac(inputName.value, inputPass.value);
    if (isValidKupac(k)) {
        // kreiranje div korpa i prikaz
        let korpa = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.innerHTML = `Vasa korpa: ${k.username}`
        korpa.append(h3);
        divKorpa.append(korpa);

        k.add(prikaziProizvod());
        // ispisi korpu
        k.korpa.forEach(pKorpa => {
            ispisiKorpu(pKorpa);
        });
        console.log(k.korpa);
    } else {
        console.log('Korisnik sa Vasim imenom nema nalog!');
    }
    console.log(k);

    inputName.value = '';
    inputPass.value = '';
});

// Ispisivanje svih postojecih proizvoda
proizvodi.forEach((proizvod) => {
    prikaziProizvod(proizvod);
});




