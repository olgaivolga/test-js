var clone1 = function(element) {
	var target = element;
	var clone = target.cloneNode(true);
	return clone;
}

var clone2 = function(element) {
	var target = element;
	//console.log(clone);
	if (clone == undefined) {
		var clone = target.cloneNode(false); //???
	}
	var children = target.childNodes;
	if (children != null) {
		for (var i = 0; i < children.length; i++) {
			clone2(clone.appendChild(children[i]));
			console.log(clone);
		}
	}
	return clone;
}
