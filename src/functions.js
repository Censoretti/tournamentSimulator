let allPersons = []
const allObjects = require('./json/definitions.json')
let roleCount = allObjects.definitions.persons

async function randomizer(allObjects, allPersons, roleCount) {
	const person = allObjects.person
	let roleInCreationNumber = roleCount.control.countRolesFull
	console.log(`roleInCreationNumber defined: ${roleInCreationNumber}`);
	person.role = allObjects.definitions.persons[roleInCreationNumber].name
	roleCount[roleInCreationNumber].personsInRole ++
	if(roleCount[roleInCreationNumber].personsInRole == roleCount[roleInCreationNumber].maxPersonRole) {
		roleCount.control.countRolesFull ++

	}
	
	person.age = Math.floor(Math.random() * (allObjects.definitions.persons[roleInCreationNumber].maxAge - allObjects.definitions.persons[roleInCreationNumber].minAge + 1) ) + parseInt(allObjects.definitions.persons[roleInCreationNumber].minAge)
	person.id = allPersons.length + 3970000
	allPersons.push(person)
}
let pass = true
while(pass){
	// console.log(roleCount.control.countRolesFull);
	randomizer(allObjects, allPersons, roleCount)
	if((roleCount.control.countRolesFull > 10 )) pass = false
	// return
}
console.log(`
 ${roleCount[0].name}: ${roleCount[0].personsInRole} / ${roleCount[0].maxPersonRole} full: ${roleCount.control.testRoles[roleCount[0].name]}
 ${roleCount[1].name}: ${roleCount[1].personsInRole} / ${roleCount[1].maxPersonRole} full: ${roleCount.control.testRoles[roleCount[1].name]}
 ${roleCount[2].name}: ${roleCount[2].personsInRole} / ${roleCount[2].maxPersonRole} full: ${roleCount.control.testRoles[roleCount[2].name]}
 ${roleCount[3].name}: ${roleCount[3].personsInRole} / ${roleCount[3].maxPersonRole} full: ${roleCount.control.testRoles[roleCount[3].name]}
 ${roleCount[4].name}: ${roleCount[4].personsInRole} / ${roleCount[4].maxPersonRole} full: ${roleCount.control.testRoles[roleCount[4].name]}
 ${roleCount[5].name}: ${roleCount[5].personsInRole} / ${roleCount[5].maxPersonRole} full: ${roleCount.control.testRoles[roleCount[5].name]}
 ${roleCount[6].name}: ${roleCount[6].personsInRole} / ${roleCount[6].maxPersonRole} full: ${roleCount.control.testRoles[roleCount[6].name]}
 ${roleCount[7].name}: ${roleCount[7].personsInRole} / ${roleCount[7].maxPersonRole} full: ${roleCount.control.testRoles[roleCount[7].name]}
 ${roleCount[8].name}: ${roleCount[8].personsInRole} / ${roleCount[8].maxPersonRole} full: ${roleCount.control.testRoles[roleCount[8].name]}
 ${roleCount[9].name}: ${roleCount[9].personsInRole} / ${roleCount[9].maxPersonRole} full: ${roleCount.control.testRoles[roleCount[9].name]}
 ${roleCount[10].name}: ${roleCount[10].personsInRole} / ${roleCount[10].maxPersonRole} full: ${roleCount.control.testRoles[roleCount[10].name]}
 personCount: ${allPersons.length}
 conuntRolesFull: ${roleCount.control.countRolesFull}
 `)