// MOBILE NAV
const mobileNavBTN = document.querySelector('.mobile-nav-btn')
const mobileNavIcon = document.querySelector('.mobile-nav-btn-icon')
const mobileNavWrapper = document.querySelector('.mobile-nav-wrapper')
mobileNavBTN.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active')
	mobileNavWrapper.classList.toggle('active')
	document.body.classList.toggle('no-scroll')
})

// VIDEO
const videoBtn = document.querySelector('#video-story-btn')
const videoBtnIcon = document.querySelector('#video-story-btn-icon')
const videoFile = document.querySelector('#video-story')
videoBtn.addEventListener('click', function () {
	if (videoFile.paused) {
		videoFile.play()
		videoBtnIcon.src = './img/pause-white.svg'
	} else {
		videoFile.pause()
		videoBtnIcon.src = './img/play-white.svg'
	}
})
