




export function listaConsolraIr(lista){
    console.log("Cipők típusai és árai: ")
    for(let i = 0; i < lista.length ;i++){
        console.log(lista[i].tipus," --- ",lista[i].ar)
    }
}





export function felsorolasOsszeallit(lista){
    let txt="<ul>"
    for(let i = 0; i < lista.length ;i++){
        txt += `<li> Típus: ${lista[i].tipus}, ár: ${lista[i].ar})`;
    }
    txt += "</ul>"

    console.log(txt);
    return txt
}







export function OnalloFeladat(lista){

    var txt = ``;
    for(let i = 0; i < lista.length ;i++){
        txt +=`<div><h3>${lista[i].tipus}</h3>`
        txt += `<ul>`
        for(let i = 0; i < lista.length ;i++){
            txt += `<li> Szín: ${lista[i].tipus}, méret: ${lista[i].meret}, ár: ${lista[i].ar})`;
        }
        txt += `</ul></div>`

        console.log(txt);
    }
    return txt
}






export function OsszArKiiars(lista){

    var osszeg = 0;
    var max = 0;
    var txt=`<h3>A termék összára: ${osszeg}</h3>`
    txt += "<p>"
    for(let i = 0; i < lista.length ;i++){
        osszeg += lista[i].ar;
        if(lista[i].ar > max){
            max = lista[i].tipus
        }
    }
    txt += `</p>`
    return txt
}