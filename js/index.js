// Your code goes here

// mouse click events
const buttons = document.querySelectorAll('.btn');
buttons[0].addEventListener('click', e =>  event.target.style.color = `red`)
buttons[1].addEventListener('click', e =>  event.target.style.fontSize = `3rem`)
  // console.log(`buttons clicked: ${event}`)


// mouseover  & mouseout
const introImg = document.querySelectorAll('.intro img');
introImg.forEach(function (element) {
  element.addEventListener('mouseover', () => element.style.borderRadius = '100px')
  element.addEventListener('mouseout', e  => {
    element.style.borderRadius = '10px';
    e.preventDefault();
  })
})

// wheel, copy, dblclick, paste
const body = document.querySelector('body')

body.addEventListener('wheel', e => e.target.style.backgroundColor = 'lightgray')

body.addEventListener('copy', e => {
  e.target.style.visibility = 'hidden';
  e.preventDefault();
})

body.addEventListener('paste', function (event) {
  let paste = (event.clipboardData || window.clipboardData).getData('text');
  paste =paste.toUppercase()
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

// drag
const allImgs = document.querySelectorAll('img')

allImgs[2].addEventListener('drag', e => e.target.style.padding = '30%')

//scroll
const selectP = document.querySelectorAll('p');

window.addEventListener('scroll', e => {
  selectP[1].style.border = '1px dashed blue';
  selectP[2].style.border = '2px solid green';
  e.preventDefault()
})

// propagation check
let lastClick = document.querySelector('.content-destination');

lastClick.addEventListener('click', () => console.log('No logged'))

allImgs[3].addEventListener('click', e => {
  console.log('logged');
  e.stopPropagation();
})