var express = require('express')
var path = require('path')

var app = express()

var server = require('http').Server(app)

var io = require('socket.io')(server)

// Arduino.
var Board = require('johnny-five').Board
var Led = require('johnny-five').Led



// var myBoard = new Board()

var myLed, myBoard;
myBoard = new Board()



io.on('connection', function(socket) {
	console.log("El usuario de conectó.")
	// console.log(socket)

	myBoard.on('ready', function() {
		myLedGreen = new Led(2) 
		myLedBlue = new Led(3) 
		myLedRed = new Led(4) 


		
		// LED VERDE.
		socket.on('prender-led-verde', function() {
			myLedGreen.on()		
		})

		socket.on('apagar-led-verde', function() {
			myLedGreen.off()		
		})


		// LED AZUL.
		socket.on('prender-led-azul', function() {
			myLedBlue.on()		
		})

		socket.on('apagar-led-azul', function() {
			myLedBlue.off()		
		})

		// LED ROJO.
		socket.on('prender-led-rojo', function() {
			myLedRed.on()		
		})

		socket.on('apagar-led-rojo', function() {
			myLedRed.off()		
		})

	})

	myBoard.on('error', function (err) {
		// body...
		console.log(err)
	})

	socket.on('disconnect', function() {
		console.log("El usuario de desconectó.")
	})
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/' , function(req, res) {
	res.render('index')
})



server.listen(3000, function (err) {
	if(err) {
		console.log('Error al correr en el puerto 3000')
		return
	}

	console.log('Corriendo en el puerto 3000')
})