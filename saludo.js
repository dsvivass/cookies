var urlSearch = window.location.search

var matches = urlSearch.match('%22([a-zA-Z0-9]*)%')
var exploracion = matches[1]

var titulo = document.getElementById('tit')

titulo.innerHTML += ' ' + exploracion