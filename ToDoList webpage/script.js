document.addEventListener('DOMContentLoaded',  (event) => {
	const form = document.querySelector('form')
	const input = document.querySelector('#newTask')
	const taskList = document.querySelector('ul')
	const submit = document.querySelector('button')
	const clearAll = document.querySelector('#clearAll')
	input.oninput  = (event) => {
		if (input.value.trim() === '') {
			submit.disabled = true
		} else {
			submit.disabled = false
		}
	}

	clearAll.onclick = (event) => {
		taskList.innerHTML = ''
		localStorage.clear()
		clearAll.disabled = true
	}

	function getTaskItem(id, value) {
		let taskLi = document.createElement('li')
		let checkBox = document.createElement('input')
		let content = document.createElement('p')
		let deltebtn = document.createElement('button')
		checkBox.type = 'checkbox'
		content.textContent = value
		taskLi.id = id
		taskLi.appendChild(deltebtn) 
		taskLi.appendChild(checkBox)
		taskLi.appendChild(content)
		deltebtn.onclick = (event) => {
			taskLi.remove()
			localStorage.removeItem(taskLi.id)
			if (!localStorage.length) {
				clearAll.disabled = true
			}
		}
		
		checkBox.onchange = (event) => {
			if (checkBox.checked) {
				taskLi.style.textDecoration = 'line-through'
			} else {
				taskLi.style.textDecoration = 'none'
			}
		}
		return taskLi
	}
	
	Object.entries(localStorage).sort().forEach(([key, value]) => {
		taskList.append(getTaskItem(key, value))
		if (localStorage.length) {
			clearAll.disabled = false
		}
	})
	
	form.onsubmit = (event) => {
		let taskLi = getTaskItem('id' + Date.now(), input.value)
		taskList.append(taskLi)
		localStorage.setItem(taskLi.id, input.value)
		clearAll.disabled = false
		input.value = ''
		submit.disabled = true
		event.preventDefault()
	}

})