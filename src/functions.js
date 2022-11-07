let allPersons = []
const allObjects = require('./json/definitions.json')

function personaBase() {
	return {
			"firstName": "",
			"middleName": "",
			"lastName": "",
			"age": "",
			"id": "",
			"tier": "",
			"proeficiency": "0",
			"role": "",
			"organization": "",
			"value": {
				"buy": "",
				"sell": "",
				"maintain": ""
			},
			"capital": {
				"earn": "",
				"spent": ""
			},
			"contract": {
				"option": "",
				"time": ""
			},
			"nacionality": "",
			"region": "",
			"morale": "",
			"influency": {
				"himself": {
					"audiency": "",
					"team": "",
					"staff": "",
					"gamehouse": ""
				},
				"other": {
					"audiency": "",
					"team": "",
					"staff": "",
					"gamehouse": ""
				}
			},
			"skill": {
				"mechanical": "",
				"technical": "",
				"team": "",
				"social": "",
				"strategy": "",
				"morale": "",
				"consistency": ""
			},
			"mediaScore": "",
			"titles": "",
			"sponsors": "",
			"condition": {
				"luck": "",
				"rest": "",
				"stress": "",
				"team": "",
				"psichology": "",
				"desease": {
					"option": "",
					"name": ""
				}
		},
	}
}

function orgsBase() {
	return {
		"name": "",
		"games": "",
		"money": "",
		"sponsors": "",
		"staff": {
			"psychologyst": {
				"individual": "",
				"team": ""
			},
			"cooker": "",
			"cleaner": "",
			"manager": "",
			"media": {
				"social": "",
				"marketing": "",
				"mercandise": ""
			},
			"scout": "",
			"streamers": "",
			"headCoach": "",
			"coaches": "",
			"cer": "",
			"structure": {
				"gamehouse": "",
				"car": ""
			},
			"players": ""
		}
	}
}

function role(name) {
	switch(name) {
		case "manager":
			return {
				"name": "manager",
				"managing": function() {},
				"stream": {
					"option": "",
					"streaming": function() {}
				}
			}
		case "ceo":
			return {
				"name": "ceo",
				"managing": function() {},
				"stream": {
					"option": "",
					"streaming": function() {}
				}
			}
		case "headCoach":
			return {
				"name": "headCoach",
				"coaching": function() {},
				"playing": function() {},
				"train": function() {},
				"speciality": "",
				"stream": {
					"option": "",
					"streaming": function() {}
				}
			}
		case "coach":
			return {
				"name": "coach",
				"coaching": function() {},
				"train": function() {},
				"speciality": "",
				"stream": {
					"option": "",
					"streaming": function() {}
				}
			}
		case "scout":
			return {
				"name": "scout",
				"scouting": function() {}
			}
		case "cooker":
			return {
				"name": "cooker",
				"cooking": function() {}
			}
		case "cleaner":
			return {
				"name": "cleaner",
				"cleaning": function() {}
			}
		case "psichologist":
			return {
				"name": "psichologist",
				"psychologing": function() {}
			}
		case "player":
			return {
				"name": "player",
				"position": "",
				"playing": function() {},
				"train": function() {},
				"stream": {
					"option": "",
					"streaming": function() {}
				}
			}
		case "media":
			return {
				"name": "media",
				"speciality": "",
				"doing": function() {}
			}
		case "streamer":
			return {
				"name": "streamer",
				"streaming": function() {}
			}
	}
}

function randomMinMax(min, max){
	return parseInt(Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min)))
}

function createOrgs() {
	const organization = orgsBase()

}

function createPersons(allPersons, definitions, control) {
	const person = personaBase()
	let roleInCreationNumber = control.countRolesFull
	person.role = role(definitions.roles[roleInCreationNumber].name)
	definitions.roles[roleInCreationNumber].personsInRole ++
	if(definitions.roles[roleInCreationNumber].personsInRole == definitions.roles[roleInCreationNumber].maxPersonRole) {
		control.countRolesFull ++
		control.testRoles[person.role] = 'yes'
	}
	
	person.age = randomMinMax(definitions.roles[roleInCreationNumber].minAge, definitions.roles[roleInCreationNumber].maxAge)
	person.id = allPersons.length + 3970001
	
	person.proeficiency = 0
	for(let i = 0; i < Object.keys(control.skill).length; i++){
		// console.log(Object.keys(control.skill)[i]);
		person.skill[Object.keys(control.skill)[i]] =Math.floor(Math.random() * (control.skill[Object.keys(control.skill)[i]]))
		person.proeficiency += parseInt(person.skill[Object.keys(control.skill)[i]] / 100)
	}

	if(person.proeficiency >= 39) {person.tier = 's'} else
	if(person.proeficiency >= 32) {person.tier = 'a'} else {person.tier = 'b'}

	person.value.buy = randomMinMax(control.value.buy[person.tier].min, control.value.buy[person.tier].max)
	person.value.sell = randomMinMax(control.value.sell[person.tier].min, control.value.sell[person.tier].max)
	person.value.maintain = randomMinMax(control.value.maintain[person.tier].min, control.value.maintain[person.tier].max)


	// 
	
	allPersons.push(person)

}
let pass = true
while(pass){
	createPersons(allPersons, allObjects.definitions, allObjects.control)
	if((allObjects.control.countRolesFull > 10 )) pass = false
	// return
}
console.log(allPersons[0]);


// let testS = 0
// let testA = 0
// let testB = 0
// for(let i = 0; i < allPersons.length; i++){
// 	if(allPersons[i].tier == 's') {
// 		testS ++
// 	} else if(allPersons[i].tier == 'a') {
// 		testA ++
// 	} else {
// 		testB ++
// 	}
// }
// console.log(`tier: S ${testS}
// tier: A ${testA}
// tier: B ${testB}`);

// console.log(`
//  ${definitions.persons[0].name}: ${definitions.persons[0].personsInRole} / ${definitions.persons[0].maxPersonRole} full: ${control.testRoles[definitions.persons[0].name]}
//  ${definitions.persons[1].name}: ${definitions.persons[1].personsInRole} / ${definitions.persons[1].maxPersonRole} full: ${control.testRoles[definitions.persons[1].name]}
//  ${definitions.persons[2].name}: ${definitions.persons[2].personsInRole} / ${definitions.persons[2].maxPersonRole} full: ${control.testRoles[definitions.persons[2].name]}
//  ${definitions.persons[3].name}: ${definitions.persons[3].personsInRole} / ${definitions.persons[3].maxPersonRole} full: ${control.testRoles[definitions.persons[3].name]}
//  ${definitions.persons[4].name}: ${definitions.persons[4].personsInRole} / ${definitions.persons[4].maxPersonRole} full: ${control.testRoles[definitions.persons[4].name]}
//  ${definitions.persons[5].name}: ${definitions.persons[5].personsInRole} / ${definitions.persons[5].maxPersonRole} full: ${control.testRoles[definitions.persons[5].name]}
//  ${definitions.persons[6].name}: ${definitions.persons[6].personsInRole} / ${definitions.persons[6].maxPersonRole} full: ${control.testRoles[definitions.persons[6].name]}
//  ${definitions.persons[7].name}: ${definitions.persons[7].personsInRole} / ${definitions.persons[7].maxPersonRole} full: ${control.testRoles[definitions.persons[7].name]}
//  ${definitions.persons[8].name}: ${definitions.persons[8].personsInRole} / ${definitions.persons[8].maxPersonRole} full: ${control.testRoles[definitions.persons[8].name]}
//  ${definitions.persons[9].name}: ${definitions.persons[9].personsInRole} / ${definitions.persons[9].maxPersonRole} full: ${control.testRoles[definitions.persons[9].name]}
//  ${definitions.persons[10].name}: ${definitions.persons[10].personsInRole} / ${definitions.persons[10].maxPersonRole} full: ${control.testRoles[definitions.persons[10].name]}
//  personCount: ${allPersons.length}
//  conuntRolesFull: ${control.countRolesFull}
//  `)
