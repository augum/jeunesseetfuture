let connection = require('../config/db')

class Message{
	// creation des données des formulaires
	static create (nom, email, sujet, message, cb) {
		connection.query('INSERT INTO messages_User SET noms = ?, email = ?, sujet = ?, message = ?, datecreation = ?', [nom, email, sujet, message, new Date()], (err, result) => {
			if (err) throw err
			cb(result)
		})

	}

	// creation du contact du footer
	static createContact (nom, email, message, cb) {
		connection.query('INSERT INTO contacter_nous SET noms = ?, email = ?, message = ?, datecreation = ?', [nom, email, message, new Date()], (err, result) => {
			if (err) throw err
			cb(result)
		})

	}
}

module.exports = Message