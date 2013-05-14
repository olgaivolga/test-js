define(
  [
    'components/flight/lib/component'
  ],

  
	function(defineComponent)  {
	
		return defineComponent(Button);
		
		function Button() {
			this.defaultAttrs({ 
				buttonClass: 'js-button',
				text: 'Click me'
			});
	  
			this.doSomething = function() {
				console.log("Button component: button clicked!");
				this.trigger('ButtonClicked');	
			};	
			  
			this.after('initialize', function() {
				this.$node
					.addClass(this.attr.buttonClass)
					.text(this.attr.text);
				this.on('click', this.doSomething);
			});
		}
  }
);

