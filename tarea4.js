//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."



document.querySelector('#calcular').onclick = function(){
    const $elementos = document.querySelectorAll("li")
    const listli = []
    for(let i = 0; i < $elementos.length; i++){
        listli.push(Number(document.querySelectorAll("li")[i].innerText))
    }
    
    function calcularPromedio(array){
        let totalArray = 0
        for(let i = 0; i < array.length; i++){
            totalArray += array[i]
        }
        return totalArray / array.length
    }
    document.querySelector('#promedio').innerText += calcularPromedio(listli)

    function numeroMenor(array){
        let numeroMenor = array[0]
        for(let i = 1; i < array.length; i++){
            if(array[i] < numeroMenor){
                numeroMenor = array[i]
            }
        }
        return numeroMenor
    }
    document.querySelector('#numero-menor').innerText += numeroMenor(listli)
    
    function numeroMayor(array){
        let numeroMayor = array[0]
        for(let i = 1; i < array.length; i++){
            if(array[i] > numeroMayor){
                numeroMayor = array[i]
            }
        }
        return numeroMayor
    }
    document.querySelector('#numero-mayor').innerText += numeroMayor(listli)

    function contadorFrecuencia(num, array){
        let apariciones = 0

        for(let i = 0; i < array.length; i++){
            if(num === array[i]){
                apariciones++
            }
        }
        return apariciones
    }

    function elementoMasFrecuente(array){
        let masFrecuente = array[0]

        for(let i = 1; i < array.length; i++){
            if(contadorFrecuencia(masFrecuente, array) < contadorFrecuencia(array[i], array)){
                masFrecuente = array[i]
            }
        }
        return masFrecuente
    }
    document.querySelector('#numero-frecuente').innerText += elementoMasFrecuente(listli)



    return false
}



