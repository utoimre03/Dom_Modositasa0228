import { KUTYALISTA } from "./adat.js";
import { atlagEletKor, kutyaOsszeAllit } from "./fuggvenyek.js";
 
/* Mennyi a kutyák átlagéletkora?  */
/* hozz létre egy függvényt, amely
paraméterében kapja meg a kuytalistát, és
a visszatérési értéke az átlagéletkor */
 
let atlag= atlagEletKor(KUTYALISTA)
console.log(atlag)
 
/* Írjuk ki a html-be! adatok div-be p tagek közé */
/* '. megfogjuk a div-et */
const adatokELEM=document.getElementById("adatok")
/* beleírjuk az értéket */
adatokELEM.innerHTML=`<p>A kutyák átlagéletkora ${atlag} év</p>`
 
/* jelenítsd meg egy kutya div-be az adatokat!  */
 
const kutyakELEM=document.getElementById("kutyak")
kutyakELEM.innerHTML=kutyaOsszeAllit(KUTYALISTA)

/* class névvel megadott elemek elérése */
console.log(adatokELEM)
const kutyaELEMEK=document.getElementsByClassName("kutya")
console.log(kutyaELEMEK) /* HTML collection - lista */
const elsoKutyaKARTYA=kutyaELEMEK[0]
console.log(elsoKutyaKARTYA)

/* querySelectorAll */
const kutyaELEMEK2=document.querySelectorAll(".kutya")
console.log(kutyaELEMEK2) /* HTML collection - lista */
const elsoKutyaKARTYA2=kutyaELEMEK2[0]
console.log(elsoKutyaKARTYA2)

/* hogy érem el a második kátya képét? */
const KEPELEMEK=document.querySelectorAll(".kutya img")
console.log(KEPELEMEK[1])

/* eseménykezelés */
/* megfogjuk a gombot */
const gombELEM=document.querySelectorAll(".kutya button")
/* rátesszük az eseménykezelőt */
for (let index = 0; index < KUTYALISTA.length; index++) {
    
    gombELEM[index].addEventListener("click", gombKattintas)

}

/* meghatározzuk, hogy mit csináljon */

function gombKattintas() {
    alert("Kiválasztottál egy kutyát!")
}