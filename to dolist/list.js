const input = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')

addBtn.addEventListener('click', function(){
  const task = input.value.trim()
 
  const li = document.createElement('li')

  li.textContent = task

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Delete'

  deleteBtn.addEventListener('click',function(){
    li.remove()
  })
  
  li.appendChild(deleteBtn)
  taskList.append(li)

  input.value = ''

})