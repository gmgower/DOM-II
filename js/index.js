// Your code goes here

// mouse click events
const funInTheSunBtn =  document.querySelector('.btn');
funInTheSunBtn.addEventListener('click', function (event) {
  event.target.style.color = "red"
  console.log(`funInTheSunBtn clicked: ${event}`)
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

body.addEventListener('wheel', function (e) {
  e.target.style.backgroundColor = 'red';
})

body.addEventListener('copy', function (e) {
  e.target.style.visibility = 'hidden';
  e.preventDefault();
})

body.addEventListener('dblclick', function (e) {
  e.target.style.fontSize = '2rem'
})

