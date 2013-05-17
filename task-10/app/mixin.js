define(
	[],

	function() {

		function Counter() {
			this.Add = function(i) {
				return ++i;
				console.log("Calling mixin Counter.Add");
			};
		}

		return Counter;
	}
);