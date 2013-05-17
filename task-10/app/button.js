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
				this.trigger($(node.currentTarget).attr("id"));
				//this.teardown();  // remove component
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

