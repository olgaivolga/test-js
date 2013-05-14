define(
	[
		'app/button',
		'app/textarea'
	],

	function(Button, TextArea) {
		Button.attachTo('#button1', { 
			//text: "Don't click me", 
			//buttonClass: "js-not-a-button"
		});
		
		TextArea.attachTo('#text1');
	}
);