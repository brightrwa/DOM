const redBtn = document.querySelector('#red')
const blueBtn = document.querySelector('#blue')
const greenBtn = document.querySelector('#green')

redBtn.addEventListener('click', function() {
  document.body.style.backgroundColor = 'red'
})
blueBtn.addEventListener('click',function(){
  document.body.style.backgroundColor = 'blue'
})
greenBtn.addEventListener('click',function(){
  document.body.style.backgroundColor = 'green'
})