function pegarDados () {
    fetch('https://api.adviceslip.com/advice')
    .then((res) => {
        if (res.status == 200) {
            console.log('sucesso ao acessar a API')
            return res.json()
        } else {
            console.log(`falha ao acessar a API: ${res.status}`)
            return new Error('Falha ao acessar a API: ' + res.status)
        }
    })
    .then((res) => {
        const span = document.getElementsByTagName('span')[0] // elemento que vai receber o id do conselho
        const h1 = document.getElementsByTagName('h1')[0] // elemento que vai receber o conselho

        span.innerHTML = `Advice #${res.slip.id}`
        h1.innerHTML = `"${res.slip.advice}"`
    })
}

window.addEventListener('load', () => {
    pegarDados()
    document.getElementsByTagName('button')[0].addEventListener('click', () => {
        pegarDados()
    })
})