console.log('adentro')

document.cookie = 'name=Daniel'

window.onload = () => {
    var btn = document.getElementById('btn')

btn.addEventListener('click', e => {
    document.cookie = 'exploracion=UNA154'
    console.log('click')
})
}
