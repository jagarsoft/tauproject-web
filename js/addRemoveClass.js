//$('#toggle-menu').click(function(){
//  $('#menu').toggleClass('mostrar');
//});

var toggleMenu = document.getElementById('toggle-menu');

// classList es una propiedad de los elementos que devuelve un
// DOMTokenList con todas las clases. Este propiedad posee los
// siguientes métodos: add(), remove(), toggle()



toggleMenu.addEventListener('click',function(){
	var menu = document.getElementById('sectionnav');
console.log(menu.classList);
  //menu.classList.toggle('ocultar');
  //menu.setAttribute('class','mostrar');
  menu.classList.toggle('desde-web');

console.log(menu.classList);
});


// Correspondencias:

// Añadir clases:
  // jQuery:         $(el).addClass('myclass')
  // JavaScript:     el.classList.add('myclass')

// Quitar clases:
  // jQuery:         $(el).removeClass('myclass')
  // JavaScript:     el.classList.remove('myclass')

// Toggle class
  // jQuery:         $(el).toggleClass('myclass')
  // JavaScript:     el.classList.toggle('myclass')