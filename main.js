import {CIPOLISTA} from "./adat.js"
import {felsorolasOsszeallit, listaConsolraIr, OnalloFeladat, OsszArKiiars} from "./fuggveny.js"
console.log(CIPOLISTA)

listaConsolraIr(CIPOLISTA)




/*HTML DOM-ba írjuk ki a felsorolast*/

/*1. megfogjuk a html megfelelo elemét*/
//const CIPOKELEM = document.getElementById("cipok")
const CIPOKELEM = document.querySelector("#cipok")
const CIPODIVES = document.querySelector("#dives")
const CIPOOSSZ = document.querySelector("#osszegzes")
console.log(CIPOKELEM)


/* 2. Össszeállítjuk a html kodot és*/
let txt1 = felsorolasOsszeallit(CIPOLISTA)
let txt2 = OnalloFeladat(CIPOLISTA)
let txt3 = OsszArKiiars(CIPOLISTA)



/* 3. Beletesszuk az elembe*/
CIPOKELEM.innerHTML="<h3>Dzsarlie és a Gyáli Csokigyár, VEGYÉL CIPŐT</h3>"
CIPOKELEM.innerHTML+= txt1;
CIPODIVES.innerHTML+= txt2;
CIPOOSSZ.innerHTML+= txt3;
