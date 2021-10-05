window.$ = window.jQuery = require('jquery');
require('bootstrap');
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Thumbs } from 'swiper';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import javascript from 'highlight.js/lib/languages/javascript';

/*import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';*/

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Thumbs]);

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('javascript', javascript);

/*require('@fancyapps/fancybox');
import ScrollReveal from 'scrollreveal';

import * as noUiSlider from 'nouislider';
const wNumb = require('wnumb');*/

var $window = $(window),
    $body   = $('body');

var fn = {

    /*
		Launch
	*/

	Launch: function () {
        fn.Carousels();
        fn.App();
	},

    /*
		Carousels
	*/

	Carousels: function () {
        new Swiper('.responsive-carousel', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
            el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
    },

    /*
		App
	*/

	App: function () {

        // Sidebar Navigation

        const currentPage = window.location.href.split('/').pop();

        if(currentPage) {
            const currentMenuItem = document.querySelector('.kit-sidebar a[href*="' + currentPage + '"]').closest('li');

            currentMenuItem.classList = 'active';

            currentMenuItem.closest('ul').classList = 'collapse show';
            currentMenuItem.closest('ul').closest('li').querySelector('button').setAttribute('aria-expanded', 'true');
        }
        
        // Highlight Source Code

        document.querySelectorAll('.language-html').forEach(function(el) {
            el.innerHTML = el.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        });

        document.addEventListener('DOMContentLoaded', (event) => {
            document.querySelectorAll('pre code').forEach((el) => {
                hljs.highlightElement(el);
            });
        });

    }
};

fn.Launch();