function devuelveLista($section) { 

  
var contenidoWeb = '';
	
			$.ajax({ type: 'GET',   
				 url: 'http://192.34.57.3:56137/api/section/' + $section,
				 async: false,
				 success : function(text)
				 {
				     contenidoWeb = text;
				 }
			});
			

  
  /* en la variable contenidoWeb tengo todo el contenido HTML de la página Web. Parsearlo para:
  - crear a partir de ahí una versión en texto del contenido, para mostrar en el actual "playlists" que devuelvo al final de esta función
  - obtener las categorías con las que quisiera crear el menú de la izquierda */
  
  
  console.log($section);
  
  return contenidoWeb;

}

