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

    
    return false
}



