
import {Paros} from "./fuggvenyek.js"




//console.log(Paros(5));





// A var-ral deklarát változok esetén is mukodik a hoisting, ami olyan mintha a hatokőr tetején történt volna meg a deklarácio, azonban az értékadás abban a sorban történik meg ahova azt leírtuk
// A var-ral deklarát változok hatóköre lehet modulszintű (vagyis globális), vagy lehet függvényszintű





function fv2(){
    let x = 2;
    {
        let x = 3
        console.log(x)
    }
    console.log(x)
}

//fv2()


// let hatóköre lehet file és blokk(kapcsos zárojel) szintu




function fv3(){
    for(var index = 0; index < 3; index++){
        console.log(index)
    }
    console.log(index)
}


//fv3()




function fv4(szam){
    /*a fvény adja vissza a 3mal való osztási maradékot szövegesen*/
    let vegosszeg = szam % 3;
    let szoveg = "";
    vegosszeg === 0 ? szoveg = "nulla" : vegosszeg === 1 ? szoveg = "egy" : szoveg = "ketto";

    return szoveg;
}

//szoveg: "nulla", "egy", "kettő"


console.log(fv4(4));

