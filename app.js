const rainbow = document.querySelectorAll('div.card')
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
        event.preventDefault()
        const blockID = anchor.getAttribute('href')
        document.querySelector(''+ blockID ).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

for (let color of rainbow) {
    color.addEventListener('click', () => twistCard(color))
}

function twistCard(card) {
    card.classList.add('twisted')
    setTimeout(() => card.classList.remove('twisted'), 3000)
}