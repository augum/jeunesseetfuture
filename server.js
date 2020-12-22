let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')
let i18next = require("i18next");
let middleware = require("i18next-express-middleware");

app.set('view engine', 'ejs')

// fichier public
app.use(express.static('public'))

// nos Middlewares 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'guymanday',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(require('./middlewares/flash'))
// routes
app.get('/', function(req, res, next){
  res.render('pages/index');
});

app.get('/index.ejs', function(req, res, next){
  res.render('pages/index');
});

app.get('/about.ejs', function(req, res, next){
	res.render('pages/about')
})

app.get('/services.ejs', function(req, res, next){
	res.render('pages/services')
})

app.get('/contact.ejs', function(req, res, next){
	res.render('pages/contact')
})

app.get('/servicesplus.ejs', function(req, res, next){
	res.render('pages/servicesplus')
})

app.get('/servicesplus2.ejs', function(req, res, next){
	res.render('pages/servicesplus2')
})

app.get('/servicesplus3.ejs', function(req, res, next){
	res.render('pages/servicesplus3')
})

app.get('/servicesplus4.ejs', function(req, res, next){
	res.render('pages/servicesplus4')
})
//reception des données des formulaires

// le formulaire du page d'accueil
app.post('/', (request, response) =>{
	if ((request.body.nom === undefined || request.body.nom === '') || 
		(request.body.email === undefined || request.body.email === '') || 
		(request.body.sujet === undefined || request.body.sujet === '') || 
		(request.body.message === undefined || request.body.message === '')) {

		request.flash('error', "Message non envoyé, veuillez verifier vos informations !")
		response.redirect('/#messageflash')
	} else{
		let Message = require('./models/message')
		Message.create(request.body.nom, request.body.email, request.body.sujet, request.body.message, function(){
			request.flash('success', "Merci de nous avoir contaté, nous vous repondrons vite que possible !")
			response.redirect('/#messageflash')
		})
	}
	
})

// le formulaire du page de contact 
app.post('/contact', (request, response) =>{
	if ((request.body.nom === undefined || request.body.nom === '') || 
		(request.body.email === undefined || request.body.email === '') || 
		(request.body.sujet === undefined || request.body.sujet === '') || 
		(request.body.message === undefined || request.body.message === '')) {

		request.flash('error', "Message non envoyé, veuillez verifier vos informations !")
		response.redirect('../contact.ejs#messageflash')
	} else{
		let Message = require('./models/message')
		Message.create(request.body.nom, request.body.email, request.body.sujet, request.body.message, function(){
			request.flash('success', "Merci de nous avoir contaté, nous vous repondrons vite que possible !")
			response.redirect('../contact.ejs#messageflash')
		})
	}
	
})


// le formulaire du page de services
app.post('/services', (request, response) =>{
	if ((request.body.nom === undefined || request.body.nom === '') || 
		(request.body.email === undefined || request.body.email === '') || 
		(request.body.sujet === undefined || request.body.sujet === '') || 
		(request.body.message === undefined || request.body.message === '')) {

		request.flash('error', "Message non envoyé, veuillez verifier vos informations !")
		response.redirect('../services.ejs#messageflash')
	} else{
		let Message = require('./models/message')
		Message.create(request.body.nom, request.body.email, request.body.sujet, request.body.message, function(){
			request.flash('success', "Merci de nous avoir contaté, nous vous repondrons vite que possible !")
			response.redirect('../services.ejs#messageflash')
		})
	}
	
})

// le formulaire du page de contacter nous du footer de la page d'accueil
app.post('/footercontact', (request, response) =>{
	if ((request.body.nom === undefined || request.body.nom === '') || 
		(request.body.email === undefined || request.body.email === '') ||  
		(request.body.message === undefined || request.body.message === '')) {

		request.flash('error', "Message non envoyé, veuillez verifier vos informations !")
		response.redirect('/#footercontact')
	} else{
		let Message = require('./models/message')
		Message.createContact(request.body.nom, request.body.email, request.body.message, function(){
			request.flash('success', "Merci de nous avoir contaté, nous vous repondrons vite que possible !")
			response.redirect('/#footercontact')
		})
	}
	
})

// // le formulaire du page de contacter nous du footer de la page about
app.post('/footerabout', (request, response) =>{
	if ((request.body.nom === undefined || request.body.nom === '') || 
		(request.body.email === undefined || request.body.email === '') ||  
		(request.body.message === undefined || request.body.message === '')) {

		request.flash('error', "Message non envoyé, veuillez verifier vos informations !")
		response.redirect('../about.ejs#footercontact')
	} else{
		let Message = require('./models/message')
		Message.createContact(request.body.nom, request.body.email, request.body.message, function(){
			request.flash('success', "Merci de nous avoir contaté, nous vous repondrons vite que possible !")
			response.redirect('../about.ejs#footercontact')
		})
	}


})

// le formulaire du page de contacter nous du footer de la page service
app.post('/footerservices', (request, response) =>{
	if ((request.body.nom === undefined || request.body.nom === '') || 
		(request.body.email === undefined || request.body.email === '') ||  
		(request.body.message === undefined || request.body.message === '')) {

		request.flash('error', "Message non envoyé, veuillez verifier vos informations !")
		response.redirect('../services.ejs#footercontact')
	} else{
		let Message = require('./models/message')
		Message.createContact(request.body.nom, request.body.email, request.body.message, function(){
			request.flash('success', "Merci de nous avoir contaté, nous vous repondrons vite que possible !")
			response.redirect('../services.ejs#footercontact')
		})
	}


})

// le formulaire du page de contacter nous du footer de la page contact
app.post('/footercontacter', (request, response) =>{
	if ((request.body.nom === undefined || request.body.nom === '') || 
		(request.body.email === undefined || request.body.email === '') ||  
		(request.body.message === undefined || request.body.message === '')) {

		request.flash('error', "Message non envoyé, veuillez verifier vos informations !")
		response.redirect('../contact.ejs#footercontact')
	} else{
		let Message = require('./models/message')
		Message.createContact(request.body.nom, request.body.email, request.body.message, function(){
			request.flash('success', "Merci de nous avoir contaté, nous vous repondrons vite que possible !")
			response.redirect('../contact.ejs#footercontact')
		})
	}


})
app.listen(8080)