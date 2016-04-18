angular.module('starter.services', [])

.factory('PrensaNoticias', function() {
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
})

.factory('PrensaDeportes', function() {
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
})

.factory('PrensaEconomia', function() {
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
})

.factory('PrensaComunidad', function() {
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
})

.factory('PrensaVida', function() {
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
})

.factory('PrensaSociales', function() {
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
})

.factory('PrensaParentesis', function() {
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
})

.factory('PrensaMinianuncios', function() {
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