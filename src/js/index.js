const button = document.getElementsByClassName('hambmobile')
const navmobile = document.getElementById('navmobile')

button[0].addEventListener('click', () => {
    navmobile.classList.toggle('hidden')
})

