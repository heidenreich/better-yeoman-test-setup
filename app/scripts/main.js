console.log('Have I told you that this makes me feel inadequate?');
 
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
  			return true;
  		});
  	};

  	this.empty = function () {
  			if (arguments.length>0){
  				throw new Error ("we don't want no arguments here")
  			}
  			this.models = [];
  			return true;
  	};

  	this.random = function (x) {
  		x = x || 1;
  		if (_.isNumber(x) === false){
  			throw new Error ('we need a number muchacho')
  		}
  		return _.sample (this.models, x)
	
  	};

  	this.length = function() {
   	if (arguments.length > 0) 
    		throw new Error(" no arguments accepted here");
   		return this.models.length;
  }


}



