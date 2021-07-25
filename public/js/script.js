;(() => {
	const jump = document.querySelector('.jump'),
		contactForm = document.querySelector('#contact-form'),
		thankyouMessage = document.querySelector('.thankyou_message'),
		inputField = document.querySelector('.input-field'),
		label = document.querySelector('#label'),
		hamburger = document.querySelector('#hamburger'),
		navbar = document.querySelector('#navbar'),
		navList = document.querySelector('#nav-ul'),
		navbar_a = document.querySelector('#nav-link-a'),
		overlay = document.querySelector('#page-overlay')

	//* Controling the animation of hamburger icon

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger-active')
		navList.classList.toggle('nav-ul-active')
		overlay.classList.toggle('page-overlay-active')
	})

	// Controling the visibility of jump-to-top icon on scroll events

	document.addEventListener('scroll', () => {
		var scroll = window.scrollY

		if (scroll >= 400) {
			jump.classList.add('jump-active')
			navbar_a.classList.remove('nav-link-a-top')
		} else {
			jump.classList.remove('jump-active')
			navbar_a.classList.add('nav-link-a-top')
		}

		// Animating the navbar

		if (scroll >= 100) {
			navbar.classList.add('navbar-scroll')
			document.documentElement.style.setProperty('--navlinka', '#3d4451')
		} else {
			navbar.classList.remove('navbar-scroll')
			document.documentElement.style.setProperty(
				'--navlinka',
				'rgba(255, 255, 255, 0.7)'
			)
		}
	})

	// Controling the jump-To-Top button actions & style
	jump.addEventListener('click', () => {
		window.scrollTo(0, 0)
		jump.classList.add('jump-click')
		setTimeout(() => {
			jump.classList.remove('jump-click')
		}, 1000)
	})

	// Controling the behaviour of the contact form after submit event is activated

	contactForm.addEventListener('submit', () => {
		// Popup Window handler
		POPUPW = window.open('about:blank', 'POPUPW', 'width=300, height=200')

		// Display "thank You" message after submitting form
		thankyouMessage.classList.add('thankyou_message-active')
		window.location.replace('#thankyou_message')

		// Remove "thank you" message after 10s
		setTimeout(() => {
			thankyouMessage.classList.remove('thankyou_message-active')
			POPUPW.close()
		}, 10000)
	})
})()
