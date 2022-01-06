const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinasours = [];
}

Park.prototype.addDs = function(din){
    this.collectionOfDinasours.push(din)
}

Park.prototype.highestYield=function(listofDs){
    let bestDin = 0;
    for (let din of listofDs){
        if(din.guestsAttractedPerDay > bestDin){
            bestDin = din.guestsAttractedPerDay;
        }
    }
    return bestDin;
}

Park.prototype.findSpecies = function (species){
    let speciesDs = []
    for (let dins of this.collectionOfDinasours){
        if(dins.species === species){
            speciesDs.push(dins)
        }
    } return speciesDs
}

Park.prototype.getTotalVisitors=function(){
    let total = 0
    for (let dins of this.collectionOfDinasours){
        total+=dins.guestsAttractedPerDay
    } return total
}
module.exports = Park;
