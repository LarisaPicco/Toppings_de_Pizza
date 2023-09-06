/*getElementById*/

const contenedor = document.getElementById('contenedor')
console.log(typeof contenedor) /*el tipo de dato que devuelve la consola es object, porque el getelementbyid retorna el elemento contenedor como un objeto */

const titulo = document.getElementById('titulo')
console.log(titulo.innerText) /*innerText muestra el texto contenido en el objeto, en este caso el objeto titulo*/
console.log(titulo.tagName) /*tagName muestra el tipo de etiqueta que es*/

/*getElementByClassName */
const toppingss = document.getElementsByClassName('topping') /*el nombre de la variable debe ir en plural para dejar
claro que incluye a varios elementos, como en este caso todos los elementos que tienen esa clase topping */
console.log(toppingss)
console.log(toppingss.length) /*length muestra cuantos elementos hay en esa variable)*/
console.log(toppingss[0]) /*los [ ] muestran el elemento de tal posición tal como un array, en este caso 0*/
console.log(toppingss[0].id) /*el.id muestra el id de ese elemento*/

/*getElementByTagName */
const mistoppings = document.getElementsByTagName('li') /*trae todos los elementos contenidos en esa etiqueta*/
console.log(mistoppings) /*sin importar si tienen una clase o id especifico, con que pertenezcan a esa etiqueta ya está */

/*querySelector*/
const primerToppingRojo = document.querySelector('.topping.fondo-rojo') 
console.log(primerToppingRojo) /*La función querySelector() nos devolverá el primer elemento que coincida con el selector que le pasemos. 
Si es un id no habría problema puesto que deberían ser únicos en el documento, pero si se tratase de una clase o un 
elemento HTML entonces nos devolvería solo la primera ocurrencia: */

const primerToppingNoVerde = document.querySelector('ul li:not(.fondo-verde)') /*muestra el primer elemento que no tenga tal caracteristica */
console.log(primerToppingNoVerde)

/*querySelectorAll */
const toppingsRojo = document.querySelectorAll('.topping.fondo-rojo') 
console.log(toppingsRojo) /*El funcionamiento es igual que el de querySelector(), pero en este caso nos devolverá un objeto Nodelist 
que contiene todos los elementos que coincidan con el selector que hemos buscado. 
En este caso no tendría sentido usarlo con id, ya que debería ser un elemento único. */
console.log(toppingsRojo[0]) /*para ser más especifico*/
console.log(toppingsRojo[1])
console.log(toppingsRojo.length) /*podemos ver cuantos elementos tienen esa propiedad, en este caso las clases topping y fondo rojo*/


/*Asignar estilos de forma dinamica en js */

/*Para cambiar el estilo o propiedad CSS en base a cómo el usuario interactúa con la página web
/*si hace click en un botón o si una operacion se completa podemos mostrar algo o esconderlo*/

/*como son objetos, debemos usar notacion de puntos para acceder a sus propiedades*/


/*Colores*/
         /*const estilizarPrimerToppingcambiar = document.querySelector('.topping')
         estilizarPrimerToppingcambiar.style.backgroundColor = 'purple'; /*vamos a personalizar este primer topping 
         estilizarPrimerToppingcambiar.style.color = '#ee82ee'

/*Textos*/
        /*const cambiarTextoTitulo = document.getElementById('titulo')
        cambiarTextoTitulo.innerText = 'Mis Toppings Favoritos' /*modificar el texto desde el dom*/
 
/*Verificar si una clase existe*/ 
/*utiles para usar en condicionales, para decidir si se hace algo en base a si un elemento posee esa clase o no*/

const verificarSiUnaClaseExiste = document.querySelector('.topping')
console.log(verificarSiUnaClaseExiste.classList.contains('fondo-azul')) /*quiero verificar si ese elemento tiene tal clase, en este caso quiero
revisar si el primer topping tiene la clase fondo-violeta, usando el querySelector. Por supuesto me arrojara false porque no la tiene*/

/*Eliminar una clase*/
/*si agregaste una clase y le asignaste un estilo porque ese elemento en ese momento estaba activo en la app, pero ya
no esta activo y necesitas eliminar ese estilo eliminando la clase*/

         /*const eliminarUnaClase = document.querySelector('.topping')
         eliminarUnaClase.classList.remove('topping') /*le quitamos la clase topping a ese elemento, en este caso al primero con la clase topping*/

/*Agregar una clase*/

         /*const agregarUnaClase = document.querySelector('.topping') 
         agregarUnaClase.classList.add('texto-verde')  /*primero tenemos que armar esa clase en CSS, aunque 
         no este descrita en html, ya que la escribo en css pero la asigno desde aca)


/*Crear, agregar y eliminar elementos en DOM*/

/*se puede agregar ese elemento al DOM, es util cuando recibimos informacion de un servidor o App*/

/*createElement*/

/*Al crear un elemento tenemos que especificar donde queremos agregarlo*/

const listaDeToppings = document.getElementById('lista-toppings') /*aqui se agregará el elemento, a la etiqueta ul que tiene
como id lista-toppings*/

const toppingNuevo = document.createElement('li') /*se escribe que tipo de elemento queremos crear, en este caso uno con etiqueta li*/
toppingNuevo.classList.add('topping', 'fondo-amarillo') /*se le agrega clase*/
toppingNuevo.innerText = 'Queso extra' /*se le asigna texto*/

listaDeToppings.append(toppingNuevo) /*append agrega el elemento toppingNuevo a la listaDeToppigs*/

/*Eliminar elemento*/

/*toppingNuevo.remove() /*con remove se elimina el elemento que creamos*/

/*Eventos del DOM*/

/*Eventos por click, por teclado, por arrastre de elemento como para poner fotos de perfil*/
/*Target, trigger, EverHandler (es la función que se ejecuta cuando ocurre un evento) y EverListener (es la relación que existe 
    cuando ocurre un evento sobre un elemento, vamos a llamar a una función)*/

    /*Ejemplo
    Cuando el usuario haga click en el botón del topping Albahaca, quiero que se muestre un mensaje*/

/*Se utiliza el atributo OnClick en html, y se lo asocia a una función específica que vamos a 
definir en js

   ej: en html agregaremos el atributo onclick en la etiqueta de la albahaca
       <li onclick="mostrarClick()" class="topping fondo-verde" id="albahaca">Albahaca</li>*/

       /*en js:*/
       /*function mostrarClick(topping) {
           console.log(topping)
       }*/

    
 /*Se puede escribir el atributo onClick en el html como antes, pero es más práctico crearlo en js con addEventListener()*/

    const toppings = document.getElementsByClassName('topping')

    function mostrarMensajeTopping(e) {
        console.log(e.target.innerText)
    }

    for (const topping of toppings) {
        topping.addEventListener('click', mostrarMensajeTopping)
    }









