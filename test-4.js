var clone1 = function(element) {
	var target = element;
	var clone = target.cloneNode(true);
	return clone;
}

var clone2 = function(element) {
	var clone = element.cloneNode(false);
	var children = element.childNodes;
	if (children != null) {
		for (var i = 0; i < children.length; i++) {
			clone.appendChild(clone2(children[i]));
		}
	}
	return clone;
}
