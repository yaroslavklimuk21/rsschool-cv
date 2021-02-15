// const circle = document.querySelector('.progress-ring__circle');
// const radius = circle.r.baseVal.value;
// const circumference = 2 * Math.PI * radius;
// const label = document.querySelector('.progress-ring__label');

// circle.style.strokeDasharray = `${circumference} ${circumference}`;
// circle.style.strokeDashoffset = circumference;
// function setProgress(percent) {
// 	const offset = circumference - (percent / 100) * circumference;
// 	circle.style.strokeDashoffset = offset;
// 	let a = 0;
// 	function counter() {
// 		a += 1;

// 		if (a === 71) {
// 			clearInterval(run);
// 		} else {
// 			label.textContent = `${a}%`;
// 		}
// 	}
// 	const run = setInterval(counter, 15);
// }
// const test = document.addEventListener('scroll', function name() {
// 	const scrollTop = window.scrollY;
// 	if (scrollTop >= 320) {
// 		setProgress(70);
// 		document.removeEventListener('scroll', name);
// 	}
// });
const htmlBar = document.querySelector('.htmlBar');
const cssBar = document.querySelector('.cssBar');
const jsBar = document.querySelector('.jsBar');
const io = new IntersectionObserver((e) => {
	if (e[0].isIntersecting) {
		htmlBar.ldBar.set(85);
		cssBar.ldBar.set(80);
		jsBar.ldBar.set(60);
	}
}, { threshold: 0.5 });
io.observe(htmlBar, cssBar, jsBar);

const animItems = document.querySelectorAll('.anim-items');
function offset(el) {
	const rect = el.getBoundingClientRect();
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
function animOnScroll() {
	for (let i = 0; i < animItems.length; i++) {
		const animItem = animItems[i];
		const animItemHeight = animItem.offsetHeight;
		const animItemOffset = offset(animItem).top;
		const animStart = 4;

		// eslint-disable-next-line prefer-const
		let animItemPoint = window.innerHeight - animItemHeight / animStart;
		if (animItemHeight > window.innerHeight) {
			animItemPoint = window.innerHeight - window.innerHeight / animStart;
		}

		if ((pageYOffset > animItemOffset - animItemPoint)
    && pageYOffset < (animItemOffset + animItemHeight)) {
			animItem.classList.add('_active');
			// htmlBar.ldBar.set(85);
			// cssBar.ldBar.set(80);
			// jsBar.ldBar.set(60);
		}
	}
}
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
}
