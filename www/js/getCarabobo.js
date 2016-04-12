angular.module('starter.services', [])

.factory('Prensa', function($section) {
  
  var contenidoWeb = '';
	
	$.ajax({ type: 'GET',   
		 url: 'http://192.34.57.3:56137/api/section/' + $section,
		 async: false,
		 success : function(text)
		 {
		     contenidoWeb = text;
		 }
	});

  return {
    all: function() {
      return contenidoWeb;
    },
    
    get: function(noticiaId) {
      for (var i = 0; i < contenidoWeb.length; i++) {
        if (contenidoWeb[i].id === parseInt(noticiaId)) {
          return contenidoWeb[i];
        }
      }
      return null;
    }
  };
});


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
			

  
  console.log($section);
  
  return contenidoWeb;

}

