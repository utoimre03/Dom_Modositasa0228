export function atlagEletKor(lista) {
    let ossz = 0;
    for (let index = 0; index < lista.length; index++) {
        ossz += lista[index].kor
    }
    ossz = ossz / lista.length
    return ossz
}
 
export function kutyaOsszeAllit(lista){
    let txt=""
    for (let index = 0; index < lista.length; index++) {
       txt+=`<div class="kutya">
                <div class="kep"><img src='${lista[index].kep}' alt='${lista[index].nev}'></div>
                <h3>${lista[index].nev}</h3>
                <p>Fajta: ${lista[index].fajta}</p>
                <p>Kor: ${lista[index].kor}</p>
                <p>Lábak száma: ${lista[index].lab}</p>
                <button>Kiválaszt</button>
           </div>`
       
    }
    return txt
}