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
			

  
  /* en la variable contenidoWeb tengo todo el contenido HTML de la p�gina Web. Parsearlo para:
  - crear a partir de ah� una versi�n en texto del contenido, para mostrar en el actual "playlists" que devuelvo al final de esta funci�n
  - obtener las categor�as con las que quisiera crear el men� de la izquierda */
  
  
  console.log($section);
  
  return contenidoWeb;

}

