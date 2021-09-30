window.$ = window.jQuery = require('jquery');

var $window = $(window),
    $body   = $('body');

var fn = {

    /*
		Launch
	*/

	Launch: function () {
        fn.App();
	},

    /*
		App
	*/

	App: function () {

        // On Scroll

        $window.on('scroll', function() {


        }).trigger('scroll');
    }
};

fn.Launch();