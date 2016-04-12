angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  
  var contenidoWeb = '';
  
  
  $.ajax({ type: 'GET',   
				 url: 'http://192.34.57.3:56137/api/section/noticias',
				 async: false,
				 success : function(text)
				 {
				     contenidoWeb = text;
				 }
	});
	
	

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
