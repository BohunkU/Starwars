import { people } from './people.js';
import { starships } from './starships.js';
import { films } from './films.js';
import { getLastNumber, removeChildren } from '../page/utils.js'

// console.log(starships[0])

//people data we want to use
// name
// gender

//films data we want to use
// title
// episode_id

const gallery = document.querySelector('.gallery')
const femaleButton = document.querySelector('#femaleButton')
const maleButton = document.querySelector('#maleButton')
const robotButton = document.querySelector('#robotButton')

const robotCharacters = people.filter(person => {
    if (
        person.gender === "hermaphrodite" || 
        person.gender === "n/a" || 
        person.gender === "none"
    ) {
        return person
    }
})

maleButton.addEventListener('click', event => {
    populateDOM(people.filter(person => person.gender === 'male'))
})

femaleButton.addEventListener('click', event => {
    populateDOM(people.filter(person => person.gender === 'female'))
})

robotButton.addEventListener('click', event => {
    populateDOM(robotCharacters)
})


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