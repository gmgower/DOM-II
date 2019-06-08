// Your code goes here
// mouse click events
const buttons = document.querySelectorAll('.btn');
buttons[0].addEventListener('click', function (event) {
  event.target.style.color = `red`
  console.log(`buttons clicked: ${event}`)
})
buttons[1].addEventListener('click', function (event) {
    event.target.style.fontSize = `3rem`
  console.log(`buttons clicked: ${event}`)
    
  })

// mouseover  & mouseout
const introImg = document.querySelectorAll('.intro img');
introImg.forEach(function (element) {
  element.addEventListener('mouseover', function () {
    element.style.borderRadius = '100px';
  })
  element.addEventListener('mouseout', function (e) {
    element.style.borderRadius = '10px';
    e.preventDefault();
  })
})

// wheel, copy, dblclick
const body = document.querySelector('body')

body.addEventListener('wheel', e => e.target.style.backgroundColor = 'lightgray')

body.addEventListener('copy', e => {
  e.target.style.visibility = 'hidden';
  e.preventDefault();
})

body.addEventListener('dblclick', e => e.target.style.fontSize = '2rem')

//mouseenter mouseout
const destImg = document.querySelector('.content-destination img');

destImg.addEventListener('mouseenter', e => {
  e.target.style.width = '75%'
  e.target.style.marginLeft = '25%'
})

destImg.addEventListener('mouseout', e => {
  e.target.style.width = '100%'
  e.target.style.marginLeft = '0%'
  e.preventDefault()
})
