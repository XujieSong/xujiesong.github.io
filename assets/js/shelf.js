$(document).ready(function() {
	AV.initialize("4o3i1fycn2pq7qywqjpmxhvxta0scu2hajj8i0j8wpbk34sk", "u48qyxtcc8yufeqgzu8wot1t6q71rcbm8u65gasuq84qoqau");
	AV.User.logIn("public@shelf.is", "12345678", {
		success: function(user) {
			console.log('Page is ready');
		},
		error: function(user, error) {
			alert("Error logging");
		}
	});

	var switch0 = false;
	var switch1 = false;
	var switch2 = false;
	var switch3 = false;
	var switch4 = false;
	var switch5 = false;
	var switch6 = false;
	var switch7 = false;
	var section0 = 0;
	var section1 = $('#banner').innerHeight();
	var section2 = section1 + $('#one').innerHeight();
	var section3 = section2 + $('#two').innerHeight();
	var section4 = section3 + $('#three').innerHeight();
	var section5 = section4 + $('#four').innerHeight();
	var section6 = section5 + $('#footer').innerHeight();

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if (switch0 == false) {
			ga('send', {
				'hitType': 'event', // Required.
				'eventCategory': 'View', // Required.
				'eventAction': 'scroll', // Required.
				'eventLabel': 'Banner viewed',
				'eventValue': 0
			});
			console.log("Banner viewed");
			switch0 = true;
		} else if (section0 < scrollTop && switch1 == false) {
			ga('send', {
				'hitType': 'event', // Required.
				'eventCategory': 'View', // Required.
				'eventAction': 'scroll', // Required.
				'eventLabel': 'Intro viewed',
				'eventValue': 0
			});
			console.log("section 1 viewed");
			switch1 = true;
		} else if (section1 < scrollTop && switch2 == false) {
			ga('send', {
				'hitType': 'event', // Required.
				'eventCategory': 'View', // Required.
				'eventAction': 'scroll', // Required.
				'eventLabel': 'Design viewed',
				'eventValue': 0
			});
			console.log("section 2 viewed");
			switch2 = true;
		} else if (section2 < scrollTop && switch3 == false) {
			ga('send', {
				'hitType': 'event', // Required.
				'eventCategory': 'View', // Required.
				'eventAction': 'scroll', // Required.
				'eventLabel': 'Marketing viewed',
				'eventValue': 0
			});
			console.log("section 3 viewed");
			switch3 = true;
		} else if (section3 < scrollTop && switch4 == false) {
			ga('send', {
				'hitType': 'event', // Required.
				'eventCategory': 'View', // Required.
				'eventAction': 'scroll', // Required.
				'eventLabel': 'Customer viewed',
				'eventValue': 0
			});
			console.log("section 4 viewed");
			switch4 = true;
		} else if (section4 < scrollTop && switch5 == false) {
			ga('send', {
				'hitType': 'event', // Required.
				'eventCategory': 'View', // Required.
				'eventAction': 'scroll', // Required.
				'eventLabel': 'Features viewed',
				'eventValue': 0
			});
			console.log("section 5 viewed");
			switch5 = true;
		} else if (section5 < scrollTop && switch6 == false) {
			ga('send', {
				'hitType': 'event', // Required.
				'eventCategory': 'View', // Required.
				'eventAction': 'scroll', // Required.
				'eventLabel': 'Free Trail viewed',
				'eventValue': 0
			});
			console.log("section 6 viewed");
			switch6 = true;
		} else if (section6 < scrollTop && switch7 == false) {
			ga('send', {
				'hitType': 'event', // Required.
				'eventCategory': 'View', // Required.
				'eventAction': 'scroll', // Required.
				'eventLabel': 'Contact viewed',
				'eventValue': 0
			});
			console.log("section 7 viewed");
			switch7 = true;
		}
	});
});
//Sending email
function submitForm(form) {
	//Validate email
	var validator = function validateEmail(email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}
	var email = form.email.value;
	if (!validator(email)) {
		alert("Please enter a valid email.");
	} else {
		var message = "I'm interested in Building my own shop, please reply to: " + email;
		AV.Cloud.run('sendEmail', {
			'name': 'Customer',
			'email': email,
			'receiver': 'sk8tech@163.com',
			'subject': 'Shelf Enquiry',
			'message': message
		}, {
			success: function(data) {
				alert("Thank you for your interest, we will get back to you soon!");
			},
			error: function(err) {
				alert(err.message);
			}
		});
	}
}
//Initialize Google Analytics
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
		'eventLabel': 'Sign up at glance',
		'eventValue': 0
	});
});
$('#buttonZero').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'Landing -> Intro',
		'eventValue': 0
	});
});
$('#firstButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'Landing -> Intro',
		'eventValue': 1
	});
});
$('#secondButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'Intro -> Design',
		'eventValue': 0
	});
});
$('#thirdButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'Design -> Marketing',
		'eventValue': 0
	});
});
$('#forthButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'Marketing -> Customer',
		'eventValue': 0
	});
});
$('#fifthButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'Customer -> Feature',
		'eventValue': 0
	});
});
$('#sixthButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'click', // Required.
		'eventLabel': 'Customer -> Feature',
		'eventValue': 1
	});
});
$('#seventhButton').on('click', function() {
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'Free Trail', // Required.
		'eventLabel': 'Feature -> Free Trail',
		'eventValue': 0
	});
});
$('#eighthButton').on('click', function() {
	//Register with Google
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'Sign up', // Required.
		'eventLabel': 'Sign up',
		'eventValue': 0
	});
});
$('#demoButton0').on('click', function() {
	//Register with Google
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'Request Demo', // Required.
		'eventLabel': 'Request Demo',
		'eventValue': 0
	});
});
$('#demoButton1').on('click', function() {
	//Register with Google
	ga('send', {
		'hitType': 'event', // Required.
		'eventCategory': 'button', // Required.
		'eventAction': 'Request Demo', // Required.
		'eventLabel': 'Request Demo',
		'eventValue': 1
	});
});