var params = {
	path: 'test.xml' /* STRING */
};

// result: XML
var tempxml = me.LoadXML(params);

var params = {
	sample1: tempxml /* XML */
};

// result: STRING
// var result = me.XMLtoJSON(params);
var result = tempxml.to
