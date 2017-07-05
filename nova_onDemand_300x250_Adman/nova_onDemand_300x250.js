(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.god = function() {
	this.initialize(img.god);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,218);


(lib.screen01 = function() {
	this.initialize(img.screen01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,208);


(lib.screen02 = function() {
	this.initialize(img.screen02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,211);


(lib.screen03 = function() {
	this.initialize(img.screen03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,207);


(lib.screen04 = function() {
	this.initialize(img.screen04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,193);


(lib.sreenShadow = function() {
	this.initialize(img.sreenShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,64);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt12iii = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131C5F").s().p("AgOBbIAAgdIAdAAIAAAdgAgLArIgCiEIAbAAIgCCEg");
	this.shape.setTransform(118.6,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131C5F").s().p("AAnBbIhHhtIgBAAIAABtIgpAAIAAi0IAkAAIBIBtIAAgBIAAhsIApAAIAAC0g");
	this.shape_1.setTransform(105.9,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131C5F").s().p("AAsBbIgOglIg7AAIgOAlIgqAAIBGi0IAfAAIBGC0gAgRAUIAjAAIgSg3IAAAAg");
	this.shape_2.setTransform(88.1,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#131C5F").s().p("Ag/BbIAAi0IB/AAIAAAkIhXAAIAAAlIBKAAIAAAhIhKAAIAAAmIBXAAIAAAkg");
	this.shape_3.setTransform(72.5,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#131C5F").s().p("AhEBbIAAi0IBKAAQAOgBAMAFQAMAEAIAIQAIAGAFAMQAEALAAANQAAAMgEALQgGAJgIAIQgIAGgMAFQgMAEgNABIgiAAIAABCgAgcgKIAhAAQAKAAAGgGQAIgGAAgKQgBgLgGgFQgHgGgLABIggAAg");
	this.shape_4.setTransform(57.2,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#131C5F").s().p("AAIBbIAAgmQALgCAFgIQAFgJAAgKIAAgvQABgNgJgIQgIgJgNAAQgIAAgFADQgGACgEAEIgFAKIgCALIAAAvQABAKAEAJQAFAIAMADIAAAlIhBAAIAAgkIAPAAIAAgBQgIgIgCgKQgCgJAAgMIAAgjQAAgNAEgNQAFgMAJgLQAJgKAMgFQAPgGAQAAQARAAAMAGQAOAFAIAJQAJAJAFAOQAFAOABANIAAAjQAAAMgEAJQgDALgGAIIAAAAIAQAAIAAAkg");
	this.shape_5.setTransform(40.3,-1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131C5F").s().p("AhVBbIBGi0IAfAAIBGC0gAgeA4IA9AAIgehgIgBAAg");
	this.shape_6.setTransform(23.5,-1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#131C5F").s().p("AADBOIAHgLIAEgLQAAgHgMgEQgPgGgJgFQgLgGgHgHQgHgIgDgJQgDgKAAgPQAAgRAFgMQAFgOAJgIQAJgJAKgDQALgEAKgBQALABAOAEQANADAKAKIgTAWQgGgHgHgCQgJgDgFAAQgOAAgIAKQgJAJAAAUQAAAMAEAJQAFAHANAGIAUAIIAPAIQAFADAEAFQADAFAAAHQAAAFgCAFIgFAKIgPAVg");
	this.shape_7.setTransform(3.2,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#131C5F").s().p("Ag6BfQgKgFgHgJQgGgIgDgMQgCgOAAgNQAAgPACgKQACgKAGgJQAGgJAKgGQAJgFAOgBIAEAcQgOABgFAJQgFAKAAASQAAAHABAGQACAHAEAFQACAEAGAEQAFADAGAAQAIAAAEgHQAFgIAAgKIAAgoIAcAAIAAAoQAAALAGAIQAGAHAKAAQAIAAADgDQAEgDADgGIAEgMIABgOQAAgQgGgLQgFgKgNAAIAEgcQANAAAKAGQALAGAFAIQAFAJADALQABAKAAAOQAAAOgCANQgDANgGAIQgFAIgLAFQgJAFgOAAQgZAAgLgTIgBAAQgGAJgIAFQgIAFgMAAQgOAAgKgEgAgPgxIAUgxIAcAIIgfAwg");
	this.shape_8.setTransform(-13.2,-2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#131C5F").s().p("AAvBgQgJAAgGgEQgGgEgCgHIgDgGIgVhEIAAAAIgeBXIgfAAIAwh+IgHgXQgDgIgDgCQgDgEgJAAIgCAAIgEAAIgBgYQAIgCAJAAQAMAAAIAGQAHAGAEALIAsCHQADAFACADQACABAHABIABAVIgIACg");
	this.shape_9.setTransform(-29.2,-2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#131C5F").s().p("AgUA/QgKgDgGgFQgGgEgFgIQgDgIAAgJIABgHIADgIIAGgHIAJgFIAAgBQgGgBgCgDQgCgBgEgFIgCgHIgBgHQAAgIACgHQAFgIAFgEQAHgGAJgDQAJgDALAAQAOAAANAFQANAEAJAKIgSAUQgHgGgHgCQgGgDgJAAQgJAAgFAEQgGADgBAHQABAFADADQADADALAAIARAAIAAAWIgSAAQgKAAgDAEQgGAEAAAGQAAAGAGAEQAGAFAMAAQAHAAAIgDQAJgDAFgHIATAVQgJAJgPAFQgNAFgOAAQgJAAgLgDg");
	this.shape_10.setTransform(-41.1,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#131C5F").s().p("AARBAQgPAAgIgIQgJgJAAgPIAAhIIgcAAIAAgXIBXAAIAAAXIgfAAIAABAQAAAHADADQADAEAGAAIALAAIAAAag");
	this.shape_11.setTransform(-52.3,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#131C5F").s().p("AgLBAIgxh/IAfAAIAdBXIABAAIAchXIAgAAIgxB/g");
	this.shape_12.setTransform(-63.3,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#131C5F").s().p("AgUA/QgKgDgGgFQgGgEgFgIQgDgIAAgJIABgHIADgIIAGgHQAEgEAEgBIAAgBIgIgEIgEgGIgEgHIgBgHQABgIADgHQADgHAHgFQAFgGAKgDQAKgDALAAQAOAAAMAFQANAEAJAKIgSAUQgFgGgIgCQgIgDgIAAQgHAAgHAEQgHADAAAHQAAAFAEADQAEADAKAAIASAAIAAAWIgTAAQgJAAgEAEQgGAEAAAGQABAGAFAEQAGAFAMAAQAGAAAKgDQAHgDAGgHIATAVQgJAJgOAFQgOAFgOAAQgKAAgKgDg");
	this.shape_13.setTransform(-75.1,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#131C5F").s().p("AgFA+QgGgDgEgEQgDgFgBgGIgBgOIAAheIAcAAIAABcQAAAHACADQAEACAHAAIAAAYIgJABQgLAAgGgDg");
	this.shape_14.setTransform(-91,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#131C5F").s().p("AgdA8QgLgHgEgIQgGgJgCgMQgBgLAAgLQAAgLABgMQACgMAGgKQAGgKAJgGQAJgGAQAAQAHAAAHADQAIADAGAHIABAAIAAgMIAdAAIAACAIgdAAIAAgMIgBAAQgHAHgIADQgJAEgGAAQgPAAgIgGgAgMgiQgFAEgCAGQgCAFgCAHIAAAZQACAIACAEQADAGAFADQADAEAIAAQAJAAAEgEQAEgDADgGQADgFABgHIAAgYQgBgIgDgFQgCgFgEgEQgGgEgIAAQgHAAgFADg");
	this.shape_15.setTransform(-101.7,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#131C5F").s().p("AAZBAIglg5IgJAJIgJAKIAAAmIgdAAIAAh/IAdAAIAAA1IABAAIAvg1IAkAAIgvAyIA1BNg");
	this.shape_16.setTransform(-114.2,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt12iii, new cjs.Rectangle(-120.2,-12.3,240.4,24.6), null);


(lib.txt12ii = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131C5F").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape.setTransform(58.6,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131C5F").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape_1.setTransform(51.6,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131C5F").s().p("AgQASIAAgjIAiAAIAAAjg");
	this.shape_2.setTransform(44.6,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#131C5F").s().p("AgUBgQgMgFgFgFQgHgFgFgKQgEgJAAgKIAAhSIAeAAIAABMQAAAMAHAHQAHAHAJAAQAKAAAIgHQAGgHAAgMIAAhMIAeAAIAABSQAAAKgEAJQgEAJgHAGQgJAHgIADQgKADgMAAQgLAAgJgDgAgPgxIATgxIAcAIIgeAwg");
	this.shape_3.setTransform(34,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#131C5F").s().p("AgaA9QgLgEgIgLQgKgQAAgeIACgTQABgJAEgHQAGgOAOgJQANgHARAAQAOAAAMAFQANAHAGAKQAEAFADANQACAJAAAPQAAAMgCANQgDAKgEAIQgIAMgMAGQgNAGgOAAQgPAAgLgFgAgMgjQgGAEgDAHQgDAHAAAEIgBAbQABAFADAGQADAHAFAEQAGADAHAAQAIAAAGgEQAHgFADgJIACgKIAAgMQAAgPgDgIQgDgHgGgEQgFgDgIAAQgGAAgHADg");
	this.shape_4.setTransform(20.3,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#131C5F").s().p("AgEA+QgHgDgEgEQgDgFgCgHIgBgMIAAhfIAdAAIAABdQAAAFADAEQACACAJAAIgBAZIgJAAQgMAAgEgDg");
	this.shape_5.setTransform(10.6,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131C5F").s().p("AAYBAIAAhmIgvAAIAABmIgeAAIAAh/IBrAAIAAB/g");
	this.shape_6.setTransform(-0.2,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#131C5F").s().p("Ag1BaIAAizIAeAAIAABMQAAANAFAFQAGAHAMAAQAJAAAJgGQAGgGAAgNIAAhMIAeAAIAAB/IgeAAIAAgLIAAgBQgHAHgIADQgHAEgJAAQgIAAgIgEIAAA2g");
	this.shape_7.setTransform(-14.1,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#131C5F").s().p("AgUA9QgLgDgHgHQgHgGgEgIQgEgKAAgKIAAhRIAeAAIAABMQAAAMAHAHQAHAGAJABQAKgBAHgGQAHgIAAgLIAAhMIAeAAIAABRQAAAKgEAKQgFAJgHAGQgHAGgKADQgJAEgMAAQgLAAgJgEg");
	this.shape_8.setTransform(-28.1,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#131C5F").s().p("AgaA9QgMgEgHgLQgKgQAAgeIACgTQABgJAEgHQAHgPANgIQANgHARAAQAOAAAMAFQAMAHAHAKQAFAIACAKQACAMAAAMQAAAOgCALQgDAKgEAIQgIAMgMAGQgNAGgOAAQgQAAgKgFgAgMgjQgFAEgEAHIgDALIgBAbIADALQADAHAGAEQAFADAIAAQAIAAAGgEQAHgFADgJIACgKIAAgMQAAgNgDgKQgDgHgGgEQgGgDgHAAQgGAAgHADg");
	this.shape_9.setTransform(-41.9,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#131C5F").s().p("AAZBAIgkg5IgSATIAAAmIgeAAIAAh/IAeAAIAAA1IAAAAIAvg1IAkAAIgvAyIA1BNg");
	this.shape_10.setTransform(-54.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt12ii, new cjs.Rectangle(-60.4,-12.4,120.8,24.9), null);


(lib.txt12i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131C5F").s().p("AADBOIAHgLIADgHIABgEQAAgHgMgEQgPgGgJgFQgLgFgHgIQgGgHgDgLQgEgLAAgNQAAgQAGgOQAEgMAJgJQAJgJAKgEQALgDAKAAQAMAAANADQAMAEALAKIgSAVQgHgFgHgEQgJgCgEAAQgOAAgJAKQgJAKAAATQAAAMAFAJQAEAHANAFIAUAJIAPAIQAGAEADAFQADAFAAAFQAAAGgBAFIgFAKIgHAMIgJAKg");
	this.shape.setTransform(124.4,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131C5F").s().p("AgaBfQgLgEgIgMQgKgQAAgeIACgTQABgKAEgGQAHgPANgHQANgHARAAQAOgBAMAGQANAGAGAKQAFAIACAJQACAKAAAPQAAAMgCANQgDALgEAHQgIAMgMAHQgNAFgOAAQgQAAgKgEgAgMgBQgGADgDAGQgDAIAAAEIgBAcQABAHADAEQACAGAGAEQAFADAIAAQAIABAGgFQAHgEADgKIACgJIAAgNQAAgQgDgHQgDgIgGgDQgFgDgIAAQgGAAgHAEgAgPgxIAUgyIAcAJIgfAwg");
	this.shape_1.setTransform(111,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131C5F").s().p("AgKBAIgyh/IAgAAIAcBXIAAAAIAdhXIAgAAIgxB/g");
	this.shape_2.setTransform(98.2,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#131C5F").s().p("AgUA/QgKgDgGgFQgGgEgEgIQgFgIAAgJIABgHIAEgIIAGgHQAEgEAEgBIAAgBIgIgEIgEgGIgEgHIgBgHQAAgIAEgHQADgHAHgFQAFgGAKgDQAKgDALAAQAOAAAMAFQAMADAKALIgSAUQgHgGgHgCQgGgDgJAAQgJAAgFAEQgHADABAHQgBAFAEADQADADALAAIASAAIAAAWIgSAAQgKAAgFAEQgEAEgBAGQAAAGAGAEQAGAFALAAQAIAAAIgDQAJgDAFgHIAUAVQgKAJgOAFQgOAFgOAAQgJAAgLgDg");
	this.shape_3.setTransform(86.4,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#131C5F").s().p("AgeA8QgJgHgFgIQgEgIgDgNIgCgWIACgXQADgNAEgJQAGgKAJgGQAKgGAPAAQAHAAAIADQAHACAGAIIABAAIAAgMIAdAAIAACAIgdAAIAAgMIgBAAQgFAGgJAEQgJAEgGAAQgOAAgLgGgAgMgiQgEADgDAHQgCAGgBAGIAAAZIADAMQADAGAEADQAGAEAHAAQAJAAADgEQAGgEABgFQADgFABgHIAAgYQgBgIgCgFQgCgFgGgEQgEgEgIAAQgIAAgFADg");
	this.shape_4.setTransform(66.6,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#131C5F").s().p("Ag0BaIAAizIAdAAIAABMQAAAMAGAGQAGAHALAAQAKAAAIgGQAGgGABgNIAAhMIAdAAIAAB/IgdAAIAAgLIgCgBQgEAHgJAEQgIADgJAAQgIAAgIgEIAAA2g");
	this.shape_5.setTransform(53.1,3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131C5F").s().p("AAYBBIAAhLQAAgNgFgHQgFgGgNAAQgKAAgHAGQgHAIAAAMIAABLIgeAAIAAiAIAeAAIAAAOIABAAQAGgIAJgDQAJgEAIAAQATAAANAMQAMALAAAWIAABUg");
	this.shape_6.setTransform(39,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#131C5F").s().p("AARBAQgPAAgIgIQgJgJAAgPIAAhIIgcAAIAAgXIBXAAIAAAXIgfAAIAABAQAAAGADAEQACAEAHAAIALAAIAAAag");
	this.shape_7.setTransform(27.2,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#131C5F").s().p("AgdBeQgKgHgFgJQgGgJgBgLQgCgKAAgNQAAgNACgKQABgLAGgKQAGgKAJgGQAKgGAPAAQAHAAAIACQAHADAGAIIABgBIAAgLIAdAAIAAB/IgdAAIAAgLIgBAAQgHAGgIAEQgIADgGAAQgQAAgIgFgAgLAAQgGADgCAFQgDAHAAAGIgBANIABANIADAMQADAGAFADQADAEAIgBQAJABAFgEQAEgEACgFQAEgIAAgEIAAgZQgBgIgCgFQgDgGgEgDQgFgDgJAAQgIAAgDADgAgPgxIAUgyIAcAJIgfAwg");
	this.shape_8.setTransform(15.5,-2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#131C5F").s().p("AAYBAIAAhmIgvAAIAABmIgeAAIAAh/IBrAAIAAB/g");
	this.shape_9.setTransform(1.9,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#131C5F").s().p("AgaA9QgLgEgIgLQgKgRAAgdIACgTQABgKAEgGQAHgQANgHQANgHARAAQAOAAAMAGQANAGAGAKQAFAIACAKQACAJAAAPQAAAMgCAMQgDAMgEAGQgIANgMAGQgNAGgOAAQgQAAgKgFgAgMgiQgGAEgDAGQgDAHAAAEIgBAbQABAHADAEQACAGAGAFQAGADAHAAQAIAAAGgFQAHgEADgJIACgJIAAgNQAAgQgDgGQgDgIgGgEQgFgDgIgBQgGAAgHAFg");
	this.shape_10.setTransform(-18.3,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#131C5F").s().p("AARBAQgPAAgIgIQgJgJAAgPIAAhIIgcAAIAAgXIBXAAIAAAXIgfAAIAABAQAAAGACAEQAEAEAGAAIALAAIAAAag");
	this.shape_11.setTransform(-29.8,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#131C5F").s().p("AgUA/QgKgDgGgFQgGgDgFgJQgEgHABgKIABgHQAAgDADgFQABgDAFgEIAJgFIAAgBQgGgBgCgDQgCgBgEgFIgDgHIAAgHQAAgIACgHQADgGAHgGQAHgGAJgDQAJgDALAAQAOAAANAFQANAEAJAKIgSAUQgHgGgHgCQgHgDgIAAQgIAAgGAEQgHAEAAAGQAAAFAEADQADADALAAIARAAIAAAWIgSAAQgKAAgEAEQgFAEAAAGQAAAGAGAEQAGAFAMAAQAHAAAIgDQAJgDAFgHIATAVQgJAJgPAFQgNAFgOAAQgJAAgLgDg");
	this.shape_12.setTransform(-46.8,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#131C5F").s().p("Ag1BaIAAizIAdAAIAABMQABAMAFAGQAHAHALAAQAJAAAIgGQAHgGAAgNIAAhMIAdAAIAAB/IgdAAIAAgLIAAgBQgGAGgJAFQgIADgIAAQgIAAgIgEIgBAAIAAA2g");
	this.shape_13.setTransform(-60,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#131C5F").s().p("AgeBeQgKgHgFgJQgEgKgCgKQgCgLAAgMQAAgLACgMQABgMAGgJQAFgKAKgGQAJgGAQAAQAHAAAIACQAHADAGAIIAAgBIAAgLIAeAAIAAB/IgeAAIAAgLIAAAAQgHAGgIAEQgJADgFAAQgPAAgKgFgAgMAAQgFADgCAFQgDAGAAAHIAAAaQAAAIADAEQACAGAFADQAFAEAHgBQAJABAEgEQAEgDAEgGQACgFABgHIAAgZQgBgJgCgEQgCgGgFgDQgGgDgIAAQgHAAgFADgAgPgxIAUgyIAbAJIgeAwg");
	this.shape_14.setTransform(-80.5,-2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#131C5F").s().p("AAwBgQgKAAgGgEQgFgEgDgIIgYhJIAAAAIgeBXIgfAAIAwh9IgHgYQgCgHgEgDQgDgEgJAAIgCAAIgEABIgBgZQAIgCAJAAQANAAAHAGQAIAGADALIADAGIAqCAQABAGADACQADACAGAAIABAXIgIABg");
	this.shape_15.setTransform(-93.2,-2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#131C5F").s().p("AAYBAIAAhmIgvAAIAABmIgeAAIAAh/IBrAAIAAB/g");
	this.shape_16.setTransform(-106.6,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#131C5F").s().p("AAvBaIgNgnIhDAAIgOAnIghAAIBEi0IAZAAIBEC0gAgYAYIAwAAIgYhJIAAAAg");
	this.shape_17.setTransform(-121.7,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt12i, new cjs.Rectangle(-129.8,-12.4,259.6,24.9), null);


(lib.txt011ii = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131C5F").s().p("AgOBaIAAgdIAeAAIAAAdgAgLArIgCiFIAcAAIgDCFg");
	this.shape.setTransform(98.9,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131C5F").s().p("AgUA/QgKgDgGgFQgGgEgFgIQgDgHAAgKIABgHIADgIIAGgHIAJgFIAAgBQgFgBgEgDIgFgGIgDgHIgBgHQAAgIAEgHQADgHAGgFQAGgGAKgDQAKgDALAAQAOAAAMAFQANAEAJAKIgSAUQgGgGgIgCQgHgDgIAAQgIAAgGAEQgHADAAAHQAAAFAEADQADADALAAIASAAIAAAWIgTAAQgJAAgFAEQgFAEAAAGQAAAGAGAEQAGAFALAAQAHAAAJgDQAJgDAGgHIASAVQgJAJgPAFQgMAFgPAAQgKAAgKgDg");
	this.shape_1.setTransform(89.8,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131C5F").s().p("AARBAQgPAAgIgIQgJgJAAgPIAAhIIgcAAIAAgXIBXAAIAAAXIgfAAIAABAQAAAGADAEQADAEAGAAIALAAIAAAag");
	this.shape_2.setTransform(78.6,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#131C5F").s().p("AgaBeQgMgEgHgLQgKgQAAgeIACgUQABgJAEgGQAHgPANgHQANgHARAAQAOAAAMAFQAMAGAHAKQAFAJACAIQACANAAALQAAAQgCAKQgDALgEAHQgIANgMAFQgNAGgOABQgQgBgKgFgAgMgBQgFACgEAIIgDALIgBAcIADAKQADAIAGADQAFAEAIAAQAIAAAGgFQAHgFADgIIACgKIAAgOQAAgNgDgJQgDgIgGgDQgGgDgHAAQgGAAgHAEgAgPgxIAUgxIAcAIIgfAwg");
	this.shape_3.setTransform(67.1,-2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#131C5F").s().p("AAYBAIAAhmIgvAAIAABmIgeAAIAAh/IBrAAIAAB/g");
	this.shape_4.setTransform(53.4,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#131C5F").s().p("AgFA+QgGgDgEgFQgDgEgBgHIgBgMIAAhfIAcAAIAABdQAAAGADADQACACAIABIAAAYIgJAAQgLAAgGgDg");
	this.shape_5.setTransform(36.9,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131C5F").s().p("AgeA8QgJgGgFgJQgFgKgCgLQgCgKAAgMQAAgNACgKQACgLAFgLQAFgKAKgGQAKgGAPAAQAHAAAIADQAHADAGAHIAAAAIAAgMIAeAAIAACAIgeAAIAAgMIAAAAQgHAHgHADQgKAEgFAAQgPAAgKgGgAgMgiQgFAEgCAGQgDAGAAAGIgBAMIABANQAAAHADAFQADAGAEADQAEAEAJAAQAIAAAFgEQAEgEADgFQACgFAAgHIABgYQgBgIgCgFQgDgFgEgEQgGgEgHAAQgIAAgFADg");
	this.shape_6.setTransform(26.2,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#131C5F").s().p("AAZBAIgkg5IgSATIAAAmIgeAAIAAh/IAeAAIAAA1IABAAIAug1IAjAAIguAyIA1BNg");
	this.shape_7.setTransform(13.7,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#131C5F").s().p("AADBOIAEgFIAGgMIABgFQAAgHgMgEQgPgFgJgGQgJgFgJgIQgGgHgDgLQgEgLAAgMQAAgRAGgOQAEgMAJgJQAJgJAKgEQALgEAKABQAMgBANAEQAMAEALAKIgSAVQgHgFgHgEQgJgCgEAAQgOAAgJAJQgJAKAAAUQAAANAFAIQAEAHANAFIAUAJIAPAIQAGAEADAFQADAFAAAFQAAAGgBAFIgFALIgHALIgJAKg");
	this.shape_8.setTransform(-5.7,3.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#131C5F").s().p("AgFA+QgGgDgEgFQgEgFAAgGIgBgMIAAhfIAcAAIAABdQAAAGACADQADACAIABIAAAYIgJAAQgLAAgGgDg");
	this.shape_9.setTransform(-15.4,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#131C5F").s().p("AgUA/QgKgDgGgFQgGgEgFgIQgDgIAAgJIABgHIADgIIAGgHQAEgEAFgBIAAgBIgIgEIgGgGIgDgHIAAgHQAAgIADgHQADgHAGgFQAHgGAJgDQAKgDAKAAQAPAAAMAFQANAEAKAKIgSAUQgIgGgHgCQgGgDgJAAQgIAAgGAEQgGADgBAHQABAFADADQADADALAAIASAAIAAAWIgTAAQgJAAgEAEQgGAEAAAGQABAGAFAEQAGAFAMAAQAHAAAIgDQAJgDAFgHIATAVQgJAJgPAFQgNAFgOAAQgJAAgLgDg");
	this.shape_10.setTransform(-24.8,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#131C5F").s().p("AgaBaQgMgFgGgKQgGgHgCgLQgDgLABgMQgBgLACgJQACgJADgGQACgGAIgIQAEgGAKgEQgIgGgFgIQgFgHAAgJQAAgKAEgHQACgGAIgGQAHgFAHgDQAKgCAHAAQAOAAAJACQALACALAHIgLAYQgLgGgGgBQgHgCgHAAQgJAAgEADQgDADAAAFQAAAGAFAFQAFAEAKAFIAUAMQAKAHAGAIQAFAJADAJQABAOAAAJQABAMgDAKQgBAIgGAJQgHANgNAGQgMAGgOAAQgOAAgMgFgAgNgFQgGAFgCAGIgDAMIgBANIABANIADALQADAHAFADQAFADAIAAQAIAAAHgEQAGgFADgJQABgEABgFIgBgaIgCgIQgHgOgQgEQgHACgGAEg");
	this.shape_11.setTransform(-37.7,-1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#131C5F").s().p("AgeA8QgJgHgFgIQgEgIgDgNIgCgWIACgXQADgNAEgJQAGgKAJgGQAKgGAPAAQAHAAAIADQAHACAGAIIABAAIAAgMIAdAAIAACAIgdAAIAAgMIgBAAQgFAGgJAEQgJAEgGAAQgOAAgLgGgAgMgiQgEADgDAHQgCAGgBAGIAAAZIADAMQADAGAEADQAGAEAHAAQAJAAADgEQAGgEABgFQADgFABgHIAAgYQgBgIgCgFQgCgFgGgEQgEgEgIAAQgIAAgFADg");
	this.shape_12.setTransform(-57.7,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#131C5F").s().p("AgaBbQgLgFgHgLQgCgDgDgHQgDgJgBgHIgCgxQAAgcACgNQADgRAEgHQAHgOAMgIQANgIAQAAQAPAAAKAGQALAFAHAMIAEAJIAEAOIACAUIABAcIgBAaIgCAVIgDAOIgFALQgGALgNAHQgLAHgPAAQgPAAgLgFgAgaAoIACAKIACAFQADAHAGAEQAFAEAIAAQASAAAFgTIACgFIADgVIAAgRIg3AAgAgMhBQgFAEgEAGIgCAFIgCAIIgCAbIA3AAIgBgQIgBgLIgEgMQgCgIgGgDQgFgEgIAAQgHAAgGAEg");
	this.shape_13.setTransform(-71,-2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#131C5F").s().p("AgFA+QgGgDgEgFQgDgEgBgHIgBgMIAAhfIAcAAIAABdQAAAGADADQACACAIABIAAAYIgJAAQgLAAgGgDg");
	this.shape_14.setTransform(-87.3,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#131C5F").s().p("AARBAQgOAAgJgIQgKgJAAgPIAAhIIgbAAIAAgXIBXAAIAAAXIgfAAIAABAQAAAGACAEQADAEAHAAIAKAAIAAAag");
	this.shape_15.setTransform(-96,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt011ii, new cjs.Rectangle(-100.4,-12.3,200.8,24.6), null);


(lib.txt011i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131C5F").s().p("AADBOIAEgFIAGgNIABgEQAAgHgMgEQgPgGgJgFQgLgGgHgHQgGgHgDgKQgEgKAAgPQAAgPAFgOQAFgNAJgJQAJgJAKgEQALgDAKAAQAMAAANADQAMAEALAKIgSAVQgGgFgIgEQgJgCgEAAQgOAAgJAKQgJAKAAATQAAAMAEAJQAGAIAMAFIAUAIIAPAIQAGAEADAFQADAFAAAGQAAAFgCAFIgEAKIgIALIgIALg");
	this.shape.setTransform(116.5,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131C5F").s().p("AgFA+QgGgDgEgFQgEgEAAgGIgBgOIAAheIAcAAIAABcQAAAIACACQADADAIAAIAAAXIgJABQgLAAgGgDg");
	this.shape_1.setTransform(106.8,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131C5F").s().p("AgUA/QgKgDgGgFQgGgEgFgIQgDgIAAgJIAAgHIAEgIIAGgHQADgEAGgBIAAgBIgJgEIgFgGIgDgHIgBgHQAAgIADgHQAFgIAGgEQAFgGAKgDQAKgDALAAQAOAAAMAFQAMADAKALIgSAUQgHgGgHgCQgGgDgJAAQgIAAgGAEQgHADAAAHQAAAFAEADQAEADAKAAIASAAIAAAWIgTAAQgJAAgEAEQgGAEAAAGQABAGAFAEQAGAFAMAAQAHAAAIgDQAJgDAFgHIATAVQgJAJgOAFQgOAFgOAAQgJAAgLgDg");
	this.shape_2.setTransform(97.4,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#131C5F").s().p("AADBqIAMgTIABgFQAAgEgDgCIgJgFIgWgJQgLgEgIgHQgHgGgGgKQgEgJgBgOQABgMAFgMQAFgNAKgPQAJgOANgNQALgMAQgNIg8AAIAAgZIBkAAIAAAWQgOALgRAQQgMALgNAQQgLARgGALQgFANAAAKQAAAHACAEQADAGACACQAEAEAFACIAgAOQAJADAFAEQAEADADAFQACAGAAAEQAAAFgDAGIgFAMIgIALIgIAKg");
	this.shape_3.setTransform(86.7,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#131C5F").s().p("AgIBgQgHgDgDgEQgEgFgBgGIgBgNIAAhfIAcAAIAABdQAAAGADADQACADAJAAIgBAYIgJAAQgKAAgGgDgAgXgxIAVgxIAbAIIgeAwg");
	this.shape_4.setTransform(77.5,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#131C5F").s().p("AgdA8QgMgFgGgJQgGgIgDgMQgCgOAAgMQAAgIABgIQAAgGADgIQAHgQAMgJQAOgJATAAIA+AAIAAAXIgXAAIAGAIIAFAJIADALIABANIgCASQgCAKgDAGQgGAQgNAHQgOAIgQAAQgNAAgMgFgAgPgjQgFAEgEAFQgEAJgBARQAAAQAGAMQAGAKAOAAQAIAAAFgFQAHgEACgKIACgJIABgKIgCgPQgBgHgDgEQgHgMgMAAQgHAAgFADg");
	this.shape_5.setTransform(66.8,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131C5F").s().p("AgeA8QgJgGgFgJQgFgKgCgLQgCgKAAgMQAAgNACgKQACgLAFgLQAGgKAJgGQAKgGAPAAQAHAAAIADQAHADAGAHIAAAAIAAgMIAeAAIAACAIgeAAIAAgMIAAAAQgHAHgHADQgKAEgFAAQgQAAgJgGgAgMgiQgFAEgCAGQgDAIAAAEIgBAMIABANQAAAFADAHQACAGAFADQAFAEAIAAQAHAAAFgEQAGgEABgFQADgFAAgHIABgYQgBgIgDgFQgBgFgGgEQgFgEgHAAQgIAAgFADg");
	this.shape_6.setTransform(52.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#131C5F").s().p("AgOBbIAAgyQgPgBgMgFQgOgFgGgKQgHgIgBgLQgDgLAAgOIABgPQAAgHADgIIAGgNQADgGAHgFIAIgFIAJgEIAJAaQgKAEgEAJQgCAFAAAFIAAAaIACAKQADAHAHAEQAHAGAJAAIAAhpIAqABIANAEQAHADAGAEQAGAEAEAHQAGAJACALQABAKAAANQAAAPgCAJQgCAKgFAHQgIALgNAGQgNAGgQABIAAAygAAOAOQAKAAAHgFQAJgFABgHIACgKIAAgbIgDgKQgEgHgGgEQgIgDgIAAg");
	this.shape_7.setTransform(38,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#131C5F").s().p("AgbA9QgLgFgHgKQgKgPAAgfIABgTQACgJAEgIQAGgOAOgIQANgHARAAQANAAANAGQAMAGAHAKQAFAHACALQACAKAAAOQAAAMgDAMQgCAMgEAGQgIANgMAGQgNAGgPAAQgOAAgMgFgAgMgiQgGAEgDAGIgDALIgCANIACAOIADALQADAHAFADQAGAEAHAAQAIAAAHgFQAFgEAEgJIABgJIABgNQAAgQgDgGQgEgJgFgDQgFgDgJgBQgFAAgHAFg");
	this.shape_8.setTransform(22.9,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#131C5F").s().p("AAYBAIAAhmIgvAAIAABmIgeAAIAAh/IBrAAIAAB/g");
	this.shape_9.setTransform(9.2,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#131C5F").s().p("AgdA8QgLgHgEgIQgGgKgBgLQgCgKAAgMQAAgNACgKQABgLAGgLQAGgKAJgGQAKgGAPAAQAGAAAJADQAHADAGAHIAAAAIAAgMIAeAAIAACAIgeAAIAAgMIAAAAQgGAGgJAEQgIAEgGAAQgPAAgJgGgAgLgiQgGAEgCAGQgDAGAAAGIAAAZIADAMQADAGAFADQAEAEAHAAQAJAAAFgEQAEgEADgFQACgHABgFIAAgYQgBgIgCgFQgDgGgEgDQgGgEgIAAQgHAAgEADg");
	this.shape_10.setTransform(-4.6,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#131C5F").s().p("AgUBgQgMgFgFgFQgHgFgFgKQgEgJAAgKIAAhSIAeAAIAABMQAAAMAHAHQAHAHAJAAQAKAAAHgHQAHgHAAgMIAAhMIAeAAIAABSQAAAKgEAJQgEAJgHAGQgJAHgIADQgKADgMAAQgLAAgJgDgAgPgxIATgxIAcAIIgfAwg");
	this.shape_11.setTransform(-24.8,-2.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#131C5F").s().p("AgeA8QgLgFgGgJQgGgJgDgLQgDgMAAgOQAAgIACgIQAAgGADgIQAGgQANgJQAOgJATAAIA+AAIAAAXIgXAAIAGAIQAEAFABAEIADALIAAANIgBASQgCAKgDAGQgGAQgOAHQgNAIgQAAQgNAAgNgFgAgPgjQgFADgDAGQgGAJAAARQAAARAGALQAHAKAMAAQAJAAAFgFQAGgEADgKIADgTQAAgIgCgHQgBgHgDgEQgHgMgMAAQgHAAgFADg");
	this.shape_12.setTransform(-38.3,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#131C5F").s().p("AgUA/QgKgDgHgFQgFgEgFgIQgEgHABgKIABgHIACgIIAHgHIAJgFIAAgBQgGgBgCgDQgCgBgEgFIgDgHIgBgHQAAgGADgJQADgGAHgGQAHgGAJgDQAJgDALAAQAOAAANAFQANAEAJAKIgSAUQgGgGgIgCQgHgDgIAAQgIAAgGAEQgHAEAAAGQAAAFAEADQADADALAAIARAAIAAAWIgSAAQgKAAgEAEQgFAEAAAGQAAAGAGAEQAGAFALAAQAIAAAIgDQAJgDAFgHIATAVQgIAIgQAGQgNAFgOAAQgJAAgLgDg");
	this.shape_13.setTransform(-50.9,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#131C5F").s().p("AgeA8QgKgHgEgIQgGgKgBgLQgCgKAAgMQAAgNACgKQABgLAGgLQAFgKAKgGQAKgGAPAAQAHAAAIADQAHADAGAHIAAAAIAAgMIAeAAIAACAIgeAAIAAgMIAAAAQgHAHgIADQgJAEgFAAQgPAAgKgGgAgMgiQgFAEgCAGQgDAGAAAGIgBAMIABANQAAAHADAFQADAGAFADQAEAEAHAAQAJAAAFgEQAFgEACgFQACgFAAgHIABgYQgBgIgCgFQgCgFgFgEQgGgEgIAAQgHAAgFADg");
	this.shape_14.setTransform(-70.7,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#131C5F").s().p("Ag2BbIAAhzIACgVQABgKACgFQAIgOAMgJQAOgHAQAAQANAAANAGQAMAGAHAKQAFAJACALQACALABAOQAAAXgKAQQgHAMgMAHQgMAFgMABQgHgBgIgCQgGgDgGgGIgBABIAAA9gAgMg7QgGAEgDAGQgDAHAAAEIgBAOIABAOIACAKQADAHAGADQAFAEAIAAQAHAAAGgFQAHgEADgIQACgGAAgPQAAgOgDgKQgDgJgGgDQgGgDgHgBQgGAAgGAFg");
	this.shape_15.setTransform(-83.9,3.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#131C5F").s().p("Ag6BfQgKgFgHgJQgGgIgDgMQgDgOAAgNQAAgPADgKQACgKAGgJQAGgJAJgGQAKgFAOgBIADAcQgNABgFAJQgFAKAAASQAAAHACAGQABAHADAFQADAEAFAEQAGADAGAAQAIAAAEgHQAFgIAAgKIAAgoIAcAAIAAAoQAAALAGAIQAGAHAKAAQAIAAADgDQAEgDADgGIAEgMIABgOQgBgQgFgLQgFgKgNAAIAEgcQAMAAALAGQAKAGAGAIQAGAJACALQACAKAAAOQgBAOgCANQgDANgGAIQgFAIgKAFQgKAFgOAAQgYAAgMgTIgBAAQgGAJgIAFQgIAFgMAAQgPAAgJgEgAgPgxIAUgxIAcAIIggAwg");
	this.shape_16.setTransform(-100.6,-2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#131C5F").s().p("AgPBaIAAiXIgyAAIAAgdICDAAIAAAdIgyAAIAACXg");
	this.shape_17.setTransform(-115.2,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt011i, new cjs.Rectangle(-121.8,-12.4,243.7,24.9), null);


(lib.txt05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131C5F").s().p("AgdA8QgKgGgGgJQgEgKgCgKQgCgLAAgMIACgXQABgLAGgLQAFgJAKgHQAJgFAQAAQAJAAAGACQAGADAHAHIAAAAIAAgLIAeAAIAAB/IgeAAIAAgMIAAAAQgHAHgIADQgHADgHAAQgPAAgJgFgAgMgiQgFAEgCAGQgDAFAAAHIAAAZQAAAIADAFQACAEAFAFQAFADAHAAQAJAAAEgDQAEgDAEgHQACgGABgHIAAgLIAAgNQgBgGgCgGQgDgGgEgEQgGgDgIAAQgHAAgFADg");
	this.shape.setTransform(130.6,0.8,0.889,0.91);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131C5F").s().p("AAgBcQgGgFgCgGIgYhKIAAAAIgeBXIgfAAIAwh9IgHgYQgCgHgEgDQgDgEgIAAIgDAAIgEABIgBgZQALgCAGAAQANAAAHAGQAIAGADALIADAGIAqCBQABAFADADQADACAGAAIABAWIgOABQgKAAgGgEg");
	this.shape_1.setTransform(119.3,-2,0.889,0.91);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131C5F").s().p("AAgBcQgFgEgDgHIgYhKIAAAAIgeBXIgfAAIAwh9IgHgYQgCgHgDgDQgEgEgIAAIgEAAIgDABIgBgZQALgCAGAAQANAAAHAGQAHAFAEAMIADAGIApCBQACAFADADQACACAIAAIAAAWIgOABQgKAAgGgEg");
	this.shape_2.setTransform(108.2,-2,0.889,0.91);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#131C5F").s().p("AgeBeQgJgGgFgJQgGgKgBgKQgCgLAAgMIACgYQACgLAFgJQAGgKAJgHQAJgFAQAAQAJAAAGACQAGADAHAHIAAAAIAAgLIAeAAIAAB/IgeAAIAAgMIAAAAQgHAHgHADQgIADgHAAQgPAAgKgFgAgMAAQgFADgCAGQgCAFgCAHIAAAaQACAIACAFQACAEAFAFQAFADAIAAQAIAAAEgDQAEgDADgHQADgGAAgHIABgLIAAgOQgBgGgDgGQgCgGgFgDQgFgDgHAAQgIAAgFADgAgPgxIATgyIAcAJIgeAvg");
	this.shape_3.setTransform(96.4,-2.3,0.889,0.91);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#131C5F").s().p("AgrBYQgJgEgHgGQgGgGgEgJQgDgIAAgKQAAgPAIgPQAJgNARgLIgMgRQgDgEgBgGQgCgFAAgHQAAgJADgIQADgIAGgGQAGgGAJgDQAJgDANAAQALAAALAEQAMADALAJIgRAWIgIgGIgIgEIgGgCIgIAAQgJAAgFAFQgFAGAAAGQAAAGACADIAGAKIAuA8QAEgIABgGIAEgOIAbAFIgHAYQgEALgIAKIAeAlIgjAAIgNgQQgJAIgMAFQgKAFgNAAQgOAAgKgEgAgmAaQgGAIAAAKQAAAJAHAGQAGAGANABQAJAAAGgFQAHgEAFgEIgggqQgLAIgEAHg");
	this.shape_4.setTransform(77.8,-1.6,0.889,0.91);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#131C5F").s().p("Ag2BbIAAhzIACgUQACgMABgEQAHgOANgJQANgHARAAQAPAAALAFQAMAHAHAKQAFAHADAMQACAKAAAQQAAAZgKAOQgIAOgKAEQgNAHgMgBQgHAAgIgCQgGgDgGgGIgBABIAAA9gAgMg8QgGAFgDAGQgCAGgBAFIAAAcQAAAFACAFQADAGAGAFQAFADAIAAQAIAAAFgEQAHgFADgJQADgHAAgNQAAgRgEgIQgDgHgGgEQgGgEgHAAQgHAAgFAEg");
	this.shape_5.setTransform(58,3.1,0.889,0.91);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131C5F").s().p("AgUBhQgKgDgGgFQgHgGgDgGQgFgIAAgJIABgHIAEgIIAFgIIAJgFIAAgBQgEgCgEgDIgFgGIgDgGIgBgHQAAgHAEgIQADgHAHgEQAGgGAJgDQAJgDAMAAQAMAAAOAEQANAFAJAJIgSAUQgGgGgIgCQgIgCgHAAQgHAAgHADQgHADABAGQgBAFAEADQAEAEAKAAIASAAIAAAXIgSAAQgKAAgFADQgFAFAAAGQAAAFAGAFQAGAEALAAQAIAAAIgCQAJgDAFgHIAUAUQgLAKgNAFQgOAEgOAAQgJABgLgDgAgOgxIAUgyIAcAJIgfAvg");
	this.shape_6.setTransform(46.9,-2.3,0.889,0.91);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#131C5F").s().p("AARBAQgOAAgJgIQgJgIAAgQIAAhIIgcAAIAAgXIBXAAIAAAXIgeAAIAABAQgBAHADADQACAEAHAAIALAAIAAAag");
	this.shape_7.setTransform(37,0.8,0.889,0.91);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#131C5F").s().p("AgKBAIgyh/IAgAAIAcBWIAAAAIAdhWIAgAAIgxB/g");
	this.shape_8.setTransform(27.2,0.8,0.889,0.91);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#131C5F").s().p("AgeA8QgJgGgFgJQgGgKgBgKQgCgLAAgMIACgXQACgLAFgLQAGgJAJgHQAJgFAQAAQAJAAAGACQAGADAHAHIAAAAIAAgLIAeAAIAAB/IgeAAIAAgMIAAAAQgHAHgHADQgIADgHAAQgPAAgKgFgAgMgiQgFAEgCAGQgCAFgCAHIAAAZQACAIACAFQACAEAFAFQAFADAIAAQAIAAAEgDQAEgDAEgHQACgGAAgHIABgLIAAgNQgBgGgCgGQgDgGgFgEQgFgDgHAAQgIAAgFADg");
	this.shape_9.setTransform(15.6,0.8,0.889,0.91);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#131C5F").s().p("Ag1BaIAAizIAeAAIAABMQAAALAGAHQAGAHALAAQAKAAAHgHQAHgFAAgNIAAhMIAeAAIAAB/IgeAAIAAgLIgBgBQgGAIgIACQgHAEgJAAQgIAAgIgFIAAABIAAA2g");
	this.shape_10.setTransform(3.5,3.1,0.889,0.91);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#131C5F").s().p("AgFA+QgGgDgEgFQgDgDgBgIIgBgMIAAhfIAcAAIAABdQAAAGADADQACACAIABIAAAYIgJAAQgLAAgGgDg");
	this.shape_11.setTransform(-5.4,0.8,0.889,0.91);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#131C5F").s().p("AAZBAIgkg5IgSATIAAAmIgeAAIAAh/IAeAAIAAA1IABAAIAug1IAkAAIgvAyIA1BNg");
	this.shape_12.setTransform(-14,0.8,0.889,0.91);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#131C5F").s().p("AgaA9QgLgFgIgKQgKgQAAgeIACgTQABgKAEgGQAGgOAOgJQANgHARAAQAPAAALAFQAMAGAHALQAEAFADANQACAKAAAOQAAAMgCAMQgDALgEAHQgHAMgNAHQgNAGgOAAQgNAAgNgFgAgMgjQgGAFgDAGQgDAHAAAEIgBAbIAEALQACAGAGAFQAGADAHAAQAIAAAGgEQAHgFADgKIACgJIAAgMQAAgQgDgHQgDgHgGgEQgFgEgIAAQgHAAgGAEg");
	this.shape_13.setTransform(-26.8,0.8,0.889,0.91);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#131C5F").s().p("AARBAQgOAAgJgIQgKgIABgQIAAhIIgcAAIAAgXIBXAAIAAAXIgfAAIAABAQAAAGACAEQADAEAHAAIAKAAIAAAag");
	this.shape_14.setTransform(-37,0.8,0.889,0.91);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#131C5F").s().p("AgKBAIgyh/IAgAAIAcBWIAAAAIAdhWIAgAAIgyB/g");
	this.shape_15.setTransform(-46.8,0.8,0.889,0.91);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#131C5F").s().p("AgRAjIAJgiIgIAAIAAgjIAiAAIAAAiIgTAjg");
	this.shape_16.setTransform(-61.5,6.6,0.889,0.91);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#131C5F").s().p("AgeBeQgJgGgFgJQgFgHgDgNQgBgLAAgMIABgYQADgLAFgJQAGgKAJgHQAJgFAQAAQAIAAAGACQAIADAGAHIABAAIAAgLIAdAAIAAB/IgdAAIAAgMIgBAAQgHAHgHADQgIADgIAAQgOAAgKgFgAgMAAQgFADgCAGQgDAFgBAHIAAAaQABAIADAFQACAEAFAFQAFADAIAAQAIAAAEgDQAEgDADgHQADgGAAgHIACgLIgCgOQAAgGgDgGQgCgGgFgDQgFgDgHAAQgIAAgFADgAgPgxIATgyIAcAJIgeAvg");
	this.shape_17.setTransform(-70.7,-2.3,0.889,0.91);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#131C5F").s().p("AAZBAIgkg5IgSATIAAAmIgeAAIAAh/IAeAAIAAA1IABAAIAug1IAkAAIgvAyIA1BNg");
	this.shape_18.setTransform(-81.8,0.8,0.889,0.91);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#131C5F").s().p("AgFA+QgGgDgEgFQgDgEgBgHIgBgMIAAhfIAcAAIAABdQAAAGACADQADACAIABIAAAYIgJAAQgLAAgGgDg");
	this.shape_19.setTransform(-91.2,0.8,0.889,0.91);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#131C5F").s().p("AgaBaQgLgEgHgLQgGgHgCgLQgDgLABgMQgBgLACgJQACgKADgFQACgGAIgIQAFgHAJgDQgIgGgFgHQgFgJAAgIQAAgJAEgIQADgHAHgFQAGgFAIgCQAIgDAJAAQAOAAAJACQAJACANAHIgLAXQgIgEgJgCQgHgCgHAAQgIAAgFADQgDADAAAFQAAAHAFAEQAHAGAIAEIAUALQAKAHAGAIQAFAKACAIQACAJAAAOQABAMgDALQgCAJgFAIQgGAMgOAGQgMAGgOAAQgPAAgLgFgAgNgFQgFAFgDAGQgCAFgBAHIgBANIABANIADALQADAHAFADQAFAEAIAAQAIAAAHgFQAGgFADgJQABgDABgGIgBgZIgCgJQgHgOgQgDQgHAAgGAFg");
	this.shape_20.setTransform(-100.5,-1.9,0.889,0.91);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#131C5F").s().p("AgFA+QgGgDgEgFQgDgDgBgIIgBgMIAAhfIAcAAIAABdQAAAGACADQAEACAHABIAAAYIgJAAQgLAAgGgDg");
	this.shape_21.setTransform(-109,0.8,0.889,0.91);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#131C5F").s().p("AgdA8QgLgGgEgJQgGgKgBgKQgCgKAAgNQAAgMACgLQABgLAGgLQAGgJAJgHQAKgFAPAAQAJAAAFACQAIADAGAHIABAAIAAgLIAdAAIAAB/IgdAAIAAgMIgBAAQgHAHgIADQgHADgHAAQgPAAgJgFgAgMgiQgFAEgCAGQgCAFgCAHIAAAZQACAIACAFQADAFAFAEQADADAIAAQAIAAAGgDQAEgEACgGQADgGABgHIABgLIgBgNQgBgGgDgGQgCgGgEgEQgGgDgIAAQgHAAgFADg");
	this.shape_22.setTransform(-118.5,0.8,0.889,0.91);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#131C5F").s().p("AAYBAIAAhmIgvAAIAABmIgeAAIAAh/IBrAAIAAB/g");
	this.shape_23.setTransform(-130.6,0.8,0.889,0.91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt05, new cjs.Rectangle(-135.3,-11.3,270.8,22.7), null);


(lib.txt04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131C5F").s().p("AgRAjIAJgiIgIAAIAAgjIAiAAIAAAiIgTAjg");
	this.shape.setTransform(35.1,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131C5F").s().p("AADBOIAHgLIAEgLQAAgHgMgEQgOgGgLgFQgJgFgIgIQgHgIgDgJQgDgKAAgPQAAgRAFgMQAGgPAHgHQAJgJALgDQALgEAKgBQALABAOAEQAMAEALAJIgKALIgJALQgHgHgHgCQgHgDgGAAQgNAAgKAKQgIAJAAAUQAAAMAEAJQAFAHANAGIAUAIIAPAIQAGAEADAFQADAFAAAGIgCAKIgFALIgPAUg");
	this.shape_1.setTransform(26.5,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131C5F").s().p("AgUBhQgKgDgGgFQgIgFgDgHQgDgHgBgKIABgHIAEgIIAFgIIAJgGIAAAAQgEgCgEgDQgDgDgCgDIgDgHIgBgHQAAgHAEgGQADgIAGgFQAGgFAJgDQAJgDANAAQAPAAALAEQANAEAJAKIgSAUQgGgGgIgCQgHgCgJAAQgHAAgHADQgGADAAAGQAAAFAEADQADAEALAAIASAAIAAAXIgTAAQgJAAgFAEQgFADAAAHQAAAFAGAFQAGAEALAAQAHAAAJgDQAJgDAFgGIAUAUQgLAJgOAGQgNAEgOAAQgKAAgKgCgAgOgxIATgxIAdAJIggAvg");
	this.shape_2.setTransform(14.3,-2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#131C5F").s().p("Ag2BbIAAhzIABgVQACgJACgGQAHgOANgIQANgIARAAQAOAAAMAFQALAGAIALQAFAIACALQACAKAAAPQAAAZgJAPQgHAMgMAHQgMAFgMAAQgGAAgJgCQgGgDgGgGIgBAAIAAA+gAgMg8QgFAEgEAHIgDALIgBAOIABAOIACAKQAEAHAFADQAFAEAIAAQAHAAAHgFQAHgFACgHQACgGAAgPQAAgRgDgIQgEgIgFgDQgFgEgIAAQgGAAgGAEg");
	this.shape_3.setTransform(1.3,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#131C5F").s().p("AAMBBQgMAAgEgDQgIgDgCgEQgEgEgCgHIAAgOIAAheIAcAAIAABcQAAAHADADQACACAJAAIgBAZg");
	this.shape_4.setTransform(-8.6,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#131C5F").s().p("AgUA/QgKgDgGgFQgIgFgDgHQgDgHgBgKIABgHIAEgIIAFgHIAJgFIAAgBQgEgBgEgEQgCgCgDgDIgDgIIgBgHQAAgGAEgIQACgGAHgHQAHgFAJgDQAIgCAMgBQAQAAALAEQAMAFAKAKIgSAUQgGgGgIgDQgHgCgJAAQgHAAgHADQgGAFAAAGQAAAEAEADQADAEALAAIASAAIAAAWIgSAAQgLAAgEAEQgFAEAAAGQAAAFAGAFQAGAFALAAQAIgBAIgDQAJgDAGgGIATAUQgLAJgNAGQgOAFgOAAQgJAAgLgDg");
	this.shape_5.setTransform(-18,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131C5F").s().p("AgdA8QgLgEgHgKQgGgIgDgMQgDgMAAgOIACgQQACgKACgEQAGgRANgIQANgJATAAIA+AAIAAAXIgXAAIAGAIIAFAJIADALIABANIgCASQgBAKgDAGQgGAPgOAJQgOAHgQAAQgOAAgLgFgAgPgjQgFAEgDAFQgGAKAAAQQAAASAGAKQAGAKAOAAQAIAAAGgFQAGgEACgKIACgJIABgKQAAgIgCgHQgBgGgDgFQgHgMgMAAQgGAAgGADg");
	this.shape_6.setTransform(-30.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt04, new cjs.Rectangle(-36.9,-12.5,73.9,25), null);


(lib.txt03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131C5F").s().p("AgRAjIAJgiIgJAAIAAgjIAjAAIAAAiIgTAjg");
	this.shape.setTransform(104.5,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131C5F").s().p("AADBOIAHgLIADgHIABgEQAAgHgMgEQgPgGgJgFQgLgGgHgHQgGgHgDgKQgEgKAAgPQAAgPAFgOQAFgOAJgIQAJgJAKgDQALgEAKgBQAMABANAEQANAEAKAJIgSAWQgGgGgIgDQgJgDgEAAQgOAAgJAKQgJAJAAAUQAAAMAFAJQAEAHANAGIAUAIIAPAIQAGAEADAFQADAEAAAHQAAAFgCAFIgEALIgHAKIgJAKg");
	this.shape_1.setTransform(95.9,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131C5F").s().p("AgUA/QgJgDgHgFQgHgFgDgHQgFgIAAgJIABgHIAEgIIAFgHIAJgFIAAgBQgEgBgDgEQgDgCgDgDIgCgIIgBgHQAAgHADgHQAEgHAGgGQAGgFAJgDQAKgCAKgBQAPAAAMAEQAMAFAKAKIgSAUQgGgHgIgCQgGgCgJAAQgIAAgGADQgGAEAAAHQAAAEADADQAEAEAKAAIASAAIAAAWIgSAAQgKAAgFAEQgFAEAAAGQAAAFAGAFQAGAFALAAQAIgBAIgDQAJgDAGgGIATAUQgKAJgPAGQgNAFgOAAQgJAAgLgDg");
	this.shape_2.setTransform(83.6,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#131C5F").s().p("Ag3BbIAAhzIACgVQADgLACgEQAGgPAOgHQAMgIARAAQAOAAAMAFQAMAHAGAKQAGAKACAJQACANAAAMQAAAZgJAPQgHANgMAGQgMAFgMAAQgHAAgHgCQgIgEgFgFIgBAAIAAA+gAgMg8QgGAEgDAHIgDALIgBAcQACAGACAEQADAGAFAEQAGAEAHAAQAIAAAGgFQAGgEADgIQACgJABgMQgBgRgDgIQgDgIgGgDQgFgEgIAAQgGAAgGAEg");
	this.shape_3.setTransform(70.7,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#131C5F").s().p("AgUBhQgJgDgHgFQgHgFgEgHQgDgIAAgJIABgHIADgIIAGgIIAJgGIAAAAQgGgCgCgDQgDgCgDgEIgCgHIgBgHQAAgGACgHQAEgIAGgFQAHgGAJgCQAKgDAKAAQAPAAAMAEQANAEAJAKIgSAUQgGgHgIgBQgHgCgIAAQgIAAgGADQgHADAAAGQAAAFAEADQADAEALAAIARAAIAAAXIgSAAQgKAAgEAEQgFAEAAAGQAAAFAGAFQAGAEAMAAQAHAAAIgDQAJgDAGgGIASAUQgJAJgPAGQgNAEgOAAQgJAAgLgCgAgOgxIAUgxIAbAIIgeAwg");
	this.shape_4.setTransform(58.2,-2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#131C5F").s().p("AAMBBQgLAAgGgDQgGgCgEgFQgEgFAAgGIgBgOIAAheIAcAAIAABcQAAAHACADQADACAIAAIAAAZg");
	this.shape_5.setTransform(48.8,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131C5F").s().p("Ag0BaIAAi0IAdAAIAABNQAAALAGAHQAGAHALAAQAKAAAIgGQAGgGAAgNIAAhNIAeAAIAACAIgeAAIAAgMIAAAAQgGAHgJADQgIADgIABQgIgBgIgEIAAA3g");
	this.shape_6.setTransform(38.1,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#131C5F").s().p("AgUA/QgIgCgIgGQgIgFgDgHQgDgHgBgKIABgHIAEgIIAFgHIAJgFIAAgBQgEgBgEgEQgCgCgDgDIgDgIIgBgHQABgHADgHQACgGAHgHQAHgFAJgDQAKgCAKgBQAQAAALAEQAMAFAKAKIgSAUQgGgHgIgCQgHgCgIAAQgIAAgHADQgGAFAAAGQAAAEAEADQADAEALAAIASAAIAAAWIgSAAQgLAAgEAEQgFAEAAAGQAAAFAGAFQAGAFALAAQAIgBAIgDQAJgDAGgGIATAUQgKAJgOAGQgOAFgOAAQgJAAgLgDg");
	this.shape_7.setTransform(25.5,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#131C5F").s().p("Ag2BbIAAhzIABgVQABgKAEgFQAGgPANgHQANgIAQAAQAPAAAMAFQAMAHAGAKQAGAIACALQADANgBAMQAAAYgJAQQgHAMgMAHQgMAFgMAAQgHAAgHgCQgHgDgHgGIAAAAIAAA+gAgMg8QgGAEgDAHIgEALIgBAOIABAOQABAGADAEQADAHAFADQAFAEAIAAQAHAAAHgFQAGgEADgIQACgHAAgOQAAgPgDgKQgDgIgGgDQgFgEgIAAQgGAAgGAEg");
	this.shape_8.setTransform(12.5,3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#131C5F").s().p("AAYBAIAAhmIgvAAIAABmIgeAAIAAiAIBrAAIAACAg");
	this.shape_9.setTransform(-1.4,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#131C5F").s().p("AADBOIAHgLIADgHIABgEQAAgHgMgEQgPgGgJgFQgLgGgHgHQgFgGgFgLQgDgKAAgPQAAgPAFgOQAFgOAJgIQAJgJAKgDQALgEAKgBQAMABANAEQANAEAKAJIgSAWQgGgGgIgDQgJgDgEAAQgPAAgIAKQgJAJAAAUQAAAMAEAJQAGAHAMAGIAUAIIAPAIQAFAEAEAFQADAEAAAHQAAAFgCAFQgBAGgEAFIgHAKIgIAKg");
	this.shape_10.setTransform(-20.1,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#131C5F").s().p("AgUA/QgJgCgHgGQgGgFgFgHQgDgHgBgKIABgHIAEgIQACgDADgEIAJgFIAAgBQgFgBgDgEQgDgCgCgDIgDgIIgBgHQAAgHAEgHQACgGAHgHQAIgFAIgDQAKgCALgBQAOAAAMAEQAMAFAKAKIgSAUQgGgHgIgCQgHgCgIAAQgIAAgHADQgGAFAAAGQAAAEAEADQAEAEAKAAIASAAIAAAWIgTAAQgJAAgFAEQgFAEAAAGQAAAFAGAFQAGAFAMAAQAHgBAIgDQAJgDAFgGIATAUQgJAJgOAGQgOAFgOAAQgJAAgLgDg");
	this.shape_11.setTransform(-32.3,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#131C5F").s().p("AgaBaQgLgEgHgLQgGgJgCgJQgCgJAAgOIABgUQABgIAEgHQADgHAGgHQAHgHAIgDQgJgFgEgIQgFgIAAgJQAAgIAEgJQAEgIAGgEQAFgEAJgEQAJgCAJAAQAMAAAKACQAKACAMAHIgLAYQgKgGgHgBQgGgCgIAAQgJAAgEADQgEADAAAFQAAAGAHAFQAEAFAKAEIAUAMQAJAGAHAJQAGAJABAJQACAKAAANQAAAOgCAIQgDALgEAGQgIAOgMAFQgMAGgOAAQgNAAgNgFgAgNgFQgFAFgDAGIgDAMIgBANIABANQAAAGADAFQACAGAGAEQAGAEAHAAQAJAAAGgFQAHgFACgJIACgJIgBgZIgCgJQgGgOgRgEQgIACgFAEg");
	this.shape_12.setTransform(-45.3,-2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#131C5F").s().p("AgdBdQgJgEgGgKQgFgKgCgLQgCgKAAgMQAAgOACgLQACgKAFgKQAFgKAKgGQAKgGAPAAQAIAAAGADQAIACAGAIIABAAIAAgMIAdAAIAACAIgdAAIAAgMIgBAAQgHAGgIAEQgIADgGAAQgQABgIgHgAgMAAQgEADgDAGQgDAIAAAEIgBANIABANQAAAEADAJQACAFAGADQAEAEAIAAQAHAAAFgEQAGgEABgFQADgFABgIIABgMIgBgNQgBgHgDgFQgBgGgGgDQgEgDgIAAQgHAAgGADgAgPgxIAUgyIAcAJIgfAvg");
	this.shape_13.setTransform(-58.7,-2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#131C5F").s().p("AAMBBQgLAAgGgDQgGgCgEgFQgEgFAAgGIgBgOIAAheIAcAAIAABcQAAAHACADQADACAIAAIAAAZg");
	this.shape_14.setTransform(-68.3,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#131C5F").s().p("AAwBgQgKAAgGgEQgGgEgDgHIgXhKIAAAAIgeBXIgfAAIAwh+IgHgXQgDgIgDgCQgDgEgJAAIgCAAIgEAAIgBgXQAHgDAJAAQANAAAIAGQAHAGAEALIAtCHQABAFADADQACACAHgBIABAWIgIACg");
	this.shape_15.setTransform(-78.2,-2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#131C5F").s().p("AAMBBQgLAAgGgDQgGgCgEgFQgEgFAAgGIgBgOIAAheIAcAAIAABcQAAAIACACQADACAIAAIAAAZg");
	this.shape_16.setTransform(-87.6,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#131C5F").s().p("AAnBaIgnhCIgnBCIgjAAIA7hcIg4hYIAkAAIAjA+IAkg+IAjAAIg3BYIA7Bcg");
	this.shape_17.setTransform(-98.9,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03, new cjs.Rectangle(-106.3,-12.5,212.7,25), null);


(lib.tvma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131C5F").s().p("AgEASQgCgGgMgFQgLgFgDgGQgCgGAKgDIAhgOQgHADADAGQACAFAMAGQAMAFACAFQACAHgKADIgjAPQAIgEgCgGg");
	this.shape.setTransform(-7.6,-14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131C5F").s().p("AgECCQgCgGgMgFQgMgFgBgGQgDgHAKgDIAjgPQgJAEADAGQACAGAMAFQALAFADAGQADAGgLAEIgjAPQAIgEgCgGgAADBFQgIAAgGgGQgGgGAAgJIACimQgBgJgFgFQgFgHgIAAIAgAAQAIAAAGAGQAGAGAAAJIgCCmQAAAJAGAFQAEAGAJABg");
	this.shape_1.setTransform(71.1,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131C5F").s().p("ABeCNQgIAAgHgHQgGgGAAgIIABhVIiQgBIgBBUQAAAJgGAGQgGAGgKAAIgiAAQAJgBAFgGQAGgGAAgIIABiZQABgXAIgSQAKgVAOgNQAPgOAUgIQATgIAWAAQAWAAAUAJQATAIAQAPQAOAOAIAUQAJARAAAYIgCCZQAAAIAGAGQAFAGAIABgAgZhjQgMAEgLAKQgKAKgGAMQgGANAAAPIAAAjICQAAIAAgiQAAgOgFgNQgFgNgKgKQgKgKgNgFQgLgFgSgBQgNAAgOAGg");
	this.shape_2.setTransform(53,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#131C5F").s().p("ACCCNQgJAAgGgGQgHgHAAgIIACi2IhpDKIgMAAIhljMIgCC2QAAAJgGAGQgGAGgKAAIghAAQAIgBAGgGQAEgFABgJIACjtQAAgJgFgGQgGgGgIAAIApAAQAHAAAGADQAHADACAGIAAAAIBkDIIBnjGIABgBQAHgNAPACIAoAAQgIABgFAGQgGAGAAAIIgCDuQAAAIAFAFQAGAHAIAAg");
	this.shape_3.setTransform(22.4,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#131C5F").s().p("AgnCNQAJgCAFgFQAGgGgBgIIAChzIhXhxQgPgSgLgGQgLgIgIAAIA3ABQAGgBAFAEQAGAEACAEIBMBjIBNhiQAEgFAEgDQAFgDAGAAIA2AAQgHABgLAHQgKAGgPATIhaBvIgCByQABAJgHAGQgGAGgIAAg");
	this.shape_4.setTransform(-7.5,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#131C5F").s().p("ABeCNQgJAAgGgHQgHgGAAgIIABhVIiQgBIAABUQAAAJgGAGQgHAGgJAAIgiAAQAIgBAGgGQAGgGAAgIIABiZQAAgVAJgUQAJgUAPgOQAPgOATgIQAVgIAUAAQAWAAAVAJQAVAIANAPQAPANAIAVQAIASAAAWIgBCaQAAAHAFAHQAGAGAIABgAgZhjQgNAFgKAJQgKAIgGAOQgGAOAAAOIAAAjICQAAIAAgiQAAgPgFgNQgHgNgJgJQgIgJgOgGQgMgFgRgBQgNAAgOAGg");
	this.shape_5.setTransform(-31.4,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131C5F").s().p("Ag2CBQgXgKgSgVQgRgTgJgaQgIgXAAgeQAAgcAJgbQALgbAQgRQARgTAYgLQAYgKAdAAQAfABAXAKQAYALARAUQARATAJAaQAJAZgBAcQAAAcgJAbQgJAZgSATQgRATgYALQgYALgdgBQgfgBgXgKgAgmhgQgSAIgMAOQgMAOgHATQgGAVAAAUQAAAXAGASQAGATALAOQANAPARAIQAQAHAYABQAXABAQgJQASgIAMgNQANgQAFgSQAHgTAAgWQAAgVgGgUQgGgTgMgOQgMgPgRgHQgSgJgWAAQgXAAgQAIg");
	this.shape_6.setTransform(-58.6,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#131C5F").s().p("AiIACQAAgHAHgGQAHgGAJABIDjACQAKgBAGgFQAHgFABgHIAAAeQgBAIgGAGQgHAFgKAAIjjgCQgIAAgIAGQgGAFgCAHg");
	this.shape_7.setTransform(-60.7,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tvma, new cjs.Rectangle(-74.5,-16.9,149.1,33.8), null);


(lib.sreenShadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sreenShadow();
	this.instance.parent = this;
	this.instance.setTransform(-110,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sreenShadow_1, new cjs.Rectangle(-110,-32,220,64), null);


(lib.screen02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.screen02();
	this.instance.parent = this;
	this.instance.setTransform(-126,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen02_1, new cjs.Rectangle(-126,-106,251,211), null);


(lib.novaGo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A5E3").s().p("AhbCdQgXgjAAhEIAAgIQAAhCAXgjQAagnA5ABQARgBASAKQATAKAMASIAAiLIA5AAIAAGEIg5AAIAAgiQgMASgTAKQgSAJgRAAQg5AAgagngAgtgTQgNAUAAAvIAAAGQAAAuANAWQAOAYAfgBQAgABAOgYQAMgWAAguIAAgGQAAgvgMgUQgOgYggAAQgfAAgOAYg");
	this.shape.setTransform(106,0.6,0.634,0.634);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A5E3").s().p("AA7CPIAAimQAAglgPgQQgOgRgeABQgbAAgPARQgQASAAAiIAACmIg4AAIAAkaIA4AAIAAAhQAbgkAwgBQAwAAAZAeQAZAcAAA3IAACtg");
	this.shape_1.setTransform(87.9,3.7,0.634,0.634);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A5E3").s().p("AhYB5QgZgXAAglQAAgoAZgVQAagYAvAAIBJAAIAAgdQAAgrg5AAQgoAAgWAXIghghQAjgmA+AAQAyAAAcAUQAhAYAAAxIAADBIg4AAIAAgcQgUAfg3AAQgtAAgagYgAguAaQgNALAAAVQAAATAOALQANALAZAAQAgAAAPgNQASgPAAgjIAAgUIhFAAQgXAAgMAKg");
	this.shape_2.setTransform(69.1,3.8,0.634,0.634);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A5E3").s().p("ACLCQIAAioQAAgkgPgRQgNgQgcAAQgYAAgPASQgPASAAAhIAACoIg4AAIAAioQAAgkgNgRQgOgQgcAAQgYAAgPASQgQASgBAhIAACoIg3AAIAAkbIA3AAIAAAhQAOgSATgJQASgKAVAAQA5AAAUAxQALgVAUgOQAXgOAaAAQA0AAAaAeQAaAcgBA3IAACug");
	this.shape_3.setTransform(47.1,3.7,0.634,0.634);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A5E3").s().p("AhPBwQgnglAAhLIAAgBQAAhEAjgnQAhgkAzAAQAyAAAhAiQAjAiAAA4IAAAjIi0AAQADAnASAWQATAVAfABQAiAAAZgbIAmAiQgmAog9AAQg1AAgighgAgqhOQgSAWgBAkIB/AAQAAgjgTgXQgSgVgcAAQgaAAgRAVg");
	this.shape_4.setTransform(24.2,3.8,0.634,0.634);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A5E3").s().p("AhbCdQgXgjAAhEIAAgIQAAhCAXgjQAbgnA4ABQASgBARAKQATAKAMASIAAiLIA5AAIAAGEIg5AAIAAgiQgMASgTAKQgSAJgRAAQg5AAgagngAgsgTQgNAUAAAvIAAAGQAAAuANAWQANAYAfgBQAgABAOgYQAMgWAAguIAAgGQAAgvgMgUQgOgYggAAQgfAAgNAYg");
	this.shape_5.setTransform(6.4,0.6,0.634,0.634);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A5E3").s().p("AA6CPIAAimQAAglgOgQQgPgRgdABQgbAAgPARQgQASAAAiIAACmIg4AAIAAkaIA4AAIAAAhQANgRAUgKQAUgKAWAAQAwAAAZAeQAZAcAAA3IAACtg");
	this.shape_6.setTransform(-12.5,3.7,0.634,0.634);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A5E3").s().p("AhbBnQgfgnAAg/IAAgCQAAhCAfgmQAggnA7AAQA8AAAgAnQAfAmAABCIAAACQAAA/gfAnQghAqg7AAQg6AAghgqgAhCgBIAAACQAAAnAOAZQARAeAjAAQAjAAARgeQAOgZAAgnIAAgCQAAhdhCAAQhCAAAABdg");
	this.shape_7.setTransform(-30.6,3.8,0.634,0.634);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjCGQgRgKgJgZIhTjkIgBgEQAAgIAIAAIAyAAQAIAAACAKIBEDPQAEAMAFAAQAFAAAEgMIBFjPQACgKAIAAIAyAAQAIAAAAAIIgBAEIhTDkQgJAZgRAKQgOAIgWAAQgVAAgOgIg");
	this.shape_8.setTransform(-67.4,4.4,0.631,0.631);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWCOQgmAAgZgRQgfgVAAguIAAgEQAAgtAfgUQAZgRAmAAIBKAAIAAgJQAAgggLgJQgJgHgfAAIhMAAQgEAAgDgDQgDgDAAgEIAAgkQAAgDADgDQADgEAEAAIBiAAQA/ABAVAxQAKATAAAaIAACyQAAADgDADQgDAEgEAAgAgrAaQgLALAAAPQAAAPALAMQALAKAQABIBEAAIAAhLIhEAAQgQAAgLALg");
	this.shape_9.setTransform(-50,4.2,0.631,0.631);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABECOQgEAAgDgEQgDgDAAgEIAAigQAAgggLgMQgLgMgdAAIg/AAIAADYQAAAEgDADQgDAEgEAAIguAAQgEAAgDgEQgDgDAAgEIAAkGQAAgDADgDQADgEAEAAICNAAQBeAAAABwIAACgQAAAEgDADQgDAEgEAAg");
	this.shape_10.setTransform(-104.4,4.2,0.631,0.631);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhbBsQgjgiAAg2IAAgnQAAg2AjgjQAkgiA3gBQA4ABAkAiQAjAjAAA2IAAAnQAAA2gjAiQgkAkg4gBQg3ABgkgkgAgshFQgTAUAAAeIAAAnQAAAeATAUQASATAaAAQAaAAATgTQASgUAAgeIAAgnQAAgegSgUQgTgTgaAAQgaAAgSATg");
	this.shape_11.setTransform(-85.6,4.3,0.631,0.631);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.novaGo, new cjs.Rectangle(-112.2,-11.8,225.5,25.2), null);


(lib.more = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAhQgEgDgEgFQgCgFgBgHIgBgMIABgMQAAgFADgHQADgFAGgEQAFgDAIAAQAEAAAEACQAEABADAEIAAgGIAQAAIAABFIgQAAIAAgHQgEAFgEABQgEACgDAAQgIAAgGgDgAgGgSQgDACgBADIgCAHIAAANIACAHQABADADACQACACAEAAQAFAAACgCIAEgFQACgDAAgEIAAgNIgCgHIgEgFQgCgCgFAAQgEAAgCACg");
	this.shape.setTransform(68.9,4.8,1.02,1.02);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAyIAAg/IABgLIACgIQAEgJAHgDQAHgFAIAAQAIAAAHADQAHAFADAEQADAFABAGQABAGAAAIQAAAMgFAJQgEAHgGADQgGADgIAAIgHgBQgEgCgDgDIAAAAIAAAigAgGggIgFAGIgCAGIAAAHIAAAIQAAAEACABQABAEADACQADACAEAAQADAAAEgDQAEgCABgEQACgEAAgIQAAgJgCgEQgCgEgDgCQgDgCgEAAQgCAAgEACg");
	this.shape_1.setTransform(61.8,6.2,1.02,1.02);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAjIgJgFQgEgDgCgDQgCgFAAgEIACgJIAEgEQABgCADAAIAAAAIgEgDIgFgHIAAgEIACgIQABgDAEgDQADgDAGgCQAEgCAGAAQAHAAAIACQAHADAFAFIgKALQgDgDgFgBIgIgBQgDgBgEACQgEACAAAEQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQACACAGAAIAJAAIAAAMIgJAAQgGAAgCACQgDACAAADQAAADADACQADADAGAAIAJgCQAFgBADgDIAKALQgFAEgIAEQgIACgHAAQgFAAgFgBg");
	this.shape_2.setTransform(54.9,4.8,1.02,1.02);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJAjQgHAAgEgFQgGgEAAgIIAAgnIgPAAIAAgNIAvAAIAAANIgQAAIAAAiIABAGQACACADAAIAFAAIAAAOg");
	this.shape_3.setTransform(48.8,4.8,1.02,1.02);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOA0QgGgDgEgGQgGgIABgRIAAgKQABgFACgEQAEgIAHgDQAHgFAJAAQAIAAAGADQAHADADAGQAEAEAAAFQACAGAAAHQAAAIgCAGQAAAEgDAGQgEAGgHAEQgHADgIAAQgJAAgFgCgAgGAAIgFAFIgCAGIAAAPIACAGQABAEADACQADACAEAAQAEAAAEgDQADgCACgFIABgFIAAgIQAAgIgCgEQgBgEgDgBQgEgCgEAAIgGACgAgIgaIALgbIAPAFIgRAZg");
	this.shape_4.setTransform(42.6,2.9,1.02,1.02);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAhQgHgDgDgFQgDgEgCgHQgCgGABgIIABgIIABgIQADgJAIgFQAGgEALAAIAhAAIAAAMIgMAAIADAFIADAEQABADAAAEIABAGIgBAKIgCAJQgEAIgHAEQgIAEgIABQgHAAgGgDgAgIgTQgCACgCADQgDAGAAAIQAAAKADAFQADAGAHAAQAEAAAEgDQADgCACgGIABgFIAAgFIgBgIIgCgGQgEgGgGAAQgEAAgDABg");
	this.shape_5.setTransform(35.4,4.8,1.02,1.02);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAhQgFgDgEgFQgEgGgBgFQgBgGgBgIIABgIIADgIQADgJAHgFQAHgEALAAIAgAAIAAAMIgMAAIAEAFIADAEIABAHIAAAGIAAAKIgDAJQgEAIgHAEQgIAEgHABQgIAAgHgDgAgHgTQgDACgCADQgCAFgCAJQABAJADAGQAEAGAHAAQADAAAEgDQAEgDABgFIAAgFIABgFIgBgIIgCgGQgDgGgHAAQgDAAgDABg");
	this.shape_6.setTransform(28,4.8,1.02,1.02);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAHAkQgGAAgDgCQgEgBgCgDQgBgCgBgFIAAgHIAAgyIAOAAIAAAxIACAGQABABAEAAIAAANIgCABg");
	this.shape_7.setTransform(22.6,4.8,1.02,1.02);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAyIAAg/IABgLQAAgFACgDQAEgIAHgEQAHgFAJAAQAIAAAGADQAGAEAEAFQADAGABAFIABAOQAAANgFAIQgDAGgHAEQgGADgHAAQgEAAgEgBQgEgCgDgDIAAAAIAAAigAgGggQgDACgCAEIgCAGIAAAHIAAAIIACAFIAEAGQADACAEAAQAEAAAEgDQADgCACgEQABgDAAgJQAAgGgCgHQgBgDgEgDQgCgCgFAAQgCAAgEACg");
	this.shape_8.setTransform(16.9,6.2,1.02,1.02);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAjIgJgFIgGgGQgCgEAAgFIABgFIACgEIACgEQADgCADAAIAAAAQgDgBgCgCIgDgEIgBgDIgBgEQAAgEACgEQACgDADgDQAEgDAFgCQAEgCAHAAQAGAAAIACQAHADAFAFIgKALQgDgDgEgBIgJgBQgEgBgDACQgEACABAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQABACAGAAIAJAAIAAAMIgJAAQgFAAgDACQgDACAAADQAAADAEACQACADAGAAIAJgCQAFgBADgDIAKALQgEAEgJAEQgJACgGAAQgFAAgFgBg");
	this.shape_9.setTransform(10.1,4.8,1.02,1.02);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANAjIAAg3IgZAAIAAA3IgQAAIAAhFIA5AAIAABFg");
	this.shape_10.setTransform(2.8,4.8,1.02,1.02);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAjIgJgFIgGgGQgCgEAAgFIAAgFIACgEIAEgEQACgCACAAIAAAAQgCgBgCgCQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIgCgDIAAgEIABgIIAGgGQAEgDAFgCQAEgCAGAAQAHAAAIACQAHADAFAFIgKALQgDgDgFgBIgIgBQgEgBgDACQgDACAAAEQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQACACAGAAIAJAAIAAAMIgJAAQgGAAgCACQgDACAAADQAAADADACQADADAGAAIAJgCQAEgBAEgDIAKALQgFAEgIAEQgIACgHAAQgFAAgFgBg");
	this.shape_11.setTransform(-7.5,4.8,1.02,1.02);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAzIAAgcQgGAAgGgCQgDgBgGgEQgFgEgCgFQgDgEAAgHIAAgrIAQAAIAAAoIABAHIAEAEIAEADIAGABIAAg6IAPAAIAAA6IAFgBQADAAACgDQADgCAAgCQACgCAAgFIAAgoIAQAAIAAArQAAAGgDAFQgDAFgEAEQgGAEgEABIgLACIAAAcg");
	this.shape_12.setTransform(-15.7,6.1,1.02,1.02);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLAhQgGgCgDgDQgEgCgCgGQgCgEAAgGIAAgsIAQAAIAAAoQAAAHADADQAEAFAFAAQAFAAAEgFQAEgEAAgGIAAgoIAQAAIAAAsQAAAGgCAEQgCAFgEAEQgFADgEABQgFACgHABQgEgBgHgCg");
	this.shape_13.setTransform(-24.3,4.8,1.02,1.02);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAaA0QgGAAgDgCQgDgDgCgDIgMgoIAAAAIgQAvIgRAAIAahEIgDgNIgEgFQgBgCgFAAIgBAAIgDAAIAAgNIAJgBQAHAAAEADQAEACABAHIACADIAAADIAXBDIACAEQACACAEAAIAAAMIgFAAg");
	this.shape_14.setTransform(-31.5,3.1,1.02,1.02);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAzQgFgDgDgFQgDgFAAgGIgBgNIABgNQAAgFADgFQAEgGAEgDQAGgDAJAAIAHABQAFACACAEIABgBIAAgGIAPAAIAABFIgPAAIAAgGIgBAAQgEAEgEABQgEACgDAAQgJAAgFgDgAgGAAQgCABgCAEQgCADABAEIgBAHIABAHQgBADACADQACAEACABQADACADAAQAFAAACgCIAEgFIACgHIABgGIgBgHIgCgHIgDgFQgDgBgFAAQgEAAgCABgAgIgaIAKgbIAPAFIgQAZg");
	this.shape_15.setTransform(-38.7,2.9,1.02,1.02);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOAjIgUggIgKAMIAAAUIgPAAIAAhFIAPAAIAAAdIAZgdIAUAAIgZAbIAdAqg");
	this.shape_16.setTransform(-45.5,4.8,1.02,1.02);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQAhQgEgDgEgFQgDgHAAgFIgBgMIABgMQAAgGAEgGQACgEAGgFQAFgDAIAAQAEAAAEACQAEABADAEIAAgGIAQAAIAABFIgQAAIAAgHQgEAFgEABQgEACgDAAQgIAAgGgDgAgGgSQgCABgCAEIgCAHIAAANIACAHQACAEACABQACACAEAAQAFAAACgCIAEgFIACgHIAAgNIgCgHQAAgCgEgDQgCgCgFAAQgEAAgCACg");
	this.shape_17.setTransform(-53.5,4.8,1.02,1.02);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGAjIgahFIARAAIAPAvIAAAAIAQgvIARAAIgbBFg");
	this.shape_18.setTransform(-60.4,4.8,1.02,1.02);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAaAxIgIgVIgjAAIgIAVIgSAAIAlhhIANAAIAlBhgAgMANIAZAAIgNgnIAAAAg");
	this.shape_19.setTransform(-68.3,3.3,1.02,1.02);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAoIArgoIgrgnIAOgPIA7A2Ig7A3g");
	this.shape_20.setTransform(85.2,4.4,0.786,0.786);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#48C5F4").s().p("AhBBCQgbgbAAgnQAAglAbgcQAcgbAlAAQAnAAAbAbQAbAbAAAmQAAAngbAbQgbAbgnAAQgmAAgbgbg");
	this.shape_21.setTransform(85.3,4.4,0.787,0.787,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.more, new cjs.Rectangle(-72.8,-2.9,165.3,14.6), null);


(lib.logo_Nova_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnDQIgihgIAAgBQAAgBAAgBQAAAAABgBQAAAAABAAQABAAAAAAIAVAAQACAAABADIAcBXQACAFADAAQABAAACgFIAchXQABgDAEAAIAUAAQAAAAABAAQABAAAAAAQABABAAAAQAAABAAABIgjBhQgGARgSAAQgUAAgGgRgAhaDSQgOgOAAgWIAAgRQAAgXAOgOQAPgOAXAAQAXAAAPAOQAOAPAAAWIAAARQAAAWgOAOQgPAPgXAAQgXAAgPgPgAhGCJQgIAHAAANIAAARQAAAMAIAIQAHAJALgBQAKABAJgJQAHgIAAgMIAAgRQAAgMgHgIQgJgJgKAAQgLAAgHAJgACoDgQgPAAgLgHQgNgJABgTIAAgCQgBgTANgJQALgGAPAAIAfAAIAAgFQAAgMgFgEQgEgDgMAAIgfAAQgFAAAAgEIAAgPQAAgEAFAAIAnAAQAaAAAJAVQAEAIAAAKIAABKQAAAEgEABgACfCvQgEAFAAAGQAAAHAEAFQAFAEAGAAIAdAAIAAgfIgdAAQgGAAgFAEgAiTDgQgDAAAAgFIAAhDQAAgOgFgEQgEgFgMAAIgbAAIAABaQAAAFgEAAIgSAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIAAhwQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAIA6AAQAnAAAAAuIAABDQAAAFgFAAgAhBAlQgMgOgRgWQghgrgVgoQAfAYAPAEQASADAHgFQAMgKACgrQAAhHgEgPQAEAPANAbQASApAQAQQAQATAOgPQAGgGAXgqIAjhUIABAAQgOBPABAcQABAmADAJQAKAXAegTQAmgZAKgMQAHgJgUAnQgUAmgHAKIgZAkQgYAggSAOQgdAXgSAAIAAAAQgdAAgogrgAgkgxQgPAUAAAaQAAAaAPASQAQAUAVgBQAVABAQgUQAPgSAAgaQAAgagPgUQgQgSgVAAQgVAAgQASg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_Nova_w, new cjs.Rectangle(-22.5,-22.5,45,45), null);


(lib.label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E2767").s().p("AumMSQgJgHABgMIAA3+QAAgLAIgIQAIgHAMABIckDsQAMACAJAJQAIAJAAAMIAARcQABAMgJAKQgJAJgMABI8jCpIgEAAQgKAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.label, new cjs.Rectangle(-94.3,-79.3,188.7,158.6), null);


(lib.god_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.god();
	this.instance.parent = this;
	this.instance.setTransform(-66.5,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.god_1, new cjs.Rectangle(-66.5,-109,133,218), null);


(lib.foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131C5F").s().p("A3dFiIAAmiMAu7gEhIAALDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.foot, new cjs.Rectangle(-150.2,-35.4,300.5,70.8), null);


(lib.wifi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIBIQgegeAAgqQAAgqAegdQAfgeApAAQArAAAeAeQAeAdAAAqQAAAqgeAeQgeAegrAAQgpAAgfgegAgHAdQgDADAAAFQAAAEADAEQAEADADAAQAEAAAEgDQADgEAAgEQAAgFgDgDQgEgDgEAAQgDAAgEADgAAQAXQABAAABABQAAAAABAAQAAAAABABQAAAAABAAIAEgBQAEgEgEgEQgKgMgPAAQgOAAgKAMQgDAEADAEIAEABQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAHgIAJAAQAKAAAGAIgAAiAJQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAEgBQAFgEgEgEQgQgSgaAAQgZAAgQASQgEAEAFAEIADABQABAAAAAAQABAAABgBQAAAAABAAQAAgBAAAAQAOgPATAAQATAAAPAPgAAzgEQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAIAEgBQAEgEgDgEQgYgbgjAAQgjAAgWAbQgEAEAEAEIADABQABAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQATgXAeAAQAeAAAVAXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.wifi, new cjs.Rectangle(-10.3,-10.2,20.6,20.5), null);


(lib.tv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIBIQgegeAAgqQAAgqAegdQAegeAqAAQArAAAeAeQAeAdAAAqQAAAqgeAeQgfAegqAAQgqAAgegegAglAtIAAABIBLAAIAAgBQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIgTAAIAAgJIArAAQABAAABAAQAAAAABgBQAAAAAAAAQAAgBAAgBIAAhCQAAgBAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIh0AAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAABIAABCQAAABAAABQAAAAAAAAQABABAAAAQABAAAAAAIArAAIAAAJIgSAAQgBAAgBAAQAAAAgBABQAAAAAAAAQgBABAAABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAfQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAg2QAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAIBnAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAIAAA2QAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape_1.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tv, new cjs.Rectangle(-10.3,-10.2,20.6,20.5), null);


(lib.screen04copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.screen04();
	this.instance.parent = this;
	this.instance.setTransform(-114,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen04copy, new cjs.Rectangle(-114,-95,231,193), null);


(lib.screen04_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.screen04();
	this.instance.parent = this;
	this.instance.setTransform(-114,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen04_1, new cjs.Rectangle(-114,-95,231,193), null);


(lib.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBHQgdgdAAgqQAAgpAdgdQAegeAoABQAqgBAdAeQAdAdAAApQAAAqgdAdQgdAegqgBQgoABgegegAgggjQgGAFAAAKQAAAVAdAYQALAJAQAEQAUADAAgRQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBIgUgIIgGAGQgDACgCgBIgMgKQgJgJgCgEQgCgCADgCIAGgHIgJgVIgDgBQgEAAgEACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.phone, new cjs.Rectangle(-10,-10,20.1,20.1), null);


(lib.dorean = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFBFF").s().p("AgJA6IgthyIAdAAIAZBOIAAAAIAahOIAcAAIgrByg");
	this.shape.setTransform(32.1,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFBFF").s().p("AgaBUQgJgGgEgHQgFgKgCgJIgBgUQAAgLABgKQABgJAGgKQAEgIAJgGQAIgFAPAAQAHAAAGACQAGADAFAGIABAAIAAgLIAaAAIAAByIgaAAIAAgKIgBgBQgEAGgIAEQgIADgGAAQgNAAgIgFgAgKAAQgFADgCAFQgCAFgBAGIAAAXQABAGACAFQADAGAEACQAEADAHAAQAHAAAEgDQAEgDACgFQADgGAAgFIAAgXQgBgIgBgDQgCgFgFgDQgEgDgHAAQgHAAgEADgAgNgsIARgsIAZAIIgbAqg");
	this.shape_1.setTransform(20.9,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBFBFF").s().p("AgSA4QgIgCgGgFQgHgEgCgHQgEgFAAgJIABgHIADgHIAFgHQACgDAGgBIAAAAIgIgEIgEgGQgCgBAAgFIgBgHQAAgHADgGQADgGAFgFQAGgFAIgCQAJgDAKAAQAKAAANAEQAKADAKAKIgQASQgGgGgHgCQgIgCgFAAQgGAAgHADQgGADABAGQAAAFADACQACADAKAAIAQAAIAAAUIgRAAQgGAAgGADQgFAEAAAFQABAFAFAFQAEADALAAQAIAAAGgCQAHgCAGgHIARASQgLAKgLADQgMAFgMAAQgIAAgKgDg");
	this.shape_2.setTransform(10.7,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBFBFF").s().p("AgwBRIAAhmQgBgKACgJQACgJABgFQAHgMALgHQALgHAPAAQAOAAAKAFQALAFAGAJQAEAHADALQACAIAAAOQAAAVgJAPQgGALgLAFQgLAFgKAAQgHAAgGgCQgFgCgGgGIgBAAIAAA3gAgLg1QgEADgEAGIgCALIgBAMIABAMQgBAGADADQADAGAFADQADAEAIAAQAGAAAGgEQAGgFADgHQACgGAAgMQAAgPgEgHQgCgHgFgDQgGgEgGAAQgHAAgEAEg");
	this.shape_3.setTransform(-0.3,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBFBFF").s().p("Ag0A2QgJgEgGgHQgFgHgDgMQgCgJAAgPQAAgMACgJQACgLAFgHQAGgJAIgEQAIgFANgBIADAZQgMACgEAJQgFAIAAAPQAAAGABAGQACAGADAEQADAFAEACQAFADAFAAQAHAAAFgGQAEgHAAgJIAAgjIAYAAIAAAjQAAAKAGAHQAFAGAJAAQAHAAADgCQAEgDACgFIADgLIABgMQAAgQgEgIQgFgJgMgBIAEgZQAMABAJAFQAHAEAGAIQAFAHACAMQACAJAAAMQAAALgCANQgDALgFAHQgGAIgIAEQgJAEgMAAQgWAAgKgRIgBAAQgEAIgIAFQgHAFgLAAQgNAAgJgFg");
	this.shape_4.setTransform(-14.7,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBFBFF").s().p("AhIBRIA+ihIAVAAIA9ChgAgiA4IBEAAIgihlIAAAAg");
	this.shape_5.setTransform(-30.2,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dorean, new cjs.Rectangle(-37.5,-11.1,75,22.3), null);


(lib.clickTag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.txt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.txt12i();
	this.instance.parent = this;
	this.instance.setTransform(0,-2.2,0.076,0.076);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.16,scaleY:1.16,y:-34.6},8).to({scaleX:1,scaleY:1,y:-29.8},3).wait(7));

	// Layer 3
	this.instance_1 = new lib.txt12ii();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.076,0.076);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regX:-0.1,scaleX:1.16,scaleY:1.16,x:-0.2,y:0.2},8).to({regX:0,scaleX:1,scaleY:1,x:-0.1},3).wait(5));

	// Layer 1
	this.instance_2 = new lib.txt12iii();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,2.3,0.076,0.076);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({regX:-0.1,scaleX:1.16,scaleY:1.16,x:-0.3,y:34.9},8).to({regX:0,scaleX:1,scaleY:1,x:-0.2,y:30},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-3.2,19.6,1.9);


(lib.txt011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.txt011i();
	this.instance.parent = this;
	this.instance.setTransform(0,-2.6,0.179,0.179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.21,scaleY:0.21,y:-3.1},0).wait(1).to({scaleX:0.29,scaleY:0.29,y:-4.3},0).wait(1).to({scaleX:0.42,scaleY:0.42,y:-6.3},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-9.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:-12.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:-17.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-16.6},0).wait(1).to({scaleX:1,scaleY:1,y:-14.8},0).wait(5));

	// Layer 1
	this.instance_1 = new lib.txt011ii();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,2.7,0.179,0.179,0,0,0,0,0.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regY:0,scaleX:0.21,scaleY:0.21,x:-0.2,y:3},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-0.3,y:4.2},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-0.4,y:6.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-0.6,y:9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-0.8,y:12.6},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:-1,y:17.3},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:16.7},0).wait(1).to({scaleX:1,scaleY:1,x:-0.9,y:15},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-4.9,43.7,4.5);


(lib.txt02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.novaGo();
	this.instance.parent = this;
	this.instance.setTransform(0,13.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({alpha:1},8).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.wifi();
	this.instance.parent = this;
	this.instance.setTransform(-129.5,16.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({y:13.9,alpha:1},6,cjs.Ease.get(0.99)).wait(35));

	// Layer 4
	this.instance_1 = new lib.phone();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96.5,16.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({y:13.8,alpha:1},6,cjs.Ease.get(0.99)).wait(35));

	// Layer 3
	this.instance_2 = new lib.tv();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-63.5,16.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({y:13.9,alpha:1},6,cjs.Ease.get(0.99)).wait(35));

	// Layer 2
	this.instance_3 = new lib.logo_Nova_w();
	this.instance_3.parent = this;
	this.instance_3.setTransform(118.7,8.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({y:1.9,alpha:1},6,cjs.Ease.get(1)).wait(35));

	// Layer 1
	this.instance_4 = new lib.foot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,10);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:6.9,alpha:0.306},0).wait(1).to({y:4.6,alpha:0.54},0).wait(1).to({y:2.9,alpha:0.711},0).wait(1).to({y:1.7,alpha:0.827},0).wait(1).to({y:1,alpha:0.904},0).wait(1).to({y:0.5,alpha:0.95},0).wait(1).to({y:0.2,alpha:0.977},0).wait(1).to({y:0.1,alpha:0.991},0).wait(1).to({y:0,alpha:0.998},0).wait(1).to({alpha:1},0).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.2,-25.4,300.5,70.8);


(lib.screen03copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.screen04copy();
	this.instance.parent = this;
	this.instance.setTransform(-4.4,-0.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(1));

	// Layer 1
	this.instance_1 = new lib.screen03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-124,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-104,248,207);


(lib.screen03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.screen04_1();
	this.instance.parent = this;
	this.instance.setTransform(-4.4,-0.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(1));

	// Layer 1
	this.instance_1 = new lib.screen03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-124,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-104,248,207);


(lib.click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.clickTag.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(Adman.html5API.get('click'), "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.clickTag = new lib.clickTag();
	this.clickTag.parent = this;
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(1));

}).prototype = getMCSymbolPrototype(lib.click, new cjs.Rectangle(-150,-125,300,250), null);


(lib.blue_anime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E2767").s().p("AOSMoI8kipQgLgBgJgJQgIgKAAgMIAAx5QAAgMAIgKQAJgJALgCIcljsQALgBAJAHQAJAIgBAMIAAYbQABAMgJAHQgHAHgKAAIgEAAg");
	this.shape.setTransform(0.1,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E2767").s().p("ALmMoI3LipQgKgBgHgJQgGgKAAgMIAAx5QAAgMAGgKQAIgJAJgCIXLjsQAJgBAIAHQAGAIABAMIAAYbQgBAMgGAHQgGAHgIAAIgDAAg");
	this.shape_1.setTransform(0.1,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E2767").s().p("AG/MoIt9ipQgGgBgEgJQgFgKAAgMIAAx5QAAgMAFgKQAEgJAGgCIN9jsQAHgBADAHQAFAIAAAMIAAYbQAAAMgFAHQgDAHgFAAIgCAAg");
	this.shape_2.setTransform(0.1,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E2767").s().p("ABVMoIipipQgDgDAAgdIAAx5QAAgdADgEICpjsQADgDAAAdIAAAdIAAABIAAX9QAAAagCAAIgBAAg");
	this.shape_3.setTransform(0.1,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E2767").s().p("AgxMOIAA4bQAAgdABADIBgDsQACAEAAAdIAAR5QAAAegCACIhgCpIAAAAQgBAAAAgag");
	this.shape_4.setTransform(0.1,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E2767").s().p("AlyMhQgDgHAAgMIAA4bQAAgMADgIQAEgHAEABILVDsQAFACADAJQADAKAAAMIAAR5QAAAMgDAKQgDAJgFABIrVCpIgBAAQgEAAgDgHg");
	this.shape_5.setTransform(0.1,-2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E2767").s().p("Aq1MhQgGgHAAgMIAA4bQAAgMAGgIQAHgHAIABIVMDsQAKACAGAJQAGAKAAAMIAAR5QAAAMgGAKQgGAJgKABI1MCpIgCAAQgIAAgFgHg");
	this.shape_6.setTransform(0.1,-2.7);

	this.instance = new lib.label();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.label();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E2767").s().p("Ar2MSQgGgHAAgMIAA3+QAAgLAGgIQAIgHAJABIXLDsQAJACAIAJQAGAJABAMIAARcQgBAMgGAKQgIAJgJABI3LCpIgDAAQgIAAgGgHg");
	this.shape_7.setTransform(0.1,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E2767").s().p("AnIMSQgFgHAAgMIAA3/QABgLAEgHQADgHAHABIN9DsQAGACAEAJQAEAJABALIAARdQAAAMgFAKQgEAJgGABIt9CpIgCAAQgFAAgDgHg");
	this.shape_8.setTransform(0.1,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E2767").s().p("AhXL/IAA39IAAgBIAAgJQAAgSACACICqDsQADAEAAAVIAARjQAAAdgDADIiqCpIAAAAQgCAAAAgag");
	this.shape_9.setTransform(0.1,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2767").s().p("AAwMZIhgipQgBgCAAgeIAAxqQAAgPABgDIBgjsQACgCAAAPIAAYKQAAAagBAAIgBAAg");
	this.shape_10.setTransform(0.1,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E2767").s().p("AFrMZIrVipQgEgBgEgJQgDgKAAgMIAAxdQAAgLADgJQAEgJAEgCILVjsQAEgBAEAHQADAHAAALIAAX/QAAAMgDAHQgDAHgEAAIgBAAg");
	this.shape_11.setTransform(0.1,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E2767").s().p("AKmMZI1MipQgIgBgGgJQgHgKAAgMIAAxcQAAgMAHgJQAGgJAIgCIVMjsQAKgBAGAHQAGAHAAALIAAX/QAAAMgGAHQgFAHgIAAIgDAAg");
	this.shape_12.setTransform(0.1,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E2767").s().p("AOSMoI8kipQgLgBgJgJQgIgKAAgMIAAx5QAAgMAIgKQAJgJALgCIcljsQALgBAJAHQAJAIgBAMIAAYbQABAMgJAHQgHAHgKAAIgEAAg");
	this.shape_13.setTransform(0.1,-2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E2767").s().p("Aq1MhQgGgHAAgMIAA4bQAAgMAGgIQAHgHAIABIVMDsQAKACAGAJQAGAKAAAMIAAR5QAAAMgGAKQgGAJgKABI1MCpIgCAAQgIAAgFgHg");
	this.shape_14.setTransform(0.1,-2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E2767").s().p("AlyMhQgDgHAAgMIAA4bQAAgMADgIQAEgHAEABILVDsQAFACADAJQADAKAAAMIAAR5QAAAMgDAKQgDAJgFABIrVCpIgBAAQgEAAgDgHg");
	this.shape_15.setTransform(0.1,-2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E2767").s().p("AgxMOIAA4bQAAgdABADIBgDsQACAEAAAdIAAR5QAAAegCACIhgCpIAAAAQgBAAAAgag");
	this.shape_16.setTransform(0.1,-2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E2767").s().p("ABVMoIipipQgDgDAAgdIAAx5QAAgdADgEICpjsQADgDAAAdIAAAdIAAABIAAX9QAAAagCAAIgBAAg");
	this.shape_17.setTransform(0.1,-2.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E2767").s().p("AG/MoIt9ipQgGgBgEgJQgFgKAAgMIAAx5QAAgMAFgKQAEgJAGgCIN9jsQAHgBADAHQAFAIAAAMIAAYbQAAAMgFAHQgDAHgFAAIgCAAg");
	this.shape_18.setTransform(0.1,-2.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E2767").s().p("ALmMoI3LipQgKgBgHgJQgGgKAAgMIAAx5QAAgMAGgKQAIgJAJgCIXLjsQAJgBAIAHQAGAIABAMIAAYbQgBAMgGAHQgGAHgIAAIgDAAg");
	this.shape_19.setTransform(0.1,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.2,-80.5,188.7,158.6);


// stage content:
(lib.nova_onDemand_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 26
	this.instance = new lib.click();
	this.instance.parent = this;
	this.instance.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(518));

	// Layer 30
	this.instance_1 = new lib.bg_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(512).to({_off:false},0).to({alpha:1,mode:"independent"},5).wait(1));

	// Layer 1
	this.instance_2 = new lib.footer("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.8,219.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(429).to({_off:false},0).wait(89));

	// Layer 21
	this.instance_3 = new lib.more();
	this.instance_3.parent = this;
	this.instance_3.setTransform(142.5,124.3,0.97,0.97,0,0,0,0.1,0.1);

	this.instance_4 = new lib.dorean();
	this.instance_4.parent = this;
	this.instance_4.setTransform(153,72.6);

	this.instance_5 = new lib.novaGo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(153.3,96.9,0.75,0.75,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},437).wait(81));

	// Layer 27
	this.instance_6 = new lib.blue_anime("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(158,126.4,0.088,0.088,0,0,0,1.2,1.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(429).to({_off:false},0).wait(1).to({regX:0.1,regY:-2.7,scaleX:0.14,scaleY:0.13,x:157.6,y:124.5,startPosition:1},0).wait(1).to({scaleX:0.32,scaleY:0.29,x:156.6,y:119.3,startPosition:2},0).wait(1).to({scaleX:0.56,scaleY:0.51,x:155.2,y:112.1,startPosition:3},0).wait(1).to({scaleX:0.77,scaleY:0.7,x:154.1,y:106.2,startPosition:4},0).wait(1).to({scaleX:0.9,scaleY:0.82,x:153.3,y:102.2,startPosition:5},0).wait(1).to({scaleX:0.98,scaleY:0.89,x:152.8,y:99.9,startPosition:6},0).wait(1).to({scaleX:1.02,scaleY:0.93,x:152.6,y:98.6,startPosition:7},0).wait(1).to({regX:0.8,regY:0.9,scaleX:1.03,scaleY:0.94,x:153.7,y:101.9,mode:"single"},0).wait(81));

	// Layer 6
	this.instance_7 = new lib.txt12("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(274).to({_off:false},0).wait(69).to({startPosition:17},0).to({alpha:0},6).to({_off:true},1).wait(168));

	// Layer 5
	this.instance_8 = new lib.bg_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(269).to({_off:false},0).to({alpha:1,mode:"independent"},5).wait(75).to({_off:true},1).wait(69).to({_off:false,alpha:0,mode:"synched",startPosition:0},0).to({alpha:1,mode:"independent"},5).wait(94));

	// Layer 15
	this.instance_9 = new lib.txt05();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,264);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(219).to({_off:false},0).to({y:214},9,cjs.Ease.get(1)).to({_off:true},47).wait(243));

	// Layer 7
	this.instance_10 = new lib.tvma();
	this.instance_10.parent = this;
	this.instance_10.setTransform(165.5,44.5,0.209,0.209);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(356).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).to({_off:true},61).wait(94));

	// Layer 12
	this.instance_11 = new lib.screen03_1("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.7,104.8,0.88,0.88);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(224).to({_off:false},0).to({_off:true},51).wait(243));

	// Layer 14
	this.instance_12 = new lib.screen03copy("single",5);
	this.instance_12.parent = this;
	this.instance_12.setTransform(168.1,157.8,0.711,0.71,0,0,0,0,0.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(356).to({_off:false},0).to({_off:true},68).wait(94));

	// Layer 20
	this.instance_13 = new lib.blue_anime("synched",15,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.1,176.4,0.088,0.088,0,0,0,1.2,1.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(349).to({_off:false},0).wait(1).to({regX:0.1,regY:-2.7,scaleX:0.16,scaleY:0.17,x:151.6,y:173.9,startPosition:16},0).wait(1).to({scaleX:0.39,scaleY:0.4,x:156.6,y:167.6,startPosition:17},0).wait(1).to({scaleX:0.62,scaleY:0.63,x:161.4,y:161.4,startPosition:18},0).wait(1).to({scaleX:0.75,scaleY:0.76,x:164.2,y:157.9,startPosition:19},0).wait(1).to({scaleX:0.81,scaleY:0.83,x:165.6,y:156.1,startPosition:20},0).wait(1).to({regX:0.9,regY:1,scaleX:0.83,scaleY:0.85,x:166.8,y:159,mode:"single",startPosition:21},0).to({_off:true},1).wait(162));

	// Layer 17
	this.instance_14 = new lib.god_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(56.5,126);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(355).to({_off:false},0).to({alpha:1},6).to({_off:true},63).wait(94));

	// Layer 16
	this.instance_15 = new lib.sreenShadow_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(160.5,207.5,0.991,1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(357).to({_off:false},0).to({_off:true},67).wait(94));

	// Layer 13
	this.instance_16 = new lib.txt04();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150,264);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(173).to({_off:false},0).to({y:214},9,cjs.Ease.get(1)).wait(33).to({y:213.9,alpha:0.986},0).wait(1).to({y:213.4,alpha:0.94},0).wait(1).to({y:212.5,alpha:0.853},0).wait(1).to({y:211.1,alpha:0.709},0).wait(1).to({y:208.7,alpha:0.47},0).wait(1).to({y:204,alpha:0},0).to({_off:true},1).wait(297));

	// Layer 10
	this.instance_17 = new lib.screen02_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(148.1,104.7,0.817,0.817);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(178).to({_off:false},0).to({_off:true},39).wait(301));

	// Layer 11
	this.instance_18 = new lib.txt03();
	this.instance_18.parent = this;
	this.instance_18.setTransform(150,264);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(127).to({_off:false},0).to({y:214},7,cjs.Ease.get(1)).wait(35).to({y:213.9,alpha:0.986},0).wait(1).to({y:213.4,alpha:0.94},0).wait(1).to({y:212.5,alpha:0.853},0).wait(1).to({y:211.1,alpha:0.709},0).wait(1).to({y:208.7,alpha:0.47},0).wait(1).to({y:204,alpha:0},0).to({_off:true},1).wait(343));

	// Layer 8
	this.instance_19 = new lib.screen01();
	this.instance_19.parent = this;
	this.instance_19.setTransform(43,11,0.899,0.899);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(132).to({_off:false},0).to({_off:true},39).wait(347));

	// Layer 2
	this.instance_20 = new lib.blue_anime("synched",14,false);
	this.instance_20.parent = this;
	this.instance_20.setTransform(150.9,108.7,0.058,0.056,0,0,0,0.8,0.9);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(124).to({_off:false},0).wait(1).to({regX:0.1,regY:-2.7,scaleX:0.1,scaleY:0.1,x:150.8,y:108.3,startPosition:15},0).wait(1).to({scaleX:0.24,scaleY:0.23,x:150.6,y:107.8,startPosition:16},0).wait(1).to({scaleX:0.43,scaleY:0.42,x:150.3,y:107.1,startPosition:17},0).wait(1).to({scaleX:0.63,scaleY:0.62,x:150,y:106.4,startPosition:18},0).wait(1).to({scaleX:0.81,scaleY:0.8,x:149.8,y:105.8,startPosition:19},0).wait(1).to({scaleX:0.95,scaleY:0.94,x:149.6,y:105.3,startPosition:20},0).wait(1).to({scaleX:1.02,scaleY:1.01,x:149.5,y:105,startPosition:21},0).wait(1).to({regX:0.9,regY:0.9,scaleX:1.05,scaleY:1.04,x:150.3,y:108.7,startPosition:22},0).to({_off:true},1).wait(385));

	// Layer 1
	this.instance_21 = new lib.txt011("synched",0,false);
	this.instance_21.parent = this;
	this.instance_21.setTransform(150,125);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(61).to({_off:false},0).wait(59).to({startPosition:12},0).to({alpha:0},4).to({_off:true},1).wait(393));

	// Layer 1
	this.instance_22 = new lib.txt02("synched",0,false);
	this.instance_22.parent = this;
	this.instance_22.setTransform(150.8,114.8,0.721,0.721);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(5).to({_off:false},0).to({_off:true},53).wait(460));

	// Layer 9
	this.instance_23 = new lib.blue_anime("synched",7,false);
	this.instance_23.parent = this;
	this.instance_23.setTransform(149.4,142.9,0.101,0.102,0,0,0,0.5,0.5);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(2).to({_off:false},0).wait(1).to({regX:0.1,regY:-2.7,scaleX:0.12,scaleY:0.12,x:149.3,y:142.3,startPosition:8},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:149.4,y:141.3,startPosition:9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:149.5,y:139.8,startPosition:10},0).wait(1).to({scaleX:0.36,scaleY:0.35,x:149.7,y:137.8,startPosition:11},0).wait(1).to({scaleX:0.5,scaleY:0.49,x:149.8,y:135.2,startPosition:12},0).wait(1).to({scaleX:0.66,scaleY:0.64,x:150,y:132.2,startPosition:13},0).wait(1).to({scaleX:0.83,scaleY:0.81,x:150.3,y:129,startPosition:14},0).wait(1).to({regX:1,regY:1,scaleX:1.02,scaleY:1,x:151,y:128.7,mode:"single"},0).wait(46).to({mode:"synched",loop:false},0).wait(1).to({regX:0.1,regY:-2.7,scaleX:1.02,scaleY:1,x:150,y:125.3,startPosition:15},0).wait(1).to({scaleX:1.02,scaleY:1,x:149.9,y:126.1,startPosition:16},0).wait(1).to({scaleX:1.03,scaleY:1.01,x:149.8,y:127.2,startPosition:17},0).wait(1).to({regX:1,regY:1,scaleX:1.04,scaleY:1.02,x:150.6,y:132.2,startPosition:18},0).to({_off:true},1).wait(110).to({_off:false,regX:1.3,regY:1.2,scaleX:1.18,scaleY:1.16,x:156,y:107.1,startPosition:0},0).to({_off:true},7).wait(39).to({_off:false,regX:1,regY:1,scaleX:1.09,scaleY:1.06,x:148.9,y:108.8,startPosition:15},0).to({_off:true},7).wait(294));

	// Layer 1
	this.instance_24 = new lib.bg_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:true},425).wait(93));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bg.jpg", id:"bg"},
		{src:"god.png", id:"god"},
		{src:"screen01.png", id:"screen01"},
		{src:"screen02.png", id:"screen02"},
		{src:"screen03.png", id:"screen03"},
		{src:"screen04.png", id:"screen04"},
		{src:"sreenShadow.png", id:"sreenShadow"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;