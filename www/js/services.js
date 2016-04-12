angular.module('starter.services', [])

.factory('Prensa', function() {
  var contenidoWeb = '';
  return {
    all: function($seccion) {
      
      $.ajax({ type: 'GET',   
	    	 url: 'http://192.34.57.3:56137/api/section/' + $seccion,
	    	 async: false,
	    	 success : function(text)
	    	 {
	    	     contenidoWeb = text;
	    	 }
	    });
      
      return contenidoWeb;
    },
    
    get: function(noticiaId) {
      
      for (var i = 0; i < contenidoWeb.featured.length; i++) {
        if (parseInt(contenidoWeb.featured[i].id) === parseInt(noticiaId)) {
          return contenidoWeb.featured[i];
        }
      }
      return null;
    }
  };
});

