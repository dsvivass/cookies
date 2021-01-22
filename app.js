console.log('adentro')

document.cookie = 'name=Daniel v; expires=Thu, 18 Dec 2025 12:00:00 UTC'

window.onload = () => {
    var btn = document.getElementById('btn')

btn.addEventListener('click', e => {
    document.cookie = 'exploracion=UNA154; expires=Thu, 18 Dec 2025 12:00:00 UTC'
    console.log('click')

    var exploracion = 'UNA1P1'

    var url = `saludo.html?param1="${encodeURIComponent(exploracion)}"`;

    document.location.href = url;
})
}

