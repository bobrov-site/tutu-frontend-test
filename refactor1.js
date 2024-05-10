function func(s, a, b) {

	if (s.length === 0) {
		return -1;
	}
	
	var aIndex = s.lastIndexOf(a);
	var bIndex = s.lastIndexOf(b);
	
	if (aIndex === -1) {
		return bIndex;
	}
	
	if (bIndex === -1) {
		return aIndex;
	}
	
	return Math.max(aIndex, bIndex);
}
