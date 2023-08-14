(() => {
	const jump = document.querySelector('.jump');
	const thankyouMessage = document.querySelector('.thankyou_message');
	const hamburger = document.querySelector('#hamburger');
	const navbar = document.querySelector('#navbar');
	const navList = document.querySelector('#nav-ul');
	const navbar_a = document.querySelector('#nav-link-a');
	const overlay = document.querySelector('#page-overlay');
	const submitButton = document.querySelector("#submit");

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
	submitButton.addEventListener('click', async (event) => {
		event.preventDefault();
		thankyouMessage.style.display = "flex";
		const inputsArray = document.querySelectorAll('input');
		const formData = new FormData();
		submitButton.disabled = true;
		for (const input of inputsArray) {
			if (input.type === 'submit') {
				continue;
			}
			formData.append(input.name, input.value);
		}

		const res = await fetch('https://script.google.com/macros/s/AKfycbw2XDL4ovMweNUkNnPXFeGkNv55cqYkih68r_z_/exec', {
			method: 'POST',
			body: formData
		});

		switch (res.status) {
			case 200:
				submitButton.disabled = false;
				for (const input of inputsArray) {
					if (input.type === 'submit') {
						continue;
					}
					input.value = '';
				}

				// Display "thank You" message after submitting form
				thankyouMessage.style.opacity = "80%";
				thankyouMessage.classList.add('thankyou_message-active');

				// Remove "thank you" message after 3s
				setTimeout(() => {
					thankyouMessage.style.opacity = "0%";
					setTimeout(() => {
						thankyouMessage.classList.remove('thankyou_message-active');
						thankyouMessage.style.opacity = "0%";
						thankyouMessage.style.display = "none";
					}, 600);
				}, 3000);

				break;

			default:
				console.error('something went wrong while sending email');
				break;
		}

		// Re-enable the submit button regardless of the response
		submitButton.disabled = false;
	});
})()
