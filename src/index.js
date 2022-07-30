document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    const newTaskDescription = document.getElementById('new-task-description')
    const newTask = document.createElement('li')
    const btn = document.createElement('button')
    btn.addEventListener('click', deleteButton)
    btn.textContent = 'x'
    newTask.innerText = newTaskDescription.value
    newTask.appendChild(btn)
    document.querySelector('#tasks').appendChild(newTask)
  })
})

function deleteButton(event) {
  event.target.parentNode.remove()
}