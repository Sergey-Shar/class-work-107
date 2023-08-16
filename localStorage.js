//*? Получаем DOM Nodes

const body = document.body
const toggleThemeButton = document.querySelector('.toggle-theme')

//*? Получаем значение из LocalStorage по ключу "theme"

const setTheme = () => {
	const theme = localStorage.getItem('theme')
	if (theme === 'dark') {
		localStorage.setItem('theme', 'light')
		replaceStyles()
	} else {
		localStorage.setItem('theme', 'dark')
		replaceStyles('#273444', '🌙')
	}
}

//setTheme()

//*? Проверяем и в зависимости оо результата меняем стили

//*? Функция для изменения стилей

function replaceStyles(background = 'initial', icon = '☀️') {
	body.style.background = background
	toggleThemeButton.innerHTML = icon
	toggleThemeButton.style.background = background
}

function handlerToggleTheme() {
	setTheme()
}

toggleThemeButton.addEventListener('click', handlerToggleTheme)

//*? Необходимо написать функцию которая будет менять тему с light на dark и обратно

//*? Добавить слушатель события клик на toggleThemeButton и как ссылку передать функцию которая меняет тему

//* задание 2

// utils

function setDateLocalStorage(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value))
	} catch (error) {
		console.log(error)
	}
}

function getDateLocalStorage(key) {
	try {
		return JSON.parse(localStorage.getItem(key)) ?? []
	} catch (error) {
		console.log(error)
		return []
	}
}

// init app


	renderList(getDateLocalStorage('names'))


const formContainer = document.querySelector('.form-container')
const form = document.querySelector('.my-form')
const list = document.createElement('ul')
formContainer.append(list)

function renderList(arr) {
	list.innerHTML = ''
	arr.forEach((name) => {
		const listItem = document.createElement('li')
		listItem.textContent = name
		list.append(listItem)
	})
}

const handleSubmit = (event) => {
	event.preventDefault()

	const names = getDateLocalStorage('names')
	const value = event.target.username.value
	names.push(value)

	renderList(names)
	setDateLocalStorage('names', names)

	event.target.reset()

}

form.addEventListener('submit', handleSubmit)
