document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded")
  const form =document.querySelector(`form`)
  console.log("Form element: ", form)
  form.addEventListener(`submit`, (e) => {
    e.preventDefault()
    console.log("Form submitted")
    const descriptionInput = e.target.querySelector("#new-task-description")
    console.log("Description input: ", descriptionInput)
    buildNewTask(descriptionInput.value)

  })
    
})

function buildNewTask(description){
  console.log("Task description: ", description)
  let p = document.createElement('p')
  let btn = document.createElement('Button')
  btn.addEventListener(`click`, (e) => handleDelete(e))
  btn.textContent = 'delete'
  p.textContent = `${description}  `
  p.appendChild(btn)
  console.log(p)
  let tasksList = document.querySelector("#tasks")
  tasksList.appendChild(p)
}
function handleDelete(e){
  e.target.parentNode.remove()
}