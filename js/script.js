var buttons = document.getElementsByClassName('btn-lg');

for ( var i = 0 ; i <= (buttons.length - 1) ; i++ ) {
	var buttonText = buttons[i].innerText;
	alert(buttonText);
}