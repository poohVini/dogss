"use strict"


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	Mobile: function () {
		return navigator.userAgent.search(/mobile/i);
	},
	any: function () {
		return ((isMobile.Android() || isMobile.BlackBerry()) || (isMobile.iOS() || isMobile.Opera()) || (isMobile.Windows() || isMobile.Mobile() > 0));
	}
}
if (isMobile.any()) {
	document.body.classList.add("_touch");
} else {
	document.body.classList.add("_pc");
}
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
});
const anchors = document.querySelectorAll('a._anchor');//клас для выделения ссылок для плавной прокрутки
//(#href) для обозначения в ссылках href 
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector("img")) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	};
}
ibg();
// let menuParents = document.querySelectorAll('.menu__body');
// for (let index = 0; index < menuParents.length; index++) {
// 	const menuParent = menuParents[index];
// 	menuParent.addEventListener("mouseenter", function (e) {
// 		menuParent.classList.add('_active');
// 	});
// 	menuParent.addEventListener("mouseleave", function (e) {
// 		menuParent.classList.remove('_active');
// 	});
// }

let menuPageBurger = document.querySelector('.icon-menu');
let menuPageBody = document.querySelector('.menu__body');
let body = document.querySelector("body");
if (menuPageBurger) {
	menuPageBurger.addEventListener("click", function (e) {
		menuPageBurger.classList.toggle('_active');
		menuPageBody.classList.toggle('_active');
		body.classList.toggle('_lock');
	});
}


window.onload = function () {
	if (document.querySelector('.swiper-container')) {
		const swiper = new Swiper('.swiper-container', {
			// Optional parameters
			slidesPerView: 1,
			spaceBetween: 30,
			direction: 'horizontal',
			loop: true,

			// pagination: {
			// 	el: '.swiper-container .swiper-pagination',
			// 	clickable: true,
			// },

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			breakpoints: {
				// // when window width is >= 320px
				700: {
					slidesPerView: 2,
					spaceBetween: 25,
					// centeredSlides: false,
				},
				1074: {
					slidesPerView: 3,
					spaceBetween: 45,

				},

			},
		});
	}
};









