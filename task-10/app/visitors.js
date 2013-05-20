var visitor = _.template("<div>Visitor: <%= info %></div>"); // visitor({info: '...'})

define(
  [
    'components/flight/lib/component',
	'app/mixin'
  ],

  
	function(defineComponent, Counter)  {
	
		return defineComponent(Visitors, Counter);
		
		function Visitors() {
				
			this.doSomething = function(e) {
				//console.log(arguments);
				var toPrint = e.type + ' ' + e.timeStamp + ' ' + e.data;
				this.$node.append(visitor({info: toPrint}));
			};
			  
			this.after('initialize', function() {
				var event = $(this.node).attr("id"); // generate expected event name
				this.on(document, event, function(data) { this.doSomething(data) }); 
			});
		}
  }
);

/*displayVisitor = function(v) {
	var compiled = _.template("<div>hello: <%= name %></div>");
	var x = v;
	$("body").append(compiled({name: x}));
	//return compiled;
};*/


