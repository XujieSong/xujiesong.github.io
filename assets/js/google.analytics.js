//Google Analytics Events tracking & email sending
(function(i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function() {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o),
		m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-58021961-1', 'auto');
ga('send', 'pageview');

// Using jQuery Event API v1.3
$('#signUpTop').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'Sign up',
		'eventValue': 0
	});
});
$('#firstButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'More info buttons',
		'eventValue': 0
	});
});
$('#secondButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'More info buttons',
		'eventValue': 1
	});
});
$('#thirdButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'More info buttons',
		'eventValue': 2
	});
});
$('#forthButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'More info buttons',
		'eventValue': 3
	});
});
$('#fifthButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'More info buttons',
		'eventValue': 4
	});
});
$('#sixthButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'More info buttons',
		'eventValue': 5
	});
});
$('#seventhButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'More info buttons',
		'eventValue': 6
	});
});
$('#eighthButton').on('click', function() {
	//Register with Google
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'Sign up',
		'eventValue': 1
	});
});
$('#demoButton').on('click', function() {
	//Register with Google
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'Check demo',
		'eventValue': 0
	});
});