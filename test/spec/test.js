/* global describe, it */
(function () {
   'use strict';
 
   describe('A Collection constructor', function () {
        describe(', when run', function () {
            it('should return a new object', function () {
              var students = new Collection;
 
              expect(students.constructor.name).to.equal("Collection");
            });
 
            it('stores its first param in a property called models', function(){
              var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id:'2'}]
              var students = new Collection(toBeAdded)
              
              expect(students.models).to.be.a('Array');
              expect(students.models[1].name).to.equal('Jack');
            });
        });
   });
 
   describe('A Collection instance', function(){
      describe("has a .find() method",function(){
        	it("should return an object when given an id that is present in the models", function(){
          	var students = new Collection([{name: 'Jim', id: '99'}]);
          	expect(students.find('99')).to.deep.equal({name: 'Jim', id: '99'})
        	});
 
        	it("should not return an object when that id is not present in the models", function(){
          	var students = new Collection([{name: 'Jim', id: '99'}]);
          	expect(students.find('1')).to.not.equal({name: 'Jim', id: '99'});
        	});
 
        	it("should return undefined when that id is not present in the models", function(){
          	var students = new Collection([{name: 'Jim', id: '99'}]);
          	expect(students.find('1')).to.equal(undefined);
        	});
 
        	it("should throw an error when given an arguemnt other than a string", function(){
          	var students = new Collection([{name: 'Jim', id: '99'}]);
          	expect(function(){students.find(1)}).to.throw(Error);
          	expect(function(){students.find({})}).to.throw(Error);
          	expect(function(){students.find([])}).to.throw(Error);
        	});
      });
 
      describe("has an .add() method",function(){
       	it("should add the object it's given to the models property", function(){
       		var students = new Collection([{name: 'James', id: '007'}]);
      		students.add({name:'Todd', id:'11'});
      		expect(students.models[1]).to.deep.equal({name:"Todd", id: "11"});	
       	});

        	it("should increase the collections length by 1", function(){
        		var students = new Collection([{name: 'James', id: '7'}]);
        		students.add({name:'jimmy', id:'3'});
        		expect(students.models.length).to.deep.equal(2);
        	});

        	it("should only accept a single object as an argument", function(){
        		var students = new Collection([{name: 'James', id: '7'}]);
				expect(function () {students.add(4)}).to.throw(Error);
				expect(function () {students.add('')}).to.throw(Error);
			});

  			it("should not  accept an empty object as an argument", function(){
       		var students = new Collection([{name: 'James', id: '7'}]);
        		expect(function () {students.add({})}).to.throw(Error);
        	});

        	it("should throw an error when given an object without an id property", function(){
        		var students = new Collection([{name: 'James', id: '7'}]);
        		expect(function () {students.add({name: 'Stuart', pet: ''})}).to.throw(Error);
        	});
      });
 
      describe("has a .remove() method",function(){
        	it("should, when given an id, remove the corresponding object from the models property", function(){
        		var students = new Collection([{name: 'James', id: '7'}]);
        		students.remove('7');
        		expect(students.models[0]).to.be.equal(undefined);
        	});

        	it("should decrease the models property's length by 1", function(){
        		var students = new Collection([{name: 'James', id: '7'}]);
        		students.remove('7');
        		expect(students.models.length).to.equal(0);
        	});

        	it("should only accept a single string as an id argument", function(){
        		var students = new Collection([{name: 'James', id: '7'}]);
        		expect(function(){students.remove({})}).to.throw(Error);
            expect(function(){students.remove([])}).to.throw(Error);
            expect(function(){students.remove(1)}).to.throw(Error);
         });

        	// it("should return true on successful removal");
        	// 	var students = new Collection([{name: 'James', id: '7'}]);
        	// expect(true).to.be.true;

      });

      describe('has an .empty() method', function(){
      	it("should clear out the models array", function(){
      		var students = new Collection([{name: 'James', id: '7'}, {name: 'Todd', id: '11'}]);
      		students.empty();
      		expect(students.models).to.deep.equal([]);
      	});

      	it('should reduce the models array length to 0', function(){
      		var students = new Collection([{name: 'James', id: '7'}, {name: 'Todd', id: '11'}]);
      		students.empty();
      		expect(students.models.length).to.equal(0);
      	});

      	// it('should throw an error if the models array was already empty', function () {
      	//   	var students = new Collection([{name: 'James', id: '7'}, {name: 'Todd', id: '11'}]);
       //      students.empty('bun in the oven')
       //      expect(function(){students.empty()}).to.throw(Error);
      	// });

       it("should throw an error if an argument is passed", function() {
          var students = new Collection ([{name:'James', id: '7'}, {name: 'Todd', id: '11'}]);
          expect( function(){ students.empty('arg') } ).to.throw(Error);
        });	

      });
	
		describe("has an .random() method", function(){
      	it('should return a random object from the models array',function(){
      		var students = new Collection([{name: 'James', id: '7'}, {name:'jimmy', id:'3'}, {name: 'Todd', id: '11'}]);
      		
        		expect(students).to.include(students.random());

      	});

      	it('should allow a number as an argument and return that many random objects', function(){
      		var students = new Collection([{name: 'James', id: '7'}, {name: 'Todd', id: '11'}]);
      		var randomStudent = students.random(2)
      		expext (randomStudent).to.equal 

      	});

      	it('should throw an error if argument is not a number', function(){
      		var classmates = [{name: 'James', id: '7'}, {name:'jimmy', id:'3'}, {name: 'Todd', id: '11'}];
      		var students = new Collection(classmates)

      		expect(function(){classmates.random({})}).to.throw(Error);
      		expect(function(){classmates.random([])}).to.throw(Error);
      		expect(function(){classmates.random('')}).to.throw(Error);
      	});

      	it("should return a one item array from the array if no argument is given", function () {
          	var students = new Collection([{name: 'James', id: '7'}, {name:'jimmy', id:'3'}, {name: 'Todd', id: '11'}]);
          	expect(students.random().length).to.equal(1);
        });

      });

      describe("has a .length() method", function(){
      	it('should return the length of the models array', function () {
            var students = new Collection([{name: 'James', id: '7'}, {name: 'Jimmy', id: '3'}]);
            students.length();

            expect(students.models).to.have.length(2)
        });

      	it("should not accept any arguments", function() {
      		var students = new Collection([{name: 'James', id: '7'}, {name: 'Jimmy', id: '3'}]);
      		expect(function() { students.length('a')}).to.throw(Error);
          	expect(function() { students.length(2)}).to.throw(Error);
          	expect(function() { students.length({})}).to.throw(Error);
         });

     	})

   })
})();




