function devuelveLista() { 

  var playlists = [
      { title: 'Lolo', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 },
      { title: 'Chirri', id: 7 }
    ];
    
  
/*var contenidoWeb = '';
	
			$.ajax({ type: 'GET',   
				 url: 'http://localhost:8100/hush',
				 async: false,
				 success : function(text)
				 {
				     contenidoWeb = text;
				 }
			});
*/  
  /* en la variable contenidoWeb tengo todo el contenido HTML de la p�gina Web. Parsearlo para:
  - crear a partir de ah� una versi�n en texto del contenido, para mostrar en el actual "playlists" que devuelvo al final de esta funci�n
  - obtener las categor�as con las que quisiera crear el men� de la izquierda */
  
  
/*console.log(contenidoWeb.substring(0,12000));*/
  
  return playlists;

}
