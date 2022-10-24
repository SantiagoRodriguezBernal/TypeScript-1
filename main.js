import { series } from "./data.js";
var coursesTbody = document.getElementById('courses');
var getdab = document.getElementById('dab');
function meterSeries(dab) {
    dab.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                             <td><a href=").concat(c.informacion, " target=\"_blank\">").concat(c.nombre, "</td>\n                             <td>").concat(c.productora, "</td>\n                             <td>").concat(c.temporadas, "</td>\n                             ");
        coursesTbody.appendChild(trElement);
    });
}
function promTemporadas(dab) {
    var xd = 0;
    var count = 0;
    dab.forEach(function (xyalpha) {
        count += 1;
        xd += xyalpha.temporadas;
    });
    var resultado = xd / count;
    getdab.innerHTML = resultado.toString();
    console.log(resultado);
}
meterSeries(series);
promTemporadas(series);
