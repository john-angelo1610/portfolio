lightGallery(document.getElementById('lightgallery'));
const nav = document.querySelector("nav");
const nav_link = document.querySelectorAll("nav ul a");

const add_class_on_scroll = () => {
    nav.classList.add("scrolled");
    nav_link.forEach(e => e.classList.add("nav-link"));
}
const remove_class_on_scroll = () => {
    nav.classList.remove("scrolled");
    nav_link.forEach(e => e.classList.remove("nav-link"));
}

window.addEventListener('scroll', () => window.scrollY >=520 ? add_class_on_scroll() : remove_class_on_scroll());

const contentTabs = () => {
	const initialTab = 0;

	const containerActive = document.getElementsByClassName('tabs-wrapper');
	const tabButton = document.querySelectorAll('.tab-item');
	const tabContent = document.querySelectorAll('.item-content');
	const icons = document.querySelectorAll('.products-wrapper .tabs-wrapper .tab-item')

	if (containerActive.length >= 1)
		runTabs();

	function runTabs() {
		const  initChecks = () => {
			clearActive();
			if (tabButton.length < tabContent.length) {
				console.warn(
					'You need to have the same amount of tab-item\'s as you have content-tab\'s'
				);
				console.group(
					'Paste this emmet shorthand inside the \'tabs-wrapper\' div and press enter/tab'
				);
				console.log('div.tab-item{tab-title}');
				console.groupEnd();
			} else if (tabContent.length < tabButton.length) {
				console.warn(
					'You need to have the same amount of content-tab\'s as you have tab-items\'s'
				);
				console.group(
					'Paste this emmet shorthand inside the \'tabbed-content\' div and press enter/tab'
				);
				console.log(
					'div.item-content>div.hightlights*4>h4{some title}+p{some copy}'
				);
				console.groupEnd();
			} else {
				tabContent[initialTab].classList.add('active');
			}
		}
		initChecks();

		function clearActive() {
			tabContent.forEach(e => e.classList.remove('active'));
		}

		for (let tabIndex = 0; tabIndex < tabButton.length; tabIndex++) {
			tabButton[tabIndex].addEventListener('click', () =>{
				clearActive();
				tabContent[tabIndex].classList.toggle('active');
				icons.forEach(e => e.classList.remove('active'));
				icons[tabIndex].classList.add('active');
			});
		}
	}
}
contentTabs();
