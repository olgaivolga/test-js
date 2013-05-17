define(
	[
		'app/button',
		'app/textarea',
	],

	function(Button, TextArea) {
		
		Button.attachTo('button#d1', { 
			//text: "Don't click me", 
			//buttonClass: "js-not-a-button"
		});
		
		TextArea.attachTo('textarea#d1');
		
		Button.attachTo('button#d2');
		TextArea.attachTo('textarea#d2');
	}
);