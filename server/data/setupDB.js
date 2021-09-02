const mongoose = require('mongoose')

const {connectionURI} = require('../config.json')

const setupDB = async () => {
	try {
		await mongoose.connect(connectionURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		})
		console.log('connected to db')
	} catch(err) {
		console.error(err, 'DB connection error above')
	}
}

module.exports = setupDB