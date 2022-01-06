const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park
  let din1
  let din2
  let din3
  let din4
  beforeEach(function () {
    park = new Park("Medows", 5, [])
    din1 = new Dinosaur("Rex", "Herbivour", 10)
    din2 = new Dinosaur("Rex", "Herbivour", 6)
    din3 = new Dinosaur("Foxi", "Herbivour", 15)
    din4 = new Dinosaur("Foxi", "Herbivour", 40)

  })

  it('should have a name', function (){
    actual = park.name
    assert.strictEqual("Medows", actual)
  });

  it('should have a ticket price', function (){
    actual = park.ticketPrice
    assert.strictEqual(actual, 5)
  });

  it('should have a collection of dinosaurs', function (){
    actual = park.collectionOfDinasours
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDs(din1)
    actual = park.collectionOfDinasours.length
    assert.deepStrictEqual(actual, 1)

  });


  it('should be able to remove a dinosaur from its collection', function(){
    park.addDs(din1)
    park.collectionOfDinasours.pop()
    actual = park.collectionOfDinasours.length
    assert.deepStrictEqual(actual, 0)
    
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.addDs(din1)
    park.addDs(din2)
    park.addDs(din3)
    park.addDs(din4)
    actual = park.highestYield(park.collectionOfDinasours)
    assert.strictEqual(actual, 40)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDs(din1)
    park.addDs(din2)
    park.addDs(din3)
    park.addDs(din4)

    actual = park.findSpecies("Rex")
    assert.deepStrictEqual(actual.length, 2)
  });
    

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDs(din1)
    park.addDs(din2)
    park.addDs(din3)
    park.addDs(din4)
    actual = park.getTotalVisitors()
    assert.strictEqual(actual, 71)
  });
    

  it('should be able to calculate the total number of visitors per year', function (){
    park.addDs(din1)
    park.addDs(din2)
    park.addDs(din3)
    park.addDs(din4)
    actual = park.getTotalVisitors()*52
    assert.strictEqual(actual, 71*52)
  });
  

  it('should be able to calculate total revenue for one year');

});
