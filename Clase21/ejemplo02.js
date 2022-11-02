

const metros = parseInt(prompt('Ingrese metros en números', ''));

if(metros > 0 && metros <= 1000) {
    document.write('Es recomendable que vayas a pie.');
} else if (metros > 1000 && metros <= 10000) {
    document.write('Es recomendable que vayas en bicicleta.');
} else if (metros > 10000 && metros <= 30000) {
    document.write('Es recomendable que vayas en colectivo.');
} else if (metros > 30000 && metros <= 100000) {
    document.write('Es recomendable que vayas en auto.');
} else if (metros > 100000){
    document.write('Es recomendable que vayas en avion.');
}