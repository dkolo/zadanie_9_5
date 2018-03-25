var buttons = document.getElementsByClassName('btn-lg');

for ( var i = 0 ; i < (buttons.length) ; i++ ) {
	var buttonText = buttons[i].innerText;
	alert(buttonText);
}