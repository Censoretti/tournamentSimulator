// const fs = require('node:fs/promises');
console.log('hi');

async function requires() {
	try {
		const object = require('./json/definitions.json')
		// console.log(object);
		console.log(object.manager.managing);
		object.manager.managing = console.log('sucess');
		object.manager.managing
		console.log(Object.keys(object).length);
	} catch(err) {
		console.log(err)
	}
}

requires()