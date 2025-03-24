import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*window.onload = function() {
     const resultado = document.getElementById('js')

    let pronoun = ['mi', 'tu'];
    let adj = ['rapida', 'genial'];
    let noun = ['idea', 'web'];
    let domain = ['io','es']
    let generadorDeDominios = ''



    for (let i = 0 ; i < pronoun.length; i++){
        for (let j = 0 ; j < adj.length; j++){
            for (let n = 0 ; n < noun.length; n++){
                for (let d = 0 ; d < domain.length; d++){
                let dominioFinal = 'www.'+ pronoun[i]+adj[j]+noun[n]+ '.' +domain[d]
                generadorDeDominios += dominioFinal  + '<br>'
                }
            }
        }
    }
    resultado.innerHTML = generadorDeDominios
    }
  */
window.onload = function () {

    let pronombres = ['mi', 'tu'];
    let adjetivos = ['rapida', 'genial'];
    let nombres = ['idea', 'web'];
    let dominios = ['io', 'es']
    let generadorDominios = []
    let IndiceDominios = 0



    for (let pronombre of pronombres) {
        for (let adjetivo of adjetivos) {
            for (let nombre of nombres) {
                for (let dominio of dominios) {
                    let construccionDominio = `www.${pronombre}${adjetivo}${nombre}.${dominio}`
                    generadorDominios.push(construccionDominio)
                }
            }
        }
    }
    let parrafogeneradorDominios = document.getElementById('js')
    let boton = document.getElementById('botonDominio')
    function salidaOrdenadaDominios() {
        if (IndiceDominios < generadorDominios.length)
            parrafogeneradorDominios.innerHTML = generadorDominios[IndiceDominios]
        IndiceDominios += 1
    }
    boton.addEventListener('click', salidaOrdenadaDominios)

}
