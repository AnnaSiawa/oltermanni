const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuRegistration = document.querySelector('.menu__registration');
const menuFooter = document.querySelector('.footer__menu');
const socialFooter = document.querySelector('.footer__social');
const socialBackground = document.querySelectorAll('.background');

// меню бургер
if (iconMenu) {
	iconMenu.addEventListener('click', function(e) {
		event.preventDefault();
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		menuRegistration.classList.toggle('_active');

		socialBackground.forEach((el) => {
			el.classList.add('_active-menu-background');
		});

		let menuFooter2 = menuFooter.cloneNode(true);
		menuFooter2.classList.add('_active-menu-footer2');
		menuFooter2.setAttribute('id', 'menu2');
		if (document.getElementById('menu2')) {
		} else {
			menuBody.appendChild(menuFooter2);
		}
		
		let socialFooter2 = socialFooter.cloneNode(true);
		socialFooter2.classList.add('_active-menu-social2');
		socialFooter2.setAttribute('id', 'social2');
		if (document.getElementById('social2')) {
		} else {
			menuBody.appendChild(socialFooter2);
		}
	});	
}
//прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});
	function onMenuLinkClick (e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			if(iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
				menuRegistration.classList.remove('_active');
			}
			window.scrollTo({
				top: gotoBlockValue,
				behevior: "smooth"
			});
			e.preventDefault();
		}
	}
}
//инициализация слайдера
new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	watchOverflow: true,
	loop: true,
	breakpoints: {
		960: {
			slidesPerView: 4,
		},
		650: {
			slidesPerView: 3,
		},
		320: {
			slidesPerView: 2.3,
		}
	}
});