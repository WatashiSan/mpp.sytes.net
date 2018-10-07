if(window.location.hostname.indexOf("multiplayerpiano.com") != -1 || window.location.hostname.indexOf("multiplayerpiano.com") != -1)
        window.location.href = "http://multiplayerpiano.com/";

EXT = window.EXT || {_initfunc: []};
window.onload = function(){
	MPP = MPP || {};
	MPP.addons = EXT;
	for(var x = EXT._initfunc.length; x--;)
		EXT._initfunc[x]();
	EXT.__proto__ = null;
};
