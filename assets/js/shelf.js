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
}
//Initialize Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

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