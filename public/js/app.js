var socket = io('http://localhost:3000')

function prenderLedVerde() {

	socket.emit('prender-led-verde', null)

	// alert('prendiendo el led verde.')
}

function apagarLedVerde() {
	socket.emit('apagar-led-verde', null)
}


function prenderLedAzul() {
	socket.emit('prender-led-azul', null)
}

function apagarLedAzul() {
	socket.emit('apagar-led-azul', null)
}


function prenderLedRojo() {
	socket.emit('prender-led-rojo', null)
}

function apagarLedRojo() {
	socket.emit('apagar-led-rojo', null)
}