var clone = function(element) {
	var target = element;
	var clone = target.cloneNode(true);
	return clone;
}

var cloneRec = function(element) {
	var target = element;
	//console.log(clone);
	if (clone == undefined) {
		var clone = target.cloneNode(false); //???
	}
	var children = target.childNodes;
	if (children != null) {
		for (var i = 0; i < children.length; i++) {
			cloneRec(clone.appendChild(children[i]));
			console.log(clone);
		}
	}
	return clone;
}
