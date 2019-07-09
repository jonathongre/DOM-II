// Your code goes here

const navLink = document.querySelectorAll('.nav-link')
const home = document.querySelector('.home')
const titles = document.querySelectorAll('h2, h4')
const paragraphs = document.querySelectorAll('p')
const images = document.querySelectorAll('img')
const footer = document.querySelector('.footer p')
const button = document.querySelectorAll('.btn')

images.forEach(element => {
    element.addEventListener('wheel', event => {
        event.preventDefault();
        event.target.style.transform = 'rotate(0.5turn)';
    });
})

home.addEventListener('dblclick', event => {
    home.style.backgroundColor = '#676767';
})



navLink.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.style.color = '#008800'
    })

    element.addEventListener('mouseout', event => {
        event.target.style.color = '#000'
    })
})



titles.forEach(element => {
    element.addEventListener('click', event => {
        event.target.style.fontWeight = 'bold';
    })
})

paragraphs.forEach(element => {
    element.tabIndex = 1
    element.addEventListener('focus', event => {
        event.target.style.backgroundColor = '#000'
        event.target.style.color = '#fff'
    });
    element.addEventListener('blur', event => {
        event.target.style.background = ''
        event.target.style.color = ''
    });
})

button.forEach(element => {
    element.addEventListener('click', event => {
        event.stopPropagation()
        event.target.style.backgroundColor = '#e6e6fa';
        event.target.style.color = '#1e90ff';
    })


})

footer.addEventListener('mouseover', event => {
    footer.style.backgroundColor = 'tan'
})
