$(document).foundation()

var today = new Date();
var hourNOW= today.getHours();
var greeting;

if (hourNOW > 18) {
  greeting='Good Evening!';
} else if (hourNow >12) { greeting='Good Afternoon!';
} else {
  greeting='Welcome!';
}

document.write('<h2>' + greeting + '</h2>');
