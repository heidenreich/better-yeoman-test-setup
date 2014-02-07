console.log('\'Allo \'Allo!');
 
function Collection (models) {
  	this.models = models;
 
  	this.find = function(id) {
    	var result;
 
    	if (typeof(id) != 'string') {
      	throw new Error("Whoops!");
    	}
 
    	this.models.forEach(function(value, index){
      	if (value.id == id) {
        	result = value;
      	}
    	});
 
    	if (result) {
      	return result;
    	}
  	};

  	this.add = function (objectLit) {
  		if (typeof(objectLit) != 'object') {
  			throw new Error ('nice try Sherlock')
  		}

  		if (_.isEmpty(objectLit)) {
  			throw new Error ('need some info here')
  		}

  		if (!objectLit.hasOwnProperty('id')) {
  			throw new Error ('need an id')
  		};
  		this.models.push(objectLit);

  	};

  	this.remove = function (idRemoved) {
  		if (_.isString(idRemoved) == false) {
  			throw new Error ('not a string')
  		}

  		this.models = _.reject(this.models, function(idNumber){
  			return idNumber.id === idRemoved;
  		});
  	}
}
