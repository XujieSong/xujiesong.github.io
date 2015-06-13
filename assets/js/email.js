//Google Analytics Events tracking & email sending
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
		AV.initialize("4o3i1fycn2pq7qywqjpmxhvxta0scu2hajj8i0j8wpbk34sk", "u48qyxtcc8yufeqgzu8wot1t6q71rcbm8u65gasuq84qoqau");
		AV.User.logIn("public@shelf.is", "12345678", {
			success: function(user) {
				AV.Cloud.run('sendEmail', {
					'receiver': '133342301@163.com',
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
			},
			error: function(user, error) {
				alert("Error logging");
			}
		});
	}
});