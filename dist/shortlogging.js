// shortlogging.js
// matheusdsm.github.io/shortlogging/
// Developed by Matheus S. Mariano
// Licensed under MIT License


window.cs = {
	a: function(){ 
		return console.assert.apply(console, arguments); 
	},
	c: function(){ 
		return console.clear(); 
	},
	co: function(){ 
		return console.count(); 
	},
	d: function(arg){ 
		return console.dir(arg); 
	},
	dx: function(arg){ 
		return console.dirxml(arg); 
	},
	e: function(arg){ 
		return console.error(arg); 
	},
	g: function(){ 
		return console.group(); 
	},
	gC: function(){ 
		return console.groupCollapsed(); 
	},
	gE: function(){ 
		return console.groupEnd(); 
	},
	i: function(arg){ 
		return console.info(arg); 
	},
	l: function(){ 
		return console.log.apply(console, arguments); 
	},
	p: function(arg){ 
		return console.profile(arg); 
	},
	pE: function(arg){ 
		return console.profileEnd(arg); 
	},
	t: function(){ 
		return console.table.apply(console, arguments); 
	},
	ti: function(arg){ 
		return console.time(arg); 
	},
	tiE: function(arg){ 
		return console.timeEnd(arg); 
	},
	tiS: function(arg){ 
		return console.timeStamp(arg); 
	},
	tr: function(){ 
		return console.trace(); 
	},
	w: function(){ 
		return console.warn.apply(console, arguments); 
	}
}
