import { series } from "./data.js";
import { Serie } from "./Serie.js"

const coursesTbody: HTMLElement = document.getElementById('courses')!;
const getdab: HTMLElement = document.getElementById('dab')!;

function meterSeries(dab: Serie[]): void {
    dab.forEach(c => {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                             <td><a href=${c.informacion} target="_blank">${c.nombre}</td>
                             <td>${c.productora}</td>
                             <td>${c.temporadas}</td>
                             `;
        coursesTbody.appendChild(trElement);
    });
}

function promTemporadas(dab: Serie[]):void{
    let xd = 0
    let count = 0
    dab.forEach(xyalpha => {
        count += 1
        xd += xyalpha.temporadas
    })
    let resultado: number = xd/count
    getdab.innerHTML = resultado.toString();
    console.log(resultado)
}

meterSeries(series)
promTemporadas(series)