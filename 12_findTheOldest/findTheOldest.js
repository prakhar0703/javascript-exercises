const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        if(currentAge > oldestAge) return person;
        else return oldest;
    })
};

function getAge(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
