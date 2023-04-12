const tabs = document.querySelectorAll('.hiader-nav-tab')
const highlight = document.querySelector('.highlight')
const firstTab = tabs[0]
const left = firstTab.offsetLeft
const width = firstTab.offsetWidth

highlight.style.left = `${left}px`
highlight.style.width = `${width}px`

tabs.forEach(tab => {
	tab.addEventListener('click', function () {
		
		const left = this.offsetLeft
		const width = this.offsetWidth

		highlight.style.left = `${left}px`
		highlight.style.width = `${width}px`
		tabs.forEach(tab => tab.classList.remove('active'))
		this.classList.add('active')
	})
})