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


navLink.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.style.color = '#008800'
    })

    element.addEventListener('mouseout', event => {
        event.target.style.color = '#000'
    })
})

home.addEventListener('dblclick', event => {
    home.style.backgroundColor = '#6a6a6a';
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
