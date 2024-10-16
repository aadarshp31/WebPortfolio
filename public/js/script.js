(() => {
	const jump = document.querySelector('.jump');
	const thankyouMessage = document.querySelector('.thankyou_message');
	const hamburger = document.querySelector('#hamburger');
	const navbar = document.querySelector('#navbar');
	const pageOverlay = document.querySelector('.page-overlay');
	const navList = document.querySelector('#nav-ul');
	const navbar_a = document.querySelector('#nav-link-a');
	const overlay = document.querySelector('#page-overlay');
	const submitButton = document.querySelector("#submit");
	const form = document.querySelector("form");

	//* Controling the animation of hamburger icon
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger-active')
		navList.classList.toggle('nav-ul-active')
		overlay.classList.toggle('page-overlay-active')
	})

	// close the open navbar slider if page-overlay element is clicked
	pageOverlay.addEventListener('click', () => {
		if (hamburger.classList.contains('hamburger-active')) {
			hamburger.classList.toggle('hamburger-active')
			navList.classList.toggle('nav-ul-active')
			overlay.classList.toggle('page-overlay-active')
		}
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
		} else {
			navbar.classList.remove('navbar-scroll')
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
	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		thankyouMessage.style.display = "flex";
		const inputsArray = document.querySelectorAll('input');
		const formData = new FormData();
		submitButton.disabled = true;
		submitButton.value = "";
		submitButton.classList.add('loading');

		for (const input of inputsArray) {
			if (input.type === 'submit') {
				continue;
			}
			formData.append(input.name, input.value);
		}

		try {
			const res = await fetch('https://script.google.com/macros/s/AKfycbyb2q_K3cnsHHyJ9db4Z5qWhKKjgIIV6GlPNCWsjutBQp7uGkqhd4kbJ5Y3fpAmq1OW/exec', {
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
					submitButton.classList.remove('loading');
					submitButton.value = "Submit";

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
			submitButton.classList.remove('loading');
			submitButton.value = "Submit";
			form.reset();
		} catch (error) {
			console.error({ error });

			// Display "thank You" message after submitting form
			thankyouMessage.style.opacity = "80%";
			thankyouMessage.classList.add('thankyou_message-active');
			submitButton.classList.remove('loading');
			submitButton.value = "Submit";

			// Remove "thank you" message after 3s
			setTimeout(() => {
				thankyouMessage.style.opacity = "0%";
				setTimeout(() => {
					thankyouMessage.classList.remove('thankyou_message-active');
					thankyouMessage.style.opacity = "0%";
					thankyouMessage.style.display = "none";
				}, 600);
			}, 3000);

			// Re-enable the submit button regardless of the response
			submitButton.disabled = false;
			submitButton.classList.remove('loading');
			submitButton.value = "Submit";
			form.reset();
		}
	});

	// Calculate and set the years of experience in the work experience div
	setYearsOfExperience("zoho", "2021-05-12");
	setYearsOfExperience("skillinc", "2019-02-01", "2020-02-01");
})()

/**
 * Sets the years of experience in the work experience div
 * @param {String} id id of the work experience div
 * @param {String} start string representation of the start date
 * @param {String} end string representation of the end date
 */
function setYearsOfExperience(id, start, end) {
	const yearsOfExperience = calculateYearsOfExperience(start, end);
	const yoeSpan = document.createElement('span').innerText = yearsOfExperience;
	document.querySelector(`#${id} h3`).innerHTML += ` (${yoeSpan} Years)`;
}

/**
 * Calculates the years of experience
 * @param {String} startDate string representation of the start date
 * @param {String | undefined} endDate string representation of the end date
 * @returns {String} years of experience in the format "x.y" where x is the number of years and y is the number of months
 */
function calculateYearsOfExperience(startDate, endDate) {
	const start = new Date(startDate);
	const end = endDate ? new Date(endDate) : new Date();
	const monthsDifference = end.getMonth() - start.getMonth();
	const yearsDifference = monthsDifference < 0 ? end.getFullYear() - start.getFullYear() - 1 : end.getFullYear() - start.getFullYear();
	const yearsOfExperience = `${yearsDifference}.${monthsDifference >= 0 && monthsDifference < 11 ? monthsDifference : 12 - (start.getMonth() - end.getMonth())}`;
	return yearsOfExperience;
}
