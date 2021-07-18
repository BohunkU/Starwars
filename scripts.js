import { people } from './people.js';
import { starships } from './starships.js';
console.log(starships[0])
//people data we want to use
// birthday
// homeworld
// name
//startshipts data we want to use
// name
// manufacture
// model
let arrowFuncExample = (params) => {
    //do stuff
}
let tradFuctionExampl = function(params) {
    //do suff
}
//build information array
let simplePeopleArray = people.map((person) => {
    return {
        fullName: person.name,
        birthday: person.birth_year,
        homeWorld: person.homeworld
    }
})
let simpleStarshipArray = starships.map((starship) => {
    return {
        name: starship.name,
        manufacture: starship.manufacturer,
        model: starship.model
    }
})


//Build element functions
//display the information onto the webpage
simplePeopleArray.forEach((person) => {
     let nameElement = document.createElement('p');
     
    nameElement.innerHTML = person.fullName;
    
    let peopleDiv = document.querySelector('#peopleDiv');
    peopleDiv.append(nameElement);
})
simpleStarshipArray.forEach((starship) => {
    let unnamedElement = document.createElement('p');
    unnamedElement.innerHTML = starship.name;
    
    let starshipDiv = document.querySelector('#starshipDiv')
    starshipDiv.append(unnamedElement);
})
//build rendering loop