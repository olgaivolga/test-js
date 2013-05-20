define(
	[
		'app/button',
		'app/textarea',
		'app/visitors'
	],

	function(Button, TextArea, Visitors) {
		
		Visitors.attachTo('div#d1');
		Button.attachTo('button#d1', { 
			//text: "Don't click me", 
			//buttonClass: "js-not-a-button"
		});		
		TextArea.attachTo('textarea#d1');
		
		Visitors.attachTo('div#d2');
		Button.attachTo('button#d2');
		TextArea.attachTo('textarea#d2');
	}
);