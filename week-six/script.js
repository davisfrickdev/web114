'use strict';
// Davis Frick, April 16, 2025
// Initialize
let greeting = 'Welcome to the Nightruder: A Night Interrupted promotional page!';
alert(greeting);

// Reassign
greeting = "Nightruder is the GOAT!";
console.log(greeting);

// 5
let readyToLaunch = false;
console.log(readyToLaunch);

//  6
let preorders = 88000;
let promoCopies = 22;
const retailPrice = 79;
console.log(`Nightruder has ${preorders} preorders, looking at $${retailPrice * (preorders - promoCopies)} in sales`);

// 8
console.log('Type Conversion Examples:');
console.log('"" + 1 + 0 =', "" + 1 + 0);          // "10"
console.log('"" - 1 + 0 =', "" - 1 + 0);          // -1
console.log('true + false =', true + false);      // 1
console.log('6 / "3" =', 6 / "3");                // 2
console.log('"2" * "3" =', "2" * "3");            // 6
console.log('4 + 5 + "px" =', 4 + 5 + "px");      // "9px"
console.log('"$" + 4 + 5 =', "$" + 4 + 5);        // "$45"
console.log('"4" - 2 =', "4" - 2);                // 2
console.log('"4px" - 2 =', "4px" - 2);            // NaN
console.log('7 / 0 =', 7 / 0);                    // Infinity
console.log('"  -9  " + 5 =', "  -9  " + 5);      // "  -9  5"
console.log('"  -9  " - 5 =', "  -9  " - 5);      // -14
console.log('null + 1 =', null + 1);              // 1
console.log('undefined + 1 =', undefined + 1);    // NaN



let characterClasses = [
    {
        name: "Warrior",
        type: "melee",
        main: "strength",
        magic: 0,
        expansion: false,

       launch: true,
        summary: `Step into the night swinging blades of thunder! Chop your enemies down as the mighty Warrior.`
    },{
        name: "Mage",
        type: "caster",
        main: "charisma",
        magic: 50,
        expansion: false,

       launch: true,
        summary: `Hey bro, you like magic? Cast the night away with the Mage's mighty spells! Built like no other to intrude into the souls of enemies.`
    },{
        name: "Dogbear",
        type: "melee",
        main: "size",
        magic: 20,
        expansion: true,

       launch: true,
        summary: `Half dog, half bear, half man! All punishment! Tower over those weak enemy babies with the ultimate in slash'em up fun! Big paws! Wagging tail! The night never stood a chance!`
    },{
        name: "Technomancer",
        type: "caster",
        main: "wisdom",
        magic: 80,
        expansion: true,

       launch: false,
        summary: `Bleep bloop! Now loading... FUN! Program your spells into the ether and grind your enemies capacitors and processors to a hault with the Technomancer!`
    }
]

// Project 6 
// 1
let presales = 88000
for (let i = 1; i < presales; i++) {
  if (i % 777) {
    console.log(`Limited edition collectible added to copy number ${i}`)
  }
}
// 2
let classes_section = document.querySelector('#classes');
/** 
function listClasses() { // 3
    for (let i = 0; i < characterClasses.length; i++) {
        let h3name = document.createElement('h3');
        h3name.textContent = characterClasses[i].name;
        switch(characterClasses[i].type) {
            case "caster": 
                h3name.classList('purple') ;
                break;
            case "melee": 
                h3name.classList('red') ;
                break;    
            default: 
                h3name.style.backgroundColor = "gray";
                break;
        }
        classes_section.appendChild(h3name);
        if (characterClasses[i].expansion === true && characterClasses[i].launch === true) {
            let h4name = document.createElement('h4');
            classes_section.appendChild(h4name);
        }
        let pname = document.createElement('p');
        pname.textContent = characterClasses[i].sumamary;
        classes_section.appendChild(pname);
        
    }
}
*/
let listClasses = function() { // 3
    for (let i = 0; i < characterClasses.length; i++) {
        let h3name = document.createElement('h3');
        h3name.textContent = characterClasses[i].name;
        switch(characterClasses[i].type) {
            case "caster": 
                h3name.classList.add('purple') ;
                break;
            case "melee": 
                h3name.classList.add('red') ;
                break;    
            default: 
                h3name.style.backgroundColor = "gray";
                break;
        }
        classes_section.appendChild(h3name);
        if (characterClasses[i].expansion === true && characterClasses[i].launch === true) {
            let h4name = document.createElement('h4');
            h4name.textContent = "Available via expansion at launch!";
            classes_section.appendChild(h4name);
        }
        let pname = document.createElement('p');
        pname.textContent = characterClasses[i].summary;
        classes_section.appendChild(pname);
        
    }
}
listClasses();