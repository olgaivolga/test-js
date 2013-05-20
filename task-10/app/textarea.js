define(
  [
    'components/flight/lib/component',
	'app/mixin'
  ],

  
	function(defineComponent, Counter)  {
	
		return defineComponent(TextArea, Counter);
		
		function TextArea() {
			
			this.defaultAttrs({ 
				text: 0
			});
			
			this.doSomething = function() {
				/*
				var d = new Date();
				this.$node.val(d);
				this.$node.val("$(this.node).attr(\"id\") = " + $(this.node).attr("id") + "\n" + d);
				*/
				var a = parseInt($(this.node).val()); // get value from textarea
				var b = this.Add(a); // call function from a mixin (this!)
				this.$node.val(b); // print new value
			};
			  
			this.after('initialize', function() {
				this.$node
					.text(this.attr.text); //????
				var event = $(this.node).attr("id"); // generate name of event
				this.on(document, event, this.doSomething); 
			});
		}
  }
);

