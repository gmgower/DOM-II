// Your code goes here

// mouse events
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
  element.addEventListener('mouseout', function () {
    element.style.borderRadius = '50px';
  })
})

