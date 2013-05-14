define(
  [
    'components/flight/lib/component'
  ],

  
	function(defineComponent)  {
	
		return defineComponent(TextArea);
		
		function TextArea() {
	  
			this.doSomething = function() {
				console.log("TextArea component: Button clicked!");
				var d = new Date();
				this.$node.val(d);
			};
			  
			this.after('initialize', function() {
				this.on(document, 'ButtonClicked', this.doSomething);
			});
		}
  }
);

