define(
  [
    'components/flight/lib/component'
  ],

  
	function(defineComponent)  {
	
		return defineComponent(Button);
		
		function Button() {
			this.defaultAttrs({ 
				buttonClass: 'js-button',
				text: 'Add'
			});
	  
			this.doSomething = function(node) {
				// Trigger event (name = button id)
				var O = {"key" : "value"};
				this.trigger($(node.currentTarget).attr("id"), O);
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

