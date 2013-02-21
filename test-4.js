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

function clone3(element) {
	var clone;
	if(element.tagName) {
		clone = document.createElement(element.tagName)
	} else {
		clone = document.createTextNode(element.textContent)
	}
	if (element.attributes != null) {
		for (var i=0, attrs=element.attributes, l=attrs.length; i<l; i++){
			//clone[attrs.item(i).nodeName] = attrs.item(i).value;
			clone.setAttribute(attrs.item(i).nodeName, attrs.item(i).value) 
			console.log(attrs.item(i).nodeName);
		}
	}
	var children = element.childNodes;
	if (children != null) {
		for (var i = 0; i < children.length; i++) {
			clone.appendChild(clone3(children[i]));
		}
	}
	return clone;
}


