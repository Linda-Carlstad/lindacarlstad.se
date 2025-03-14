/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/terminal/main.js":
/*!***************************************!*\
  !*** ./resources/js/terminal/main.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var _outputToHTMLNode;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global Terminal */
// Utilities
var Terminal = __webpack_require__(/*! javascript-terminal */ "./node_modules/javascript-terminal/lib/terminal.js");

var addKeyDownListener = function addKeyDownListener(eventKey, target, onKeyDown) {
  target.addEventListener('keydown', function (e) {
    if (e.key === eventKey) {
      onKeyDown();
      e.preventDefault();
    }
  });
};

var scrollToPageEnd = function scrollToPageEnd() {
  window.scrollTo(0, document.body.scrollHeight);
}; // User interface


var viewRefs = {
  input: document.getElementById('input'),
  output: document.getElementById('output-wrapper')
};

var createOutputDiv = function createOutputDiv(className, textContent) {
  var div = document.createElement('div');
  div.className = className;
  div.appendChild(document.createTextNode(textContent));
  return div;
};

var outputToHTMLNode = (_outputToHTMLNode = {}, _defineProperty(_outputToHTMLNode, Terminal.OutputType.TEXT_OUTPUT_TYPE, function (content) {
  return createOutputDiv('text-output', content);
}), _defineProperty(_outputToHTMLNode, Terminal.OutputType.TEXT_ERROR_OUTPUT_TYPE, function (content) {
  return createOutputDiv('error-output', content);
}), _defineProperty(_outputToHTMLNode, Terminal.OutputType.HEADER_OUTPUT_TYPE, function (content) {
  return createOutputDiv('header-output', "$ ".concat(content.command));
}), _outputToHTMLNode);

var displayOutputs = function displayOutputs(outputs) {
  viewRefs.output.innerHTML = '';
  var outputNodes = outputs.map(function (output) {
    return outputToHTMLNode[output.type](output.content);
  });

  var _iterator = _createForOfIteratorHelper(outputNodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var outputNode = _step.value;
      viewRefs.output.append(outputNode);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var getInput = function getInput() {
  return viewRefs.input.value;
};

var setInput = function setInput(input) {
  viewRefs.input.value = input;
};

var clearInput = function clearInput() {
  setInput('');
}; // Execution


var emulator = new Terminal.Emulator();
var emulatorState = Terminal.EmulatorState.createEmpty();
var historyKeyboardPlugin = new Terminal.HistoryKeyboardPlugin(emulatorState);
var plugins = [historyKeyboardPlugin];
addKeyDownListener('Enter', viewRefs.input, function () {
  var commandStr = getInput();
  emulatorState = emulator.execute(emulatorState, commandStr, plugins);
  displayOutputs(emulatorState.getOutputs());
  scrollToPageEnd();
  clearInput();
});
addKeyDownListener('ArrowUp', viewRefs.input, function () {
  setInput(historyKeyboardPlugin.completeUp());
});
addKeyDownListener('ArrowDown', viewRefs.input, function () {
  setInput(historyKeyboardPlugin.completeDown());
});
addKeyDownListener('Tab', viewRefs.input, function () {
  var autoCompletionStr = emulator.autocomplete(emulatorState, getInput());
  setInput(autoCompletionStr);
});

/***/ }),

/***/ "./node_modules/javascript-terminal/lib/terminal.js":
/*!**********************************************************!*\
  !*** ./node_modules/javascript-terminal/lib/terminal.js ***!
  \**********************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_551__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_551__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_551__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_551__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_551__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_551__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_551__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_551__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_551__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_551__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_551__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_551__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_551__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_551__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_551__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_551__(__nested_webpack_require_551__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/balanced-match/index.js":
/*!**********************************************!*\
  !*** ./node_modules/balanced-match/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ "./node_modules/brace-expansion/index.js":
/*!***********************************************!*\
  !*** ./node_modules/brace-expansion/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_5725__) {

var concatMap = __nested_webpack_require_5725__(/*! concat-map */ "./node_modules/concat-map/index.js");
var balanced = __nested_webpack_require_5725__(/*! balanced-match */ "./node_modules/balanced-match/index.js");

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),

/***/ "./node_modules/concat-map/index.js":
/*!******************************************!*\
  !*** ./node_modules/concat-map/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/get-options/index.js":
/*!*******************************************!*\
  !*** ./node_modules/get-options/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Class used internally to represent individual options.
 * @internal
 */
class Option{
	
	/**
	 * Create a new Option instance.
	 *
	 * @param {String|Array} names - Comma-separated list of names.
	 * @param {String|Array} params - Arguments which the option expects.
	 * @example new Option("-l, --long-list, --length", "<num> <type>")
	 * @example new Option("-e, --exec", "[num] [type]")
	 * @constructor
	 */
	constructor(names, params = ""){
		this.shortNames = [];
		this.longNames  = [];
		this.params     = [];
		this.values     = [];
		
		this.defineNames(names);
		this.defineParams(params);
	}
	
	
	/**
	 * Describe the names used to refer to this option.
	 * 
	 * @param {String|Array} input
	 * @internal
	 */
	defineNames(input){
		if(!Array.isArray(input))
			input = String(input).split(/,/g);
		
		for(let name of input){
			name = name.trim();
			/^-([^\s-])$/.test(name)
				? this.shortNames.push(RegExp.lastParen)
				: this.longNames.push(name.replace(/^-+/, ""));
		}
	}
	
	
	/**
	 * Describe the parameters this option accepts/expects.
	 *
	 * @param {String|Array} input
	 * @internal
	 */
	defineParams(input){
		input = Array.isArray(input)
			? input.filter(Boolean).join(" ")
			: String(input).trim().split(/\s+/g);
		
		// Strip any enclosing brackets added for readability
		input = input.map(param => param.replace(/^<(.+?)>$|^\[(.+?)\]$|^\((.+?)\)$/gm, (...args) =>
			args.slice(1, 4).filter(Boolean).join("")));
		
		for(const param of input){
			if(!param) continue;
			const [, name, pattern=".+"] = param.match(/^([^=]+)(?:=(.+)?)?$/);
			this.params.push({name, pattern});
			if(/\.{3}$/.test(name))
				this.variadic = true;
		}
	}
	
	
	/**
	 * Pattern to match option when expressed in bundled short-form.
	 *
	 * @readonly
	 * @return {String}
	 */
	get bundlePattern(){
		
		// Use a cached result if possible
		if(this._bundlePattern)
			return this._bundlePattern;
		
		const param = this.params.map(param => `(${param.pattern})?`).join("");
		const names = 1 === this.shortNames.length
			? this.shortNames[0]
			: `[${this.shortNames.join("")}]`;
		return (this._bundlePattern = names + param);
	}
	
	
	/**
	 * Number of parameters this option expects/accepts.
	 *
	 * @readonly
	 * @property {Number}
	 */
	get arity(){
		return this.params ? this.params.length : 0;
	}
	
	
	/**
	 * Array of names recognised by the option, both long and short.
	 *
	 * @readonly
	 * @property {Array}
	 */
	get names(){
		return this.shortNames.concat(this.longNames);
	}
	
	
	/**
	 * Whether the option can accept another parameter.
	 *
	 * @readonly
	 * @property {Boolean}
	 */
	get canCollect(){
		return !!(this.variadic || this.values.length < this.params.length);
	}
}



/**
 * Box a value inside an {@link Array}, unless it already is one.
 *
 * @example arrayify(1)   => [1]
 * @example arrayify([1]) => [1]
 * @param {*} input
 * @return {Array}
 * @internal
 */
function arrayify(input){
	return Array.isArray(input) ? input : [input];
}


/**
 * Strip leading dashes from an option name and convert it to camelCase.
 *
 * @param {String} input - An option's name, such as "--write-to"
 * @param {Boolean} noCamelCase - Strip leading dashes only
 * @return {String}
 * @internal
 */
function formatName(input, noCamelCase){
	input = input.replace(/^-+/, "");
	
	// Convert kebab-case to camelCase
	if(!noCamelCase && /-/.test(input))
		input = input.toLowerCase().replace(/([a-z])-+([a-z])/g, (_, a, b) => a + b.toUpperCase());
	
	return input;
}


/**
 * Test a string against a list of patterns.
 *
 * @param {String} input
 * @param {String[]|RegExp[]} patterns
 * @return {Boolean}
 * @internal
 */
function match(input, patterns = []){
	if(!patterns || 0 === patterns.length)
		return false;
	
	input    = String(input);
	patterns = arrayify(patterns).filter(Boolean);
	for(const pattern of patterns)
		if((pattern === input && "string" === typeof pattern)
		|| (pattern instanceof RegExp) && pattern.test(input))
			return true;
	return false;
}


/**
 * Filter duplicate strings from an array.
 *
 * @param {String[]} input
 * @return {Array}
 * @internal
 */
function uniqueStrings(input){
	const output = {};
	for(let i = 0, l = input.length; i < l; ++i)
		output[input[i]] = true;
	return Object.keys(output);
}


/**
 * Parse a string as a whitespace-delimited list of options,
 * preserving quoted and escaped characters.
 *
 * @example unstringify("--foo --bar")     => ["--foo", "--bar"];
 * @example unstringify('--foo "bar baz"') => ["--foo", '"bar baz"'];
 * @param {String} input
 * @return {Object}
 * @internal
 */
function unstringify(input){
	input = String(input || "");
	const tokens   = [];
	const {length} = input;
	
	let quoteChar  = "";    // Quote-type enclosing current region
	let tokenData  = "";    // Characters currently being collected
	let isEscaped  = false; // Flag identifying an escape sequence
	
	for(let i = 0; i < length; ++i){
		const char = input[i];
		
		// Previous character was a backslash
		if(isEscaped){
			tokenData += char;
			isEscaped = false;
			continue;
		}
		
		// Whitespace: terminate token unless quoted
		if(!quoteChar && /[ \t\n]/.test(char)){
			tokenData && tokens.push(tokenData);
			tokenData = "";
			continue;
		}
		
		// Backslash: escape next character
		if("\\" === char){
			isEscaped = true;
			
			// Swallow backslash if it escapes a metacharacter
			const next = input[i + 1];
			if(quoteChar && (quoteChar === next || "\\" === next)
			|| !quoteChar && /[- \t\n\\'"`]/.test(next))
				continue;
		}
		
		// Quote marks
		else if((!quoteChar || char === quoteChar) && /['"`]/.test(char)){
			quoteChar = quoteChar === char ? "" : char;
			continue;
		}
		
		tokenData += char;
	}
	if(tokenData)
		tokens.push(tokenData);
	return tokens;
}


/**
 * Parse input using "best guess" logic. Called when no optdef is passed.
 *
 * Essentially, the following assumptions are made about input:
 *
 * - Anything beginning with at least one dash is an option name
 * - Options without arguments mean a boolean "true"
 * - Option-reading stops at "--"
 * - Anything caught between two options becomes the first option's value
 *
 * @param {Array} input
 * @param {Object} [config={}]
 * @return {Object}
 * @internal
 */
function autoOpts(input, config = {}){
	const opts = new Object(null);
	const argv = [];
	let argvEnd;
	
	// Bail early if passed a blank string
	if(!input) return opts;
	
	// Stop parsing options after a double-dash
	const stopAt = input.indexOf("--");
	if(stopAt !== -1){
		argvEnd = input.slice(stopAt + 1);
		input = input.slice(0, stopAt);
	}
	
	for(let i = 0, l = input.length; i < l; ++i){
		let name = input[i];
		
		// Appears to be an option
		if(/^-/.test(name)){
			
			// Equals sign is used, should it become the option's value?
			if(!config.ignoreEquals && /=/.test(name)){
				const split = name.split(/=/);
				name        = formatName(split[0], config.noCamelCase);
				opts[name]  = split.slice(1).join("=");
			}
			
			else{
				name = formatName(name, config.noCamelCase);
				
				// Treat a following non-option as this option's value
				const next = input[i + 1];
				if(next != null && !/^-/.test(next)){
					
					// There's another option after this one. Collect multiple non-options into an array.
					const nextOpt = input.findIndex((s, I) => I > i && /^-/.test(s));
					if(nextOpt !== -1){
						opts[name] = input.slice(i + 1, nextOpt);
						
						// There's only one value to store; don't wrap it in an array
						if(nextOpt - i < 3)
							opts[name] = opts[name][0];
						
						i = nextOpt - 1;
					}
					
					// We're at the last option. Don't touch argv; assume it's a boolean-type option
					else opts[name] = true;
				}
				
				// No arguments defined. Assume it's a boolean-type option.
				else opts[name] = true;
			}
		}
		
		// Non-option: add to argv
		else argv.push(name);
	}
	
	
	// Add any additional arguments that were found after a "--" delimiter
	if(argvEnd)
		argv.push(...argvEnd);
	
	return {
		options: opts,
		argv:    argv,
	};
}



/**
 * Extract command-line options from a list of strings.
 *
 * @param {String|Array} input
 * @param {String|Object} [optdef=null]
 * @param {Object} [config={}]
 */
function getOpts(input, optdef = null, config = {}){
	
	// Do nothing if given nothing
	if(!input || 0 === input.length)
		return {options: {}, argv: []};
	
	// Avoid modifying original array
	if(Array.isArray(input))
		input = [...input].map(String);
	
	// If called with a string, break it apart into an array
	else if("string" === typeof input)
		input = unstringify(input);
	
	
	// Take a different approach if optdefs aren't specified
	if(null === optdef || "" === optdef || false === optdef)
		return autoOpts(input, config);
	
	
	// Allow "t:h:i:s" style of getopt usage
	if("[object String]" === Object.prototype.toString.call(optdef)){
		const names = optdef.match(/[^\s:]:?/g);
		optdef = {};
		names.forEach(name => {
			optdef[`-${name.replace(/:/, "")}`] = name.length > 1 ? "<arg>" : "";
		});
	}

	// Parse settings that affect runtime option-handling
	const {
		noAliasPropagation,
		noCamelCase,
		noBundling,
		noMixedOrder,
		noUndefined,
		terminator,
		ignoreEquals,
		duplicates = "use-last",
	} = config;
	
	const shortNames = {};
	const longNames = {};
	const result = {argv: [], options: new Object(null)};

	// Define each named option. Throw an error if a duplicate is found.
	for(const name in optdef){
		const option = new Option(name, optdef[name]);
		
		for(const name of option.shortNames){
			if(undefined !== shortNames[name])
				throw new ReferenceError(`Short option "-${name}" already defined`);
			shortNames[`-${name}`] = option;
		}
		
		for(const name of option.longNames){
			if(undefined !== longNames[name])
				throw new ReferenceError(`Long option "--${name}" already defined`);
			longNames[`--${name}`] = option;
		}
	}
	
	// Pointer to the option that's currently picking up arguments
	let currentOption;
	
	
	// Manage duplicated option values
	function resolveDuplicate(option, name, value){
		switch(duplicates){
			
			// Use the first value (or set of values); discard any following duplicates
			case "use-first":
				return result.options[name];
			
			// Use the last value (or set of values); discard any preceding duplicates. Default.
			case "use-last":
			default:
				return result.options[name] = value;
			
			// Use the first/last options; treat any following/preceding duplicates as argv items respectively
			case "limit-first":
			case "limit-last":
				result.argv.push(option.prevMatchedName, ...arrayify(value));
				break;
			
			// Throw an exception
			case "error":
				const error = new TypeError(`Attempting to reassign option "${name}" with value(s) ${JSON.stringify(value)}`);
				error.affectedOption = option;
				error.affectedValue  = value;
				throw error;
			
			// Add parameters of duplicate options to the argument list of the first
			case "append":
				const oldValues = arrayify(result.options[name]);
				const newValues = arrayify(value);
				result.options[name] = oldValues.concat(newValues);
				break;
			
			// Store parameters of duplicated options in a multidimensional array
			case "stack": {
				let oldValues   = result.options[name];
				const newValues = arrayify(value);
				
				// This option hasn't been "stacked" yet
				if(!option.stacked){
					oldValues            = arrayify(oldValues);
					result.options[name] = [oldValues, newValues];
					option.stacked       = true;
				}
				
				// Already "stacked", so just shove the values onto the end of the array
				else result.options[name].push(arrayify(newValues));
				
				break;
			}
			
			// Store each duplicated value in an array using the order they appear
			case "stack-values": {
				let values = result.options[name];
				
				// First time "stacking" this option (nesting its value/s inside an array)
				if(!option.stacked){
					const stack = [];
					for(const value of arrayify(values))
						stack.push([value]);
					values = stack;
					option.stacked = true;
				}
				
				arrayify(value).forEach((v, i) => {
					
					// An array hasn't been created at this index yet,
					// because an earlier option wasn't given enough parameters.
					if(undefined === values[i])
						values[i] = Array(values[0].length - 1);
					
					values[i].push(v);
				});
				
				result.options[name] = values;
				break;
			}
		}
	}
	
	
	// Assign an option's parsed value to the result's `.options` property
	function setValue(option, value){
		
		// Assign the value only to the option name it matched
		if(noAliasPropagation){
			let name = option.lastMatchedName;
			
			// Special alternative:
			// In lieu of using the matched option name, use the first --long-name only
			if("first-only" === noAliasPropagation)
				name = option.longNames[0] || option.shortNames[0];
			
			// camelCase?
			name = formatName(name, noCamelCase);
			
			// This option's already been set before
			if(result.options[name])
				resolveDuplicate(option, name, value);
			
			else result.options[name] = value;
		}
		
		// Copy across every alias this option's recognised by
		else{
			const {names} = option;
			
			for(let name of names){
				
				// Decide whether to camelCase this option name
				name = formatName(name, noCamelCase);
				
				// Ascertain if this option's being duplicated
				if(result.options[name])
					resolveDuplicate(option, name, value);
				
				result.options[name] = value;
			}
		}
	}
	
	
	// Push whatever we've currently collected for this option and reset pointer
	function wrapItUp(){
		let optValue = currentOption.values;
		
		// Don't store solitary values in an array. Store them directly as strings
		if(1 === currentOption.arity && !currentOption.variadic)
			optValue = optValue[0];

		setValue(currentOption, optValue);
		currentOption.values = [];
		currentOption = null;
	}
	
	
	// Reverse the order of an argument list, keeping options and their parameter lists intact
	function flip(input){
		input = input.reverse();
		
		// Flip any options back into the right order
		for(let i = 0, l = input.length; i < l; ++i){
			const arg = input[i];
			const opt = shortNames[arg] || longNames[arg];
			
			if(opt){
				const from    = Math.max(0, i - opt.arity);
				const to      = i + 1;
				const extract = input.slice(from, to).reverse();
				input.splice(from, extract.length, ...extract);
			}
		}
		
		return input;
	}
	
	
	// Tackle bundling. Ensure there's at least one option with a short name to work with.
	const nameKeys = Object.keys(shortNames);
	let bundleMatch, bundlePatterns, niladicArgs;
	
	if(!noBundling && nameKeys.length){
		bundlePatterns  = uniqueStrings(nameKeys.map(n => shortNames[n].bundlePattern)).join("|");
		bundleMatch     = new RegExp(`^-(${bundlePatterns})+`, "g");
		niladicArgs     = uniqueStrings(nameKeys.filter(n => !shortNames[n].arity).map(n => shortNames[n].bundlePattern)).join("|");
		niladicArgs     = new RegExp(`^(-(?:${niladicArgs})+)((?!${bundlePatterns})\\S+)`);
		bundlePatterns  = new RegExp(bundlePatterns, "g");
	}
	
	
	// Is pre-processing of the argument list necessary?
	if(!ignoreEquals || bundleMatch){
		
		// Limit equals-sign expansion to items that begin with recognised option names
		const legalNames = new RegExp(`^(?:${ Object.keys(longNames).join("|") })=`);
		
		for(let i = 0, l = input.length; i < l; ++i){
			let arg = input[i];
			
			// We have bundling in use
			if(bundleMatch){
				bundleMatch.lastIndex = 0;
				
				// Expand bundled option clusters ("-mvl2" -> "-m -v -l 2")
				if(bundleMatch.test(arg)){
					
					// Break off arguments attached to niladic options
					const niladicMatch = arg.match(niladicArgs);
					if(niladicMatch){
						niladicArgs.lastIndex = 0;
						arg = niladicMatch[1];
						input.splice(i + 1, 0, niladicMatch[2]);
						l = input.length;
					}
					
					const segments = [].concat(...arg.match(bundlePatterns).map(m => {
						const option = shortNames[`-${m[0]}`];
						const result = [`-${m[0]}`];
						if(!option.arity) return result;
						result.push(...m.match(new RegExp(option.bundlePattern)).slice(1).filter(i => i));
						return result;
					}));
					input.splice(i, 1, ...segments);
					l =  input.length;
					i += segments.length - 1;
					continue;
				}
			}
			
			// Expand "--option=value" sequences to become "--option value"
			if(legalNames.test(arg)){
				const match = arg.match(/^([^=]+)=(.+)$/);
				input.splice(i, 1, match[1], match[2]);
				l =  input.length;
				i += 1;
			}
		}
	}
	
	
	// If we're handling duplicate options with "limit-last", flip the input order
	if("limit-last" === duplicates)
		input = flip(input);
	
	// Start processing the arguments we were given to handle
	for(let i = 0, l = input.length; i < l; ++i){
		const arg = input[i];
		const opt = shortNames[arg] || longNames[arg];
		
		// This argument matches a recognised option name
		if(opt){
			
			// Record the name given on command-line that matched the option
			opt.lastMatchedName = arg;
			
			// Did we have an existing option that was collecting values?
			if(currentOption) wrapItUp();
			
			
			// Option takes at least one argument
			if(opt.arity)
				currentOption = opt;
			
			// This option takes no arguments, so just assign it a value of "true"
			else setValue(opt, true);
			
			
			// Store an additional back-reference to the current option's name
			opt.prevMatchedName = arg;
		}
		
		else{
			const isTerminator = match(arg, terminator);
			const keepRest = () => result.argv.push(...input.slice(i + 1));
			
			// A previous option is still collecting arguments
			if(currentOption && currentOption.canCollect && !isTerminator)
				currentOption.values.push(arg);
			
			// Not associated with an option
			else{
				currentOption && wrapItUp();
				
				// Terminate option parsing?
				if(isTerminator){
					keepRest();
					break;
				}
				
				// Raise an exception if unrecognised switches are considered an error
				if(noUndefined && /^-./.test(arg)){
					let error = noUndefined;
					
					// Prepare an error object to be thrown in the user's direction
					switch(typeof noUndefined){
						case "function": error = error(arg); break;
						case "boolean":  error = 'Unknown option: "%s"'; // Fall-through
						case "string":   error = new TypeError(error.replace("%s", arg));
					}
					throw error;
				}
				
				result.argv.push(arg);
				
				// Finish processing if mixed-order is disabled
				if(noMixedOrder){
					keepRest();
					break;
				}
			}
		}
	}
	
	
	// Ended abruptly?
	if(currentOption) wrapItUp();
	
	
	// Check if we need to flip the returned .argv array back into the right order again
	if("limit-last" === duplicates)
		result.argv = flip(result.argv);
		
	return result;
}


if("undefined" !== typeof module.exports)
	module.exports = getOpts;


/***/ }),

/***/ "./node_modules/immutable/dist/immutable.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/immutable/dist/immutable.es.js ***!
  \*****************************************************/
/*! exports provided: default, version, Collection, Iterable, Seq, Map, OrderedMap, List, Stack, Set, OrderedSet, Record, Range, Repeat, is, fromJS, hash, isImmutable, isCollection, isKeyed, isIndexed, isAssociative, isOrdered, isValueObject, get, getIn, has, hasIn, merge, mergeDeep, mergeWith, mergeDeepWith, remove, removeIn, set, setIn, update, updateIn */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_31097__) {

"use strict";
__nested_webpack_require_31097__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "Iterable", function() { return Iterable; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "Seq", function() { return Seq; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "OrderedMap", function() { return OrderedMap; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "OrderedSet", function() { return OrderedSet; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "Record", function() { return Record; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "Repeat", function() { return Repeat; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "fromJS", function() { return fromJS; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "isImmutable", function() { return isImmutable; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "isCollection", function() { return isCollection; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "isKeyed", function() { return isKeyed; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "isIndexed", function() { return isIndexed; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "isAssociative", function() { return isAssociative; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "isOrdered", function() { return isOrdered; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "isValueObject", function() { return isValueObject; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "hasIn", function() { return hasIn; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "merge", function() { return merge$1; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "mergeWith", function() { return mergeWith$1; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "mergeDeepWith", function() { return mergeDeepWith; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "removeIn", function() { return removeIn; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __nested_webpack_require_31097__.d(__webpack_exports__, "updateIn", function() { return updateIn; });
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Used for setting prototype methods that IE8 chokes on.
var DELETE = 'delete';

// Constants describing the size of trie nodes.
var SHIFT = 5; // Resulted in best performance after ______?
var SIZE = 1 << SHIFT;
var MASK = SIZE - 1;

// A consistent shared value representing "not set" which equals nothing other
// than itself, and nothing that could be provided externally.
var NOT_SET = {};

// Boolean references, Rough equivalent of `bool &`.
function MakeRef() {
  return { value: false };
}

function SetRef(ref) {
  if (ref) {
    ref.value = true;
  }
}

// A function which returns a value representing an "owner" for transient writes
// to tries. The return value will only ever equal itself, and will not equal
// the return of any subsequent call of this function.
function OwnerID() {}

function ensureSize(iter) {
  if (iter.size === undefined) {
    iter.size = iter.__iterate(returnTrue);
  }
  return iter.size;
}

function wrapIndex(iter, index) {
  // This implements "is array index" which the ECMAString spec defines as:
  //
  //     A String property name P is an array index if and only if
  //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
  //     to 2^32−1.
  //
  // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
  if (typeof index !== 'number') {
    var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
    if ('' + uint32Index !== index || uint32Index === 4294967295) {
      return NaN;
    }
    index = uint32Index;
  }
  return index < 0 ? ensureSize(iter) + index : index;
}

function returnTrue() {
  return true;
}

function wholeSlice(begin, end, size) {
  return (
    ((begin === 0 && !isNeg(begin)) ||
      (size !== undefined && begin <= -size)) &&
    (end === undefined || (size !== undefined && end >= size))
  );
}

function resolveBegin(begin, size) {
  return resolveIndex(begin, size, 0);
}

function resolveEnd(end, size) {
  return resolveIndex(end, size, size);
}

function resolveIndex(index, size, defaultIndex) {
  // Sanitize indices using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  return index === undefined
    ? defaultIndex
    : isNeg(index)
      ? size === Infinity
        ? size
        : Math.max(0, size + index) | 0
      : size === undefined || size === index
        ? index
        : Math.min(size, index) | 0;
}

function isNeg(value) {
  // Account for -0 which is negative, but not less than 0.
  return value < 0 || (value === 0 && 1 / value === -Infinity);
}

// Note: value is unchanged to not break immutable-devtools.
var IS_COLLECTION_SYMBOL = '@@__IMMUTABLE_ITERABLE__@@';

function isCollection(maybeCollection) {
  return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL]);
}

var IS_KEYED_SYMBOL = '@@__IMMUTABLE_KEYED__@@';

function isKeyed(maybeKeyed) {
  return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL]);
}

var IS_INDEXED_SYMBOL = '@@__IMMUTABLE_INDEXED__@@';

function isIndexed(maybeIndexed) {
  return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL]);
}

function isAssociative(maybeAssociative) {
  return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
}

var Collection = function Collection(value) {
  return isCollection(value) ? value : Seq(value);
};

var KeyedCollection = /*@__PURE__*/(function (Collection) {
  function KeyedCollection(value) {
    return isKeyed(value) ? value : KeyedSeq(value);
  }

  if ( Collection ) KeyedCollection.__proto__ = Collection;
  KeyedCollection.prototype = Object.create( Collection && Collection.prototype );
  KeyedCollection.prototype.constructor = KeyedCollection;

  return KeyedCollection;
}(Collection));

var IndexedCollection = /*@__PURE__*/(function (Collection) {
  function IndexedCollection(value) {
    return isIndexed(value) ? value : IndexedSeq(value);
  }

  if ( Collection ) IndexedCollection.__proto__ = Collection;
  IndexedCollection.prototype = Object.create( Collection && Collection.prototype );
  IndexedCollection.prototype.constructor = IndexedCollection;

  return IndexedCollection;
}(Collection));

var SetCollection = /*@__PURE__*/(function (Collection) {
  function SetCollection(value) {
    return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
  }

  if ( Collection ) SetCollection.__proto__ = Collection;
  SetCollection.prototype = Object.create( Collection && Collection.prototype );
  SetCollection.prototype.constructor = SetCollection;

  return SetCollection;
}(Collection));

Collection.Keyed = KeyedCollection;
Collection.Indexed = IndexedCollection;
Collection.Set = SetCollection;

var IS_SEQ_SYMBOL = '@@__IMMUTABLE_SEQ__@@';

function isSeq(maybeSeq) {
  return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL]);
}

var IS_RECORD_SYMBOL = '@@__IMMUTABLE_RECORD__@@';

function isRecord(maybeRecord) {
  return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL]);
}

function isImmutable(maybeImmutable) {
  return isCollection(maybeImmutable) || isRecord(maybeImmutable);
}

var IS_ORDERED_SYMBOL = '@@__IMMUTABLE_ORDERED__@@';

function isOrdered(maybeOrdered) {
  return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL]);
}

var ITERATE_KEYS = 0;
var ITERATE_VALUES = 1;
var ITERATE_ENTRIES = 2;

var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;

var Iterator = function Iterator(next) {
  this.next = next;
};

Iterator.prototype.toString = function toString () {
  return '[Iterator]';
};

Iterator.KEYS = ITERATE_KEYS;
Iterator.VALUES = ITERATE_VALUES;
Iterator.ENTRIES = ITERATE_ENTRIES;

Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
  return this.toString();
};
Iterator.prototype[ITERATOR_SYMBOL] = function() {
  return this;
};

function iteratorValue(type, k, v, iteratorResult) {
  var value = type === 0 ? k : type === 1 ? v : [k, v];
  iteratorResult
    ? (iteratorResult.value = value)
    : (iteratorResult = {
        value: value,
        done: false,
      });
  return iteratorResult;
}

function iteratorDone() {
  return { value: undefined, done: true };
}

function hasIterator(maybeIterable) {
  return !!getIteratorFn(maybeIterable);
}

function isIterator(maybeIterator) {
  return maybeIterator && typeof maybeIterator.next === 'function';
}

function getIterator(iterable) {
  var iteratorFn = getIteratorFn(iterable);
  return iteratorFn && iteratorFn.call(iterable);
}

function getIteratorFn(iterable) {
  var iteratorFn =
    iterable &&
    ((REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function isArrayLike(value) {
  if (Array.isArray(value) || typeof value === 'string') {
    return true;
  }

  return (
    value &&
    typeof value === 'object' &&
    Number.isInteger(value.length) &&
    value.length >= 0 &&
    (value.length === 0
      ? // Only {length: 0} is considered Array-like.
        Object.keys(value).length === 1
      : // An object is only Array-like if it has a property where the last value
        // in the array-like may be found (which could be undefined).
        value.hasOwnProperty(value.length - 1))
  );
}

var Seq = /*@__PURE__*/(function (Collection$$1) {
  function Seq(value) {
    return value === null || value === undefined
      ? emptySequence()
      : isImmutable(value)
        ? value.toSeq()
        : seqFromValue(value);
  }

  if ( Collection$$1 ) Seq.__proto__ = Collection$$1;
  Seq.prototype = Object.create( Collection$$1 && Collection$$1.prototype );
  Seq.prototype.constructor = Seq;

  Seq.prototype.toSeq = function toSeq () {
    return this;
  };

  Seq.prototype.toString = function toString () {
    return this.__toString('Seq {', '}');
  };

  Seq.prototype.cacheResult = function cacheResult () {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }
    return this;
  };

  // abstract __iterateUncached(fn, reverse)

  Seq.prototype.__iterate = function __iterate (fn, reverse) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      while (i !== size) {
        var entry = cache[reverse ? size - ++i : i++];
        if (fn(entry[1], entry[0], this) === false) {
          break;
        }
      }
      return i;
    }
    return this.__iterateUncached(fn, reverse);
  };

  // abstract __iteratorUncached(type, reverse)

  Seq.prototype.__iterator = function __iterator (type, reverse) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      return new Iterator(function () {
        if (i === size) {
          return iteratorDone();
        }
        var entry = cache[reverse ? size - ++i : i++];
        return iteratorValue(type, entry[0], entry[1]);
      });
    }
    return this.__iteratorUncached(type, reverse);
  };

  return Seq;
}(Collection));

var KeyedSeq = /*@__PURE__*/(function (Seq) {
  function KeyedSeq(value) {
    return value === null || value === undefined
      ? emptySequence().toKeyedSeq()
      : isCollection(value)
        ? isKeyed(value)
          ? value.toSeq()
          : value.fromEntrySeq()
        : isRecord(value)
          ? value.toSeq()
          : keyedSeqFromValue(value);
  }

  if ( Seq ) KeyedSeq.__proto__ = Seq;
  KeyedSeq.prototype = Object.create( Seq && Seq.prototype );
  KeyedSeq.prototype.constructor = KeyedSeq;

  KeyedSeq.prototype.toKeyedSeq = function toKeyedSeq () {
    return this;
  };

  return KeyedSeq;
}(Seq));

var IndexedSeq = /*@__PURE__*/(function (Seq) {
  function IndexedSeq(value) {
    return value === null || value === undefined
      ? emptySequence()
      : isCollection(value)
        ? isKeyed(value)
          ? value.entrySeq()
          : value.toIndexedSeq()
        : isRecord(value)
          ? value.toSeq().entrySeq()
          : indexedSeqFromValue(value);
  }

  if ( Seq ) IndexedSeq.__proto__ = Seq;
  IndexedSeq.prototype = Object.create( Seq && Seq.prototype );
  IndexedSeq.prototype.constructor = IndexedSeq;

  IndexedSeq.of = function of (/*...values*/) {
    return IndexedSeq(arguments);
  };

  IndexedSeq.prototype.toIndexedSeq = function toIndexedSeq () {
    return this;
  };

  IndexedSeq.prototype.toString = function toString () {
    return this.__toString('Seq [', ']');
  };

  return IndexedSeq;
}(Seq));

var SetSeq = /*@__PURE__*/(function (Seq) {
  function SetSeq(value) {
    return (isCollection(value) && !isAssociative(value)
      ? value
      : IndexedSeq(value)
    ).toSetSeq();
  }

  if ( Seq ) SetSeq.__proto__ = Seq;
  SetSeq.prototype = Object.create( Seq && Seq.prototype );
  SetSeq.prototype.constructor = SetSeq;

  SetSeq.of = function of (/*...values*/) {
    return SetSeq(arguments);
  };

  SetSeq.prototype.toSetSeq = function toSetSeq () {
    return this;
  };

  return SetSeq;
}(Seq));

Seq.isSeq = isSeq;
Seq.Keyed = KeyedSeq;
Seq.Set = SetSeq;
Seq.Indexed = IndexedSeq;

Seq.prototype[IS_SEQ_SYMBOL] = true;

// #pragma Root Sequences

var ArraySeq = /*@__PURE__*/(function (IndexedSeq) {
  function ArraySeq(array) {
    this._array = array;
    this.size = array.length;
  }

  if ( IndexedSeq ) ArraySeq.__proto__ = IndexedSeq;
  ArraySeq.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  ArraySeq.prototype.constructor = ArraySeq;

  ArraySeq.prototype.get = function get (index, notSetValue) {
    return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
  };

  ArraySeq.prototype.__iterate = function __iterate (fn, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    while (i !== size) {
      var ii = reverse ? size - ++i : i++;
      if (fn(array[ii], ii, this) === false) {
        break;
      }
    }
    return i;
  };

  ArraySeq.prototype.__iterator = function __iterator (type, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var ii = reverse ? size - ++i : i++;
      return iteratorValue(type, ii, array[ii]);
    });
  };

  return ArraySeq;
}(IndexedSeq));

var ObjectSeq = /*@__PURE__*/(function (KeyedSeq) {
  function ObjectSeq(object) {
    var keys = Object.keys(object);
    this._object = object;
    this._keys = keys;
    this.size = keys.length;
  }

  if ( KeyedSeq ) ObjectSeq.__proto__ = KeyedSeq;
  ObjectSeq.prototype = Object.create( KeyedSeq && KeyedSeq.prototype );
  ObjectSeq.prototype.constructor = ObjectSeq;

  ObjectSeq.prototype.get = function get (key, notSetValue) {
    if (notSetValue !== undefined && !this.has(key)) {
      return notSetValue;
    }
    return this._object[key];
  };

  ObjectSeq.prototype.has = function has (key) {
    return hasOwnProperty.call(this._object, key);
  };

  ObjectSeq.prototype.__iterate = function __iterate (fn, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    while (i !== size) {
      var key = keys[reverse ? size - ++i : i++];
      if (fn(object[key], key, this) === false) {
        break;
      }
    }
    return i;
  };

  ObjectSeq.prototype.__iterator = function __iterator (type, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var key = keys[reverse ? size - ++i : i++];
      return iteratorValue(type, key, object[key]);
    });
  };

  return ObjectSeq;
}(KeyedSeq));
ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;

var CollectionSeq = /*@__PURE__*/(function (IndexedSeq) {
  function CollectionSeq(collection) {
    this._collection = collection;
    this.size = collection.length || collection.size;
  }

  if ( IndexedSeq ) CollectionSeq.__proto__ = IndexedSeq;
  CollectionSeq.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  CollectionSeq.prototype.constructor = CollectionSeq;

  CollectionSeq.prototype.__iterateUncached = function __iterateUncached (fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    var iterations = 0;
    if (isIterator(iterator)) {
      var step;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
    }
    return iterations;
  };

  CollectionSeq.prototype.__iteratorUncached = function __iteratorUncached (type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    if (!isIterator(iterator)) {
      return new Iterator(iteratorDone);
    }
    var iterations = 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value);
    });
  };

  return CollectionSeq;
}(IndexedSeq));

// # pragma Helper functions

var EMPTY_SEQ;

function emptySequence() {
  return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
}

function keyedSeqFromValue(value) {
  var seq = Array.isArray(value)
    ? new ArraySeq(value)
    : hasIterator(value)
      ? new CollectionSeq(value)
      : undefined;
  if (seq) {
    return seq.fromEntrySeq();
  }
  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    'Expected Array or collection object of [k, v] entries, or keyed object: ' +
      value
  );
}

function indexedSeqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  throw new TypeError(
    'Expected Array or collection object of values: ' + value
  );
}

function seqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    'Expected Array or collection object of values, or keyed object: ' + value
  );
}

function maybeIndexedSeqFromValue(value) {
  return isArrayLike(value)
    ? new ArraySeq(value)
    : hasIterator(value)
      ? new CollectionSeq(value)
      : undefined;
}

var IS_MAP_SYMBOL = '@@__IMMUTABLE_MAP__@@';

function isMap(maybeMap) {
  return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL]);
}

function isOrderedMap(maybeOrderedMap) {
  return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
}

function isValueObject(maybeValue) {
  return Boolean(
    maybeValue &&
      typeof maybeValue.equals === 'function' &&
      typeof maybeValue.hashCode === 'function'
  );
}

/**
 * An extension of the "same-value" algorithm as [described for use by ES6 Map
 * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
 *
 * NaN is considered the same as NaN, however -0 and 0 are considered the same
 * value, which is different from the algorithm described by
 * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
 *
 * This is extended further to allow Objects to describe the values they
 * represent, by way of `valueOf` or `equals` (and `hashCode`).
 *
 * Note: because of this extension, the key equality of Immutable.Map and the
 * value equality of Immutable.Set will differ from ES6 Map and Set.
 *
 * ### Defining custom values
 *
 * The easiest way to describe the value an object represents is by implementing
 * `valueOf`. For example, `Date` represents a value by returning a unix
 * timestamp for `valueOf`:
 *
 *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
 *     var date2 = new Date(1234567890000);
 *     date1.valueOf(); // 1234567890000
 *     assert( date1 !== date2 );
 *     assert( Immutable.is( date1, date2 ) );
 *
 * Note: overriding `valueOf` may have other implications if you use this object
 * where JavaScript expects a primitive, such as implicit string coercion.
 *
 * For more complex types, especially collections, implementing `valueOf` may
 * not be performant. An alternative is to implement `equals` and `hashCode`.
 *
 * `equals` takes another object, presumably of similar type, and returns true
 * if it is equal. Equality is symmetrical, so the same result should be
 * returned if this and the argument are flipped.
 *
 *     assert( a.equals(b) === b.equals(a) );
 *
 * `hashCode` returns a 32bit integer number representing the object which will
 * be used to determine how to store the value object in a Map or Set. You must
 * provide both or neither methods, one must not exist without the other.
 *
 * Also, an important relationship between these methods must be upheld: if two
 * values are equal, they *must* return the same hashCode. If the values are not
 * equal, they might have the same hashCode; this is called a hash collision,
 * and while undesirable for performance reasons, it is acceptable.
 *
 *     if (a.equals(b)) {
 *       assert( a.hashCode() === b.hashCode() );
 *     }
 *
 * All Immutable collections are Value Objects: they implement `equals()`
 * and `hashCode()`.
 */
function is(valueA, valueB) {
  if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
    return true;
  }
  if (!valueA || !valueB) {
    return false;
  }
  if (
    typeof valueA.valueOf === 'function' &&
    typeof valueB.valueOf === 'function'
  ) {
    valueA = valueA.valueOf();
    valueB = valueB.valueOf();
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
  }
  return !!(
    isValueObject(valueA) &&
    isValueObject(valueB) &&
    valueA.equals(valueB)
  );
}

var imul =
  typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2
    ? Math.imul
    : function imul(a, b) {
        a |= 0; // int
        b |= 0; // int
        var c = a & 0xffff;
        var d = b & 0xffff;
        // Shift by 0 fixes the sign on the high part.
        return (c * d + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0)) | 0; // int
      };

// v8 has an optimization for storing 31-bit signed numbers.
// Values which have either 00 or 11 as the high order bits qualify.
// This function drops the highest order bit in a signed number, maintaining
// the sign bit.
function smi(i32) {
  return ((i32 >>> 1) & 0x40000000) | (i32 & 0xbfffffff);
}

var defaultValueOf = Object.prototype.valueOf;

function hash(o) {
  switch (typeof o) {
    case 'boolean':
      // The hash values for built-in constants are a 1 value for each 5-byte
      // shift region expect for the first, which encodes the value. This
      // reduces the odds of a hash collision for these common values.
      return o ? 0x42108421 : 0x42108420;
    case 'number':
      return hashNumber(o);
    case 'string':
      return o.length > STRING_HASH_CACHE_MIN_STRLEN
        ? cachedHashString(o)
        : hashString(o);
    case 'object':
    case 'function':
      if (o === null) {
        return 0x42108422;
      }
      if (typeof o.hashCode === 'function') {
        // Drop any high bits from accidentally long hash codes.
        return smi(o.hashCode(o));
      }
      if (o.valueOf !== defaultValueOf && typeof o.valueOf === 'function') {
        o = o.valueOf(o);
      }
      return hashJSObj(o);
    case 'undefined':
      return 0x42108423;
    default:
      if (typeof o.toString === 'function') {
        return hashString(o.toString());
      }
      throw new Error('Value type ' + typeof o + ' cannot be hashed.');
  }
}

// Compress arbitrarily large numbers into smi hashes.
function hashNumber(n) {
  if (n !== n || n === Infinity) {
    return 0;
  }
  var hash = n | 0;
  if (hash !== n) {
    hash ^= n * 0xffffffff;
  }
  while (n > 0xffffffff) {
    n /= 0xffffffff;
    hash ^= n;
  }
  return smi(hash);
}

function cachedHashString(string) {
  var hashed = stringHashCache[string];
  if (hashed === undefined) {
    hashed = hashString(string);
    if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
      STRING_HASH_CACHE_SIZE = 0;
      stringHashCache = {};
    }
    STRING_HASH_CACHE_SIZE++;
    stringHashCache[string] = hashed;
  }
  return hashed;
}

// http://jsperf.com/hashing-strings
function hashString(string) {
  // This is the hash from JVM
  // The hash code for a string is computed as
  // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
  // where s[i] is the ith character of the string and n is the length of
  // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
  // (exclusive) by dropping high bits.
  var hashed = 0;
  for (var ii = 0; ii < string.length; ii++) {
    hashed = (31 * hashed + string.charCodeAt(ii)) | 0;
  }
  return smi(hashed);
}

function hashJSObj(obj) {
  var hashed;
  if (usingWeakMap) {
    hashed = weakMap.get(obj);
    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = obj[UID_HASH_KEY];
  if (hashed !== undefined) {
    return hashed;
  }

  if (!canDefineProperty) {
    hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
    if (hashed !== undefined) {
      return hashed;
    }

    hashed = getIENodeHash(obj);
    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = ++objHashUID;
  if (objHashUID & 0x40000000) {
    objHashUID = 0;
  }

  if (usingWeakMap) {
    weakMap.set(obj, hashed);
  } else if (isExtensible !== undefined && isExtensible(obj) === false) {
    throw new Error('Non-extensible objects are not allowed as keys.');
  } else if (canDefineProperty) {
    Object.defineProperty(obj, UID_HASH_KEY, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: hashed,
    });
  } else if (
    obj.propertyIsEnumerable !== undefined &&
    obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable
  ) {
    // Since we can't define a non-enumerable property on the object
    // we'll hijack one of the less-used non-enumerable properties to
    // save our hash on it. Since this is a function it will not show up in
    // `JSON.stringify` which is what we want.
    obj.propertyIsEnumerable = function() {
      return this.constructor.prototype.propertyIsEnumerable.apply(
        this,
        arguments
      );
    };
    obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
  } else if (obj.nodeType !== undefined) {
    // At this point we couldn't get the IE `uniqueID` to use as a hash
    // and we couldn't use a non-enumerable property to exploit the
    // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
    // itself.
    obj[UID_HASH_KEY] = hashed;
  } else {
    throw new Error('Unable to set a non-enumerable property on object.');
  }

  return hashed;
}

// Get references to ES5 object methods.
var isExtensible = Object.isExtensible;

// True if Object.defineProperty works as expected. IE8 fails this test.
var canDefineProperty = (function() {
  try {
    Object.defineProperty({}, '@', {});
    return true;
  } catch (e) {
    return false;
  }
})();

// IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
// and avoid memory leaks from the IE cloneNode bug.
function getIENodeHash(node) {
  if (node && node.nodeType > 0) {
    switch (node.nodeType) {
      case 1: // Element
        return node.uniqueID;
      case 9: // Document
        return node.documentElement && node.documentElement.uniqueID;
    }
  }
}

// If possible, use a WeakMap.
var usingWeakMap = typeof WeakMap === 'function';
var weakMap;
if (usingWeakMap) {
  weakMap = new WeakMap();
}

var objHashUID = 0;

var UID_HASH_KEY = '__immutablehash__';
if (typeof Symbol === 'function') {
  UID_HASH_KEY = Symbol(UID_HASH_KEY);
}

var STRING_HASH_CACHE_MIN_STRLEN = 16;
var STRING_HASH_CACHE_MAX_SIZE = 255;
var STRING_HASH_CACHE_SIZE = 0;
var stringHashCache = {};

var ToKeyedSequence = /*@__PURE__*/(function (KeyedSeq$$1) {
  function ToKeyedSequence(indexed, useKeys) {
    this._iter = indexed;
    this._useKeys = useKeys;
    this.size = indexed.size;
  }

  if ( KeyedSeq$$1 ) ToKeyedSequence.__proto__ = KeyedSeq$$1;
  ToKeyedSequence.prototype = Object.create( KeyedSeq$$1 && KeyedSeq$$1.prototype );
  ToKeyedSequence.prototype.constructor = ToKeyedSequence;

  ToKeyedSequence.prototype.get = function get (key, notSetValue) {
    return this._iter.get(key, notSetValue);
  };

  ToKeyedSequence.prototype.has = function has (key) {
    return this._iter.has(key);
  };

  ToKeyedSequence.prototype.valueSeq = function valueSeq () {
    return this._iter.valueSeq();
  };

  ToKeyedSequence.prototype.reverse = function reverse () {
    var this$1 = this;

    var reversedSequence = reverseFactory(this, true);
    if (!this._useKeys) {
      reversedSequence.valueSeq = function () { return this$1._iter.toSeq().reverse(); };
    }
    return reversedSequence;
  };

  ToKeyedSequence.prototype.map = function map (mapper, context) {
    var this$1 = this;

    var mappedSequence = mapFactory(this, mapper, context);
    if (!this._useKeys) {
      mappedSequence.valueSeq = function () { return this$1._iter.toSeq().map(mapper, context); };
    }
    return mappedSequence;
  };

  ToKeyedSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (v, k) { return fn(v, k, this$1); }, reverse);
  };

  ToKeyedSequence.prototype.__iterator = function __iterator (type, reverse) {
    return this._iter.__iterator(type, reverse);
  };

  return ToKeyedSequence;
}(KeyedSeq));
ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;

var ToIndexedSequence = /*@__PURE__*/(function (IndexedSeq$$1) {
  function ToIndexedSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if ( IndexedSeq$$1 ) ToIndexedSequence.__proto__ = IndexedSeq$$1;
  ToIndexedSequence.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  ToIndexedSequence.prototype.constructor = ToIndexedSequence;

  ToIndexedSequence.prototype.includes = function includes (value) {
    return this._iter.includes(value);
  };

  ToIndexedSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var i = 0;
    reverse && ensureSize(this);
    return this._iter.__iterate(
      function (v) { return fn(v, reverse ? this$1.size - ++i : i++, this$1); },
      reverse
    );
  };

  ToIndexedSequence.prototype.__iterator = function __iterator (type, reverse) {
    var this$1 = this;

    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    var i = 0;
    reverse && ensureSize(this);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done
        ? step
        : iteratorValue(
            type,
            reverse ? this$1.size - ++i : i++,
            step.value,
            step
          );
    });
  };

  return ToIndexedSequence;
}(IndexedSeq));

var ToSetSequence = /*@__PURE__*/(function (SetSeq$$1) {
  function ToSetSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if ( SetSeq$$1 ) ToSetSequence.__proto__ = SetSeq$$1;
  ToSetSequence.prototype = Object.create( SetSeq$$1 && SetSeq$$1.prototype );
  ToSetSequence.prototype.constructor = ToSetSequence;

  ToSetSequence.prototype.has = function has (key) {
    return this._iter.includes(key);
  };

  ToSetSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (v) { return fn(v, v, this$1); }, reverse);
  };

  ToSetSequence.prototype.__iterator = function __iterator (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done
        ? step
        : iteratorValue(type, step.value, step.value, step);
    });
  };

  return ToSetSequence;
}(SetSeq));

var FromEntriesSequence = /*@__PURE__*/(function (KeyedSeq$$1) {
  function FromEntriesSequence(entries) {
    this._iter = entries;
    this.size = entries.size;
  }

  if ( KeyedSeq$$1 ) FromEntriesSequence.__proto__ = KeyedSeq$$1;
  FromEntriesSequence.prototype = Object.create( KeyedSeq$$1 && KeyedSeq$$1.prototype );
  FromEntriesSequence.prototype.constructor = FromEntriesSequence;

  FromEntriesSequence.prototype.entrySeq = function entrySeq () {
    return this._iter.toSeq();
  };

  FromEntriesSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (entry) {
      // Check if entry exists first so array access doesn't throw for holes
      // in the parent iteration.
      if (entry) {
        validateEntry(entry);
        var indexedCollection = isCollection(entry);
        return fn(
          indexedCollection ? entry.get(1) : entry[1],
          indexedCollection ? entry.get(0) : entry[0],
          this$1
        );
      }
    }, reverse);
  };

  FromEntriesSequence.prototype.__iterator = function __iterator (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedCollection = isCollection(entry);
          return iteratorValue(
            type,
            indexedCollection ? entry.get(0) : entry[0],
            indexedCollection ? entry.get(1) : entry[1],
            step
          );
        }
      }
    });
  };

  return FromEntriesSequence;
}(KeyedSeq));

ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;

function flipFactory(collection) {
  var flipSequence = makeSequence(collection);
  flipSequence._iter = collection;
  flipSequence.size = collection.size;
  flipSequence.flip = function () { return collection; };
  flipSequence.reverse = function() {
    var reversedSequence = collection.reverse.apply(this); // super.reverse()
    reversedSequence.flip = function () { return collection.reverse(); };
    return reversedSequence;
  };
  flipSequence.has = function (key) { return collection.includes(key); };
  flipSequence.includes = function (key) { return collection.has(key); };
  flipSequence.cacheResult = cacheResultThrough;
  flipSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    return collection.__iterate(function (v, k) { return fn(k, v, this$1) !== false; }, reverse);
  };
  flipSequence.__iteratorUncached = function(type, reverse) {
    if (type === ITERATE_ENTRIES) {
      var iterator = collection.__iterator(type, reverse);
      return new Iterator(function () {
        var step = iterator.next();
        if (!step.done) {
          var k = step.value[0];
          step.value[0] = step.value[1];
          step.value[1] = k;
        }
        return step;
      });
    }
    return collection.__iterator(
      type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
      reverse
    );
  };
  return flipSequence;
}

function mapFactory(collection, mapper, context) {
  var mappedSequence = makeSequence(collection);
  mappedSequence.size = collection.size;
  mappedSequence.has = function (key) { return collection.has(key); };
  mappedSequence.get = function (key, notSetValue) {
    var v = collection.get(key, NOT_SET);
    return v === NOT_SET
      ? notSetValue
      : mapper.call(context, v, key, collection);
  };
  mappedSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    return collection.__iterate(
      function (v, k, c) { return fn(mapper.call(context, v, k, c), k, this$1) !== false; },
      reverse
    );
  };
  mappedSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    return new Iterator(function () {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var key = entry[0];
      return iteratorValue(
        type,
        key,
        mapper.call(context, entry[1], key, collection),
        step
      );
    });
  };
  return mappedSequence;
}

function reverseFactory(collection, useKeys) {
  var this$1 = this;

  var reversedSequence = makeSequence(collection);
  reversedSequence._iter = collection;
  reversedSequence.size = collection.size;
  reversedSequence.reverse = function () { return collection; };
  if (collection.flip) {
    reversedSequence.flip = function() {
      var flipSequence = flipFactory(collection);
      flipSequence.reverse = function () { return collection.flip(); };
      return flipSequence;
    };
  }
  reversedSequence.get = function (key, notSetValue) { return collection.get(useKeys ? key : -1 - key, notSetValue); };
  reversedSequence.has = function (key) { return collection.has(useKeys ? key : -1 - key); };
  reversedSequence.includes = function (value) { return collection.includes(value); };
  reversedSequence.cacheResult = cacheResultThrough;
  reversedSequence.__iterate = function(fn, reverse) {
    var this$1 = this;

    var i = 0;
    reverse && ensureSize(collection);
    return collection.__iterate(
      function (v, k) { return fn(v, useKeys ? k : reverse ? this$1.size - ++i : i++, this$1); },
      !reverse
    );
  };
  reversedSequence.__iterator = function (type, reverse) {
    var i = 0;
    reverse && ensureSize(collection);
    var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse);
    return new Iterator(function () {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      return iteratorValue(
        type,
        useKeys ? entry[0] : reverse ? this$1.size - ++i : i++,
        entry[1],
        step
      );
    });
  };
  return reversedSequence;
}

function filterFactory(collection, predicate, context, useKeys) {
  var filterSequence = makeSequence(collection);
  if (useKeys) {
    filterSequence.has = function (key) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && !!predicate.call(context, v, key, collection);
    };
    filterSequence.get = function (key, notSetValue) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && predicate.call(context, v, key, collection)
        ? v
        : notSetValue;
    };
  }
  filterSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    collection.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1);
      }
    }, reverse);
    return iterations;
  };
  filterSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var iterations = 0;
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        var value = entry[1];
        if (predicate.call(context, value, key, collection)) {
          return iteratorValue(type, useKeys ? key : iterations++, value, step);
        }
      }
    });
  };
  return filterSequence;
}

function countByFactory(collection, grouper, context) {
  var groups = Map().asMutable();
  collection.__iterate(function (v, k) {
    groups.update(grouper.call(context, v, k, collection), 0, function (a) { return a + 1; });
  });
  return groups.asImmutable();
}

function groupByFactory(collection, grouper, context) {
  var isKeyedIter = isKeyed(collection);
  var groups = (isOrdered(collection) ? OrderedMap() : Map()).asMutable();
  collection.__iterate(function (v, k) {
    groups.update(
      grouper.call(context, v, k, collection),
      function (a) { return ((a = a || []), a.push(isKeyedIter ? [k, v] : v), a); }
    );
  });
  var coerce = collectionClass(collection);
  return groups.map(function (arr) { return reify(collection, coerce(arr)); }).asImmutable();
}

function sliceFactory(collection, begin, end, useKeys) {
  var originalSize = collection.size;

  if (wholeSlice(begin, end, originalSize)) {
    return collection;
  }

  var resolvedBegin = resolveBegin(begin, originalSize);
  var resolvedEnd = resolveEnd(end, originalSize);

  // begin or end will be NaN if they were provided as negative numbers and
  // this collection's size is unknown. In that case, cache first so there is
  // a known size and these do not resolve to NaN.
  if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
    return sliceFactory(collection.toSeq().cacheResult(), begin, end, useKeys);
  }

  // Note: resolvedEnd is undefined when the original sequence's length is
  // unknown and this slice did not supply an end and should contain all
  // elements after resolvedBegin.
  // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
  var resolvedSize = resolvedEnd - resolvedBegin;
  var sliceSize;
  if (resolvedSize === resolvedSize) {
    sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
  }

  var sliceSeq = makeSequence(collection);

  // If collection.size is undefined, the size of the realized sliceSeq is
  // unknown at this point unless the number of items to slice is 0
  sliceSeq.size =
    sliceSize === 0 ? sliceSize : (collection.size && sliceSize) || undefined;

  if (!useKeys && isSeq(collection) && sliceSize >= 0) {
    sliceSeq.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      return index >= 0 && index < sliceSize
        ? collection.get(index + resolvedBegin, notSetValue)
        : notSetValue;
    };
  }

  sliceSeq.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (sliceSize === 0) {
      return 0;
    }
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var skipped = 0;
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function (v, k) {
      if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
        iterations++;
        return (
          fn(v, useKeys ? k : iterations - 1, this$1) !== false &&
          iterations !== sliceSize
        );
      }
    });
    return iterations;
  };

  sliceSeq.__iteratorUncached = function(type, reverse) {
    if (sliceSize !== 0 && reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    // Don't bother instantiating parent iterator if taking 0.
    if (sliceSize === 0) {
      return new Iterator(iteratorDone);
    }
    var iterator = collection.__iterator(type, reverse);
    var skipped = 0;
    var iterations = 0;
    return new Iterator(function () {
      while (skipped++ < resolvedBegin) {
        iterator.next();
      }
      if (++iterations > sliceSize) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (useKeys || type === ITERATE_VALUES || step.done) {
        return step;
      }
      if (type === ITERATE_KEYS) {
        return iteratorValue(type, iterations - 1, undefined, step);
      }
      return iteratorValue(type, iterations - 1, step.value[1], step);
    });
  };

  return sliceSeq;
}

function takeWhileFactory(collection, predicate, context) {
  var takeSequence = makeSequence(collection);
  takeSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var iterations = 0;
    collection.__iterate(
      function (v, k, c) { return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$1); }
    );
    return iterations;
  };
  takeSequence.__iteratorUncached = function(type, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var iterating = true;
    return new Iterator(function () {
      if (!iterating) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var k = entry[0];
      var v = entry[1];
      if (!predicate.call(context, v, k, this$1)) {
        iterating = false;
        return iteratorDone();
      }
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return takeSequence;
}

function skipWhileFactory(collection, predicate, context, useKeys) {
  var skipSequence = makeSequence(collection);
  skipSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function (v, k, c) {
      if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1);
      }
    });
    return iterations;
  };
  skipSequence.__iteratorUncached = function(type, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var skipping = true;
    var iterations = 0;
    return new Iterator(function () {
      var step;
      var k;
      var v;
      do {
        step = iterator.next();
        if (step.done) {
          if (useKeys || type === ITERATE_VALUES) {
            return step;
          }
          if (type === ITERATE_KEYS) {
            return iteratorValue(type, iterations++, undefined, step);
          }
          return iteratorValue(type, iterations++, step.value[1], step);
        }
        var entry = step.value;
        k = entry[0];
        v = entry[1];
        skipping && (skipping = predicate.call(context, v, k, this$1));
      } while (skipping);
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return skipSequence;
}

function concatFactory(collection, values) {
  var isKeyedCollection = isKeyed(collection);
  var iters = [collection]
    .concat(values)
    .map(function (v) {
      if (!isCollection(v)) {
        v = isKeyedCollection
          ? keyedSeqFromValue(v)
          : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedCollection) {
        v = KeyedCollection(v);
      }
      return v;
    })
    .filter(function (v) { return v.size !== 0; });

  if (iters.length === 0) {
    return collection;
  }

  if (iters.length === 1) {
    var singleton = iters[0];
    if (
      singleton === collection ||
      (isKeyedCollection && isKeyed(singleton)) ||
      (isIndexed(collection) && isIndexed(singleton))
    ) {
      return singleton;
    }
  }

  var concatSeq = new ArraySeq(iters);
  if (isKeyedCollection) {
    concatSeq = concatSeq.toKeyedSeq();
  } else if (!isIndexed(collection)) {
    concatSeq = concatSeq.toSetSeq();
  }
  concatSeq = concatSeq.flatten(true);
  concatSeq.size = iters.reduce(function (sum, seq) {
    if (sum !== undefined) {
      var size = seq.size;
      if (size !== undefined) {
        return sum + size;
      }
    }
  }, 0);
  return concatSeq;
}

function flattenFactory(collection, depth, useKeys) {
  var flatSequence = makeSequence(collection);
  flatSequence.__iterateUncached = function(fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var iterations = 0;
    var stopped = false;
    function flatDeep(iter, currentDepth) {
      iter.__iterate(function (v, k) {
        if ((!depth || currentDepth < depth) && isCollection(v)) {
          flatDeep(v, currentDepth + 1);
        } else {
          iterations++;
          if (fn(v, useKeys ? k : iterations - 1, flatSequence) === false) {
            stopped = true;
          }
        }
        return !stopped;
      }, reverse);
    }
    flatDeep(collection, 0);
    return iterations;
  };
  flatSequence.__iteratorUncached = function(type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(type, reverse);
    var stack = [];
    var iterations = 0;
    return new Iterator(function () {
      while (iterator) {
        var step = iterator.next();
        if (step.done !== false) {
          iterator = stack.pop();
          continue;
        }
        var v = step.value;
        if (type === ITERATE_ENTRIES) {
          v = v[1];
        }
        if ((!depth || stack.length < depth) && isCollection(v)) {
          stack.push(iterator);
          iterator = v.__iterator(type, reverse);
        } else {
          return useKeys ? step : iteratorValue(type, iterations++, v, step);
        }
      }
      return iteratorDone();
    });
  };
  return flatSequence;
}

function flatMapFactory(collection, mapper, context) {
  var coerce = collectionClass(collection);
  return collection
    .toSeq()
    .map(function (v, k) { return coerce(mapper.call(context, v, k, collection)); })
    .flatten(true);
}

function interposeFactory(collection, separator) {
  var interposedSequence = makeSequence(collection);
  interposedSequence.size = collection.size && collection.size * 2 - 1;
  interposedSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    collection.__iterate(
      function (v) { return (!iterations || fn(separator, iterations++, this$1) !== false) &&
        fn(v, iterations++, this$1) !== false; },
      reverse
    );
    return iterations;
  };
  interposedSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_VALUES, reverse);
    var iterations = 0;
    var step;
    return new Iterator(function () {
      if (!step || iterations % 2) {
        step = iterator.next();
        if (step.done) {
          return step;
        }
      }
      return iterations % 2
        ? iteratorValue(type, iterations++, separator)
        : iteratorValue(type, iterations++, step.value, step);
    });
  };
  return interposedSequence;
}

function sortFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  var isKeyedCollection = isKeyed(collection);
  var index = 0;
  var entries = collection
    .toSeq()
    .map(function (v, k) { return [k, v, index++, mapper ? mapper(v, k, collection) : v]; })
    .valueSeq()
    .toArray();
  entries.sort(function (a, b) { return comparator(a[3], b[3]) || a[2] - b[2]; }).forEach(
    isKeyedCollection
      ? function (v, i) {
          entries[i].length = 2;
        }
      : function (v, i) {
          entries[i] = v[1];
        }
  );
  return isKeyedCollection
    ? KeyedSeq(entries)
    : isIndexed(collection)
      ? IndexedSeq(entries)
      : SetSeq(entries);
}

function maxFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  if (mapper) {
    var entry = collection
      .toSeq()
      .map(function (v, k) { return [v, mapper(v, k, collection)]; })
      .reduce(function (a, b) { return (maxCompare(comparator, a[1], b[1]) ? b : a); });
    return entry && entry[0];
  }
  return collection.reduce(function (a, b) { return (maxCompare(comparator, a, b) ? b : a); });
}

function maxCompare(comparator, a, b) {
  var comp = comparator(b, a);
  // b is considered the new max if the comparator declares them equal, but
  // they are not equal and b is in fact a nullish value.
  return (
    (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) ||
    comp > 0
  );
}

function zipWithFactory(keyIter, zipper, iters, zipAll) {
  var zipSequence = makeSequence(keyIter);
  var sizes = new ArraySeq(iters).map(function (i) { return i.size; });
  zipSequence.size = zipAll ? sizes.max() : sizes.min();
  // Note: this a generic base implementation of __iterate in terms of
  // __iterator which may be more generically useful in the future.
  zipSequence.__iterate = function(fn, reverse) {
    /* generic:
    var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      iterations++;
      if (fn(step.value[1], step.value[0], this) === false) {
        break;
      }
    }
    return iterations;
    */
    // indexed:
    var iterator = this.__iterator(ITERATE_VALUES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      if (fn(step.value, iterations++, this) === false) {
        break;
      }
    }
    return iterations;
  };
  zipSequence.__iteratorUncached = function(type, reverse) {
    var iterators = iters.map(
      function (i) { return ((i = Collection(i)), getIterator(reverse ? i.reverse() : i)); }
    );
    var iterations = 0;
    var isDone = false;
    return new Iterator(function () {
      var steps;
      if (!isDone) {
        steps = iterators.map(function (i) { return i.next(); });
        isDone = zipAll ? steps.every(function (s) { return s.done; }) : steps.some(function (s) { return s.done; });
      }
      if (isDone) {
        return iteratorDone();
      }
      return iteratorValue(
        type,
        iterations++,
        zipper.apply(null, steps.map(function (s) { return s.value; }))
      );
    });
  };
  return zipSequence;
}

// #pragma Helper Functions

function reify(iter, seq) {
  return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
}

function validateEntry(entry) {
  if (entry !== Object(entry)) {
    throw new TypeError('Expected [K, V] tuple: ' + entry);
  }
}

function collectionClass(collection) {
  return isKeyed(collection)
    ? KeyedCollection
    : isIndexed(collection)
      ? IndexedCollection
      : SetCollection;
}

function makeSequence(collection) {
  return Object.create(
    (isKeyed(collection)
      ? KeyedSeq
      : isIndexed(collection)
        ? IndexedSeq
        : SetSeq
    ).prototype
  );
}

function cacheResultThrough() {
  if (this._iter.cacheResult) {
    this._iter.cacheResult();
    this.size = this._iter.size;
    return this;
  }
  return Seq.prototype.cacheResult.call(this);
}

function defaultComparator(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  }

  if (a === undefined) {
    return 1;
  }

  if (b === undefined) {
    return -1;
  }

  return a > b ? 1 : a < b ? -1 : 0;
}

// http://jsperf.com/copy-array-inline
function arrCopy(arr, offset) {
  offset = offset || 0;
  var len = Math.max(0, arr.length - offset);
  var newArr = new Array(len);
  for (var ii = 0; ii < len; ii++) {
    newArr[ii] = arr[ii + offset];
  }
  return newArr;
}

function invariant(condition, error) {
  if (!condition) { throw new Error(error); }
}

function assertNotInfinite(size) {
  invariant(
    size !== Infinity,
    'Cannot perform this action with an infinite size.'
  );
}

function coerceKeyPath(keyPath) {
  if (isArrayLike(keyPath) && typeof keyPath !== 'string') {
    return keyPath;
  }
  if (isOrdered(keyPath)) {
    return keyPath.toArray();
  }
  throw new TypeError(
    'Invalid keyPath: expected Ordered Collection or Array: ' + keyPath
  );
}

function isPlainObj(value) {
  return (
    value &&
    (typeof value.constructor !== 'function' ||
      value.constructor.name === 'Object')
  );
}

/**
 * Returns true if the value is a potentially-persistent data structure, either
 * provided by Immutable.js or a plain Array or Object.
 */
function isDataStructure(value) {
  return (
    typeof value === 'object' &&
    (isImmutable(value) || Array.isArray(value) || isPlainObj(value))
  );
}

/**
 * Converts a value to a string, adding quotes if a string was provided.
 */
function quoteString(value) {
  try {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  } catch (_ignoreError) {
    return JSON.stringify(value);
  }
}

function has(collection, key) {
  return isImmutable(collection)
    ? collection.has(key)
    : isDataStructure(collection) && hasOwnProperty.call(collection, key);
}

function get(collection, key, notSetValue) {
  return isImmutable(collection)
    ? collection.get(key, notSetValue)
    : !has(collection, key)
      ? notSetValue
      : typeof collection.get === 'function'
        ? collection.get(key)
        : collection[key];
}

function shallowCopy(from) {
  if (Array.isArray(from)) {
    return arrCopy(from);
  }
  var to = {};
  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      to[key] = from[key];
    }
  }
  return to;
}

function remove(collection, key) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot update non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.remove) {
      throw new TypeError(
        'Cannot update immutable value without .remove() method: ' + collection
      );
    }
    return collection.remove(key);
  }
  if (!hasOwnProperty.call(collection, key)) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  if (Array.isArray(collectionCopy)) {
    collectionCopy.splice(key, 1);
  } else {
    delete collectionCopy[key];
  }
  return collectionCopy;
}

function set(collection, key, value) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot update non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.set) {
      throw new TypeError(
        'Cannot update immutable value without .set() method: ' + collection
      );
    }
    return collection.set(key, value);
  }
  if (hasOwnProperty.call(collection, key) && value === collection[key]) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  collectionCopy[key] = value;
  return collectionCopy;
}

function updateIn(collection, keyPath, notSetValue, updater) {
  if (!updater) {
    updater = notSetValue;
    notSetValue = undefined;
  }
  var updatedValue = updateInDeeply(
    isImmutable(collection),
    collection,
    coerceKeyPath(keyPath),
    0,
    notSetValue,
    updater
  );
  return updatedValue === NOT_SET ? notSetValue : updatedValue;
}

function updateInDeeply(
  inImmutable,
  existing,
  keyPath,
  i,
  notSetValue,
  updater
) {
  var wasNotSet = existing === NOT_SET;
  if (i === keyPath.length) {
    var existingValue = wasNotSet ? notSetValue : existing;
    var newValue = updater(existingValue);
    return newValue === existingValue ? existing : newValue;
  }
  if (!wasNotSet && !isDataStructure(existing)) {
    throw new TypeError(
      'Cannot update within non-data-structure value in path [' +
        keyPath.slice(0, i).map(quoteString) +
        ']: ' +
        existing
    );
  }
  var key = keyPath[i];
  var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
  var nextUpdated = updateInDeeply(
    nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting),
    nextExisting,
    keyPath,
    i + 1,
    notSetValue,
    updater
  );
  return nextUpdated === nextExisting
    ? existing
    : nextUpdated === NOT_SET
      ? remove(existing, key)
      : set(
          wasNotSet ? (inImmutable ? emptyMap() : {}) : existing,
          key,
          nextUpdated
        );
}

function setIn(collection, keyPath, value) {
  return updateIn(collection, keyPath, NOT_SET, function () { return value; });
}

function setIn$1(keyPath, v) {
  return setIn(this, keyPath, v);
}

function removeIn(collection, keyPath) {
  return updateIn(collection, keyPath, function () { return NOT_SET; });
}

function deleteIn(keyPath) {
  return removeIn(this, keyPath);
}

function update(collection, key, notSetValue, updater) {
  return updateIn(collection, [key], notSetValue, updater);
}

function update$1(key, notSetValue, updater) {
  return arguments.length === 1
    ? key(this)
    : update(this, key, notSetValue, updater);
}

function updateIn$1(keyPath, notSetValue, updater) {
  return updateIn(this, keyPath, notSetValue, updater);
}

function merge() {
  var iters = [], len = arguments.length;
  while ( len-- ) iters[ len ] = arguments[ len ];

  return mergeIntoKeyedWith(this, iters);
}

function mergeWith(merger) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  if (typeof merger !== 'function') {
    throw new TypeError('Invalid merger function: ' + merger);
  }
  return mergeIntoKeyedWith(this, iters, merger);
}

function mergeIntoKeyedWith(collection, collections, merger) {
  var iters = [];
  for (var ii = 0; ii < collections.length; ii++) {
    var collection$1 = KeyedCollection(collections[ii]);
    if (collection$1.size !== 0) {
      iters.push(collection$1);
    }
  }
  if (iters.length === 0) {
    return collection;
  }
  if (
    collection.toSeq().size === 0 &&
    !collection.__ownerID &&
    iters.length === 1
  ) {
    return collection.constructor(iters[0]);
  }
  return collection.withMutations(function (collection) {
    var mergeIntoCollection = merger
      ? function (value, key) {
          update(
            collection,
            key,
            NOT_SET,
            function (oldVal) { return (oldVal === NOT_SET ? value : merger(oldVal, value, key)); }
          );
        }
      : function (value, key) {
          collection.set(key, value);
        };
    for (var ii = 0; ii < iters.length; ii++) {
      iters[ii].forEach(mergeIntoCollection);
    }
  });
}

function merge$1(collection) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return mergeWithSources(collection, sources);
}

function mergeWith$1(merger, collection) {
  var sources = [], len = arguments.length - 2;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 2 ];

  return mergeWithSources(collection, sources, merger);
}

function mergeDeep(collection) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return mergeDeepWithSources(collection, sources);
}

function mergeDeepWith(merger, collection) {
  var sources = [], len = arguments.length - 2;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 2 ];

  return mergeDeepWithSources(collection, sources, merger);
}

function mergeDeepWithSources(collection, sources, merger) {
  return mergeWithSources(collection, sources, deepMergerWith(merger));
}

function mergeWithSources(collection, sources, merger) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot merge into non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    return typeof merger === 'function' && collection.mergeWith
      ? collection.mergeWith.apply(collection, [ merger ].concat( sources ))
      : collection.merge
        ? collection.merge.apply(collection, sources)
        : collection.concat.apply(collection, sources);
  }
  var isArray = Array.isArray(collection);
  var merged = collection;
  var Collection$$1 = isArray ? IndexedCollection : KeyedCollection;
  var mergeItem = isArray
    ? function (value) {
        // Copy on write
        if (merged === collection) {
          merged = shallowCopy(merged);
        }
        merged.push(value);
      }
    : function (value, key) {
        var hasVal = hasOwnProperty.call(merged, key);
        var nextVal =
          hasVal && merger ? merger(merged[key], value, key) : value;
        if (!hasVal || nextVal !== merged[key]) {
          // Copy on write
          if (merged === collection) {
            merged = shallowCopy(merged);
          }
          merged[key] = nextVal;
        }
      };
  for (var i = 0; i < sources.length; i++) {
    Collection$$1(sources[i]).forEach(mergeItem);
  }
  return merged;
}

function deepMergerWith(merger) {
  function deepMerger(oldValue, newValue, key) {
    return isDataStructure(oldValue) && isDataStructure(newValue)
      ? mergeWithSources(oldValue, [newValue], deepMerger)
      : merger
        ? merger(oldValue, newValue, key)
        : newValue;
  }
  return deepMerger;
}

function mergeDeep$1() {
  var iters = [], len = arguments.length;
  while ( len-- ) iters[ len ] = arguments[ len ];

  return mergeDeepWithSources(this, iters);
}

function mergeDeepWith$1(merger) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return mergeDeepWithSources(this, iters, merger);
}

function mergeIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return updateIn(this, keyPath, emptyMap(), function (m) { return mergeWithSources(m, iters); });
}

function mergeDeepIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return updateIn(this, keyPath, emptyMap(), function (m) { return mergeDeepWithSources(m, iters); }
  );
}

function withMutations(fn) {
  var mutable = this.asMutable();
  fn(mutable);
  return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}

function asMutable() {
  return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
}

function asImmutable() {
  return this.__ensureOwner();
}

function wasAltered() {
  return this.__altered;
}

var Map = /*@__PURE__*/(function (KeyedCollection$$1) {
  function Map(value) {
    return value === null || value === undefined
      ? emptyMap()
      : isMap(value) && !isOrdered(value)
        ? value
        : emptyMap().withMutations(function (map) {
            var iter = KeyedCollection$$1(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v, k) { return map.set(k, v); });
          });
  }

  if ( KeyedCollection$$1 ) Map.__proto__ = KeyedCollection$$1;
  Map.prototype = Object.create( KeyedCollection$$1 && KeyedCollection$$1.prototype );
  Map.prototype.constructor = Map;

  Map.of = function of () {
    var keyValues = [], len = arguments.length;
    while ( len-- ) keyValues[ len ] = arguments[ len ];

    return emptyMap().withMutations(function (map) {
      for (var i = 0; i < keyValues.length; i += 2) {
        if (i + 1 >= keyValues.length) {
          throw new Error('Missing value for key: ' + keyValues[i]);
        }
        map.set(keyValues[i], keyValues[i + 1]);
      }
    });
  };

  Map.prototype.toString = function toString () {
    return this.__toString('Map {', '}');
  };

  // @pragma Access

  Map.prototype.get = function get (k, notSetValue) {
    return this._root
      ? this._root.get(0, undefined, k, notSetValue)
      : notSetValue;
  };

  // @pragma Modification

  Map.prototype.set = function set (k, v) {
    return updateMap(this, k, v);
  };

  Map.prototype.remove = function remove (k) {
    return updateMap(this, k, NOT_SET);
  };

  Map.prototype.deleteAll = function deleteAll (keys) {
    var collection = Collection(keys);

    if (collection.size === 0) {
      return this;
    }

    return this.withMutations(function (map) {
      collection.forEach(function (key) { return map.remove(key); });
    });
  };

  Map.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyMap();
  };

  // @pragma Composition

  Map.prototype.sort = function sort (comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator));
  };

  Map.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator, mapper));
  };

  Map.prototype.map = function map (mapper, context) {
    return this.withMutations(function (map) {
      map.forEach(function (value, key) {
        map.set(key, mapper.call(context, value, key, map));
      });
    });
  };

  // @pragma Mutability

  Map.prototype.__iterator = function __iterator (type, reverse) {
    return new MapIterator(this, type, reverse);
  };

  Map.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    this._root &&
      this._root.iterate(function (entry) {
        iterations++;
        return fn(entry[1], entry[0], this$1);
      }, reverse);
    return iterations;
  };

  Map.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyMap();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeMap(this.size, this._root, ownerID, this.__hash);
  };

  return Map;
}(KeyedCollection));

Map.isMap = isMap;

var MapPrototype = Map.prototype;
MapPrototype[IS_MAP_SYMBOL] = true;
MapPrototype[DELETE] = MapPrototype.remove;
MapPrototype.removeAll = MapPrototype.deleteAll;
MapPrototype.setIn = setIn$1;
MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
MapPrototype.update = update$1;
MapPrototype.updateIn = updateIn$1;
MapPrototype.merge = MapPrototype.concat = merge;
MapPrototype.mergeWith = mergeWith;
MapPrototype.mergeDeep = mergeDeep$1;
MapPrototype.mergeDeepWith = mergeDeepWith$1;
MapPrototype.mergeIn = mergeIn;
MapPrototype.mergeDeepIn = mergeDeepIn;
MapPrototype.withMutations = withMutations;
MapPrototype.wasAltered = wasAltered;
MapPrototype.asImmutable = asImmutable;
MapPrototype['@@transducer/init'] = MapPrototype.asMutable = asMutable;
MapPrototype['@@transducer/step'] = function(result, arr) {
  return result.set(arr[0], arr[1]);
};
MapPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

// #pragma Trie Nodes

var ArrayMapNode = function ArrayMapNode(ownerID, entries) {
  this.ownerID = ownerID;
  this.entries = entries;
};

ArrayMapNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  var entries = this.entries;
  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }
  return notSetValue;
};

ArrayMapNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;
  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }
  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && entries.length === 1) {
    return; // undefined
  }

  if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
    return createNodes(ownerID, entries, key, value);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1
        ? newEntries.pop()
        : (newEntries[idx] = newEntries.pop());
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new ArrayMapNode(ownerID, newEntries);
};

var BitmapIndexedNode = function BitmapIndexedNode(ownerID, bitmap, nodes) {
  this.ownerID = ownerID;
  this.bitmap = bitmap;
  this.nodes = nodes;
};

BitmapIndexedNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
  var bitmap = this.bitmap;
  return (bitmap & bit) === 0
    ? notSetValue
    : this.nodes[popCount(bitmap & (bit - 1))].get(
        shift + SHIFT,
        keyHash,
        key,
        notSetValue
      );
};

BitmapIndexedNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var bit = 1 << keyHashFrag;
  var bitmap = this.bitmap;
  var exists = (bitmap & bit) !== 0;

  if (!exists && value === NOT_SET) {
    return this;
  }

  var idx = popCount(bitmap & (bit - 1));
  var nodes = this.nodes;
  var node = exists ? nodes[idx] : undefined;
  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );

  if (newNode === node) {
    return this;
  }

  if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
    return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
  }

  if (
    exists &&
    !newNode &&
    nodes.length === 2 &&
    isLeafNode(nodes[idx ^ 1])
  ) {
    return nodes[idx ^ 1];
  }

  if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
    return newNode;
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newBitmap = exists ? (newNode ? bitmap : bitmap ^ bit) : bitmap | bit;
  var newNodes = exists
    ? newNode
      ? setAt(nodes, idx, newNode, isEditable)
      : spliceOut(nodes, idx, isEditable)
    : spliceIn(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.bitmap = newBitmap;
    this.nodes = newNodes;
    return this;
  }

  return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
};

var HashArrayMapNode = function HashArrayMapNode(ownerID, count, nodes) {
  this.ownerID = ownerID;
  this.count = count;
  this.nodes = nodes;
};

HashArrayMapNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var node = this.nodes[idx];
  return node
    ? node.get(shift + SHIFT, keyHash, key, notSetValue)
    : notSetValue;
};

HashArrayMapNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var removed = value === NOT_SET;
  var nodes = this.nodes;
  var node = nodes[idx];

  if (removed && !node) {
    return this;
  }

  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
  if (newNode === node) {
    return this;
  }

  var newCount = this.count;
  if (!node) {
    newCount++;
  } else if (!newNode) {
    newCount--;
    if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
      return packNodes(ownerID, nodes, newCount, idx);
    }
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newNodes = setAt(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.count = newCount;
    this.nodes = newNodes;
    return this;
  }

  return new HashArrayMapNode(ownerID, newCount, newNodes);
};

var HashCollisionNode = function HashCollisionNode(ownerID, keyHash, entries) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entries = entries;
};

HashCollisionNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  var entries = this.entries;
  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }
  return notSetValue;
};

HashCollisionNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }

  var removed = value === NOT_SET;

  if (keyHash !== this.keyHash) {
    if (removed) {
      return this;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
  }

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;
  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }
  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && len === 2) {
    return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1
        ? newEntries.pop()
        : (newEntries[idx] = newEntries.pop());
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new HashCollisionNode(ownerID, this.keyHash, newEntries);
};

var ValueNode = function ValueNode(ownerID, keyHash, entry) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entry = entry;
};

ValueNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
};

ValueNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;
  var keyMatch = is(key, this.entry[0]);
  if (keyMatch ? value === this.entry[1] : removed) {
    return this;
  }

  SetRef(didAlter);

  if (removed) {
    SetRef(didChangeSize);
    return; // undefined
  }

  if (keyMatch) {
    if (ownerID && ownerID === this.ownerID) {
      this.entry[1] = value;
      return this;
    }
    return new ValueNode(ownerID, this.keyHash, [key, value]);
  }

  SetRef(didChangeSize);
  return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
};

// #pragma Iterators

ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(
  fn,
  reverse
) {
  var entries = this.entries;
  for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
    if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
      return false;
    }
  }
};

BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(
  fn,
  reverse
) {
  var nodes = this.nodes;
  for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
    var node = nodes[reverse ? maxIndex - ii : ii];
    if (node && node.iterate(fn, reverse) === false) {
      return false;
    }
  }
};

// eslint-disable-next-line no-unused-vars
ValueNode.prototype.iterate = function(fn, reverse) {
  return fn(this.entry);
};

var MapIterator = /*@__PURE__*/(function (Iterator$$1) {
  function MapIterator(map, type, reverse) {
    this._type = type;
    this._reverse = reverse;
    this._stack = map._root && mapIteratorFrame(map._root);
  }

  if ( Iterator$$1 ) MapIterator.__proto__ = Iterator$$1;
  MapIterator.prototype = Object.create( Iterator$$1 && Iterator$$1.prototype );
  MapIterator.prototype.constructor = MapIterator;

  MapIterator.prototype.next = function next () {
    var type = this._type;
    var stack = this._stack;
    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      var maxIndex = (void 0);
      if (node.entry) {
        if (index === 0) {
          return mapIteratorValue(type, node.entry);
        }
      } else if (node.entries) {
        maxIndex = node.entries.length - 1;
        if (index <= maxIndex) {
          return mapIteratorValue(
            type,
            node.entries[this._reverse ? maxIndex - index : index]
          );
        }
      } else {
        maxIndex = node.nodes.length - 1;
        if (index <= maxIndex) {
          var subNode = node.nodes[this._reverse ? maxIndex - index : index];
          if (subNode) {
            if (subNode.entry) {
              return mapIteratorValue(type, subNode.entry);
            }
            stack = this._stack = mapIteratorFrame(subNode, stack);
          }
          continue;
        }
      }
      stack = this._stack = this._stack.__prev;
    }
    return iteratorDone();
  };

  return MapIterator;
}(Iterator));

function mapIteratorValue(type, entry) {
  return iteratorValue(type, entry[0], entry[1]);
}

function mapIteratorFrame(node, prev) {
  return {
    node: node,
    index: 0,
    __prev: prev,
  };
}

function makeMap(size, root, ownerID, hash$$1) {
  var map = Object.create(MapPrototype);
  map.size = size;
  map._root = root;
  map.__ownerID = ownerID;
  map.__hash = hash$$1;
  map.__altered = false;
  return map;
}

var EMPTY_MAP;
function emptyMap() {
  return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
}

function updateMap(map, k, v) {
  var newRoot;
  var newSize;
  if (!map._root) {
    if (v === NOT_SET) {
      return map;
    }
    newSize = 1;
    newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
  } else {
    var didChangeSize = MakeRef();
    var didAlter = MakeRef();
    newRoot = updateNode(
      map._root,
      map.__ownerID,
      0,
      undefined,
      k,
      v,
      didChangeSize,
      didAlter
    );
    if (!didAlter.value) {
      return map;
    }
    newSize = map.size + (didChangeSize.value ? (v === NOT_SET ? -1 : 1) : 0);
  }
  if (map.__ownerID) {
    map.size = newSize;
    map._root = newRoot;
    map.__hash = undefined;
    map.__altered = true;
    return map;
  }
  return newRoot ? makeMap(newSize, newRoot) : emptyMap();
}

function updateNode(
  node,
  ownerID,
  shift,
  keyHash,
  key,
  value,
  didChangeSize,
  didAlter
) {
  if (!node) {
    if (value === NOT_SET) {
      return node;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return new ValueNode(ownerID, keyHash, [key, value]);
  }
  return node.update(
    ownerID,
    shift,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
}

function isLeafNode(node) {
  return (
    node.constructor === ValueNode || node.constructor === HashCollisionNode
  );
}

function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
  if (node.keyHash === keyHash) {
    return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
  }

  var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
  var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

  var newNode;
  var nodes =
    idx1 === idx2
      ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)]
      : ((newNode = new ValueNode(ownerID, keyHash, entry)),
        idx1 < idx2 ? [node, newNode] : [newNode, node]);

  return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
}

function createNodes(ownerID, entries, key, value) {
  if (!ownerID) {
    ownerID = new OwnerID();
  }
  var node = new ValueNode(ownerID, hash(key), [key, value]);
  for (var ii = 0; ii < entries.length; ii++) {
    var entry = entries[ii];
    node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
  }
  return node;
}

function packNodes(ownerID, nodes, count, excluding) {
  var bitmap = 0;
  var packedII = 0;
  var packedNodes = new Array(count);
  for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
    var node = nodes[ii];
    if (node !== undefined && ii !== excluding) {
      bitmap |= bit;
      packedNodes[packedII++] = node;
    }
  }
  return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
}

function expandNodes(ownerID, nodes, bitmap, including, node) {
  var count = 0;
  var expandedNodes = new Array(SIZE);
  for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
    expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
  }
  expandedNodes[including] = node;
  return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
}

function popCount(x) {
  x -= (x >> 1) & 0x55555555;
  x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
  x = (x + (x >> 4)) & 0x0f0f0f0f;
  x += x >> 8;
  x += x >> 16;
  return x & 0x7f;
}

function setAt(array, idx, val, canEdit) {
  var newArray = canEdit ? array : arrCopy(array);
  newArray[idx] = val;
  return newArray;
}

function spliceIn(array, idx, val, canEdit) {
  var newLen = array.length + 1;
  if (canEdit && idx + 1 === newLen) {
    array[idx] = val;
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      newArray[ii] = val;
      after = -1;
    } else {
      newArray[ii] = array[ii + after];
    }
  }
  return newArray;
}

function spliceOut(array, idx, canEdit) {
  var newLen = array.length - 1;
  if (canEdit && idx === newLen) {
    array.pop();
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      after = 1;
    }
    newArray[ii] = array[ii + after];
  }
  return newArray;
}

var MAX_ARRAY_MAP_SIZE = SIZE / 4;
var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

var IS_LIST_SYMBOL = '@@__IMMUTABLE_LIST__@@';

function isList(maybeList) {
  return Boolean(maybeList && maybeList[IS_LIST_SYMBOL]);
}

var List = /*@__PURE__*/(function (IndexedCollection$$1) {
  function List(value) {
    var empty = emptyList();
    if (value === null || value === undefined) {
      return empty;
    }
    if (isList(value)) {
      return value;
    }
    var iter = IndexedCollection$$1(value);
    var size = iter.size;
    if (size === 0) {
      return empty;
    }
    assertNotInfinite(size);
    if (size > 0 && size < SIZE) {
      return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
    }
    return empty.withMutations(function (list) {
      list.setSize(size);
      iter.forEach(function (v, i) { return list.set(i, v); });
    });
  }

  if ( IndexedCollection$$1 ) List.__proto__ = IndexedCollection$$1;
  List.prototype = Object.create( IndexedCollection$$1 && IndexedCollection$$1.prototype );
  List.prototype.constructor = List;

  List.of = function of (/*...values*/) {
    return this(arguments);
  };

  List.prototype.toString = function toString () {
    return this.__toString('List [', ']');
  };

  // @pragma Access

  List.prototype.get = function get (index, notSetValue) {
    index = wrapIndex(this, index);
    if (index >= 0 && index < this.size) {
      index += this._origin;
      var node = listNodeFor(this, index);
      return node && node.array[index & MASK];
    }
    return notSetValue;
  };

  // @pragma Modification

  List.prototype.set = function set (index, value) {
    return updateList(this, index, value);
  };

  List.prototype.remove = function remove (index) {
    return !this.has(index)
      ? this
      : index === 0
        ? this.shift()
        : index === this.size - 1
          ? this.pop()
          : this.splice(index, 1);
  };

  List.prototype.insert = function insert (index, value) {
    return this.splice(index, 0, value);
  };

  List.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = this._origin = this._capacity = 0;
      this._level = SHIFT;
      this._root = this._tail = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyList();
  };

  List.prototype.push = function push (/*...values*/) {
    var values = arguments;
    var oldSize = this.size;
    return this.withMutations(function (list) {
      setListBounds(list, 0, oldSize + values.length);
      for (var ii = 0; ii < values.length; ii++) {
        list.set(oldSize + ii, values[ii]);
      }
    });
  };

  List.prototype.pop = function pop () {
    return setListBounds(this, 0, -1);
  };

  List.prototype.unshift = function unshift (/*...values*/) {
    var values = arguments;
    return this.withMutations(function (list) {
      setListBounds(list, -values.length);
      for (var ii = 0; ii < values.length; ii++) {
        list.set(ii, values[ii]);
      }
    });
  };

  List.prototype.shift = function shift () {
    return setListBounds(this, 1);
  };

  // @pragma Composition

  List.prototype.concat = function concat (/*...collections*/) {
    var arguments$1 = arguments;

    var seqs = [];
    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments$1[i];
      var seq = IndexedCollection$$1(
        typeof argument !== 'string' && hasIterator(argument)
          ? argument
          : [argument]
      );
      if (seq.size !== 0) {
        seqs.push(seq);
      }
    }
    if (seqs.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
      return this.constructor(seqs[0]);
    }
    return this.withMutations(function (list) {
      seqs.forEach(function (seq) { return seq.forEach(function (value) { return list.push(value); }); });
    });
  };

  List.prototype.setSize = function setSize (size) {
    return setListBounds(this, 0, size);
  };

  List.prototype.map = function map (mapper, context) {
    var this$1 = this;

    return this.withMutations(function (list) {
      for (var i = 0; i < this$1.size; i++) {
        list.set(i, mapper.call(context, list.get(i), i, list));
      }
    });
  };

  // @pragma Iteration

  List.prototype.slice = function slice (begin, end) {
    var size = this.size;
    if (wholeSlice(begin, end, size)) {
      return this;
    }
    return setListBounds(
      this,
      resolveBegin(begin, size),
      resolveEnd(end, size)
    );
  };

  List.prototype.__iterator = function __iterator (type, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    return new Iterator(function () {
      var value = values();
      return value === DONE
        ? iteratorDone()
        : iteratorValue(type, reverse ? --index : index++, value);
    });
  };

  List.prototype.__iterate = function __iterate (fn, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    var value;
    while ((value = values()) !== DONE) {
      if (fn(value, reverse ? --index : index++, this) === false) {
        break;
      }
    }
    return index;
  };

  List.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyList();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeList(
      this._origin,
      this._capacity,
      this._level,
      this._root,
      this._tail,
      ownerID,
      this.__hash
    );
  };

  return List;
}(IndexedCollection));

List.isList = isList;

var ListPrototype = List.prototype;
ListPrototype[IS_LIST_SYMBOL] = true;
ListPrototype[DELETE] = ListPrototype.remove;
ListPrototype.merge = ListPrototype.concat;
ListPrototype.setIn = setIn$1;
ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
ListPrototype.update = update$1;
ListPrototype.updateIn = updateIn$1;
ListPrototype.mergeIn = mergeIn;
ListPrototype.mergeDeepIn = mergeDeepIn;
ListPrototype.withMutations = withMutations;
ListPrototype.wasAltered = wasAltered;
ListPrototype.asImmutable = asImmutable;
ListPrototype['@@transducer/init'] = ListPrototype.asMutable = asMutable;
ListPrototype['@@transducer/step'] = function(result, arr) {
  return result.push(arr);
};
ListPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

var VNode = function VNode(array, ownerID) {
  this.array = array;
  this.ownerID = ownerID;
};

// TODO: seems like these methods are very similar

VNode.prototype.removeBefore = function removeBefore (ownerID, level, index) {
  if (index === level ? 1 << level : this.array.length === 0) {
    return this;
  }
  var originIndex = (index >>> level) & MASK;
  if (originIndex >= this.array.length) {
    return new VNode([], ownerID);
  }
  var removingFirst = originIndex === 0;
  var newChild;
  if (level > 0) {
    var oldChild = this.array[originIndex];
    newChild =
      oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
    if (newChild === oldChild && removingFirst) {
      return this;
    }
  }
  if (removingFirst && !newChild) {
    return this;
  }
  var editable = editableVNode(this, ownerID);
  if (!removingFirst) {
    for (var ii = 0; ii < originIndex; ii++) {
      editable.array[ii] = undefined;
    }
  }
  if (newChild) {
    editable.array[originIndex] = newChild;
  }
  return editable;
};

VNode.prototype.removeAfter = function removeAfter (ownerID, level, index) {
  if (index === (level ? 1 << level : 0) || this.array.length === 0) {
    return this;
  }
  var sizeIndex = ((index - 1) >>> level) & MASK;
  if (sizeIndex >= this.array.length) {
    return this;
  }

  var newChild;
  if (level > 0) {
    var oldChild = this.array[sizeIndex];
    newChild =
      oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
    if (newChild === oldChild && sizeIndex === this.array.length - 1) {
      return this;
    }
  }

  var editable = editableVNode(this, ownerID);
  editable.array.splice(sizeIndex + 1);
  if (newChild) {
    editable.array[sizeIndex] = newChild;
  }
  return editable;
};

var DONE = {};

function iterateList(list, reverse) {
  var left = list._origin;
  var right = list._capacity;
  var tailPos = getTailOffset(right);
  var tail = list._tail;

  return iterateNodeOrLeaf(list._root, list._level, 0);

  function iterateNodeOrLeaf(node, level, offset) {
    return level === 0
      ? iterateLeaf(node, offset)
      : iterateNode(node, level, offset);
  }

  function iterateLeaf(node, offset) {
    var array = offset === tailPos ? tail && tail.array : node && node.array;
    var from = offset > left ? 0 : left - offset;
    var to = right - offset;
    if (to > SIZE) {
      to = SIZE;
    }
    return function () {
      if (from === to) {
        return DONE;
      }
      var idx = reverse ? --to : from++;
      return array && array[idx];
    };
  }

  function iterateNode(node, level, offset) {
    var values;
    var array = node && node.array;
    var from = offset > left ? 0 : (left - offset) >> level;
    var to = ((right - offset) >> level) + 1;
    if (to > SIZE) {
      to = SIZE;
    }
    return function () {
      while (true) {
        if (values) {
          var value = values();
          if (value !== DONE) {
            return value;
          }
          values = null;
        }
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        values = iterateNodeOrLeaf(
          array && array[idx],
          level - SHIFT,
          offset + (idx << level)
        );
      }
    };
  }
}

function makeList(origin, capacity, level, root, tail, ownerID, hash) {
  var list = Object.create(ListPrototype);
  list.size = capacity - origin;
  list._origin = origin;
  list._capacity = capacity;
  list._level = level;
  list._root = root;
  list._tail = tail;
  list.__ownerID = ownerID;
  list.__hash = hash;
  list.__altered = false;
  return list;
}

var EMPTY_LIST;
function emptyList() {
  return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
}

function updateList(list, index, value) {
  index = wrapIndex(list, index);

  if (index !== index) {
    return list;
  }

  if (index >= list.size || index < 0) {
    return list.withMutations(function (list) {
      index < 0
        ? setListBounds(list, index).set(0, value)
        : setListBounds(list, 0, index + 1).set(index, value);
    });
  }

  index += list._origin;

  var newTail = list._tail;
  var newRoot = list._root;
  var didAlter = MakeRef();
  if (index >= getTailOffset(list._capacity)) {
    newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
  } else {
    newRoot = updateVNode(
      newRoot,
      list.__ownerID,
      list._level,
      index,
      value,
      didAlter
    );
  }

  if (!didAlter.value) {
    return list;
  }

  if (list.__ownerID) {
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }
  return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
}

function updateVNode(node, ownerID, level, index, value, didAlter) {
  var idx = (index >>> level) & MASK;
  var nodeHas = node && idx < node.array.length;
  if (!nodeHas && value === undefined) {
    return node;
  }

  var newNode;

  if (level > 0) {
    var lowerNode = node && node.array[idx];
    var newLowerNode = updateVNode(
      lowerNode,
      ownerID,
      level - SHIFT,
      index,
      value,
      didAlter
    );
    if (newLowerNode === lowerNode) {
      return node;
    }
    newNode = editableVNode(node, ownerID);
    newNode.array[idx] = newLowerNode;
    return newNode;
  }

  if (nodeHas && node.array[idx] === value) {
    return node;
  }

  if (didAlter) {
    SetRef(didAlter);
  }

  newNode = editableVNode(node, ownerID);
  if (value === undefined && idx === newNode.array.length - 1) {
    newNode.array.pop();
  } else {
    newNode.array[idx] = value;
  }
  return newNode;
}

function editableVNode(node, ownerID) {
  if (ownerID && node && ownerID === node.ownerID) {
    return node;
  }
  return new VNode(node ? node.array.slice() : [], ownerID);
}

function listNodeFor(list, rawIndex) {
  if (rawIndex >= getTailOffset(list._capacity)) {
    return list._tail;
  }
  if (rawIndex < 1 << (list._level + SHIFT)) {
    var node = list._root;
    var level = list._level;
    while (node && level > 0) {
      node = node.array[(rawIndex >>> level) & MASK];
      level -= SHIFT;
    }
    return node;
  }
}

function setListBounds(list, begin, end) {
  // Sanitize begin & end using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  if (begin !== undefined) {
    begin |= 0;
  }
  if (end !== undefined) {
    end |= 0;
  }
  var owner = list.__ownerID || new OwnerID();
  var oldOrigin = list._origin;
  var oldCapacity = list._capacity;
  var newOrigin = oldOrigin + begin;
  var newCapacity =
    end === undefined
      ? oldCapacity
      : end < 0
        ? oldCapacity + end
        : oldOrigin + end;
  if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
    return list;
  }

  // If it's going to end after it starts, it's empty.
  if (newOrigin >= newCapacity) {
    return list.clear();
  }

  var newLevel = list._level;
  var newRoot = list._root;

  // New origin might need creating a higher root.
  var offsetShift = 0;
  while (newOrigin + offsetShift < 0) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [undefined, newRoot] : [],
      owner
    );
    newLevel += SHIFT;
    offsetShift += 1 << newLevel;
  }
  if (offsetShift) {
    newOrigin += offsetShift;
    oldOrigin += offsetShift;
    newCapacity += offsetShift;
    oldCapacity += offsetShift;
  }

  var oldTailOffset = getTailOffset(oldCapacity);
  var newTailOffset = getTailOffset(newCapacity);

  // New size might need creating a higher root.
  while (newTailOffset >= 1 << (newLevel + SHIFT)) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [newRoot] : [],
      owner
    );
    newLevel += SHIFT;
  }

  // Locate or create the new tail.
  var oldTail = list._tail;
  var newTail =
    newTailOffset < oldTailOffset
      ? listNodeFor(list, newCapacity - 1)
      : newTailOffset > oldTailOffset
        ? new VNode([], owner)
        : oldTail;

  // Merge Tail into tree.
  if (
    oldTail &&
    newTailOffset > oldTailOffset &&
    newOrigin < oldCapacity &&
    oldTail.array.length
  ) {
    newRoot = editableVNode(newRoot, owner);
    var node = newRoot;
    for (var level = newLevel; level > SHIFT; level -= SHIFT) {
      var idx = (oldTailOffset >>> level) & MASK;
      node = node.array[idx] = editableVNode(node.array[idx], owner);
    }
    node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
  }

  // If the size has been reduced, there's a chance the tail needs to be trimmed.
  if (newCapacity < oldCapacity) {
    newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
  }

  // If the new origin is within the tail, then we do not need a root.
  if (newOrigin >= newTailOffset) {
    newOrigin -= newTailOffset;
    newCapacity -= newTailOffset;
    newLevel = SHIFT;
    newRoot = null;
    newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
  } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
    offsetShift = 0;

    // Identify the new top root node of the subtree of the old root.
    while (newRoot) {
      var beginIndex = (newOrigin >>> newLevel) & MASK;
      if ((beginIndex !== newTailOffset >>> newLevel) & MASK) {
        break;
      }
      if (beginIndex) {
        offsetShift += (1 << newLevel) * beginIndex;
      }
      newLevel -= SHIFT;
      newRoot = newRoot.array[beginIndex];
    }

    // Trim the new sides of the new root.
    if (newRoot && newOrigin > oldOrigin) {
      newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
    }
    if (newRoot && newTailOffset < oldTailOffset) {
      newRoot = newRoot.removeAfter(
        owner,
        newLevel,
        newTailOffset - offsetShift
      );
    }
    if (offsetShift) {
      newOrigin -= offsetShift;
      newCapacity -= offsetShift;
    }
  }

  if (list.__ownerID) {
    list.size = newCapacity - newOrigin;
    list._origin = newOrigin;
    list._capacity = newCapacity;
    list._level = newLevel;
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }
  return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
}

function getTailOffset(size) {
  return size < SIZE ? 0 : ((size - 1) >>> SHIFT) << SHIFT;
}

var OrderedMap = /*@__PURE__*/(function (Map$$1) {
  function OrderedMap(value) {
    return value === null || value === undefined
      ? emptyOrderedMap()
      : isOrderedMap(value)
        ? value
        : emptyOrderedMap().withMutations(function (map) {
            var iter = KeyedCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v, k) { return map.set(k, v); });
          });
  }

  if ( Map$$1 ) OrderedMap.__proto__ = Map$$1;
  OrderedMap.prototype = Object.create( Map$$1 && Map$$1.prototype );
  OrderedMap.prototype.constructor = OrderedMap;

  OrderedMap.of = function of (/*...values*/) {
    return this(arguments);
  };

  OrderedMap.prototype.toString = function toString () {
    return this.__toString('OrderedMap {', '}');
  };

  // @pragma Access

  OrderedMap.prototype.get = function get (k, notSetValue) {
    var index = this._map.get(k);
    return index !== undefined ? this._list.get(index)[1] : notSetValue;
  };

  // @pragma Modification

  OrderedMap.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._map.clear();
      this._list.clear();
      return this;
    }
    return emptyOrderedMap();
  };

  OrderedMap.prototype.set = function set (k, v) {
    return updateOrderedMap(this, k, v);
  };

  OrderedMap.prototype.remove = function remove (k) {
    return updateOrderedMap(this, k, NOT_SET);
  };

  OrderedMap.prototype.wasAltered = function wasAltered () {
    return this._map.wasAltered() || this._list.wasAltered();
  };

  OrderedMap.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._list.__iterate(
      function (entry) { return entry && fn(entry[1], entry[0], this$1); },
      reverse
    );
  };

  OrderedMap.prototype.__iterator = function __iterator (type, reverse) {
    return this._list.fromEntrySeq().__iterator(type, reverse);
  };

  OrderedMap.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    var newList = this._list.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return emptyOrderedMap();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      this._list = newList;
      return this;
    }
    return makeOrderedMap(newMap, newList, ownerID, this.__hash);
  };

  return OrderedMap;
}(Map));

OrderedMap.isOrderedMap = isOrderedMap;

OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;

function makeOrderedMap(map, list, ownerID, hash) {
  var omap = Object.create(OrderedMap.prototype);
  omap.size = map ? map.size : 0;
  omap._map = map;
  omap._list = list;
  omap.__ownerID = ownerID;
  omap.__hash = hash;
  return omap;
}

var EMPTY_ORDERED_MAP;
function emptyOrderedMap() {
  return (
    EMPTY_ORDERED_MAP ||
    (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()))
  );
}

function updateOrderedMap(omap, k, v) {
  var map = omap._map;
  var list = omap._list;
  var i = map.get(k);
  var has = i !== undefined;
  var newMap;
  var newList;
  if (v === NOT_SET) {
    // removed
    if (!has) {
      return omap;
    }
    if (list.size >= SIZE && list.size >= map.size * 2) {
      newList = list.filter(function (entry, idx) { return entry !== undefined && i !== idx; });
      newMap = newList
        .toKeyedSeq()
        .map(function (entry) { return entry[0]; })
        .flip()
        .toMap();
      if (omap.__ownerID) {
        newMap.__ownerID = newList.__ownerID = omap.__ownerID;
      }
    } else {
      newMap = map.remove(k);
      newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
    }
  } else if (has) {
    if (v === list.get(i)[1]) {
      return omap;
    }
    newMap = map;
    newList = list.set(i, [k, v]);
  } else {
    newMap = map.set(k, list.size);
    newList = list.set(list.size, [k, v]);
  }
  if (omap.__ownerID) {
    omap.size = newMap.size;
    omap._map = newMap;
    omap._list = newList;
    omap.__hash = undefined;
    return omap;
  }
  return makeOrderedMap(newMap, newList);
}

var IS_STACK_SYMBOL = '@@__IMMUTABLE_STACK__@@';

function isStack(maybeStack) {
  return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL]);
}

var Stack = /*@__PURE__*/(function (IndexedCollection$$1) {
  function Stack(value) {
    return value === null || value === undefined
      ? emptyStack()
      : isStack(value)
        ? value
        : emptyStack().pushAll(value);
  }

  if ( IndexedCollection$$1 ) Stack.__proto__ = IndexedCollection$$1;
  Stack.prototype = Object.create( IndexedCollection$$1 && IndexedCollection$$1.prototype );
  Stack.prototype.constructor = Stack;

  Stack.of = function of (/*...values*/) {
    return this(arguments);
  };

  Stack.prototype.toString = function toString () {
    return this.__toString('Stack [', ']');
  };

  // @pragma Access

  Stack.prototype.get = function get (index, notSetValue) {
    var head = this._head;
    index = wrapIndex(this, index);
    while (head && index--) {
      head = head.next;
    }
    return head ? head.value : notSetValue;
  };

  Stack.prototype.peek = function peek () {
    return this._head && this._head.value;
  };

  // @pragma Modification

  Stack.prototype.push = function push (/*...values*/) {
    var arguments$1 = arguments;

    if (arguments.length === 0) {
      return this;
    }
    var newSize = this.size + arguments.length;
    var head = this._head;
    for (var ii = arguments.length - 1; ii >= 0; ii--) {
      head = {
        value: arguments$1[ii],
        next: head,
      };
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  Stack.prototype.pushAll = function pushAll (iter) {
    iter = IndexedCollection$$1(iter);
    if (iter.size === 0) {
      return this;
    }
    if (this.size === 0 && isStack(iter)) {
      return iter;
    }
    assertNotInfinite(iter.size);
    var newSize = this.size;
    var head = this._head;
    iter.__iterate(function (value) {
      newSize++;
      head = {
        value: value,
        next: head,
      };
    }, /* reverse */ true);
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  Stack.prototype.pop = function pop () {
    return this.slice(1);
  };

  Stack.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._head = undefined;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyStack();
  };

  Stack.prototype.slice = function slice (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    var resolvedBegin = resolveBegin(begin, this.size);
    var resolvedEnd = resolveEnd(end, this.size);
    if (resolvedEnd !== this.size) {
      // super.slice(begin, end);
      return IndexedCollection$$1.prototype.slice.call(this, begin, end);
    }
    var newSize = this.size - resolvedBegin;
    var head = this._head;
    while (resolvedBegin--) {
      head = head.next;
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  // @pragma Mutability

  Stack.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyStack();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeStack(this.size, this._head, ownerID, this.__hash);
  };

  // @pragma Iteration

  Stack.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return new ArraySeq(this.toArray()).__iterate(
        function (v, k) { return fn(v, k, this$1); },
        reverse
      );
    }
    var iterations = 0;
    var node = this._head;
    while (node) {
      if (fn(node.value, iterations++, this) === false) {
        break;
      }
      node = node.next;
    }
    return iterations;
  };

  Stack.prototype.__iterator = function __iterator (type, reverse) {
    if (reverse) {
      return new ArraySeq(this.toArray()).__iterator(type, reverse);
    }
    var iterations = 0;
    var node = this._head;
    return new Iterator(function () {
      if (node) {
        var value = node.value;
        node = node.next;
        return iteratorValue(type, iterations++, value);
      }
      return iteratorDone();
    });
  };

  return Stack;
}(IndexedCollection));

Stack.isStack = isStack;

var StackPrototype = Stack.prototype;
StackPrototype[IS_STACK_SYMBOL] = true;
StackPrototype.shift = StackPrototype.pop;
StackPrototype.unshift = StackPrototype.push;
StackPrototype.unshiftAll = StackPrototype.pushAll;
StackPrototype.withMutations = withMutations;
StackPrototype.wasAltered = wasAltered;
StackPrototype.asImmutable = asImmutable;
StackPrototype['@@transducer/init'] = StackPrototype.asMutable = asMutable;
StackPrototype['@@transducer/step'] = function(result, arr) {
  return result.unshift(arr);
};
StackPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

function makeStack(size, head, ownerID, hash) {
  var map = Object.create(StackPrototype);
  map.size = size;
  map._head = head;
  map.__ownerID = ownerID;
  map.__hash = hash;
  map.__altered = false;
  return map;
}

var EMPTY_STACK;
function emptyStack() {
  return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
}

var IS_SET_SYMBOL = '@@__IMMUTABLE_SET__@@';

function isSet(maybeSet) {
  return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL]);
}

function isOrderedSet(maybeOrderedSet) {
  return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
}

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    !isCollection(b) ||
    (a.size !== undefined && b.size !== undefined && a.size !== b.size) ||
    (a.__hash !== undefined &&
      b.__hash !== undefined &&
      a.__hash !== b.__hash) ||
    isKeyed(a) !== isKeyed(b) ||
    isIndexed(a) !== isIndexed(b) ||
    isOrdered(a) !== isOrdered(b)
  ) {
    return false;
  }

  if (a.size === 0 && b.size === 0) {
    return true;
  }

  var notAssociative = !isAssociative(a);

  if (isOrdered(a)) {
    var entries = a.entries();
    return (
      b.every(function (v, k) {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done
    );
  }

  var flipped = false;

  if (a.size === undefined) {
    if (b.size === undefined) {
      if (typeof a.cacheResult === 'function') {
        a.cacheResult();
      }
    } else {
      flipped = true;
      var _ = a;
      a = b;
      b = _;
    }
  }

  var allEqual = true;
  var bSize = b.__iterate(function (v, k) {
    if (
      notAssociative
        ? !a.has(v)
        : flipped
          ? !is(v, a.get(k, NOT_SET))
          : !is(a.get(k, NOT_SET), v)
    ) {
      allEqual = false;
      return false;
    }
  });

  return allEqual && a.size === bSize;
}

/**
 * Contributes additional methods to a constructor
 */
function mixin(ctor, methods) {
  var keyCopier = function (key) {
    ctor.prototype[key] = methods[key];
  };
  Object.keys(methods).forEach(keyCopier);
  Object.getOwnPropertySymbols &&
    Object.getOwnPropertySymbols(methods).forEach(keyCopier);
  return ctor;
}

function toJS(value) {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if (!isCollection(value)) {
    if (!isDataStructure(value)) {
      return value;
    }
    value = Seq(value);
  }
  if (isKeyed(value)) {
    var result$1 = {};
    value.__iterate(function (v, k) {
      result$1[k] = toJS(v);
    });
    return result$1;
  }
  var result = [];
  value.__iterate(function (v) {
    result.push(toJS(v));
  });
  return result;
}

var Set = /*@__PURE__*/(function (SetCollection$$1) {
  function Set(value) {
    return value === null || value === undefined
      ? emptySet()
      : isSet(value) && !isOrdered(value)
        ? value
        : emptySet().withMutations(function (set) {
            var iter = SetCollection$$1(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v) { return set.add(v); });
          });
  }

  if ( SetCollection$$1 ) Set.__proto__ = SetCollection$$1;
  Set.prototype = Object.create( SetCollection$$1 && SetCollection$$1.prototype );
  Set.prototype.constructor = Set;

  Set.of = function of (/*...values*/) {
    return this(arguments);
  };

  Set.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  Set.intersect = function intersect (sets) {
    sets = Collection(sets).toArray();
    return sets.length
      ? SetPrototype.intersect.apply(Set(sets.pop()), sets)
      : emptySet();
  };

  Set.union = function union (sets) {
    sets = Collection(sets).toArray();
    return sets.length
      ? SetPrototype.union.apply(Set(sets.pop()), sets)
      : emptySet();
  };

  Set.prototype.toString = function toString () {
    return this.__toString('Set {', '}');
  };

  // @pragma Access

  Set.prototype.has = function has (value) {
    return this._map.has(value);
  };

  // @pragma Modification

  Set.prototype.add = function add (value) {
    return updateSet(this, this._map.set(value, value));
  };

  Set.prototype.remove = function remove (value) {
    return updateSet(this, this._map.remove(value));
  };

  Set.prototype.clear = function clear () {
    return updateSet(this, this._map.clear());
  };

  // @pragma Composition

  Set.prototype.map = function map (mapper, context) {
    var this$1 = this;

    var removes = [];
    var adds = [];
    this.forEach(function (value) {
      var mapped = mapper.call(context, value, value, this$1);
      if (mapped !== value) {
        removes.push(value);
        adds.push(mapped);
      }
    });
    return this.withMutations(function (set) {
      removes.forEach(function (value) { return set.remove(value); });
      adds.forEach(function (value) { return set.add(value); });
    });
  };

  Set.prototype.union = function union () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    iters = iters.filter(function (x) { return x.size !== 0; });
    if (iters.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && iters.length === 1) {
      return this.constructor(iters[0]);
    }
    return this.withMutations(function (set) {
      for (var ii = 0; ii < iters.length; ii++) {
        SetCollection$$1(iters[ii]).forEach(function (value) { return set.add(value); });
      }
    });
  };

  Set.prototype.intersect = function intersect () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function (iter) { return SetCollection$$1(iter); });
    var toRemove = [];
    this.forEach(function (value) {
      if (!iters.every(function (iter) { return iter.includes(value); })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.subtract = function subtract () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function (iter) { return SetCollection$$1(iter); });
    var toRemove = [];
    this.forEach(function (value) {
      if (iters.some(function (iter) { return iter.includes(value); })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.sort = function sort (comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator));
  };

  Set.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator, mapper));
  };

  Set.prototype.wasAltered = function wasAltered () {
    return this._map.wasAltered();
  };

  Set.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._map.__iterate(function (k) { return fn(k, k, this$1); }, reverse);
  };

  Set.prototype.__iterator = function __iterator (type, reverse) {
    return this._map.__iterator(type, reverse);
  };

  Set.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return this.__empty();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }
    return this.__make(newMap, ownerID);
  };

  return Set;
}(SetCollection));

Set.isSet = isSet;

var SetPrototype = Set.prototype;
SetPrototype[IS_SET_SYMBOL] = true;
SetPrototype[DELETE] = SetPrototype.remove;
SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
SetPrototype.withMutations = withMutations;
SetPrototype.asImmutable = asImmutable;
SetPrototype['@@transducer/init'] = SetPrototype.asMutable = asMutable;
SetPrototype['@@transducer/step'] = function(result, arr) {
  return result.add(arr);
};
SetPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

SetPrototype.__empty = emptySet;
SetPrototype.__make = makeSet;

function updateSet(set, newMap) {
  if (set.__ownerID) {
    set.size = newMap.size;
    set._map = newMap;
    return set;
  }
  return newMap === set._map
    ? set
    : newMap.size === 0
      ? set.__empty()
      : set.__make(newMap);
}

function makeSet(map, ownerID) {
  var set = Object.create(SetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_SET;
function emptySet() {
  return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
}

/**
 * Returns a lazy seq of nums from start (inclusive) to end
 * (exclusive), by step, where start defaults to 0, step to 1, and end to
 * infinity. When start is equal to end, returns empty list.
 */
var Range = /*@__PURE__*/(function (IndexedSeq$$1) {
  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      return new Range(start, end, step);
    }
    invariant(step !== 0, 'Cannot step a Range by 0');
    start = start || 0;
    if (end === undefined) {
      end = Infinity;
    }
    step = step === undefined ? 1 : Math.abs(step);
    if (end < start) {
      step = -step;
    }
    this._start = start;
    this._end = end;
    this._step = step;
    this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
    if (this.size === 0) {
      if (EMPTY_RANGE) {
        return EMPTY_RANGE;
      }
      EMPTY_RANGE = this;
    }
  }

  if ( IndexedSeq$$1 ) Range.__proto__ = IndexedSeq$$1;
  Range.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  Range.prototype.constructor = Range;

  Range.prototype.toString = function toString () {
    if (this.size === 0) {
      return 'Range []';
    }
    return (
      'Range [ ' +
      this._start +
      '...' +
      this._end +
      (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]'
    );
  };

  Range.prototype.get = function get (index, notSetValue) {
    return this.has(index)
      ? this._start + wrapIndex(this, index) * this._step
      : notSetValue;
  };

  Range.prototype.includes = function includes (searchValue) {
    var possibleIndex = (searchValue - this._start) / this._step;
    return (
      possibleIndex >= 0 &&
      possibleIndex < this.size &&
      possibleIndex === Math.floor(possibleIndex)
    );
  };

  Range.prototype.slice = function slice (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    begin = resolveBegin(begin, this.size);
    end = resolveEnd(end, this.size);
    if (end <= begin) {
      return new Range(0, 0);
    }
    return new Range(
      this.get(begin, this._end),
      this.get(end, this._end),
      this._step
    );
  };

  Range.prototype.indexOf = function indexOf (searchValue) {
    var offsetValue = searchValue - this._start;
    if (offsetValue % this._step === 0) {
      var index = offsetValue / this._step;
      if (index >= 0 && index < this.size) {
        return index;
      }
    }
    return -1;
  };

  Range.prototype.lastIndexOf = function lastIndexOf (searchValue) {
    return this.indexOf(searchValue);
  };

  Range.prototype.__iterate = function __iterate (fn, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    while (i !== size) {
      if (fn(value, reverse ? size - ++i : i++, this) === false) {
        break;
      }
      value += reverse ? -step : step;
    }
    return i;
  };

  Range.prototype.__iterator = function __iterator (type, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var v = value;
      value += reverse ? -step : step;
      return iteratorValue(type, reverse ? size - ++i : i++, v);
    });
  };

  Range.prototype.equals = function equals (other) {
    return other instanceof Range
      ? this._start === other._start &&
          this._end === other._end &&
          this._step === other._step
      : deepEqual(this, other);
  };

  return Range;
}(IndexedSeq));

var EMPTY_RANGE;

function getIn(collection, searchKeyPath, notSetValue) {
  var keyPath = coerceKeyPath(searchKeyPath);
  var i = 0;
  while (i !== keyPath.length) {
    collection = get(collection, keyPath[i++], NOT_SET);
    if (collection === NOT_SET) {
      return notSetValue;
    }
  }
  return collection;
}

function getIn$1(searchKeyPath, notSetValue) {
  return getIn(this, searchKeyPath, notSetValue);
}

function hasIn(collection, keyPath) {
  return getIn(collection, keyPath, NOT_SET) !== NOT_SET;
}

function hasIn$1(searchKeyPath) {
  return hasIn(this, searchKeyPath);
}

function toObject() {
  assertNotInfinite(this.size);
  var object = {};
  this.__iterate(function (v, k) {
    object[k] = v;
  });
  return object;
}

// Note: all of these methods are deprecated.
Collection.isIterable = isCollection;
Collection.isKeyed = isKeyed;
Collection.isIndexed = isIndexed;
Collection.isAssociative = isAssociative;
Collection.isOrdered = isOrdered;

Collection.Iterator = Iterator;

mixin(Collection, {
  // ### Conversion to other types

  toArray: function toArray() {
    assertNotInfinite(this.size);
    var array = new Array(this.size || 0);
    var useTuples = isKeyed(this);
    var i = 0;
    this.__iterate(function (v, k) {
      // Keyed collections produce an array of tuples.
      array[i++] = useTuples ? [k, v] : v;
    });
    return array;
  },

  toIndexedSeq: function toIndexedSeq() {
    return new ToIndexedSequence(this);
  },

  toJS: function toJS$1() {
    return toJS(this);
  },

  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, true);
  },

  toMap: function toMap() {
    // Use Late Binding here to solve the circular dependency.
    return Map(this.toKeyedSeq());
  },

  toObject: toObject,

  toOrderedMap: function toOrderedMap() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedMap(this.toKeyedSeq());
  },

  toOrderedSet: function toOrderedSet() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
  },

  toSet: function toSet() {
    // Use Late Binding here to solve the circular dependency.
    return Set(isKeyed(this) ? this.valueSeq() : this);
  },

  toSetSeq: function toSetSeq() {
    return new ToSetSequence(this);
  },

  toSeq: function toSeq() {
    return isIndexed(this)
      ? this.toIndexedSeq()
      : isKeyed(this)
        ? this.toKeyedSeq()
        : this.toSetSeq();
  },

  toStack: function toStack() {
    // Use Late Binding here to solve the circular dependency.
    return Stack(isKeyed(this) ? this.valueSeq() : this);
  },

  toList: function toList() {
    // Use Late Binding here to solve the circular dependency.
    return List(isKeyed(this) ? this.valueSeq() : this);
  },

  // ### Common JavaScript methods and properties

  toString: function toString() {
    return '[Collection]';
  },

  __toString: function __toString(head, tail) {
    if (this.size === 0) {
      return head + tail;
    }
    return (
      head +
      ' ' +
      this.toSeq()
        .map(this.__toStringMapper)
        .join(', ') +
      ' ' +
      tail
    );
  },

  // ### ES6 Collection methods (ES6 Array and Map)

  concat: function concat() {
    var values = [], len = arguments.length;
    while ( len-- ) values[ len ] = arguments[ len ];

    return reify(this, concatFactory(this, values));
  },

  includes: function includes(searchValue) {
    return this.some(function (value) { return is(value, searchValue); });
  },

  entries: function entries() {
    return this.__iterator(ITERATE_ENTRIES);
  },

  every: function every(predicate, context) {
    assertNotInfinite(this.size);
    var returnValue = true;
    this.__iterate(function (v, k, c) {
      if (!predicate.call(context, v, k, c)) {
        returnValue = false;
        return false;
      }
    });
    return returnValue;
  },

  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, true));
  },

  find: function find(predicate, context, notSetValue) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[1] : notSetValue;
  },

  forEach: function forEach(sideEffect, context) {
    assertNotInfinite(this.size);
    return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
  },

  join: function join(separator) {
    assertNotInfinite(this.size);
    separator = separator !== undefined ? '' + separator : ',';
    var joined = '';
    var isFirst = true;
    this.__iterate(function (v) {
      isFirst ? (isFirst = false) : (joined += separator);
      joined += v !== null && v !== undefined ? v.toString() : '';
    });
    return joined;
  },

  keys: function keys() {
    return this.__iterator(ITERATE_KEYS);
  },

  map: function map(mapper, context) {
    return reify(this, mapFactory(this, mapper, context));
  },

  reduce: function reduce$1(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      false
    );
  },

  reduceRight: function reduceRight(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      true
    );
  },

  reverse: function reverse() {
    return reify(this, reverseFactory(this, true));
  },

  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, true));
  },

  some: function some(predicate, context) {
    return !this.every(not(predicate), context);
  },

  sort: function sort(comparator) {
    return reify(this, sortFactory(this, comparator));
  },

  values: function values() {
    return this.__iterator(ITERATE_VALUES);
  },

  // ### More sequential methods

  butLast: function butLast() {
    return this.slice(0, -1);
  },

  isEmpty: function isEmpty() {
    return this.size !== undefined ? this.size === 0 : !this.some(function () { return true; });
  },

  count: function count(predicate, context) {
    return ensureSize(
      predicate ? this.toSeq().filter(predicate, context) : this
    );
  },

  countBy: function countBy(grouper, context) {
    return countByFactory(this, grouper, context);
  },

  equals: function equals(other) {
    return deepEqual(this, other);
  },

  entrySeq: function entrySeq() {
    var collection = this;
    if (collection._cache) {
      // We cache as an entries array, so we can just return the cache!
      return new ArraySeq(collection._cache);
    }
    var entriesSequence = collection
      .toSeq()
      .map(entryMapper)
      .toIndexedSeq();
    entriesSequence.fromEntrySeq = function () { return collection.toSeq(); };
    return entriesSequence;
  },

  filterNot: function filterNot(predicate, context) {
    return this.filter(not(predicate), context);
  },

  findEntry: function findEntry(predicate, context, notSetValue) {
    var found = notSetValue;
    this.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        found = [k, v];
        return false;
      }
    });
    return found;
  },

  findKey: function findKey(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry && entry[0];
  },

  findLast: function findLast(predicate, context, notSetValue) {
    return this.toKeyedSeq()
      .reverse()
      .find(predicate, context, notSetValue);
  },

  findLastEntry: function findLastEntry(predicate, context, notSetValue) {
    return this.toKeyedSeq()
      .reverse()
      .findEntry(predicate, context, notSetValue);
  },

  findLastKey: function findLastKey(predicate, context) {
    return this.toKeyedSeq()
      .reverse()
      .findKey(predicate, context);
  },

  first: function first(notSetValue) {
    return this.find(returnTrue, null, notSetValue);
  },

  flatMap: function flatMap(mapper, context) {
    return reify(this, flatMapFactory(this, mapper, context));
  },

  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, true));
  },

  fromEntrySeq: function fromEntrySeq() {
    return new FromEntriesSequence(this);
  },

  get: function get(searchKey, notSetValue) {
    return this.find(function (_, key) { return is(key, searchKey); }, undefined, notSetValue);
  },

  getIn: getIn$1,

  groupBy: function groupBy(grouper, context) {
    return groupByFactory(this, grouper, context);
  },

  has: function has(searchKey) {
    return this.get(searchKey, NOT_SET) !== NOT_SET;
  },

  hasIn: hasIn$1,

  isSubset: function isSubset(iter) {
    iter = typeof iter.includes === 'function' ? iter : Collection(iter);
    return this.every(function (value) { return iter.includes(value); });
  },

  isSuperset: function isSuperset(iter) {
    iter = typeof iter.isSubset === 'function' ? iter : Collection(iter);
    return iter.isSubset(this);
  },

  keyOf: function keyOf(searchValue) {
    return this.findKey(function (value) { return is(value, searchValue); });
  },

  keySeq: function keySeq() {
    return this.toSeq()
      .map(keyMapper)
      .toIndexedSeq();
  },

  last: function last(notSetValue) {
    return this.toSeq()
      .reverse()
      .first(notSetValue);
  },

  lastKeyOf: function lastKeyOf(searchValue) {
    return this.toKeyedSeq()
      .reverse()
      .keyOf(searchValue);
  },

  max: function max(comparator) {
    return maxFactory(this, comparator);
  },

  maxBy: function maxBy(mapper, comparator) {
    return maxFactory(this, comparator, mapper);
  },

  min: function min(comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator
    );
  },

  minBy: function minBy(mapper, comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator,
      mapper
    );
  },

  rest: function rest() {
    return this.slice(1);
  },

  skip: function skip(amount) {
    return amount === 0 ? this : this.slice(Math.max(0, amount));
  },

  skipLast: function skipLast(amount) {
    return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
  },

  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, true));
  },

  skipUntil: function skipUntil(predicate, context) {
    return this.skipWhile(not(predicate), context);
  },

  sortBy: function sortBy(mapper, comparator) {
    return reify(this, sortFactory(this, comparator, mapper));
  },

  take: function take(amount) {
    return this.slice(0, Math.max(0, amount));
  },

  takeLast: function takeLast(amount) {
    return this.slice(-Math.max(0, amount));
  },

  takeWhile: function takeWhile(predicate, context) {
    return reify(this, takeWhileFactory(this, predicate, context));
  },

  takeUntil: function takeUntil(predicate, context) {
    return this.takeWhile(not(predicate), context);
  },

  update: function update(fn) {
    return fn(this);
  },

  valueSeq: function valueSeq() {
    return this.toIndexedSeq();
  },

  // ### Hashable Object

  hashCode: function hashCode() {
    return this.__hash || (this.__hash = hashCollection(this));
  },

  // ### Internal

  // abstract __iterate(fn, reverse)

  // abstract __iterator(type, reverse)
});

var CollectionPrototype = Collection.prototype;
CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
CollectionPrototype.toJSON = CollectionPrototype.toArray;
CollectionPrototype.__toStringMapper = quoteString;
CollectionPrototype.inspect = CollectionPrototype.toSource = function() {
  return this.toString();
};
CollectionPrototype.chain = CollectionPrototype.flatMap;
CollectionPrototype.contains = CollectionPrototype.includes;

mixin(KeyedCollection, {
  // ### More sequential methods

  flip: function flip() {
    return reify(this, flipFactory(this));
  },

  mapEntries: function mapEntries(mapper, context) {
    var this$1 = this;

    var iterations = 0;
    return reify(
      this,
      this.toSeq()
        .map(function (v, k) { return mapper.call(context, [k, v], iterations++, this$1); })
        .fromEntrySeq()
    );
  },

  mapKeys: function mapKeys(mapper, context) {
    var this$1 = this;

    return reify(
      this,
      this.toSeq()
        .flip()
        .map(function (k, v) { return mapper.call(context, k, v, this$1); })
        .flip()
    );
  },
});

var KeyedCollectionPrototype = KeyedCollection.prototype;
KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
KeyedCollectionPrototype.toJSON = toObject;
KeyedCollectionPrototype.__toStringMapper = function (v, k) { return quoteString(k) + ': ' + quoteString(v); };

mixin(IndexedCollection, {
  // ### Conversion to other types

  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, false);
  },

  // ### ES6 Collection methods (ES6 Array and Map)

  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, false));
  },

  findIndex: function findIndex(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[0] : -1;
  },

  indexOf: function indexOf(searchValue) {
    var key = this.keyOf(searchValue);
    return key === undefined ? -1 : key;
  },

  lastIndexOf: function lastIndexOf(searchValue) {
    var key = this.lastKeyOf(searchValue);
    return key === undefined ? -1 : key;
  },

  reverse: function reverse() {
    return reify(this, reverseFactory(this, false));
  },

  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, false));
  },

  splice: function splice(index, removeNum /*, ...values*/) {
    var numArgs = arguments.length;
    removeNum = Math.max(removeNum || 0, 0);
    if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
      return this;
    }
    // If index is negative, it should resolve relative to the size of the
    // collection. However size may be expensive to compute if not cached, so
    // only call count() if the number is in fact negative.
    index = resolveBegin(index, index < 0 ? this.count() : this.size);
    var spliced = this.slice(0, index);
    return reify(
      this,
      numArgs === 1
        ? spliced
        : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
    );
  },

  // ### More collection methods

  findLastIndex: function findLastIndex(predicate, context) {
    var entry = this.findLastEntry(predicate, context);
    return entry ? entry[0] : -1;
  },

  first: function first(notSetValue) {
    return this.get(0, notSetValue);
  },

  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, false));
  },

  get: function get(index, notSetValue) {
    index = wrapIndex(this, index);
    return index < 0 ||
      (this.size === Infinity || (this.size !== undefined && index > this.size))
      ? notSetValue
      : this.find(function (_, key) { return key === index; }, undefined, notSetValue);
  },

  has: function has(index) {
    index = wrapIndex(this, index);
    return (
      index >= 0 &&
      (this.size !== undefined
        ? this.size === Infinity || index < this.size
        : this.indexOf(index) !== -1)
    );
  },

  interpose: function interpose(separator) {
    return reify(this, interposeFactory(this, separator));
  },

  interleave: function interleave(/*...collections*/) {
    var collections = [this].concat(arrCopy(arguments));
    var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
    var interleaved = zipped.flatten(true);
    if (zipped.size) {
      interleaved.size = zipped.size * collections.length;
    }
    return reify(this, interleaved);
  },

  keySeq: function keySeq() {
    return Range(0, this.size);
  },

  last: function last(notSetValue) {
    return this.get(-1, notSetValue);
  },

  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, false));
  },

  zip: function zip(/*, ...collections */) {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections));
  },

  zipAll: function zipAll(/*, ...collections */) {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections, true));
  },

  zipWith: function zipWith(zipper /*, ...collections */) {
    var collections = arrCopy(arguments);
    collections[0] = this;
    return reify(this, zipWithFactory(this, zipper, collections));
  },
});

var IndexedCollectionPrototype = IndexedCollection.prototype;
IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;

mixin(SetCollection, {
  // ### ES6 Collection methods (ES6 Array and Map)

  get: function get(value, notSetValue) {
    return this.has(value) ? value : notSetValue;
  },

  includes: function includes(value) {
    return this.has(value);
  },

  // ### More sequential methods

  keySeq: function keySeq() {
    return this.valueSeq();
  },
});

SetCollection.prototype.has = CollectionPrototype.includes;
SetCollection.prototype.contains = SetCollection.prototype.includes;

// Mixin subclasses

mixin(KeyedSeq, KeyedCollection.prototype);
mixin(IndexedSeq, IndexedCollection.prototype);
mixin(SetSeq, SetCollection.prototype);

// #pragma Helper functions

function reduce(collection, reducer, reduction, context, useFirst, reverse) {
  assertNotInfinite(collection.size);
  collection.__iterate(function (v, k, c) {
    if (useFirst) {
      useFirst = false;
      reduction = v;
    } else {
      reduction = reducer.call(context, reduction, v, k, c);
    }
  }, reverse);
  return reduction;
}

function keyMapper(v, k) {
  return k;
}

function entryMapper(v, k) {
  return [k, v];
}

function not(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}

function neg(predicate) {
  return function() {
    return -predicate.apply(this, arguments);
  };
}

function defaultZipper() {
  return arrCopy(arguments);
}

function defaultNegComparator(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}

function hashCollection(collection) {
  if (collection.size === Infinity) {
    return 0;
  }
  var ordered = isOrdered(collection);
  var keyed = isKeyed(collection);
  var h = ordered ? 1 : 0;
  var size = collection.__iterate(
    keyed
      ? ordered
        ? function (v, k) {
            h = (31 * h + hashMerge(hash(v), hash(k))) | 0;
          }
        : function (v, k) {
            h = (h + hashMerge(hash(v), hash(k))) | 0;
          }
      : ordered
        ? function (v) {
            h = (31 * h + hash(v)) | 0;
          }
        : function (v) {
            h = (h + hash(v)) | 0;
          }
  );
  return murmurHashOfSize(size, h);
}

function murmurHashOfSize(size, h) {
  h = imul(h, 0xcc9e2d51);
  h = imul((h << 15) | (h >>> -15), 0x1b873593);
  h = imul((h << 13) | (h >>> -13), 5);
  h = ((h + 0xe6546b64) | 0) ^ size;
  h = imul(h ^ (h >>> 16), 0x85ebca6b);
  h = imul(h ^ (h >>> 13), 0xc2b2ae35);
  h = smi(h ^ (h >>> 16));
  return h;
}

function hashMerge(a, b) {
  return (a ^ (b + 0x9e3779b9 + (a << 6) + (a >> 2))) | 0; // int
}

var OrderedSet = /*@__PURE__*/(function (Set$$1) {
  function OrderedSet(value) {
    return value === null || value === undefined
      ? emptyOrderedSet()
      : isOrderedSet(value)
        ? value
        : emptyOrderedSet().withMutations(function (set) {
            var iter = SetCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v) { return set.add(v); });
          });
  }

  if ( Set$$1 ) OrderedSet.__proto__ = Set$$1;
  OrderedSet.prototype = Object.create( Set$$1 && Set$$1.prototype );
  OrderedSet.prototype.constructor = OrderedSet;

  OrderedSet.of = function of (/*...values*/) {
    return this(arguments);
  };

  OrderedSet.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  OrderedSet.prototype.toString = function toString () {
    return this.__toString('OrderedSet {', '}');
  };

  return OrderedSet;
}(Set));

OrderedSet.isOrderedSet = isOrderedSet;

var OrderedSetPrototype = OrderedSet.prototype;
OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;

OrderedSetPrototype.__empty = emptyOrderedSet;
OrderedSetPrototype.__make = makeOrderedSet;

function makeOrderedSet(map, ownerID) {
  var set = Object.create(OrderedSetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_ORDERED_SET;
function emptyOrderedSet() {
  return (
    EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()))
  );
}

var Record = function Record(defaultValues, name) {
  var hasInitialized;

  var RecordType = function Record(values) {
    var this$1 = this;

    if (values instanceof RecordType) {
      return values;
    }
    if (!(this instanceof RecordType)) {
      return new RecordType(values);
    }
    if (!hasInitialized) {
      hasInitialized = true;
      var keys = Object.keys(defaultValues);
      var indices = (RecordTypePrototype._indices = {});
      // Deprecated: left to attempt not to break any external code which
      // relies on a ._name property existing on record instances.
      // Use Record.getDescriptiveName() instead
      RecordTypePrototype._name = name;
      RecordTypePrototype._keys = keys;
      RecordTypePrototype._defaultValues = defaultValues;
      for (var i = 0; i < keys.length; i++) {
        var propName = keys[i];
        indices[propName] = i;
        if (RecordTypePrototype[propName]) {
          /* eslint-disable no-console */
          typeof console === 'object' &&
            console.warn &&
            console.warn(
              'Cannot define ' +
                recordName(this) +
                ' with property "' +
                propName +
                '" since that property name is part of the Record API.'
            );
          /* eslint-enable no-console */
        } else {
          setProp(RecordTypePrototype, propName);
        }
      }
    }
    this.__ownerID = undefined;
    this._values = List().withMutations(function (l) {
      l.setSize(this$1._keys.length);
      KeyedCollection(values).forEach(function (v, k) {
        l.set(this$1._indices[k], v === this$1._defaultValues[k] ? undefined : v);
      });
    });
  };

  var RecordTypePrototype = (RecordType.prototype = Object.create(
    RecordPrototype
  ));
  RecordTypePrototype.constructor = RecordType;

  if (name) {
    RecordType.displayName = name;
  }

  return RecordType;
};

Record.prototype.toString = function toString () {
  var str = recordName(this) + ' { ';
  var keys = this._keys;
  var k;
  for (var i = 0, l = keys.length; i !== l; i++) {
    k = keys[i];
    str += (i ? ', ' : '') + k + ': ' + quoteString(this.get(k));
  }
  return str + ' }';
};

Record.prototype.equals = function equals (other) {
  return (
    this === other ||
    (other &&
      this._keys === other._keys &&
      recordSeq(this).equals(recordSeq(other)))
  );
};

Record.prototype.hashCode = function hashCode () {
  return recordSeq(this).hashCode();
};

// @pragma Access

Record.prototype.has = function has (k) {
  return this._indices.hasOwnProperty(k);
};

Record.prototype.get = function get (k, notSetValue) {
  if (!this.has(k)) {
    return notSetValue;
  }
  var index = this._indices[k];
  var value = this._values.get(index);
  return value === undefined ? this._defaultValues[k] : value;
};

// @pragma Modification

Record.prototype.set = function set (k, v) {
  if (this.has(k)) {
    var newValues = this._values.set(
      this._indices[k],
      v === this._defaultValues[k] ? undefined : v
    );
    if (newValues !== this._values && !this.__ownerID) {
      return makeRecord(this, newValues);
    }
  }
  return this;
};

Record.prototype.remove = function remove (k) {
  return this.set(k);
};

Record.prototype.clear = function clear () {
  var newValues = this._values.clear().setSize(this._keys.length);
  return this.__ownerID ? this : makeRecord(this, newValues);
};

Record.prototype.wasAltered = function wasAltered () {
  return this._values.wasAltered();
};

Record.prototype.toSeq = function toSeq () {
  return recordSeq(this);
};

Record.prototype.toJS = function toJS$1 () {
  return toJS(this);
};

Record.prototype.entries = function entries () {
  return this.__iterator(ITERATE_ENTRIES);
};

Record.prototype.__iterator = function __iterator (type, reverse) {
  return recordSeq(this).__iterator(type, reverse);
};

Record.prototype.__iterate = function __iterate (fn, reverse) {
  return recordSeq(this).__iterate(fn, reverse);
};

Record.prototype.__ensureOwner = function __ensureOwner (ownerID) {
  if (ownerID === this.__ownerID) {
    return this;
  }
  var newValues = this._values.__ensureOwner(ownerID);
  if (!ownerID) {
    this.__ownerID = ownerID;
    this._values = newValues;
    return this;
  }
  return makeRecord(this, newValues, ownerID);
};

Record.isRecord = isRecord;
Record.getDescriptiveName = recordName;
var RecordPrototype = Record.prototype;
RecordPrototype[IS_RECORD_SYMBOL] = true;
RecordPrototype[DELETE] = RecordPrototype.remove;
RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
RecordPrototype.getIn = getIn$1;
RecordPrototype.hasIn = CollectionPrototype.hasIn;
RecordPrototype.merge = merge;
RecordPrototype.mergeWith = mergeWith;
RecordPrototype.mergeIn = mergeIn;
RecordPrototype.mergeDeep = mergeDeep$1;
RecordPrototype.mergeDeepWith = mergeDeepWith$1;
RecordPrototype.mergeDeepIn = mergeDeepIn;
RecordPrototype.setIn = setIn$1;
RecordPrototype.update = update$1;
RecordPrototype.updateIn = updateIn$1;
RecordPrototype.withMutations = withMutations;
RecordPrototype.asMutable = asMutable;
RecordPrototype.asImmutable = asImmutable;
RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
RecordPrototype.toJSON = RecordPrototype.toObject =
  CollectionPrototype.toObject;
RecordPrototype.inspect = RecordPrototype.toSource = function() {
  return this.toString();
};

function makeRecord(likeRecord, values, ownerID) {
  var record = Object.create(Object.getPrototypeOf(likeRecord));
  record._values = values;
  record.__ownerID = ownerID;
  return record;
}

function recordName(record) {
  return record.constructor.displayName || record.constructor.name || 'Record';
}

function recordSeq(record) {
  return keyedSeqFromValue(record._keys.map(function (k) { return [k, record.get(k)]; }));
}

function setProp(prototype, name) {
  try {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      },
    });
  } catch (error) {
    // Object.defineProperty failed. Probably IE8.
  }
}

/**
 * Returns a lazy Seq of `value` repeated `times` times. When `times` is
 * undefined, returns an infinite sequence of `value`.
 */
var Repeat = /*@__PURE__*/(function (IndexedSeq$$1) {
  function Repeat(value, times) {
    if (!(this instanceof Repeat)) {
      return new Repeat(value, times);
    }
    this._value = value;
    this.size = times === undefined ? Infinity : Math.max(0, times);
    if (this.size === 0) {
      if (EMPTY_REPEAT) {
        return EMPTY_REPEAT;
      }
      EMPTY_REPEAT = this;
    }
  }

  if ( IndexedSeq$$1 ) Repeat.__proto__ = IndexedSeq$$1;
  Repeat.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  Repeat.prototype.constructor = Repeat;

  Repeat.prototype.toString = function toString () {
    if (this.size === 0) {
      return 'Repeat []';
    }
    return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
  };

  Repeat.prototype.get = function get (index, notSetValue) {
    return this.has(index) ? this._value : notSetValue;
  };

  Repeat.prototype.includes = function includes (searchValue) {
    return is(this._value, searchValue);
  };

  Repeat.prototype.slice = function slice (begin, end) {
    var size = this.size;
    return wholeSlice(begin, end, size)
      ? this
      : new Repeat(
          this._value,
          resolveEnd(end, size) - resolveBegin(begin, size)
        );
  };

  Repeat.prototype.reverse = function reverse () {
    return this;
  };

  Repeat.prototype.indexOf = function indexOf (searchValue) {
    if (is(this._value, searchValue)) {
      return 0;
    }
    return -1;
  };

  Repeat.prototype.lastIndexOf = function lastIndexOf (searchValue) {
    if (is(this._value, searchValue)) {
      return this.size;
    }
    return -1;
  };

  Repeat.prototype.__iterate = function __iterate (fn, reverse) {
    var size = this.size;
    var i = 0;
    while (i !== size) {
      if (fn(this._value, reverse ? size - ++i : i++, this) === false) {
        break;
      }
    }
    return i;
  };

  Repeat.prototype.__iterator = function __iterator (type, reverse) {
    var this$1 = this;

    var size = this.size;
    var i = 0;
    return new Iterator(
      function () { return i === size
          ? iteratorDone()
          : iteratorValue(type, reverse ? size - ++i : i++, this$1._value); }
    );
  };

  Repeat.prototype.equals = function equals (other) {
    return other instanceof Repeat
      ? is(this._value, other._value)
      : deepEqual(other);
  };

  return Repeat;
}(IndexedSeq));

var EMPTY_REPEAT;

function fromJS(value, converter) {
  return fromJSWith(
    [],
    converter || defaultConverter,
    value,
    '',
    converter && converter.length > 2 ? [] : undefined,
    { '': value }
  );
}

function fromJSWith(stack, converter, value, key, keyPath, parentValue) {
  var toSeq = Array.isArray(value)
    ? IndexedSeq
    : isPlainObj(value)
      ? KeyedSeq
      : null;
  if (toSeq) {
    if (~stack.indexOf(value)) {
      throw new TypeError('Cannot convert circular structure to Immutable');
    }
    stack.push(value);
    keyPath && key !== '' && keyPath.push(key);
    var converted = converter.call(
      parentValue,
      key,
      toSeq(value).map(function (v, k) { return fromJSWith(stack, converter, v, k, keyPath, value); }
      ),
      keyPath && keyPath.slice()
    );
    stack.pop();
    keyPath && keyPath.pop();
    return converted;
  }
  return value;
}

function defaultConverter(k, v) {
  return isKeyed(v) ? v.toMap() : v.toList();
}

var version = "4.0.0-rc.11";

var Immutable = {
  version: version,

  Collection: Collection,
  // Note: Iterable is deprecated
  Iterable: Collection,

  Seq: Seq,
  Map: Map,
  OrderedMap: OrderedMap,
  List: List,
  Stack: Stack,
  Set: Set,
  OrderedSet: OrderedSet,

  Record: Record,
  Range: Range,
  Repeat: Repeat,

  is: is,
  fromJS: fromJS,
  hash: hash,

  isImmutable: isImmutable,
  isCollection: isCollection,
  isKeyed: isKeyed,
  isIndexed: isIndexed,
  isAssociative: isAssociative,
  isOrdered: isOrdered,
  isValueObject: isValueObject,
  isSeq: isSeq,
  isList: isList,
  isMap: isMap,
  isOrderedMap: isOrderedMap,
  isStack: isStack,
  isSet: isSet,
  isOrderedSet: isOrderedSet,
  isRecord: isRecord,

  get: get,
  getIn: getIn,
  has: has,
  hasIn: hasIn,
  merge: merge$1,
  mergeDeep: mergeDeep,
  mergeWith: mergeWith$1,
  mergeDeepWith: mergeDeepWith,
  remove: remove,
  removeIn: removeIn,
  set: set,
  setIn: setIn,
  update: update,
  updateIn: updateIn,
};

// Note: Iterable is deprecated
var Iterable = Collection;

/* harmony default export */ __webpack_exports__["default"] = (Immutable);



/***/ }),

/***/ "./node_modules/minimatch-capture/index.js":
/*!*************************************************!*\
  !*** ./node_modules/minimatch-capture/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_190884__) {

"use strict";


const minimatch = __nested_webpack_require_190884__(/*! minimatch */ "./node_modules/minimatch/minimatch.js")
const splitRe = /([!?+*@]\([^)]+\)|\*{1,2}|\?)/
const endWithNegRe = /!\([^)]+\)$/

class Capture {
	constructor(pattern, options) {
		this.pattern = pattern
		this.options = options || {}
	}

	makeRe() {
		if (!this.regexp && this.regexp !== false) {
			this.regexp = makeRe(this.pattern, this.options)
		}
		return this.regexp
	}

	capture(path) {
		let result = false
		let match = path.match(this.makeRe())
		if (match) {
			match = match.filter(isDef)
			result = match[1] || match[0]
			if (!this.options.notrim && result !== "/") {
				result = result.replace(/^\/|\/$/g, "")
			}
		}
		return result
	}
}

function split(pattern) {
	const parts = pattern.split(splitRe)
	if (parts.length === 1) {
		return ["", parts[0], ""]
	}
	return [parts[0], parts.slice(1, -1).join(""), parts[parts.length - 1]]
}

const nonegate = {nonegate: true}

function _makeRe(pattern, options) {
	const flags = options && options.nocase ? "i" : ""
	const subpatterns = minimatch.braceExpand(pattern, options)
	const expressions = subpatterns.map(subpattern => {
		const parts = split(subpattern)
		const left = parts[0]
		const middle = parts[1]
		const right = parts[2]
		const opts = left ? Object.assign({}, options, nonegate) : options
		const re = minimatch.makeRe(middle, opts)
		let capture = re.source.slice(4, -2)
		if (endWithNegRe.test(middle)) {
			capture = capture.replace(/\)\$\)/g,
				"(?" + (right.startsWith("/") ? "=" : "!") + "/)))"
			)
		}
		return regExpEscape(left) + "(" + capture + ")" + regExpEscape(right)
	})
	return new RegExp("^(?:" + expressions.join("|") + ")$", flags)
}

function makeRe(pattern, options) {
	try {
		return _makeRe(pattern, options)
	} catch (e) {
		return false
	}
}

function match(list, pattern, options) {
	const cap = new Capture(pattern, options)
	const result = []
	for (let i = 0; i < list.length; i++) {
		const path = list[i]
		const match = cap.capture(path)
		if (match) {
			result.push([path, match])
		}
	}
	return result
}

module.exports = function(path, pattern, options) {
	return new Capture(pattern, options).capture(path)
}

Object.assign(module.exports, {
	Capture,
	split,
	makeRe,
	match,
})

function isDef(v) {
	return v !== undefined
}

// private function copied from https://github.com/isaacs/minimatch
function regExpEscape(s) {
	return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
}


/***/ }),

/***/ "./node_modules/minimatch/minimatch.js":
/*!*********************************************!*\
  !*** ./node_modules/minimatch/minimatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_193652__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __nested_webpack_require_193652__(/*! path */ "./node_modules/path-browserify/index.js")
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __nested_webpack_require_193652__(/*! brace-expansion */ "./node_modules/brace-expansion/index.js")

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_219425__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr =  true
    ? function (str, start, len) { return str.substr(start, len) }
    : 0
;

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_219425__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/commands sync recursive ^\\.\\/.*$":
/*!************************************!*\
  !*** ./src/commands sync ^\.\/.*$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_234301__) {

var map = {
	"./": "./src/commands/index.js",
	"./cat": "./src/commands/cat.js",
	"./cat.js": "./src/commands/cat.js",
	"./cd": "./src/commands/cd.js",
	"./cd.js": "./src/commands/cd.js",
	"./clear": "./src/commands/clear.js",
	"./clear.js": "./src/commands/clear.js",
	"./cp": "./src/commands/cp.js",
	"./cp.js": "./src/commands/cp.js",
	"./echo": "./src/commands/echo.js",
	"./echo.js": "./src/commands/echo.js",
	"./head": "./src/commands/head.js",
	"./head.js": "./src/commands/head.js",
	"./history": "./src/commands/history.js",
	"./history.js": "./src/commands/history.js",
	"./index": "./src/commands/index.js",
	"./index.js": "./src/commands/index.js",
	"./ls": "./src/commands/ls.js",
	"./ls.js": "./src/commands/ls.js",
	"./mkdir": "./src/commands/mkdir.js",
	"./mkdir.js": "./src/commands/mkdir.js",
	"./printenv": "./src/commands/printenv.js",
	"./printenv.js": "./src/commands/printenv.js",
	"./pwd": "./src/commands/pwd.js",
	"./pwd.js": "./src/commands/pwd.js",
	"./rm": "./src/commands/rm.js",
	"./rm.js": "./src/commands/rm.js",
	"./rmdir": "./src/commands/rmdir.js",
	"./rmdir.js": "./src/commands/rmdir.js",
	"./tail": "./src/commands/tail.js",
	"./tail.js": "./src/commands/tail.js",
	"./touch": "./src/commands/touch.js",
	"./touch.js": "./src/commands/touch.js",
	"./util/_head_tail_util": "./src/commands/util/_head_tail_util.js",
	"./util/_head_tail_util.js": "./src/commands/util/_head_tail_util.js",
	"./whoami": "./src/commands/whoami.js",
	"./whoami.js": "./src/commands/whoami.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __nested_webpack_require_234301__(id);
}
function webpackContextResolve(req) {
	if(!__nested_webpack_require_234301__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/commands sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/commands/cat.js":
/*!*****************************!*\
  !*** ./src/commands/cat.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_236584__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _optionParser = _interopRequireDefault(__nested_webpack_require_236584__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

var FileOp = _interopRequireWildcard(__nested_webpack_require_236584__(/*! fs/operations-with-permissions/file-operations */ "./src/fs/operations-with-permissions/file-operations.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_236584__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var _util = __nested_webpack_require_236584__(/*! emulator-state/util */ "./src/emulator-state/util.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Combines one or more files to display in the terminal output
 * Usage: cat file1.txt file2.txt
 */
var fileToTextOutput = function fileToTextOutput(fs, filePath) {
  var _FileOp$readFile = FileOp.readFile(fs, filePath),
      err = _FileOp$readFile.err,
      file = _FileOp$readFile.file;

  if (err) {
    return OutputFactory.makeErrorOutput(err);
  }

  ;
  return OutputFactory.makeTextOutput(file.get('content'));
};

var optDef = {};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  var _parseOptions = (0, _optionParser["default"])(commandOptions, optDef),
      argv = _parseOptions.argv;

  if (argv.length === 0) {
    return {};
  }

  var filePaths = argv.map(function (pathArg) {
    return (0, _util.resolvePath)(state, pathArg);
  });
  return {
    outputs: filePaths.map(function (path) {
      return fileToTextOutput(state.getFileSystem(), path);
    })
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/cd.js":
/*!****************************!*\
  !*** ./src/commands/cd.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_239885__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _optionParser = _interopRequireDefault(__nested_webpack_require_239885__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

var DirectoryOp = _interopRequireWildcard(__nested_webpack_require_239885__(/*! fs/operations-with-permissions/directory-operations */ "./src/fs/operations-with-permissions/directory-operations.js"));

var EnvVariableUtil = _interopRequireWildcard(__nested_webpack_require_239885__(/*! emulator-state/environment-variables */ "./src/emulator-state/environment-variables.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_239885__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var _fsError = __nested_webpack_require_239885__(/*! fs/fs-error */ "./src/fs/fs-error.js");

var _util = __nested_webpack_require_239885__(/*! emulator-state/util */ "./src/emulator-state/util.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Changes the current working directory to another directory
 * Usage: cd /newDirectory
 */
var updateStateCwd = function updateStateCwd(state, newCwdPath) {
  return EnvVariableUtil.setEnvironmentVariable(state.getEnvVariables(), 'cwd', newCwdPath);
};

var optDef = {};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  var _parseOptions = (0, _optionParser["default"])(commandOptions, optDef),
      argv = _parseOptions.argv;

  var newCwdPath = argv[0] ? (0, _util.resolvePath)(state, argv[0]) : '/';

  if (!DirectoryOp.hasDirectory(state.getFileSystem(), newCwdPath)) {
    var newCwdPathDoesNotExistErr = (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_DIRECTORY);
    return {
      output: OutputFactory.makeErrorOutput(newCwdPathDoesNotExistErr)
    };
  }

  return {
    state: state.setEnvVariables(updateStateCwd(state, newCwdPath))
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/clear.js":
/*!*******************************!*\
  !*** ./src/commands/clear.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_243431__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _outputs = __nested_webpack_require_243431__(/*! emulator-state/outputs */ "./src/emulator-state/outputs.js");

/**
 * Removes all terminal output
 * Usage: clear
 */
var optDef = {};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  return {
    state: state.setOutputs((0, _outputs.create)())
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/cp.js":
/*!****************************!*\
  !*** ./src/commands/cp.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_244151__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _optionParser = _interopRequireDefault(__nested_webpack_require_244151__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

var FileOp = _interopRequireWildcard(__nested_webpack_require_244151__(/*! fs/operations-with-permissions/file-operations */ "./src/fs/operations-with-permissions/file-operations.js"));

var DirectoryOp = _interopRequireWildcard(__nested_webpack_require_244151__(/*! fs/operations-with-permissions/directory-operations */ "./src/fs/operations-with-permissions/directory-operations.js"));

var PathUtil = _interopRequireWildcard(__nested_webpack_require_244151__(/*! fs/util/path-util */ "./src/fs/util/path-util.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_244151__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var FileUtil = _interopRequireWildcard(__nested_webpack_require_244151__(/*! fs/util/file-util */ "./src/fs/util/file-util.js"));

var _fsError = __nested_webpack_require_244151__(/*! fs/fs-error */ "./src/fs/fs-error.js");

var _util = __nested_webpack_require_244151__(/*! emulator-state/util */ "./src/emulator-state/util.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Copies a file/directory to another file/directory
 * Usage: cp file new-file
 */

/**
 * Copy from a source file into a directory or another file.
 *
 * A trailing slash / can be used in the destination to explicitly state the
 * destination is a directory and not a file.
 * @param  {Map}     state              emulator state
 * @param  {string}  srcPath            source file path
 * @param  {string}  destPath           destination file or destination directory path
 * @param  {Boolean} isTrailingPathDest true if the destPath ended in a /
 * @return {object}                     cp command return object
 */
var copySourceFile = function copySourceFile(state, srcPath, destPath, isTrailingPathDest) {
  var fs = state.getFileSystem();

  if (isTrailingPathDest && !DirectoryOp.hasDirectory(fs, destPath)) {
    var dirAtTrailingPathNonExistentErr = (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_DIRECTORY);
    return {
      output: OutputFactory.makeErrorOutput(dirAtTrailingPathNonExistentErr)
    };
  }

  var _FileOp$copyFile = FileOp.copyFile(fs, srcPath, destPath),
      copiedFS = _FileOp$copyFile.fs,
      err = _FileOp$copyFile.err;

  if (err) {
    return {
      output: OutputFactory.makeErrorOutput(err)
    };
  }

  return {
    state: state.setFileSystem(copiedFS)
  };
};
/**
 * Copies a directory into another directory
 *
 * When the destination path exists, cp copies the source FOLDER into the
 * destination.
 *
 * When the destination DOES NOT exist, cp copies the source FILES into the
 * destination.
 * @param  {Map}    state      emulator state
 * @param  {string} srcPath    source directory path (copy from)
 * @param  {string} destPath   destination directory path (copy to)
 * @return {object}            cp command return object
 */


var copySourceDirectory = function copySourceDirectory(state, srcPath, destPath) {
  if (DirectoryOp.hasDirectory(state.getFileSystem(), destPath)) {
    var lastPathComponent = PathUtil.getLastPathPart(srcPath); // Remap dest to copy source FOLDER, as destination path exists

    if (lastPathComponent !== '/') {
      destPath = "".concat(destPath, "/").concat(lastPathComponent);
    }
  } // Make directory to copy into, if it doesn't already exist


  if (!DirectoryOp.hasDirectory(state.getFileSystem(), destPath)) {
    var emptyDir = FileUtil.makeDirectory();

    var _DirectoryOp$addDirec = DirectoryOp.addDirectory(state.getFileSystem(), destPath, emptyDir, false),
        _fs = _DirectoryOp$addDirec.fs,
        _err = _DirectoryOp$addDirec.err;

    state = state.setFileSystem(_fs);

    if (_err) {
      return {
        output: OutputFactory.makeErrorOutput(_err)
      };
    }
  }

  var _DirectoryOp$copyDire = DirectoryOp.copyDirectory(state.getFileSystem(), srcPath, destPath),
      fs = _DirectoryOp$copyDire.fs,
      err = _DirectoryOp$copyDire.err;

  if (err) {
    return {
      output: OutputFactory.makeErrorOutput(err)
    };
  }

  return {
    state: state.setFileSystem(fs)
  };
};

var optDef = {
  '-r, --recursive': '' // required to copy directories

};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  var _parseOptions = (0, _optionParser["default"])(commandOptions, optDef),
      argv = _parseOptions.argv,
      options = _parseOptions.options;

  if (argv.length < 2) {
    return {};
  }

  var srcPath = (0, _util.resolvePath)(state, argv[0]);
  var destPath = (0, _util.resolvePath)(state, argv[1]);
  var isTrailingDestPath = PathUtil.isTrailingPath(argv[1]);

  if (srcPath === destPath) {
    return {
      output: OutputFactory.makeTextOutput('Source and destination are the same (not copied).')
    };
  }

  if (options.recursive) {
    return copySourceDirectory(state, srcPath, destPath);
  }

  return copySourceFile(state, srcPath, destPath, isTrailingDestPath);
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/echo.js":
/*!******************************!*\
  !*** ./src/commands/echo.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_250894__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_250894__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var _environmentVariables = __nested_webpack_require_250894__(/*! emulator-state/environment-variables */ "./src/emulator-state/environment-variables.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Prints arguments to text output
 * Usage: echo 'hello world'
 */
var VARIABLE_GROUP_REGEX = /\$(\w+)/g;
var DOUBLE_SPACE_REGEX = /\s\s+/g;

var substituteEnvVariables = function substituteEnvVariables(environmentVariables, inputStr) {
  return inputStr.replace(VARIABLE_GROUP_REGEX, function (match, varName) {
    return (0, _environmentVariables.getEnvironmentVariable)(environmentVariables, varName) || '';
  });
};

var optDef = {};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  var input = commandOptions.join(' ');
  var outputStr = substituteEnvVariables(state.getEnvVariables(), input);
  var cleanStr = outputStr.trim().replace(DOUBLE_SPACE_REGEX, ' ');
  return {
    output: OutputFactory.makeTextOutput(cleanStr)
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/head.js":
/*!******************************!*\
  !*** ./src/commands/head.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_253708__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _optionParser = _interopRequireDefault(__nested_webpack_require_253708__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_253708__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var _head_tail_util = __nested_webpack_require_253708__(/*! commands/util/_head_tail_util.js */ "./src/commands/util/_head_tail_util.js");

var _util = __nested_webpack_require_253708__(/*! emulator-state/util */ "./src/emulator-state/util.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Prints the first n lines of a file
 * Usage: head -n 5 file.txt
 */
var optDef = {
  '-n, --lines': '<count>'
};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  var _parseOptions = (0, _optionParser["default"])(commandOptions, optDef),
      argv = _parseOptions.argv,
      options = _parseOptions.options;

  if (argv.length === 0) {
    return {};
  }

  var filePath = (0, _util.resolvePath)(state, argv[0]);

  var headTrimmingFn = function headTrimmingFn(lines, lineCount) {
    return lines.slice(0, lineCount);
  };

  var _trimFileContent = (0, _head_tail_util.trimFileContent)(state.getFileSystem(), filePath, options, headTrimmingFn),
      content = _trimFileContent.content,
      err = _trimFileContent.err;

  if (err) {
    return {
      output: OutputFactory.makeErrorOutput(err)
    };
  }

  return {
    output: OutputFactory.makeTextOutput(content)
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/history.js":
/*!*********************************!*\
  !*** ./src/commands/history.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_256980__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _optionParser = _interopRequireDefault(__nested_webpack_require_256980__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_256980__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var _history = __nested_webpack_require_256980__(/*! emulator-state/history */ "./src/emulator-state/history.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Lists or clears commands executed in the terminal
 * Usage: history -c
 */
var clearStateHistory = function clearStateHistory(state) {
  return state.setHistory((0, _history.create)());
};

var stringifyStateHistory = function stringifyStateHistory(state) {
  return state.getHistory().join('\n');
};

var optDef = {
  '-c, --clear': '' // remove history entries

};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  var _parseOptions = (0, _optionParser["default"])(commandOptions, optDef),
      options = _parseOptions.options;

  if (options.clear) {
    return {
      state: clearStateHistory(state)
    };
  }

  ;
  return {
    output: OutputFactory.makeTextOutput(stringifyStateHistory(state))
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/index.js":
/*!*******************************!*\
  !*** ./src/commands/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_259958__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.commandNames = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commandNames = ['cat', 'cd', 'clear', 'cp', 'echo', 'head', 'history', 'ls', 'mkdir', 'printenv', 'pwd', 'rm', 'rmdir', 'tail', 'touch', 'whoami'];
exports.commandNames = commandNames;

var _default = commandNames.reduce(function (mapping, commandName) {
  return _objectSpread({}, mapping, _defineProperty({}, commandName, {
    "function": __nested_webpack_require_259958__("./src/commands sync recursive ^\\.\\/.*$")("./".concat(commandName))["default"],
    optDef: __nested_webpack_require_259958__("./src/commands sync recursive ^\\.\\/.*$")("./".concat(commandName)).optDef
  }));
}, {});

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/ls.js":
/*!****************************!*\
  !*** ./src/commands/ls.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_262017__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _optionParser = _interopRequireDefault(__nested_webpack_require_262017__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

var DirectoryOp = _interopRequireWildcard(__nested_webpack_require_262017__(/*! fs/operations-with-permissions/directory-operations */ "./src/fs/operations-with-permissions/directory-operations.js"));

var EnvVariableUtil = _interopRequireWildcard(__nested_webpack_require_262017__(/*! emulator-state/environment-variables */ "./src/emulator-state/environment-variables.js"));

var PathUtil = _interopRequireWildcard(__nested_webpack_require_262017__(/*! fs/util/path-util */ "./src/fs/util/path-util.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_262017__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var _immutable = __nested_webpack_require_262017__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Lists the contents of a directory
 * Usage: ls /folderName
 */
var IMPLIED_DIRECTORY_ENTRIES = (0, _immutable.Seq)(['.', '..']); // . = listed folder, .. = parent folder

/**
 * Finds the directory path to list entries in.
 *
 * If ls has an argument passed in (example: ls /home/user/directory-to-list),
 * use the first argument as the directory to list.
 *
 * If ls is used without any path arguments (example: ls), the cwd (current
 * working directory) should be listed by ls.
 * @param  {Map}    envVariables  environment variables
 * @param  {array}  argv          argument vector
 * @return {string}               directory path to list
 */

var resolveDirectoryToList = function resolveDirectoryToList(envVariables, argv) {
  var cwd = EnvVariableUtil.getEnvironmentVariable(envVariables, 'cwd');

  if (argv.length > 0) {
    return PathUtil.toAbsolutePath(argv[0], cwd);
  }

  return cwd;
};
/**
 * Alphabetically sorts the ls listing for display to the user
 * @param  {array}  listing list of files/directories to present to the user
 * @return {object}         return object of ls
 */


var makeSortedReturn = function makeSortedReturn(listing) {
  var sortedListing = listing.sort();
  return {
    output: OutputFactory.makeTextOutput(sortedListing.join('\n'))
  };
};

var removeHiddenFilesFilter = function removeHiddenFilesFilter(record) {
  return !record.startsWith('.');
};

var optDef = {
  '-a, --all': '',
  // Include hidden directory entries starting with .
  '-A, --almost-all': '' // Do not include . and .. as implied directory entries

};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  var _parseOptions = (0, _optionParser["default"])(commandOptions, optDef),
      options = _parseOptions.options,
      argv = _parseOptions.argv;

  var dirPath = resolveDirectoryToList(state.getEnvVariables(), argv);

  var _DirectoryOp$listDire = DirectoryOp.listDirectory(state.getFileSystem(), dirPath),
      err = _DirectoryOp$listDire.err,
      dirList = _DirectoryOp$listDire.list;

  if (err) {
    return {
      output: OutputFactory.makeErrorOutput(err)
    };
  }

  if (options.all) {
    return makeSortedReturn(IMPLIED_DIRECTORY_ENTRIES.concat(dirList));
  } else if (options.almostAll) {
    return makeSortedReturn(dirList);
  }

  return makeSortedReturn(dirList.filter(removeHiddenFilesFilter));
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/mkdir.js":
/*!*******************************!*\
  !*** ./src/commands/mkdir.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_267095__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _optionParser = _interopRequireDefault(__nested_webpack_require_267095__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

var DirOp = _interopRequireWildcard(__nested_webpack_require_267095__(/*! fs/operations-with-permissions/directory-operations */ "./src/fs/operations-with-permissions/directory-operations.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_267095__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var FileUtil = _interopRequireWildcard(__nested_webpack_require_267095__(/*! fs/util/file-util */ "./src/fs/util/file-util.js"));

var _util = __nested_webpack_require_267095__(/*! emulator-state/util */ "./src/emulator-state/util.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates an empty directory
 * Usage: mkdir /newDir
 */
var EMPTY_DIR = FileUtil.makeDirectory();
var optDef = {};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  var _parseOptions = (0, _optionParser["default"])(commandOptions, optDef),
      argv = _parseOptions.argv;

  if (argv.length === 0) {
    return {}; // do nothing if no arguments are given
  }

  var newFolderPath = (0, _util.resolvePath)(state, argv[0]);

  var _DirOp$addDirectory = DirOp.addDirectory(state.getFileSystem(), newFolderPath, EMPTY_DIR, false),
      fs = _DirOp$addDirectory.fs,
      err = _DirOp$addDirectory.err;

  if (err) {
    return {
      output: OutputFactory.makeErrorOutput(err)
    };
  }

  return {
    state: state.setFileSystem(fs)
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/printenv.js":
/*!**********************************!*\
  !*** ./src/commands/printenv.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_270404__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _optionParser = _interopRequireDefault(__nested_webpack_require_270404__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_270404__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var _environmentVariables = __nested_webpack_require_270404__(/*! emulator-state/environment-variables */ "./src/emulator-state/environment-variables.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Converts all key-value pairs of the environment variables to a printable format
var stringifyEnvVariables = function stringifyEnvVariables(envVariables) {
  var outputs = envVariables.reduce(function (outputs, varVal, varKey) {
    return [].concat(_toConsumableArray(outputs), ["".concat(varKey, "=").concat(varVal)]);
  }, []);
  return outputs.join('\n');
};

var optDef = {};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  var _parseOptions = (0, _optionParser["default"])(commandOptions, optDef),
      argv = _parseOptions.argv;

  var envVariables = state.getEnvVariables();

  if (argv.length === 0) {
    return {
      output: OutputFactory.makeTextOutput(stringifyEnvVariables(envVariables))
    };
  } // An argument has been passed to printenv; printenv will only print the first
  // argument provided


  var varValue = (0, _environmentVariables.getEnvironmentVariable)(envVariables, argv[0]);

  if (varValue) {
    return {
      output: OutputFactory.makeTextOutput(varValue)
    };
  }

  return {};
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/pwd.js":
/*!*****************************!*\
  !*** ./src/commands/pwd.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_274899__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_274899__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var _environmentVariables = __nested_webpack_require_274899__(/*! emulator-state/environment-variables */ "./src/emulator-state/environment-variables.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Prints out the current working directory (cwd).
 * Usage: pwd
 */
var optDef = {};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  return {
    output: OutputFactory.makeTextOutput((0, _environmentVariables.getEnvironmentVariable)(state.getEnvVariables(), 'cwd'))
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/rm.js":
/*!****************************!*\
  !*** ./src/commands/rm.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_277242__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _optionParser = _interopRequireDefault(__nested_webpack_require_277242__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

var FileOp = _interopRequireWildcard(__nested_webpack_require_277242__(/*! fs/operations-with-permissions/file-operations */ "./src/fs/operations-with-permissions/file-operations.js"));

var DirOp = _interopRequireWildcard(__nested_webpack_require_277242__(/*! fs/operations-with-permissions/directory-operations */ "./src/fs/operations-with-permissions/directory-operations.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_277242__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var _util = __nested_webpack_require_277242__(/*! emulator-state/util */ "./src/emulator-state/util.js");

var _fsError = __nested_webpack_require_277242__(/*! fs/fs-error */ "./src/fs/fs-error.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Removes a directory or a file
 * Usage: rm /existingDir
 */
var optDef = {
  '--no-preserve-root, --noPreserveRoot': '',
  '-r, --recursive': ''
};
exports.optDef = optDef;

var makeNoPathErrorOutput = function makeNoPathErrorOutput() {
  var noSuchFileOrDirError = (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_FILE_OR_DIRECTORY);
  return {
    output: OutputFactory.makeErrorOutput(noSuchFileOrDirError)
  };
};

var _default = function _default(state, commandOptions) {
  var _parseOptions = (0, _optionParser["default"])(commandOptions, optDef),
      argv = _parseOptions.argv,
      options = _parseOptions.options;

  if (argv.length === 0) {
    return {}; // do nothing if no arguments are given
  }

  var deletionPath = (0, _util.resolvePath)(state, argv[0]);
  var fs = state.getFileSystem();

  if (deletionPath === '/' && options.noPreserveRoot !== true) {
    return {}; // do nothing as cannot safely delete the root
  }

  if (!fs.has(deletionPath)) {
    return makeNoPathErrorOutput();
  }

  var _ref = options.recursive === true ? DirOp.deleteDirectory(fs, deletionPath, true) : FileOp.deleteFile(fs, deletionPath),
      deletedPathFS = _ref.fs,
      err = _ref.err;

  if (err) {
    return {
      output: OutputFactory.makeErrorOutput(err)
    };
  }

  return {
    state: state.setFileSystem(deletedPathFS)
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/rmdir.js":
/*!*******************************!*\
  !*** ./src/commands/rmdir.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_281249__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _optionParser = _interopRequireDefault(__nested_webpack_require_281249__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

var DirOp = _interopRequireWildcard(__nested_webpack_require_281249__(/*! fs/operations-with-permissions/directory-operations */ "./src/fs/operations-with-permissions/directory-operations.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_281249__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var _util = __nested_webpack_require_281249__(/*! emulator-state/util */ "./src/emulator-state/util.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Removes an empty directory
 * Usage: rmdir /emptyDir
 */
var optDef = {};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  var _parseOptions = (0, _optionParser["default"])(commandOptions, optDef),
      argv = _parseOptions.argv;

  if (argv.length === 0) {
    return {}; // do nothing if no arguments are given
  }

  var pathToDelete = (0, _util.resolvePath)(state, argv[0]);

  var _DirOp$deleteDirector = DirOp.deleteDirectory(state.getFileSystem(), pathToDelete, false),
      fs = _DirOp$deleteDirector.fs,
      err = _DirOp$deleteDirector.err;

  if (err) {
    return {
      output: OutputFactory.makeErrorOutput(err)
    };
  }

  return {
    state: state.setFileSystem(fs)
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/tail.js":
/*!******************************!*\
  !*** ./src/commands/tail.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_284381__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _optionParser = _interopRequireDefault(__nested_webpack_require_284381__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_284381__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var _head_tail_util = __nested_webpack_require_284381__(/*! commands/util/_head_tail_util.js */ "./src/commands/util/_head_tail_util.js");

var _util = __nested_webpack_require_284381__(/*! emulator-state/util */ "./src/emulator-state/util.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Prints the last n lines of a file
 * Usage: tail -n 5 file.txt
 */
var optDef = {
  '-n, --lines': '<count>'
};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  var _parseOptions = (0, _optionParser["default"])(commandOptions, optDef),
      argv = _parseOptions.argv,
      options = _parseOptions.options;

  if (argv.length === 0) {
    return {};
  }

  var filePath = (0, _util.resolvePath)(state, argv[0]);

  var tailTrimmingFn = function tailTrimmingFn(lines, lineCount) {
    return lines.slice(-1 * lineCount);
  };

  var _trimFileContent = (0, _head_tail_util.trimFileContent)(state.getFileSystem(), filePath, options, tailTrimmingFn),
      content = _trimFileContent.content,
      err = _trimFileContent.err;

  if (err) {
    return {
      output: OutputFactory.makeErrorOutput(err)
    };
  }

  return {
    output: OutputFactory.makeTextOutput(content)
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/touch.js":
/*!*******************************!*\
  !*** ./src/commands/touch.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_287646__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var _optionParser = _interopRequireDefault(__nested_webpack_require_287646__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

var FileOp = _interopRequireWildcard(__nested_webpack_require_287646__(/*! fs/operations-with-permissions/file-operations */ "./src/fs/operations-with-permissions/file-operations.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_287646__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var FileUtil = _interopRequireWildcard(__nested_webpack_require_287646__(/*! fs/util/file-util */ "./src/fs/util/file-util.js"));

var _util = __nested_webpack_require_287646__(/*! emulator-state/util */ "./src/emulator-state/util.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates an empty file.
 * Usage: touch new_file.txt
 */
var EMPTY_FILE = FileUtil.makeFile();
var optDef = {};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  var _parseOptions = (0, _optionParser["default"])(commandOptions, optDef),
      argv = _parseOptions.argv;

  if (argv.length === 0) {
    return {}; // do nothing if no arguments are given
  }

  var filePath = (0, _util.resolvePath)(state, argv[0]);

  if (state.getFileSystem().has(filePath)) {
    return {}; // do nothing if already has a file at the provided path
  }

  var _FileOp$writeFile = FileOp.writeFile(state.getFileSystem(), filePath, EMPTY_FILE),
      fs = _FileOp$writeFile.fs,
      err = _FileOp$writeFile.err;

  if (err) {
    return {
      output: OutputFactory.makeErrorOutput(err)
    };
  }

  return {
    state: state.setFileSystem(fs)
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/commands/util/_head_tail_util.js":
/*!**********************************************!*\
  !*** ./src/commands/util/_head_tail_util.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_291089__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trimFileContent = void 0;

var FileOp = _interopRequireWildcard(__nested_webpack_require_291089__(/*! fs/operations-with-permissions/file-operations */ "./src/fs/operations-with-permissions/file-operations.js"));

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_291089__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DEFAULT_LINE_COUNT = 10;

var trimFileContent = function trimFileContent(fs, filePath, options, trimmingFn) {
  var _FileOp$readFile = FileOp.readFile(fs, filePath),
      file = _FileOp$readFile.file,
      err = _FileOp$readFile.err;

  if (err) {
    return {
      err: OutputFactory.makeErrorOutput(err)
    };
  }

  ;
  var linesCount = options.lines ? Number(options.lines) : DEFAULT_LINE_COUNT;
  var trimmedLines = trimmingFn(file.get('content').split('\n'), linesCount);
  return {
    content: trimmedLines.join('\n')
  };
};

exports.trimFileContent = trimFileContent;

/***/ }),

/***/ "./src/commands/whoami.js":
/*!********************************!*\
  !*** ./src/commands/whoami.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_293703__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optDef = void 0;

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_293703__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var _environmentVariables = __nested_webpack_require_293703__(/*! emulator-state/environment-variables */ "./src/emulator-state/environment-variables.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Prints the username of the logged in user
 * Usage: whoami
 */
var FALLBACK_USERNAME = 'root';
var optDef = {};
exports.optDef = optDef;

var _default = function _default(state, commandOptions) {
  return {
    output: OutputFactory.makeTextOutput((0, _environmentVariables.getEnvironmentVariable)(state.getEnvVariables(), 'user') || FALLBACK_USERNAME)
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./src/emulator-output/index.js":
/*!**************************************!*\
  !*** ./src/emulator-output/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_296137__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var OutputFactory = _interopRequireWildcard(__nested_webpack_require_296137__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js"));

var OutputType = _interopRequireWildcard(__nested_webpack_require_296137__(/*! emulator-output/output-type */ "./src/emulator-output/output-type.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  OutputFactory: OutputFactory,
  OutputType: OutputType
};
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/emulator-output/output-factory.js":
/*!***********************************************!*\
  !*** ./src/emulator-output/output-factory.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_298328__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeErrorOutput = exports.makeTextOutput = exports.makeHeaderOutput = exports.OutputRecord = void 0;

var _immutable = __nested_webpack_require_298328__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

var _outputType = __nested_webpack_require_298328__(/*! emulator-output/output-type */ "./src/emulator-output/output-type.js");

/**
 * Output from a command or emulator used for display to the user
 * @type {OutputRecord}
 */
var OutputRecord = (0, _immutable.Record)({
  type: undefined,
  content: undefined
});
/**
 * A terminal header containing metadata
 * @param  {string} cwd   the current working directory path
 * @return {OutputRecord} output record
 */

exports.OutputRecord = OutputRecord;

var makeHeaderOutput = function makeHeaderOutput(cwd, command) {
  return new OutputRecord({
    type: _outputType.HEADER_OUTPUT_TYPE,
    content: {
      cwd: cwd,
      command: command
    }
  });
};
/**
 * Unstyled text output
 * @param  {string} content plain string output from a command or the emulator
 * @return {OutputRecord}   output record
 */


exports.makeHeaderOutput = makeHeaderOutput;

var makeTextOutput = function makeTextOutput(content) {
  return new OutputRecord({
    type: _outputType.TEXT_OUTPUT_TYPE,
    content: content
  });
};
/**
 * Error text output
 * @param  {object} err internal error object
 * @return {OutputRecord}   output record
 */


exports.makeTextOutput = makeTextOutput;

var makeErrorOutput = function makeErrorOutput(err) {
  return new OutputRecord({
    type: _outputType.TEXT_ERROR_OUTPUT_TYPE,
    content: "".concat(err.source, ": ").concat(err.type)
  });
};

exports.makeErrorOutput = makeErrorOutput;

/***/ }),

/***/ "./src/emulator-output/output-type.js":
/*!********************************************!*\
  !*** ./src/emulator-output/output-type.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADER_OUTPUT_TYPE = exports.TEXT_ERROR_OUTPUT_TYPE = exports.TEXT_OUTPUT_TYPE = void 0;

/**
 * Types of output which can be used to display content to the user
 * @type {String}
 */
var TEXT_OUTPUT_TYPE = 'TEXT_OUTPUT';
exports.TEXT_OUTPUT_TYPE = TEXT_OUTPUT_TYPE;
var TEXT_ERROR_OUTPUT_TYPE = 'TEXT_ERROR_OUTPUT';
exports.TEXT_ERROR_OUTPUT_TYPE = TEXT_ERROR_OUTPUT_TYPE;
var HEADER_OUTPUT_TYPE = 'HEADER_OUTPUT_TYPE';
exports.HEADER_OUTPUT_TYPE = HEADER_OUTPUT_TYPE;

/***/ }),

/***/ "./src/emulator-state/EmulatorState.js":
/*!*********************************************!*\
  !*** ./src/emulator-state/EmulatorState.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_301226__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = __nested_webpack_require_301226__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

var _commandMapping = __nested_webpack_require_301226__(/*! emulator-state/command-mapping */ "./src/emulator-state/command-mapping.js");

var _environmentVariables = __nested_webpack_require_301226__(/*! emulator-state/environment-variables */ "./src/emulator-state/environment-variables.js");

var _fileSystem = __nested_webpack_require_301226__(/*! emulator-state/file-system */ "./src/emulator-state/file-system.js");

var _history = __nested_webpack_require_301226__(/*! emulator-state/history */ "./src/emulator-state/history.js");

var _outputs = __nested_webpack_require_301226__(/*! emulator-state/outputs */ "./src/emulator-state/outputs.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FS_KEY = 'fs';
var ENVIRONMENT_VARIABLES_KEY = 'environmentVariables';
var HISTORY_KEY = 'history';
var OUTPUTS_KEY = 'outputs';
var COMMAND_MAPPING_KEY = 'commandMapping';

var EmulatorState = /*#__PURE__*/function () {
  function EmulatorState(immutable) {
    _classCallCheck(this, EmulatorState);

    if (!immutable || !(immutable instanceof _immutable.Map)) {
      throw new Error('Do not use the constructor directly. Use the static create method.');
    }

    this._immutable = immutable;
  }
  /**
   * Creates emulator state with defaults
   * @return {EmulatorState} default emulator state
   */


  _createClass(EmulatorState, [{
    key: "getFileSystem",
    value: function getFileSystem() {
      return this.getImmutable().get(FS_KEY);
    }
  }, {
    key: "setFileSystem",
    value: function setFileSystem(newFileSystem) {
      return new EmulatorState(this.getImmutable().set(FS_KEY, newFileSystem));
    }
  }, {
    key: "getEnvVariables",
    value: function getEnvVariables() {
      return this.getImmutable().get(ENVIRONMENT_VARIABLES_KEY);
    }
  }, {
    key: "setEnvVariables",
    value: function setEnvVariables(newEnvVariables) {
      return new EmulatorState(this.getImmutable().set(ENVIRONMENT_VARIABLES_KEY, newEnvVariables));
    }
  }, {
    key: "getHistory",
    value: function getHistory() {
      return this.getImmutable().get(HISTORY_KEY);
    }
  }, {
    key: "setHistory",
    value: function setHistory(newHistory) {
      return new EmulatorState(this.getImmutable().set(HISTORY_KEY, newHistory));
    }
  }, {
    key: "getOutputs",
    value: function getOutputs() {
      return this.getImmutable().get(OUTPUTS_KEY);
    }
  }, {
    key: "setOutputs",
    value: function setOutputs(newOutputs) {
      return new EmulatorState(this.getImmutable().set(OUTPUTS_KEY, newOutputs));
    }
  }, {
    key: "getCommandMapping",
    value: function getCommandMapping() {
      return this.getImmutable().get(COMMAND_MAPPING_KEY);
    }
  }, {
    key: "setCommandMapping",
    value: function setCommandMapping(newCommandMapping) {
      return new EmulatorState(this.getImmutable().set(COMMAND_MAPPING_KEY, newCommandMapping));
    }
  }, {
    key: "getImmutable",
    value: function getImmutable() {
      return this._immutable;
    }
  }, {
    key: "toJS",
    value: function toJS() {
      return this._immutable.toJS();
    }
  }], [{
    key: "createEmpty",
    value: function createEmpty() {
      return EmulatorState.create({});
    }
    /**
     * Creates emulator state using the user's state components, or a default
     * fallback if none is provided
     * @param  {object} optionally contains each component as a key and the component as a value
     * @return {EmulatorState}     emulator state
     */

  }, {
    key: "create",
    value: function create(_ref) {
      var _Map;

      var _ref$fs = _ref.fs,
          fs = _ref$fs === void 0 ? (0, _fileSystem.create)() : _ref$fs,
          _ref$environmentVaria = _ref.environmentVariables,
          environmentVariables = _ref$environmentVaria === void 0 ? (0, _environmentVariables.create)() : _ref$environmentVaria,
          _ref$history = _ref.history,
          history = _ref$history === void 0 ? (0, _history.create)() : _ref$history,
          _ref$outputs = _ref.outputs,
          outputs = _ref$outputs === void 0 ? (0, _outputs.create)() : _ref$outputs,
          _ref$commandMapping = _ref.commandMapping,
          commandMapping = _ref$commandMapping === void 0 ? (0, _commandMapping.create)() : _ref$commandMapping;
      var stateMap = new _immutable.Map((_Map = {}, _defineProperty(_Map, FS_KEY, fs), _defineProperty(_Map, ENVIRONMENT_VARIABLES_KEY, environmentVariables), _defineProperty(_Map, HISTORY_KEY, history), _defineProperty(_Map, OUTPUTS_KEY, outputs), _defineProperty(_Map, COMMAND_MAPPING_KEY, commandMapping), _Map));
      return new EmulatorState(stateMap);
    }
  }]);

  return EmulatorState;
}();

exports["default"] = EmulatorState;
module.exports = exports.default;

/***/ }),

/***/ "./src/emulator-state/command-mapping.js":
/*!***********************************************!*\
  !*** ./src/emulator-state/command-mapping.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_307276__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommandNames = exports.getCommandOptDef = exports.getCommandFn = exports.unsetCommand = exports.setCommand = exports.isCommandSet = exports.create = void 0;

var _immutable = __nested_webpack_require_307276__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

var _commands = _interopRequireDefault(__nested_webpack_require_307276__(/*! commands */ "./src/commands/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Links a command name to a function
 * @param  {Object} [commandMapping={}] default command map
 * @return {Map}                        command mapping
 */
var create = function create() {
  var commandMapping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _commands["default"];

  for (var _i = 0, _Object$keys = Object.keys(commandMapping); _i < _Object$keys.length; _i++) {
    var commandName = _Object$keys[_i];
    var command = commandMapping[commandName];

    if (!command.hasOwnProperty('function')) {
      throw new Error("Failed to create command mapping: missing command function for ".concat(commandName));
    }

    if (!command.hasOwnProperty('optDef')) {
      throw new Error("Failed to create command mapping: missing option definition (optDef) for ".concat(commandName));
    }
  }

  return (0, _immutable.fromJS)(commandMapping);
};
/**
 * Checks if a comand has been defined with a function in the command mapping
 * @param  {Map}     commandMapping command mapping
 * @param  {string}  commandName    command name to check if available
 * @return {Boolean}                true, if the command is available
 */


exports.create = create;

var isCommandSet = function isCommandSet(commandMapping, commandName) {
  return commandMapping.has(commandName);
};
/**
 * Set a command function with a key of the command name into the command mapping
 * @param  {Map}      commandMapping command mapping
 * @param  {string}   commandName    name of the function
 * @param  {function} commandFn      command function
 * @param  {object}   optDef         option definition (optional)
 * @return {Map}                     command mapping
 */


exports.isCommandSet = isCommandSet;

var setCommand = function setCommand(commandMapping, commandName, commandFn, optDef) {
  if (commandFn === undefined) {
    throw new Error("Cannot set ".concat(commandName, " command without function"));
  }

  if (optDef === undefined) {
    throw new Error("Cannot set ".concat(commandName, " command without optDef (pass in {} if the command takes no options)"));
  }

  return commandMapping.set(commandName, (0, _immutable.fromJS)({
    'function': commandFn,
    'optDef': optDef
  }));
};
/**
 * Removes a command name and its function from a command mapping
 * @param  {Map}    commandMapping command mapping
 * @param  {string} commandName    name of command to remove
 * @return {Map}                   command mapping
 */


exports.setCommand = setCommand;

var unsetCommand = function unsetCommand(commandMapping, commandName) {
  return commandMapping["delete"](commandName);
};
/**
 * Gets the function of a command based on its command name (the key) from the
 * command mapping
 * @param  {Map}      commandMapping command mapping
 * @param  {string}   commandName    name of command
 * @return {function}                command function
 */


exports.unsetCommand = unsetCommand;

var getCommandFn = function getCommandFn(commandMapping, commandName) {
  if (commandMapping.has(commandName)) {
    return commandMapping.get(commandName).get('function');
  }

  return undefined;
};
/**
 * Gets the option definition of a command based on its command name
 * @param  {Map}      commandMapping command mapping
 * @param  {string}   commandName    name of command
 * @return {Map}                     option definition
 */


exports.getCommandFn = getCommandFn;

var getCommandOptDef = function getCommandOptDef(commandMapping, commandName) {
  if (commandMapping.has(commandName)) {
    return commandMapping.get(commandName).get('optDef');
  }

  return undefined;
};
/**
 * Gets command names
 * @param  {Map}      commandMapping command mapping
 * @return {Seq}                     sequence of command names
 */


exports.getCommandOptDef = getCommandOptDef;

var getCommandNames = function getCommandNames(commandMapping) {
  return commandMapping.keySeq();
};

exports.getCommandNames = getCommandNames;

/***/ }),

/***/ "./src/emulator-state/environment-variables.js":
/*!*****************************************************!*\
  !*** ./src/emulator-state/environment-variables.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_312115__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsetEnvironmentVariable = exports.setEnvironmentVariable = exports.getEnvironmentVariable = exports.create = void 0;

var _immutable = __nested_webpack_require_312115__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Environment variable mapping containing arbitary data accessed by any
 * command or the emulator as a key-value pair
 * @param  {Object} [defaultVariables={}] default environment variables
 * @return {Map}                          environment variables
 */
var create = function create() {
  var defaultVariables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cwd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

  if (!cwd && !defaultVariables.hasOwnProperty('cwd')) {
    throw new Error("Failed to create environment variables. Missing 'cwd' (current working directory).");
  }

  return (0, _immutable.Map)(_objectSpread({
    'cwd': cwd
  }, defaultVariables));
};
/**
 * Gets the value of an environment variable
 * @param  {Map} environmentVariables environment variables
 * @param  {string} key               name of the environment variable
 * @return {T}                        the value stored in the environment variable
 */


exports.create = create;

var getEnvironmentVariable = function getEnvironmentVariable(environmentVariables, key) {
  return environmentVariables.get(key);
};
/**
 * Sets the value of an environment variable
 * @param {Map} environmentVariables environment variables
 * @param {string} key               name of the environment variable
 * @param {T} val                    value to store in the environment variable
 * @return {Map}                     environment variables
 */


exports.getEnvironmentVariable = getEnvironmentVariable;

var setEnvironmentVariable = function setEnvironmentVariable(environmentVariables, key, val) {
  return environmentVariables.set(key, val);
};
/**
 * Removes an environment variable
 * @param {Map} environmentVariables environment variables
 * @param {string} key               name of the environment variable
 * @return {Map}                     environment variables
 */


exports.setEnvironmentVariable = setEnvironmentVariable;

var unsetEnvironmentVariable = function unsetEnvironmentVariable(environmentVariables, key) {
  return environmentVariables["delete"](key);
};

exports.unsetEnvironmentVariable = unsetEnvironmentVariable;

/***/ }),

/***/ "./src/emulator-state/file-system.js":
/*!*******************************************!*\
  !*** ./src/emulator-state/file-system.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_315994__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = void 0;

var FileUtil = _interopRequireWildcard(__nested_webpack_require_315994__(/*! fs/util/file-util */ "./src/fs/util/file-util.js"));

var DirOp = _interopRequireWildcard(__nested_webpack_require_315994__(/*! fs/operations/directory-operations */ "./src/fs/operations/directory-operations.js"));

var _immutable = __nested_webpack_require_315994__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DEFAULT_FILE_SYSTEM = {
  '/': FileUtil.makeDirectory()
};
/**
 * Creates an immutable data structure for a file system
 * @param  {object} jsFs a file system in a simple JavaScript object
 * @return {Map}         an immutable file system
 */

var create = function create() {
  var jsFs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_FILE_SYSTEM;
  return DirOp.fillGaps((0, _immutable.fromJS)(jsFs));
};

exports.create = create;

/***/ }),

/***/ "./src/emulator-state/history.js":
/*!***************************************!*\
  !*** ./src/emulator-state/history.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_318557__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recordCommand = exports.create = void 0;

var _immutable = __nested_webpack_require_318557__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Creates a new history stack of previous commands that have been run in the
 * emulator
 * @param  {array}  [entries=[]] commands which have already been run (if any)
 * @return {Stack}               history list
 */
var create = function create() {
  var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return _immutable.Stack.of.apply(_immutable.Stack, _toConsumableArray(entries));
};
/**
 * Stores a command in history in a stack (i.e., the latest command is on top of
 * the history stack)
 * @param  {Stack} history     history
 * @param  {string} commandRun the command to store
 * @return {Stack}             history
 */


exports.create = create;

var recordCommand = function recordCommand(history, commandRun) {
  return history.push(commandRun);
};

exports.recordCommand = recordCommand;

/***/ }),

/***/ "./src/emulator-state/index.js":
/*!*************************************!*\
  !*** ./src/emulator-state/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_321078__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var CommandMapping = _interopRequireWildcard(__nested_webpack_require_321078__(/*! emulator-state/command-mapping */ "./src/emulator-state/command-mapping.js"));

var EnvironmentVariables = _interopRequireWildcard(__nested_webpack_require_321078__(/*! emulator-state/environment-variables */ "./src/emulator-state/environment-variables.js"));

var FileSystem = _interopRequireWildcard(__nested_webpack_require_321078__(/*! emulator-state/file-system */ "./src/emulator-state/file-system.js"));

var History = _interopRequireWildcard(__nested_webpack_require_321078__(/*! emulator-state/history */ "./src/emulator-state/history.js"));

var Outputs = _interopRequireWildcard(__nested_webpack_require_321078__(/*! emulator-state/outputs */ "./src/emulator-state/outputs.js"));

var _EmulatorState = _interopRequireDefault(__nested_webpack_require_321078__(/*! emulator-state/EmulatorState */ "./src/emulator-state/EmulatorState.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  EmulatorState: _EmulatorState["default"],
  CommandMapping: CommandMapping,
  EnvironmentVariables: EnvironmentVariables,
  FileSystem: FileSystem,
  History: History,
  Outputs: Outputs
};
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/emulator-state/outputs.js":
/*!***************************************!*\
  !*** ./src/emulator-state/outputs.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_324030__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRecord = exports.create = void 0;

var _immutable = __nested_webpack_require_324030__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

/**
 * Stores outputs from the emulator (e.g. text to display after running a command)
 * @param  {Array}  [outputs=[]] Previous outputs
 * @return {List}               List of outputs objects
 */
var create = function create() {
  var outputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return (0, _immutable.List)(outputs);
};
/**
 * Adds a new output record
 * @param {List}         outputs      outputs list
 * @param {OutputRecord} outputRecord record conforming to output schema
 */


exports.create = create;

var addRecord = function addRecord(outputs, outputRecord) {
  if (!_immutable.Record.isRecord(outputRecord)) {
    throw new Error('Only records of type OutputRecord can be added to outputs');
  }

  if (!outputRecord.has('type')) {
    throw new Error('Output record must include a type');
  }

  if (!outputRecord.has('content')) {
    throw new Error('Output record must include content');
  }

  return outputs.push(outputRecord);
};

exports.addRecord = addRecord;

/***/ }),

/***/ "./src/emulator-state/util.js":
/*!************************************!*\
  !*** ./src/emulator-state/util.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_325544__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvePath = void 0;

var EnvVariableUtil = _interopRequireWildcard(__nested_webpack_require_325544__(/*! emulator-state/environment-variables */ "./src/emulator-state/environment-variables.js"));

var PathUtil = _interopRequireWildcard(__nested_webpack_require_325544__(/*! fs/util/path-util */ "./src/fs/util/path-util.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Converts a given path to an absolute path using the
 * current working directory
 * @param  {EmulatorState} state emulator state
 * @param  {string} path         path (relative or absolute)
 * @return {string}              absolute path
 */
var resolvePath = function resolvePath(state, path) {
  var cwd = EnvVariableUtil.getEnvironmentVariable(state.getEnvVariables(), 'cwd');
  return PathUtil.toAbsolutePath(path, cwd);
};

exports.resolvePath = resolvePath;

/***/ }),

/***/ "./src/emulator/auto-complete.js":
/*!***************************************!*\
  !*** ./src/emulator/auto-complete.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_328024__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggestFileSystemNames = exports.suggestCommandOptions = exports.suggestCommands = void 0;

var PathUtil = _interopRequireWildcard(__nested_webpack_require_328024__(/*! fs/util/path-util */ "./src/fs/util/path-util.js"));

var GlobUtil = _interopRequireWildcard(__nested_webpack_require_328024__(/*! fs/util/glob-util */ "./src/fs/util/glob-util.js"));

var _commandMapping = __nested_webpack_require_328024__(/*! emulator-state/command-mapping */ "./src/emulator-state/command-mapping.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Suggest command names
 * @param  {Map}    cmdMapping     command mapping
 * @param  {string} partialStr     partial user input of a command
 * @return {array}                 list of possible text suggestions
 */
var suggestCommands = function suggestCommands(cmdMapping, partialStr) {
  var commandNameSeq = (0, _commandMapping.getCommandNames)(cmdMapping);
  return _toConsumableArray(GlobUtil.globSeq(commandNameSeq, "".concat(partialStr, "*")));
};
/**
 * Suggest command options
 * @param  {Map}    cmdMapping     command mapping
 * @param  {string} commandName    name of the command user is running
 * @param  {string} partialStr     partial user input of a command (excluding the command name)
 * @return {array}                 list of possible text suggestions
 */


exports.suggestCommands = suggestCommands;

var suggestCommandOptions = function suggestCommandOptions(cmdMapping, commandName, partialStr) {
  if (!(0, _commandMapping.isCommandSet)(cmdMapping, commandName)) {
    return [];
  }

  var optDefSeq = (0, _commandMapping.getCommandOptDef)(cmdMapping, commandName).keySeq().flatMap(function (opts) {
    return opts.split(',').map(function (opt) {
      return opt.trim();
    });
  });
  return _toConsumableArray(GlobUtil.globSeq(optDefSeq, "".concat(partialStr, "*")));
};
/**
 * Suggest file and folder names from partially completed user input
 * @param  {Map}    fileSystem file system
 * @param  {string} cwd        current working directory
 * @param  {string} partialStr partial string to base suggestions on (excluding the command name)
 * @return {array}             list of possible text suggestions
 */


exports.suggestCommandOptions = suggestCommandOptions;

var suggestFileSystemNames = function suggestFileSystemNames(fileSystem, cwd, partialStr) {
  var path = PathUtil.toAbsolutePath(partialStr, cwd); // complete name of a folder or file

  var completeNamePattern = "".concat(path, "*"); // complete child folder name

  var completeSubfolderPattern = path === '/' ? '/*' : "".concat(path, "*/*"); // only complete child folders when the path ends with / (which marks a directory path)

  var globPattern = partialStr.endsWith('/') ? completeSubfolderPattern : completeNamePattern;
  var childPaths = GlobUtil.globPaths(fileSystem, globPattern);

  if (PathUtil.isAbsPath(partialStr)) {
    return _toConsumableArray(childPaths); // absolute paths
  }

  return _toConsumableArray(childPaths.map(function (path) {
    var pathPartsWithoutTail = PathUtil.toPathParts(partialStr).slice(0, -1);
    var newTail = PathUtil.getLastPathPart(path);
    return PathUtil.toPath(pathPartsWithoutTail.concat(newTail));
  })); // relative paths
};

exports.suggestFileSystemNames = suggestFileSystemNames;

/***/ }),

/***/ "./src/emulator/command-runner.js":
/*!****************************************!*\
  !*** ./src/emulator/command-runner.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_334108__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = exports.makeRunnerErrorOutput = void 0;

var _emulatorError = __nested_webpack_require_334108__(/*! emulator/emulator-error */ "./src/emulator/emulator-error.js");

var _outputFactory = __nested_webpack_require_334108__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js");

var CommandMappingUtil = _interopRequireWildcard(__nested_webpack_require_334108__(/*! emulator-state/command-mapping */ "./src/emulator-state/command-mapping.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Makes an internal emulator error for emulator output. Error output may be
 * visible to the user.
 * @param  {string} errorType type of emulator error
 * @return {object}           error output object
 */
var makeRunnerErrorOutput = function makeRunnerErrorOutput(errorType) {
  return (0, _outputFactory.makeErrorOutput)((0, _emulatorError.makeError)(errorType));
};
/**
 * Runs a command and returns an object containing either:
 * - outputs from running the command, or
 * - new emulator state after running the command, or
 * - new emulator state and output after running the command
 *
 * The form of the object from this function is as follows:
 * {
 *   outputs: [optional array of output records]
 *   output: [optional single output record]
 *   state: [optional Map]
 * }
 * @param  {Map}    commandMapping command mapping from emulator state
 * @param  {string} commandName    name of command to run
 * @param  {array}  commandArgs    commands to provide to the command function
 * @param  {string}  errorStr      a default string to be displayed if no command is found
 * @return {object}                outputs and/or new state of the emulator
 */


exports.makeRunnerErrorOutput = makeRunnerErrorOutput;

var run = function run(commandMapping, commandName, commandArgs) {
  var errorStr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _emulatorError.emulatorErrorType.COMMAND_NOT_FOUND;

  var notFoundCallback = function notFoundCallback() {
    return {
      output: makeRunnerErrorOutput(errorStr)
    };
  };

  if (!CommandMappingUtil.isCommandSet(commandMapping, commandName)) {
    return notFoundCallback.apply(void 0, _toConsumableArray(commandArgs));
  }

  var command = CommandMappingUtil.getCommandFn(commandMapping, commandName);

  try {
    return command.apply(void 0, _toConsumableArray(commandArgs)); // run extracted command from the mapping
  } catch (fatalCommandError) {
    return {
      output: makeRunnerErrorOutput(_emulatorError.emulatorErrorType.UNEXPECTED_COMMAND_FAILURE)
    };
  }
};

exports.run = run;

/***/ }),

/***/ "./src/emulator/emulator-error.js":
/*!****************************************!*\
  !*** ./src/emulator/emulator-error.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeError = exports.emulatorErrorType = void 0;

/**
 * Emulator error type
 * @type {Object}
 */
var emulatorErrorType = {
  COMMAND_NOT_FOUND: 'Command not found',
  UNEXPECTED_COMMAND_FAILURE: 'Unhandled command error'
};
/**
 * Creates an error to display to the user originating from the emulator
 * @param  {string} emulatorErrorType  file system error type
 * @param  {string} [message='']       optional metadata for developers about the error
 * @return {object}                    internal error object
 */

exports.emulatorErrorType = emulatorErrorType;

var makeError = function makeError(emulatorErrorType) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return {
    source: 'emulator',
    type: emulatorErrorType,
    message: message
  };
};

exports.makeError = makeError;

/***/ }),

/***/ "./src/emulator/index.js":
/*!*******************************!*\
  !*** ./src/emulator/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_340678__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var CommandRunner = _interopRequireWildcard(__nested_webpack_require_340678__(/*! emulator/command-runner */ "./src/emulator/command-runner.js"));

var _commandParser = _interopRequireDefault(__nested_webpack_require_340678__(/*! parser/command-parser */ "./src/parser/command-parser.js"));

var _outputFactory = __nested_webpack_require_340678__(/*! emulator-output/output-factory */ "./src/emulator-output/output-factory.js");

var _history = __nested_webpack_require_340678__(/*! emulator-state/history */ "./src/emulator-state/history.js");

var _environmentVariables = __nested_webpack_require_340678__(/*! emulator-state/environment-variables */ "./src/emulator-state/environment-variables.js");

var _autoComplete = __nested_webpack_require_340678__(/*! emulator/auto-complete */ "./src/emulator/auto-complete.js");

var _immutable = __nested_webpack_require_340678__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Emulator = /*#__PURE__*/function () {
  function Emulator() {
    _classCallCheck(this, Emulator);
  }

  _createClass(Emulator, [{
    key: "autocomplete",

    /**
     * Completes user input if there is one, and only one, suggestion.
     *
     * If there are no suggestions or more than one suggestion, the original
     * user input will be returned.
     * @param  {EmulatorState} state      emulator state
     * @param  {string}        partialStr partial user input to the emulator
     * @return {string}                   completed user input when one suggest (or, otherwsie, the original input)
     */
    value: function autocomplete(state, partialStr) {
      var suggestions = this.suggest(state, partialStr);

      if (suggestions.length !== 1) {
        return partialStr;
      }

      var strParts = new _immutable.List(partialStr.split(' '));
      var autocompletedText = suggestions[0];
      return strParts.update(-1, function (lastVal) {
        return autocompletedText;
      }).join(' ');
    }
  }, {
    key: "suggest",

    /**
     * Suggest what the user will type next
     * @param  {EmulatorState} state      emulator state
     * @param  {string}        partialStr partial user input of a command
     * @return {array}                    list of possible text suggestions
     */
    value: function suggest(state, partialStr) {
      partialStr = this._trimLeadingSpace(partialStr);
      var lastPartialChar = partialStr.slice(-1);
      var isTypingNewPart = lastPartialChar === ' ';
      var strParts = partialStr.trim().split(' ');

      var _this$_getBoundaryWor = this._getBoundaryWords(strParts),
          cmdName = _this$_getBoundaryWor.start,
          lastTextEntered = _this$_getBoundaryWor.end;

      if (!isTypingNewPart && strParts.length === 1) {
        return (0, _autoComplete.suggestCommands)(state.getCommandMapping(), cmdName);
      }

      var strToComplete = isTypingNewPart ? '' : lastTextEntered;
      var cwd = (0, _environmentVariables.getEnvironmentVariable)(state.getEnvVariables(), 'cwd');
      return [].concat(_toConsumableArray((0, _autoComplete.suggestCommandOptions)(state.getCommandMapping(), cmdName, strToComplete)), _toConsumableArray((0, _autoComplete.suggestFileSystemNames)(state.getFileSystem(), cwd, strToComplete)));
    }
  }, {
    key: "_trimLeadingSpace",
    value: function _trimLeadingSpace(str) {
      return str.replace(/^\s+/g, '');
    }
  }, {
    key: "_getBoundaryWords",
    value: function _getBoundaryWords(strParts) {
      return {
        start: strParts[0],
        end: strParts[strParts.length - 1]
      };
    }
  }, {
    key: "execute",

    /**
     * Runs emulator command
     * @param  {EmulatorState}  state                   emulator state before running command
     * @param  {string}         str                     command string to execute
     * @param  {Array}          [executionListeners=[]] list of plugins to notify while running the command
     * @param  {string}         errorStr                string to display on unrecognized command
     * @return {EmulatorState}                          updated emulator state after running command
     */
    value: function execute(state, str) {
      var executionListeners = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var errorStr = arguments.length > 3 ? arguments[3] : undefined;

      var _iterator = _createForOfIteratorHelper(executionListeners),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var executionListener = _step.value;
          executionListener.onExecuteStarted(state, str);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      state = this._addHeaderOutput(state, str);

      if (str.trim() === '') {
        // empty command string
        state = this._addCommandOutputs(state, [(0, _outputFactory.makeTextOutput)('')]);
      } else {
        state = this._addCommandToHistory(state, str);
        state = this._updateStateByExecution(state, str, errorStr);
      }

      var _iterator2 = _createForOfIteratorHelper(executionListeners),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _executionListener = _step2.value;

          _executionListener.onExecuteCompleted(state);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return state;
    }
  }, {
    key: "_updateStateByExecution",
    value: function _updateStateByExecution(state, commandStrToExecute, errorStr) {
      var _iterator3 = _createForOfIteratorHelper((0, _commandParser["default"])(commandStrToExecute)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _step3.value,
              commandName = _step3$value.commandName,
              commandOptions = _step3$value.commandOptions;
          var commandMapping = state.getCommandMapping();
          var commandArgs = [state, commandOptions];

          var _CommandRunner$run = CommandRunner.run(commandMapping, commandName, commandArgs, errorStr),
              nextState = _CommandRunner$run.state,
              output = _CommandRunner$run.output,
              outputs = _CommandRunner$run.outputs;

          if (nextState) {
            state = nextState;
          }

          if (output) {
            state = this._addCommandOutputs(state, [output]);
          } else if (outputs) {
            state = this._addCommandOutputs(state, outputs);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return state;
    }
  }, {
    key: "_addCommandToHistory",
    value: function _addCommandToHistory(state, command) {
      var history = state.getHistory();
      return state.setHistory((0, _history.recordCommand)(history, command));
    }
  }, {
    key: "_addHeaderOutput",
    value: function _addHeaderOutput(state, commandStr) {
      var envVariables = state.getEnvVariables();
      var cwd = (0, _environmentVariables.getEnvironmentVariable)(envVariables, 'cwd');
      return this._addCommandOutputs(state, [(0, _outputFactory.makeHeaderOutput)(cwd, commandStr)]);
    }
    /**
     * Appends outputs to the internal state of outputs
     * @param {List} outputs list of outputs
     */

  }, {
    key: "_addCommandOutputs",
    value: function _addCommandOutputs(state, outputs) {
      var _iterator4 = _createForOfIteratorHelper(outputs),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var output = _step4.value;

          var _outputs = state.getOutputs();

          state = state.setOutputs(_outputs.push(output));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return state;
    }
  }]);

  return Emulator;
}();

exports["default"] = Emulator;
module.exports = exports.default;

/***/ }),

/***/ "./src/emulator/plugins/BoundedHistoryIterator.js":
/*!********************************************************!*\
  !*** ./src/emulator/plugins/BoundedHistoryIterator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Makes a stack iterator for a point in history.
 *
 * Can go backwards and forwards through the history and is bounded by
 * the size of the stack.
 */
var BoundedHistoryIterator = /*#__PURE__*/function () {
  function BoundedHistoryIterator(historyStack) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, BoundedHistoryIterator);

    this.historyStack = historyStack.push('');
    this.index = index;
  }

  _createClass(BoundedHistoryIterator, [{
    key: "hasUp",
    value: function hasUp() {
      return this.index + 1 < this.historyStack.size;
    }
  }, {
    key: "up",
    value: function up() {
      if (this.hasUp()) {
        this.index++;
      }

      return this.historyStack.get(this.index);
    }
  }, {
    key: "hasDown",
    value: function hasDown() {
      return this.index - 1 >= 0;
    }
  }, {
    key: "down",
    value: function down() {
      if (this.hasDown()) {
        this.index--;
      }

      return this.historyStack.get(this.index);
    }
  }]);

  return BoundedHistoryIterator;
}();

exports["default"] = BoundedHistoryIterator;
;
module.exports = exports.default;

/***/ }),

/***/ "./src/emulator/plugins/HistoryKeyboardPlugin.js":
/*!*******************************************************!*\
  !*** ./src/emulator/plugins/HistoryKeyboardPlugin.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_355624__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BoundedHistoryIterator = _interopRequireDefault(__nested_webpack_require_355624__(/*! emulator/plugins/BoundedHistoryIterator */ "./src/emulator/plugins/BoundedHistoryIterator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HistoryKeyboardPlugin = /*#__PURE__*/function () {
  function HistoryKeyboardPlugin(state) {
    _classCallCheck(this, HistoryKeyboardPlugin);

    this._nullableHistoryIterator = null;
    this.historyStack = state.getHistory();
  } // Plugin contract


  _createClass(HistoryKeyboardPlugin, [{
    key: "onExecuteStarted",
    value: function onExecuteStarted(state, str) {} // no-op
    // Plugin contract

  }, {
    key: "onExecuteCompleted",
    value: function onExecuteCompleted(state) {
      this._nullableHistoryIterator = null;
      this.historyStack = state.getHistory();
    } // Plugin API

  }, {
    key: "completeUp",
    value: function completeUp() {
      this.createHistoryIteratorIfNull();
      return this._nullableHistoryIterator.up();
    }
  }, {
    key: "completeDown",
    value: function completeDown() {
      this.createHistoryIteratorIfNull();
      return this._nullableHistoryIterator.down();
    } // Private methods

  }, {
    key: "createHistoryIteratorIfNull",
    value: function createHistoryIteratorIfNull() {
      if (!this._nullableHistoryIterator) {
        this._nullableHistoryIterator = new _BoundedHistoryIterator["default"](this.historyStack);
      }
    }
  }]);

  return HistoryKeyboardPlugin;
}();

exports["default"] = HistoryKeyboardPlugin;
module.exports = exports.default;

/***/ }),

/***/ "./src/fs/fs-error.js":
/*!****************************!*\
  !*** ./src/fs/fs-error.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeError = exports.fsErrorType = void 0;

/**
 * File system error types
 * @type {Object}
 */
var fsErrorType = {
  FILE_EXISTS: 'File exists',
  DIRECTORY_EXISTS: 'Directory exists',
  DIRECTORY_NOT_EMPTY: 'Directory not empty',
  NO_SUCH_FILE_OR_DIRECTORY: 'No such file or directory',
  NO_SUCH_FILE: 'No such file',
  NO_SUCH_DIRECTORY: 'No such directory',
  FILE_OR_DIRECTORY_EXISTS: 'File or directory exists',
  IS_A_DIRECTORY: 'Is a directory',
  NOT_A_DIRECTORY: 'Not a directory',
  PERMISSION_DENIED: 'Permission denied',
  OTHER: 'Other'
};
/**
 * Create a non-fatal file system error object
 *
 * For fatal errors do not use this. Throw an error instead.
 * @param  {string} fsErrorType  file system error type
 * @param  {string} [message=''] optional metadata for developers about the error
 * @return {object}              internal error object
 */

exports.fsErrorType = fsErrorType;

var makeError = function makeError(fsErrorType) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return {
    source: 'fs',
    type: fsErrorType,
    message: message
  };
};

exports.makeError = makeError;

/***/ }),

/***/ "./src/fs/index.js":
/*!*************************!*\
  !*** ./src/fs/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_359736__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var DirOp = _interopRequireWildcard(__nested_webpack_require_359736__(/*! ./operations-with-permissions/directory-operations */ "./src/fs/operations-with-permissions/directory-operations.js"));

var FileOp = _interopRequireWildcard(__nested_webpack_require_359736__(/*! ./operations-with-permissions/file-operations */ "./src/fs/operations-with-permissions/file-operations.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  DirOp: DirOp,
  FileOp: FileOp
};
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/fs/operations-with-permissions/directory-operations.js":
/*!********************************************************************!*\
  !*** ./src/fs/operations-with-permissions/directory-operations.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_362053__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renameDirectory = exports.deleteDirectory = exports.copyDirectory = exports.addDirectory = exports.listDirectoryFolders = exports.listDirectoryFiles = exports.listDirectory = exports.hasDirectory = void 0;

var DirectoryOperations = _interopRequireWildcard(__nested_webpack_require_362053__(/*! fs/operations/directory-operations */ "./src/fs/operations/directory-operations.js"));

var PermissionUtil = _interopRequireWildcard(__nested_webpack_require_362053__(/*! fs/util/permission-util */ "./src/fs/util/permission-util.js"));

var _fsError = __nested_webpack_require_362053__(/*! fs/fs-error */ "./src/fs/fs-error.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Adds modification permissions to directory operations by wrapping
 * directory operations
 */
var makeDirectoryOperationPermissionError = function makeDirectoryOperationPermissionError() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Cannot modify directory';
  return {
    err: (0, _fsError.makeError)(_fsError.fsErrorType.PERMISSION_DENIED, message)
  };
};

var hasDirectory = function hasDirectory() {
  return DirectoryOperations.hasDirectory.apply(DirectoryOperations, arguments);
};

exports.hasDirectory = hasDirectory;

var listDirectory = function listDirectory() {
  return DirectoryOperations.listDirectory.apply(DirectoryOperations, arguments);
};

exports.listDirectory = listDirectory;

var listDirectoryFiles = function listDirectoryFiles() {
  return DirectoryOperations.listDirectoryFiles.apply(DirectoryOperations, arguments);
};

exports.listDirectoryFiles = listDirectoryFiles;

var listDirectoryFolders = function listDirectoryFolders() {
  return DirectoryOperations.listDirectoryFolders.apply(DirectoryOperations, arguments);
};

exports.listDirectoryFolders = listDirectoryFolders;

var addDirectory = function addDirectory(fs, path) {
  if (!PermissionUtil.canModifyPath(fs, path)) {
    return makeDirectoryOperationPermissionError();
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return DirectoryOperations.addDirectory.apply(DirectoryOperations, [fs, path].concat(args));
};

exports.addDirectory = addDirectory;

var copyDirectory = function copyDirectory(fs, srcPath, destPath) {
  if (!PermissionUtil.canModifyPath(fs, srcPath)) {
    return makeDirectoryOperationPermissionError('Cannot modify source directory');
  }

  if (!PermissionUtil.canModifyPath(fs, destPath)) {
    return makeDirectoryOperationPermissionError('Cannot modify dest directory');
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  return DirectoryOperations.copyDirectory.apply(DirectoryOperations, [fs, srcPath, destPath].concat(args));
};

exports.copyDirectory = copyDirectory;

var deleteDirectory = function deleteDirectory(fs, path) {
  if (!PermissionUtil.canModifyPath(fs, path)) {
    return makeDirectoryOperationPermissionError();
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return DirectoryOperations.deleteDirectory.apply(DirectoryOperations, [fs, path].concat(args));
};

exports.deleteDirectory = deleteDirectory;

var renameDirectory = function renameDirectory(fs, currentPath, newPath) {
  if (!PermissionUtil.canModifyPath(fs, currentPath)) {
    return makeDirectoryOperationPermissionError('Cannot modify current path');
  }

  if (!PermissionUtil.canModifyPath(fs, newPath)) {
    return makeDirectoryOperationPermissionError('Cannot modify renamed path');
  }

  return DirectoryOperations.renameDirectory(fs, currentPath, newPath);
};

exports.renameDirectory = renameDirectory;

/***/ }),

/***/ "./src/fs/operations-with-permissions/file-operations.js":
/*!***************************************************************!*\
  !*** ./src/fs/operations-with-permissions/file-operations.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_367661__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFile = exports.copyFile = exports.writeFile = exports.readFile = exports.hasFile = void 0;

var PermissionUtil = _interopRequireWildcard(__nested_webpack_require_367661__(/*! fs/util/permission-util */ "./src/fs/util/permission-util.js"));

var FileOperations = _interopRequireWildcard(__nested_webpack_require_367661__(/*! fs/operations/file-operations */ "./src/fs/operations/file-operations.js"));

var _fsError = __nested_webpack_require_367661__(/*! fs/fs-error */ "./src/fs/fs-error.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Adds modification permissions to file operations by wrapping
 * file operations
 */
var makeFileOperationPermissionError = function makeFileOperationPermissionError() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Cannot modify file';
  return {
    err: (0, _fsError.makeError)(_fsError.fsErrorType.PERMISSION_DENIED, message)
  };
};

var hasFile = function hasFile() {
  return FileOperations.hasFile.apply(FileOperations, arguments);
};

exports.hasFile = hasFile;

var readFile = function readFile() {
  return FileOperations.readFile.apply(FileOperations, arguments);
};

exports.readFile = readFile;

var writeFile = function writeFile(fs, filePath) {
  if (!PermissionUtil.canModifyPath(fs, filePath)) {
    return makeFileOperationPermissionError();
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return FileOperations.writeFile.apply(FileOperations, [fs, filePath].concat(args));
};

exports.writeFile = writeFile;

var copyFile = function copyFile(fs, sourcePath, destPath) {
  if (!PermissionUtil.canModifyPath(fs, sourcePath)) {
    return makeFileOperationPermissionError('Cannot modify source file');
  }

  if (!PermissionUtil.canModifyPath(fs, destPath)) {
    return makeFileOperationPermissionError('Cannot modify destination file');
  }

  return FileOperations.copyFile(fs, sourcePath, destPath);
};

exports.copyFile = copyFile;

var deleteFile = function deleteFile(fs, filePath) {
  if (!PermissionUtil.canModifyPath(fs, filePath)) {
    return makeFileOperationPermissionError();
  }

  return FileOperations.deleteFile(fs, filePath);
};

exports.deleteFile = deleteFile;

/***/ }),

/***/ "./src/fs/operations/base-operations.js":
/*!**********************************************!*\
  !*** ./src/fs/operations/base-operations.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_371616__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.add = void 0;

var GlobUtil = _interopRequireWildcard(__nested_webpack_require_371616__(/*! fs/util/glob-util */ "./src/fs/util/glob-util.js"));

var DirOp = _interopRequireWildcard(__nested_webpack_require_371616__(/*! fs/operations/directory-operations */ "./src/fs/operations/directory-operations.js"));

var FileOp = _interopRequireWildcard(__nested_webpack_require_371616__(/*! fs/operations/file-operations */ "./src/fs/operations/file-operations.js"));

var PathUtil = _interopRequireWildcard(__nested_webpack_require_371616__(/*! fs/util/path-util */ "./src/fs/util/path-util.js"));

var _fsError = __nested_webpack_require_371616__(/*! fs/fs-error */ "./src/fs/fs-error.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Adds a file or directory to a path
 * @param {Map}     fs                     file system
 * @param {string}  pathToAdd              path to add the file or directory to
 * @param {string}  fsElementToAdd         file or directory map
 * @param {Boolean} [addParentPaths=false] true, if path parent directories should
 *                                         be made (if they don't exist)
 * @return {object}                        file system or error
 */
var add = function add(fs, pathToAdd, fsElementToAdd) {
  var addParentPaths = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (fs.has(pathToAdd)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.FILE_OR_DIRECTORY_EXISTS)
    };
  }

  var parentPaths = PathUtil.getPathBreadCrumbs(pathToAdd).slice(0, -1);

  var _iterator = _createForOfIteratorHelper(parentPaths),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var parentPath = _step.value;

      if (FileOp.hasFile(fs, parentPath)) {
        return {
          err: (0, _fsError.makeError)(_fsError.fsErrorType.NOT_A_DIRECTORY, "Cannot add path to a file: ".concat(parentPath))
        };
      }

      if (!fs.has(parentPath) && !addParentPaths) {
        return {
          err: (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_DIRECTORY, "Parent directory does not exist: ".concat(parentPath))
        };
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var addedDirectoryFs = fs.set(pathToAdd, fsElementToAdd);
  return {
    fs: addParentPaths ? DirOp.fillGaps(addedDirectoryFs) : addedDirectoryFs
  };
};
/**
 * Removes a file or directory from a path
 * @param  {Map}     fs                                  file system
 * @param  {string}  pathToRemove                        removes the path
 * @param  {Boolean} [isNonEmptyDirectoryRemovable=true] true if non-empty paths can be removed
 * @return {object}                                      file system or error
 */


exports.add = add;

var remove = function remove(fs, pathToRemove) {
  var isNonEmptyDirectoryRemovable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!fs.has(pathToRemove)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_FILE_OR_DIRECTORY)
    };
  }

  var childPathPattern = pathToRemove === '/' ? '/**' : "".concat(pathToRemove, "/**");
  var childPaths = GlobUtil.globPaths(fs, childPathPattern);

  if (!isNonEmptyDirectoryRemovable && !childPaths.isEmpty()) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.DIRECTORY_NOT_EMPTY)
    };
  }

  return {
    fs: fs.removeAll(childPaths.concat(pathToRemove))
  };
};

exports.remove = remove;

/***/ }),

/***/ "./src/fs/operations/directory-operations.js":
/*!***************************************************!*\
  !*** ./src/fs/operations/directory-operations.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_378296__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renameDirectory = exports.deleteDirectory = exports.copyDirectory = exports.addDirectory = exports.listDirectory = exports.listDirectoryFolders = exports.listDirectoryFiles = exports.hasDirectory = exports.fillGaps = void 0;

var FileUtil = _interopRequireWildcard(__nested_webpack_require_378296__(/*! fs/util/file-util */ "./src/fs/util/file-util.js"));

var GlobUtil = _interopRequireWildcard(__nested_webpack_require_378296__(/*! fs/util/glob-util */ "./src/fs/util/glob-util.js"));

var PathUtil = _interopRequireWildcard(__nested_webpack_require_378296__(/*! fs/util/path-util */ "./src/fs/util/path-util.js"));

var BaseOp = _interopRequireWildcard(__nested_webpack_require_378296__(/*! fs/operations/base-operations */ "./src/fs/operations/base-operations.js"));

var _fsError = __nested_webpack_require_378296__(/*! fs/fs-error */ "./src/fs/fs-error.js");

var _fileOperations = __nested_webpack_require_378296__(/*! fs/operations/file-operations */ "./src/fs/operations/file-operations.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var onlyFilesFilter = function onlyFilesFilter(fs) {
  return function (path) {
    return FileUtil.isFile(fs.get(path));
  };
};

var onlyDirectoriesFilter = function onlyDirectoriesFilter(fs) {
  return function (path) {
    return FileUtil.isDirectory(fs.get(path));
  };
};
/**
 * Fill file system gaps with empty directories.
 *
 * EXPLANATION:
 * A file system can be left in a state where there the directory structure
 * is incomplete and there may be illogical gaps in the structure after
 * manually creating or editing the file system.
 *
 * For example, we might have a file system that looks like this after manually
 * adding a directory of '/a/b/c':
 *
 * {
 *  '/': {..}
 *  '/a/b/c': {..}
 * }
 *
 * As a result of the operation, we're missing directories of '/a' and '/a/b'.
 * We can fill these missing directory gaps to get a properly formed directory
 * structure:
 *
 * {
 *  '/': {..}
 *  '/a': {..}
 *  '/a/b': {..}
 *  '/a/b/c': {..}
 * }
 * @param  {Map}    fs   file system with gaps in directory structure
 * @return {Map}         file system without directory gaps
 */


var fillGaps = function fillGaps(fs) {
  var emptyDirectory = FileUtil.makeDirectory();
  var directoryGapPaths = fs.keySeq() // sequence of paths
  .flatMap(function (path) {
    return PathUtil.getPathBreadCrumbs(path);
  }).filter(function (path) {
    return !fs.has(path);
  });
  return fs.withMutations(function (fs) {
    var _iterator = _createForOfIteratorHelper(directoryGapPaths),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var directoryGapPath = _step.value;
        fs.set(directoryGapPath, emptyDirectory);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
};
/**
 * Check if a directory exists in the file system
 * @param  {Map}     fs   file system
 * @param  {string}  path path to check if is a directory
 * @return {boolean}      true, if the directory exists
 */


exports.fillGaps = fillGaps;

var hasDirectory = function hasDirectory(fs, path) {
  return fs.has(path) && FileUtil.isDirectory(fs.get(path));
};
/**
 * Creates a list of file names
 * @param  {Map}    fs   file system
 * @param  {string} path directory path to list files in
 * @return {object}      list of file names or an error
 */


exports.hasDirectory = hasDirectory;

var listDirectoryFiles = function listDirectoryFiles(fs, path) {
  if ((0, _fileOperations.hasFile)(fs, path)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.FILE_EXISTS, 'File exists at path')
    };
  }

  if (!hasDirectory(fs, path)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_DIRECTORY, 'Cannot list files in non-existent directory')
    };
  }

  ;
  var filesPattern = path === '/' ? '/*' : "".concat(path, "/*");
  return {
    list: GlobUtil.captureGlobPaths(fs, filesPattern, onlyFilesFilter(fs))
  };
};
/**
 * Creates a list of folder names inside the current directory.
 * @param  {Map}    fs   file system
 * @param  {string} path path to list directories in
 * @return {object}      list of directories or an error
 */


exports.listDirectoryFiles = listDirectoryFiles;

var listDirectoryFolders = function listDirectoryFolders(fs, path) {
  var isTrailingSlashAppended = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if ((0, _fileOperations.hasFile)(fs, path)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.FILE_EXISTS, 'File exists at path')
    };
  }

  if (!hasDirectory(fs, path)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_DIRECTORY, 'Cannot list folders in non-existent directory')
    };
  }

  ;
  var foldersPattern = path === '/' ? '/*' : "".concat(path, "/*");
  var folderNames = GlobUtil.captureGlobPaths(fs, foldersPattern, onlyDirectoriesFilter(fs));

  if (isTrailingSlashAppended) {
    return {
      list: folderNames.map(function (folderName) {
        return "".concat(folderName, "/");
      })
    };
  }

  return {
    list: folderNames
  };
};
/**
 * Lists files and folders in a directory
 * @param  {Map}     fs                                      file system
 * @param  {string}  path                                    directory path to list files and folders in
 * @param  {boolean} [addTrailingSlash=true]                 add a / to the end of folder names
 * @return {object}                                          file system or an error
 */


exports.listDirectoryFolders = listDirectoryFolders;

var listDirectory = function listDirectory(fs, path) {
  var addTrailingSlash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var _listDirectoryFiles = listDirectoryFiles(fs, path),
      listFileErr = _listDirectoryFiles.err,
      fileList = _listDirectoryFiles.list;

  var _listDirectoryFolders = listDirectoryFolders(fs, path, addTrailingSlash),
      listFolderErr = _listDirectoryFolders.err,
      folderList = _listDirectoryFolders.list;

  if (listFileErr || listFolderErr) {
    return {
      err: listFileErr ? listFileErr : listFolderErr
    };
  }

  ;
  return {
    list: fileList.concat(folderList)
  };
};
/**
 * Adds a directory to the file system
 * @param {Map}     fs                           file system
 * @param {string}  path                         path to add a directory to
 * @param {Map}     dir                          directory
 * @param {boolean} [isReplaceExistingDir=false] whether a directory can be overwritten if it already exists
 * @return {object}                              file system or an error
 */


exports.listDirectory = listDirectory;

var addDirectory = function addDirectory(fs, path, dir) {
  var addParentPaths = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if ((0, _fileOperations.hasFile)(fs, PathUtil.getPathParent(path))) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.FILE_EXISTS, 'File exists at path')
    };
  }

  return BaseOp.add(fs, path, dir, addParentPaths);
};
/**
 * Private helper function implementing rules for replacing a source path (the path
 * we're copying from) with a destination path (the path we're copying to). Note
 * that in our file system:
 * - A file cannot overwrite a directory,
 * - a directory cannot overwrite a file, and
 * - a file/directory can overwrite a file/directory.
 * @param  {Map}       fs      file system
 * @param  {Sequence}  pathSeq sequence of source and destination paths
 * @return {Boolean}           true, if a source path can replace a destination path
 */


exports.addDirectory = addDirectory;

var isPathTypeMatching = function isPathTypeMatching(fs, pathSeq) {
  var _iterator2 = _createForOfIteratorHelper(pathSeq),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          srcPath = _step2$value[0],
          destPath = _step2$value[1];

      if (fs.has(destPath)) {
        if ((0, _fileOperations.hasFile)(fs, srcPath) && hasDirectory(fs, destPath)) {
          // Cannot overwrite a file with a directory
          return false;
        } else if (hasDirectory(fs, srcPath) && (0, _fileOperations.hasFile)(fs, destPath)) {
          // Cannot overwrite a directory with a file
          return false;
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return true;
};
/**
 * Copies a directory (and all directories included inside that directory)
 * from a source directory to a destination directory
 *
 * If the destination doesn't exist, it can be created.
 *
 * The source and destination must be a directory and not a file.
 * @param  {Map}     fs                             file system
 * @param  {string}  srcPath                        directory path to copy from
 * @param  {string}  destPath                       directory path to copy to
 * @return {object}                                 file system or an error
 */


var copyDirectory = function copyDirectory(fs, srcPath, destPath) {
  var overwrite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!hasDirectory(fs, srcPath)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_DIRECTORY, 'Source directory does not exist')
    };
  }

  ;

  if (!hasDirectory(fs, destPath)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_DIRECTORY, 'Destination directory does not exist')
    };
  }

  ;
  var srcChildPattern = srcPath === '/' ? '/**' : "".concat(srcPath, "/**");
  var srcPaths = GlobUtil.globPaths(fs, srcChildPattern);
  var srcSubPaths = GlobUtil.captureGlobPaths(fs, srcChildPattern);
  var destPaths = srcSubPaths.map(function (path) {
    return path === '/' ? destPath : "".concat(destPath, "/").concat(path);
  });

  if (!isPathTypeMatching(fs, srcPaths.zip(destPaths))) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.OTHER, 'Cannot overwrite a directory with file OR a file with directory')
    };
  }

  return {
    fs: fs.withMutations(function (newFs) {
      var _iterator3 = _createForOfIteratorHelper(srcPaths.zip(destPaths)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              _srcPath = _step3$value[0],
              _destPath = _step3$value[1];

          if (!fs.has(_destPath) || overwrite) {
            newFs.set(_destPath, fs.get(_srcPath));
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    })
  };
};
/**
 * Remove a directory from a file system
 * @param  {Map}     fs                                   file system
 * @param  {string}  pathToDelete                         directory path to delete
 * @param  {Boolean} [isNonEmptyDirectoryRemovable=false] whether directories with files in them can be removed
 * @return {object}                                       file system or an error
 */


exports.copyDirectory = copyDirectory;

var deleteDirectory = function deleteDirectory(fs, pathToDelete) {
  var isNonEmptyDirectoryRemovable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _fileOperations.hasFile)(fs, pathToDelete)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.FILE_EXISTS, 'File exists at path')
    };
  }

  if (!hasDirectory(fs, pathToDelete)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_DIRECTORY, "No such directory: ".concat(pathToDelete))
    };
  }

  ;
  return BaseOp.remove(fs, pathToDelete, isNonEmptyDirectoryRemovable);
};
/**
 * Rename a directory
 * @param  {Map}    fs          file system
 * @param  {string} currentPath directory path to rename (and hence remove)
 * @param  {string} newPath     path to place the renamed directory
 * @return {object}             file system or an error
 */


exports.deleteDirectory = deleteDirectory;

var renameDirectory = function renameDirectory(fs, currentPath, newPath) {
  var _copyDirectory = copyDirectory(fs, currentPath, newPath, true),
      err = _copyDirectory.err,
      copiedFS = _copyDirectory.fs;

  if (err) {
    return {
      err: err
    };
  }

  return deleteDirectory(copiedFS, currentPath, true);
};

exports.renameDirectory = renameDirectory;

/***/ }),

/***/ "./src/fs/operations/file-operations.js":
/*!**********************************************!*\
  !*** ./src/fs/operations/file-operations.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_394876__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFile = exports.copyFile = exports.writeFile = exports.readFile = exports.hasFile = void 0;

var PathUtil = _interopRequireWildcard(__nested_webpack_require_394876__(/*! fs/util/path-util */ "./src/fs/util/path-util.js"));

var BaseOp = _interopRequireWildcard(__nested_webpack_require_394876__(/*! fs/operations/base-operations */ "./src/fs/operations/base-operations.js"));

var _fileUtil = __nested_webpack_require_394876__(/*! fs/util/file-util */ "./src/fs/util/file-util.js");

var _directoryOperations = __nested_webpack_require_394876__(/*! fs/operations/directory-operations */ "./src/fs/operations/directory-operations.js");

var _fsError = __nested_webpack_require_394876__(/*! fs/fs-error */ "./src/fs/fs-error.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Checks whether a file exists
 * @param  {Map}     fs       file system
 * @param  {string}  dirPath  directory of the file to check for existence
 * @param  {string}  fileName file name to check for existence
 * @return {Boolean}          true, if the file exists
 */
var hasFile = function hasFile(fs, filePath) {
  if (fs.has(filePath)) {
    var possibleFile = fs.get(filePath);
    return (0, _fileUtil.isFile)(possibleFile);
  }

  return false;
};
/**
 * Get a file from the file system
 * @param  {Map}    fs       file system
 * @param  {string} filePath path to file to read
 * @return {object}          file system or an error
 */


exports.hasFile = hasFile;

var readFile = function readFile(fs, filePath) {
  if ((0, _directoryOperations.hasDirectory)(fs, filePath)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.IS_A_DIRECTORY)
    };
  }

  if (!hasFile(fs, filePath)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_FILE)
    };
  }

  return {
    file: fs.get(filePath)
  };
};
/**
 * Write a new file to the file system
 * @param  {Map}     fs                            file system
 * @param  {string}  filePath                      path to new file
 * @param  {Map}     file                          the new file
 * @return {object}                                file system or an error
 */


exports.readFile = readFile;

var writeFile = function writeFile(fs, filePath, file) {
  return BaseOp.add(fs, filePath, file);
};
/**
 * Copies a file from a source directory to a destination directory
 * @param  {Map}    fs           file system
 * @param  {string} sourcePath   path to source file (to copy from)
 * @param  {string} destPath     path to destination file (to copy to)
 * @return {object}              file system or an error
 */


exports.writeFile = writeFile;

var copyFile = function copyFile(fs, sourcePath, destPath) {
  if (!hasFile(fs, sourcePath)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_FILE, 'Source file does not exist')
    };
  }

  var pathParent = PathUtil.getPathParent(destPath);

  if (!(0, _directoryOperations.hasDirectory)(fs, pathParent)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_DIRECTORY, 'Destination directory does not exist')
    };
  }

  if ((0, _directoryOperations.hasDirectory)(fs, destPath)) {
    // Copying file to directory without specifying the filename explicitly
    var sourceFileName = PathUtil.getLastPathPart(sourcePath);
    destPath = destPath === '/' ? "/".concat(sourceFileName) : "".concat(destPath, "/").concat(sourceFileName);
  }

  return {
    fs: fs.set(destPath, fs.get(sourcePath))
  };
};
/**
 * Removes a file from the file system
 * @param  {Map}    fs       file system
 * @param  {string} filePath path to the file to delete
 * @return {object}          file system or an error
 */


exports.copyFile = copyFile;

var deleteFile = function deleteFile(fs, filePath) {
  if ((0, _directoryOperations.hasDirectory)(fs, filePath)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.IS_A_DIRECTORY)
    };
  }

  if (!hasFile(fs, filePath)) {
    return {
      err: (0, _fsError.makeError)(_fsError.fsErrorType.NO_SUCH_FILE)
    };
  }

  return BaseOp.remove(fs, filePath);
};

exports.deleteFile = deleteFile;

/***/ }),

/***/ "./src/fs/util/file-util.js":
/*!**********************************!*\
  !*** ./src/fs/util/file-util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_400593__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDirectory = exports.makeFile = exports.isDirectory = exports.isFile = void 0;

var _immutable = __nested_webpack_require_400593__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Checks if a JavaScript object is a file object
 * @param  {object}  json potential file
 * @return {boolean}      whether the object conforms to the file schema
 */
var isFile = function isFile(map) {
  return map.has('content');
};
/**
 * Checks if a JavaScript object is a directory object
 * @param  {object}  json potential directory
 * @return {boolean}      whether the object conforms to the directory schema
 */


exports.isFile = isFile;

var isDirectory = function isDirectory(map) {
  return !map.has('content');
};
/**
 * Makes an file conforming to the file schema
 * @param  {object} content  content of the file
 * @return {object}          new file
 */


exports.isDirectory = isDirectory;

var makeFile = function makeFile() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var metadata = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _immutable.fromJS)(_objectSpread({
    content: content
  }, metadata));
};
/**
 * Makes an directory conforming to the directory schema
 * @param  {object} children child directories or files
 * @return {object}          new directory
 */


exports.makeFile = makeFile;

var makeDirectory = function makeDirectory() {
  var metadata = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _immutable.fromJS)(_objectSpread({}, metadata));
};

exports.makeDirectory = makeDirectory;

/***/ }),

/***/ "./src/fs/util/glob-util.js":
/*!**********************************!*\
  !*** ./src/fs/util/glob-util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_403669__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.captureGlobPaths = exports.globPaths = exports.globSeq = exports.glob = void 0;

var _minimatch = _interopRequireDefault(__nested_webpack_require_403669__(/*! minimatch */ "./node_modules/minimatch/minimatch.js"));

var _minimatchCapture = _interopRequireDefault(__nested_webpack_require_403669__(/*! minimatch-capture */ "./node_modules/minimatch-capture/index.js"));

var _immutable = __nested_webpack_require_403669__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GLOB_OPTIONS = {
  dot: true
};

var glob = function glob(str, globPattern) {
  return (0, _minimatch["default"])(str, globPattern, GLOB_OPTIONS);
};

exports.glob = glob;

var globSeq = function globSeq(seq, globPattern) {
  return seq.filter(function (path) {
    return (0, _minimatch["default"])(path, globPattern, GLOB_OPTIONS);
  });
};

exports.globSeq = globSeq;

var globPaths = function globPaths(fs, globPattern) {
  return globSeq(fs.keySeq(), globPattern);
};

exports.globPaths = globPaths;

var captureGlobPaths = function captureGlobPaths(fs, globPattern) {
  var filterCondition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (path) {
    return true;
  };
  return fs.keySeq().reduce(function (captures, path) {
    if (filterCondition(path)) {
      var pathCaptures = (0, _minimatchCapture["default"])(path, globPattern, GLOB_OPTIONS);

      if (pathCaptures) {
        return captures.concat(pathCaptures);
      }
    }

    return captures;
  }, (0, _immutable.List)());
};

exports.captureGlobPaths = captureGlobPaths;

/***/ }),

/***/ "./src/fs/util/path-util.js":
/*!**********************************!*\
  !*** ./src/fs/util/path-util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toAbsolutePath = exports.splitFilePath = exports.getLastPathPart = exports.getPathParent = exports.getPathBreadCrumbs = exports.toPath = exports.toPathParts = exports.isAbsPath = exports.removeTrailingSeparator = exports.isTrailingPath = void 0;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Tests if a path is a trailing path.
 *
 * A trailing path ends with a trailing slash (/) and excludes the root
 * directory (/).
 * @param  {string}  path path with or without a trailing slash
 * @return {Boolean}      true, if the path is a trailing path
 */
var isTrailingPath = function isTrailingPath(path) {
  return path.endsWith('/') && path !== '/';
};
/**
 * Removes a trailing slash (/) from a path
 * @param  {string} path path with or without a trailing /
 * @return {string}      path without trailing /
 */


exports.isTrailingPath = isTrailingPath;

var removeTrailingSeparator = function removeTrailingSeparator(path) {
  if (path.endsWith('/') && path !== '/') {
    return path.slice(0, -1);
  }

  return path;
};
/**
 * Tests if a path is absolute
 * @param  {string}  path
 * @return {boolean}
 */


exports.removeTrailingSeparator = removeTrailingSeparator;

var isAbsPath = function isAbsPath(path) {
  return path.startsWith('/');
};
/**
 * Converts a path to an ordered array of folders and files.
 *
 * Example: Parts of '/a/b/c/e.txt' has parts of ['/', 'a', 'b', 'c', 'e.txt']
 *
 * A relative path splits parts at /. An absolute path splits at / and also
 * considers the root directory (/) as a part of the path.
 * @param  {string} path [description]
 * @return {array}       list of path parts
 */


exports.isAbsPath = isAbsPath;

var toPathParts = function toPathParts(path) {
  if (path === '/') {
    return ['/'];
  }

  ;
  path = removeTrailingSeparator(path);
  var pathParts = path.split('/');

  if (isAbsPath(path)) {
    var _pathParts = _toArray(pathParts),
        nonRootPathParts = _pathParts.slice(1);

    return ['/'].concat(_toConsumableArray(nonRootPathParts));
  }

  return pathParts;
};
/**
 * Converts path parts back to a path
 * @param  {array} pathParts path parts
 * @return {string}          path
 */


exports.toPathParts = toPathParts;

var toPath = function toPath(pathParts) {
  if (pathParts[0] === '/') {
    // absolute path
    var _pathParts2 = _toArray(pathParts),
        nonRootPathParts = _pathParts2.slice(1);

    return "/".concat(nonRootPathParts.join('/'));
  }

  return pathParts.join('/');
};
/**
 * Find breadcrumb paths, i.e. all paths that need to be walked to get to
 * the specified path
 * Example: /a/b/c will have breadcrumb paths of '/', '/a', '/a/b', '/a/b/c'
 * @param  {string} path path to a directory
 * @return {array}       list of paths that lead up to a path
 */


exports.toPath = toPath;

var getPathBreadCrumbs = function getPathBreadCrumbs(path) {
  var pathParts = toPathParts(path);

  if (pathParts.length <= 1) {
    return ['/'];
  }

  var _pathParts3 = _toArray(pathParts),
      secondPathPart = _pathParts3[1],
      pathPartsWithoutRoot = _pathParts3.slice(2);

  return pathPartsWithoutRoot.reduce(function (breadCrumbs, pathPart) {
    var previousBreadCrumb = breadCrumbs[breadCrumbs.length - 1];
    return [].concat(_toConsumableArray(breadCrumbs), ["".concat(previousBreadCrumb, "/").concat(pathPart)]);
  }, ['/', "/".concat(secondPathPart)]);
};
/**
 * Removes the file name from the end of a file path, returning the path to the
 * directory of the file
 * @param  {string} filePath path which ends with a file name
 * @return {string}          directory path
 */


exports.getPathBreadCrumbs = getPathBreadCrumbs;

var getPathParent = function getPathParent(filePath) {
  if (filePath === '/') {
    return '/';
  }

  var pathParts = toPathParts(filePath); // converts path string to array

  var pathPartsWithoutFileName = pathParts.slice(0, -1); // removes last element of array

  return toPath(pathPartsWithoutFileName);
};
/**
 * Extracts the file name from the end of the file path
 * @param  {string} filePath path which ends with a file name
 * @return {string}          file name from the path
 */


exports.getPathParent = getPathParent;

var getLastPathPart = function getLastPathPart(filePath) {
  var pathParts = toPathParts(filePath); // converts path string to array

  return pathParts[pathParts.length - 1];
};
/**
 * Extracts the file name and directory path from a file path
 * @param  {string} filePath path which ends with a file name
 * @return {object}          object with directory and file name
 */


exports.getLastPathPart = getLastPathPart;

var splitFilePath = function splitFilePath(filePath) {
  return {
    'dirPath': getPathParent(filePath),
    'fileName': getLastPathPart(filePath)
  };
};
/**
 * Converts a relative path to an absolute path
 * @param  {string} relativePath
 * @param  {string} cwd          current working directory
 * @return {string}              absolute path
 */


exports.splitFilePath = splitFilePath;
var GO_UP = '..';
var CURRENT_DIR = '.';

var isStackAtRootDirectory = function isStackAtRootDirectory(stack) {
  return stack.length === 1 && stack[0] === '/';
};

var toAbsolutePath = function toAbsolutePath(relativePath, cwd) {
  relativePath = removeTrailingSeparator(relativePath);
  var pathStack = isAbsPath(relativePath) ? [] : toPathParts(cwd);

  var _iterator = _createForOfIteratorHelper(toPathParts(relativePath)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var pathPart = _step.value;

      if (pathPart === GO_UP) {
        if (!isStackAtRootDirectory(pathStack)) {
          pathStack.pop();
        }
      } else if (pathPart !== CURRENT_DIR) {
        pathStack.push(pathPart);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return toPath(pathStack);
};

exports.toAbsolutePath = toAbsolutePath;

/***/ }),

/***/ "./src/fs/util/permission-util.js":
/*!****************************************!*\
  !*** ./src/fs/util/permission-util.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_414344__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canModifyPath = void 0;

var PathUtil = _interopRequireWildcard(__nested_webpack_require_414344__(/*! fs/util/path-util */ "./src/fs/util/path-util.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DEFAULT_PERMISSION = true;
/**
 * Checks if a single path can be modified by checking the 'canModify' key held
 * in the path.
 *
 * This does NOT check parents of the path.
 * @param  {Map}     fs   file system
 * @param  {string}  path path to check for modification permission
 * @return {Boolean}      true, if a single path can be modified
 */

var isModificationAllowed = function isModificationAllowed(fs, path) {
  var directory = fs.get(path, null);

  if (directory) {
    var canModify = directory.get('canModify', DEFAULT_PERMISSION);

    if (!canModify) {
      return false;
    }
  }

  return true;
};
/**
 * Checks if a path and its parents can be modified.
 * @param  {Map}     fs   file systems
 * @param  {String}  path path to a directory or file
 * @return {Boolean}      true, if the path and its parents can be modified
 */


var canModifyPath = function canModifyPath(fs, path) {
  var breadCrumbPaths = PathUtil.getPathBreadCrumbs(path);

  var _iterator = _createForOfIteratorHelper(breadCrumbPaths),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var breadCrumbPath = _step.value;

      if (!isModificationAllowed(fs, breadCrumbPath)) {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
};

exports.canModifyPath = canModifyPath;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_419018__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Emulator", {
  enumerable: true,
  get: function get() {
    return _emulator["default"];
  }
});
Object.defineProperty(exports, "HistoryKeyboardPlugin", {
  enumerable: true,
  get: function get() {
    return _HistoryKeyboardPlugin["default"];
  }
});
Object.defineProperty(exports, "EmulatorState", {
  enumerable: true,
  get: function get() {
    return _emulatorState.EmulatorState;
  }
});
Object.defineProperty(exports, "CommandMapping", {
  enumerable: true,
  get: function get() {
    return _emulatorState.CommandMapping;
  }
});
Object.defineProperty(exports, "EnvironmentVariables", {
  enumerable: true,
  get: function get() {
    return _emulatorState.EnvironmentVariables;
  }
});
Object.defineProperty(exports, "FileSystem", {
  enumerable: true,
  get: function get() {
    return _emulatorState.FileSystem;
  }
});
Object.defineProperty(exports, "History", {
  enumerable: true,
  get: function get() {
    return _emulatorState.History;
  }
});
Object.defineProperty(exports, "Outputs", {
  enumerable: true,
  get: function get() {
    return _emulatorState.Outputs;
  }
});
Object.defineProperty(exports, "OutputFactory", {
  enumerable: true,
  get: function get() {
    return _emulatorOutput.OutputFactory;
  }
});
Object.defineProperty(exports, "OutputType", {
  enumerable: true,
  get: function get() {
    return _emulatorOutput.OutputType;
  }
});
Object.defineProperty(exports, "DirOp", {
  enumerable: true,
  get: function get() {
    return _fs.DirOp;
  }
});
Object.defineProperty(exports, "FileOp", {
  enumerable: true,
  get: function get() {
    return _fs.FileOp;
  }
});
Object.defineProperty(exports, "OptionParser", {
  enumerable: true,
  get: function get() {
    return _parser.OptionParser;
  }
});
Object.defineProperty(exports, "defaultCommandMapping", {
  enumerable: true,
  get: function get() {
    return _commands["default"];
  }
});

var _emulator = _interopRequireDefault(__nested_webpack_require_419018__(/*! emulator */ "./src/emulator/index.js"));

var _HistoryKeyboardPlugin = _interopRequireDefault(__nested_webpack_require_419018__(/*! emulator/plugins/HistoryKeyboardPlugin */ "./src/emulator/plugins/HistoryKeyboardPlugin.js"));

var _emulatorState = __nested_webpack_require_419018__(/*! emulator-state */ "./src/emulator-state/index.js");

var _emulatorOutput = __nested_webpack_require_419018__(/*! emulator-output */ "./src/emulator-output/index.js");

var _fs = __nested_webpack_require_419018__(/*! fs */ "./src/fs/index.js");

var _parser = __nested_webpack_require_419018__(/*! parser */ "./src/parser/index.js");

var _commands = _interopRequireDefault(__nested_webpack_require_419018__(/*! commands */ "./src/commands/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./src/parser/command-parser.js":
/*!**************************************!*\
  !*** ./src/parser/command-parser.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.parseCommands = void 0;

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Removes excess whitespace (> 1 space) from edges of string and inside string.
 * @param  {string} str string
 * @return {string}     string without > 1 space of whitespace
 */
var removeExcessWhiteSpace = function removeExcessWhiteSpace(str) {
  return str.trim().replace(/\s\s+/g, ' ');
};
/**
 * Places the command name and each following argument into a list
 * @param  {string} command sh command
 * @return {array}          command name and arguments (if any)
 */


var toCommandParts = function toCommandParts(command) {
  return removeExcessWhiteSpace(command).split(/\s/);
};
/**
 * Creates a list of commands split into the command name and arguments
 * @param  {string} commands command input
 * @return {array}           list of parsed command
 */


var parseCommands = function parseCommands(commands) {
  return commands.split(/&&|;/) // split command delimiters: `&&` and `;`
  .map(function (command) {
    return toCommandParts(command);
  }).map(function (_ref) {
    var _ref2 = _toArray(_ref),
        commandName = _ref2[0],
        commandOptions = _ref2.slice(1);

    return {
      commandName: commandName,
      commandOptions: commandOptions
    };
  });
};

exports.parseCommands = parseCommands;
var _default = parseCommands;
exports["default"] = _default;

/***/ }),

/***/ "./src/parser/index.js":
/*!*****************************!*\
  !*** ./src/parser/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_424915__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var OptionParser = _interopRequireWildcard(__nested_webpack_require_424915__(/*! parser/option-parser */ "./src/parser/option-parser.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  OptionParser: OptionParser
};
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/parser/option-parser.js":
/*!*************************************!*\
  !*** ./src/parser/option-parser.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_426878__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.parseOptions = void 0;

var _getOptions = _interopRequireDefault(__nested_webpack_require_426878__(/*! get-options */ "./node_modules/get-options/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates an options object with bindings based on optDefs
 * @param  {string} commandOptions string representation of command arguments
 * @param  {object} optDef         see get-options documentation for schema details
 * @return {object}                options object
 */
var parseOptions = function parseOptions(commandOptions, optDef) {
  return (0, _getOptions["default"])(commandOptions, optDef, {
    noAliasPropagation: 'first-only'
  });
};

exports.parseOptions = parseOptions;
var _default = parseOptions;
exports["default"] = _default;

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_427997__) {

module.exports = __nested_webpack_require_427997__(/*! /Users/user/PersonalCode/javascript-terminal/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=terminal.js.map

/***/ }),

/***/ "./resources/sass/main.sass":
/*!**********************************!*\
  !*** ./resources/sass/main.sass ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/terminal/main.sass":
/*!*******************************************!*\
  !*** ./resources/sass/terminal/main.sass ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/terminal/normalize.sass":
/*!************************************************!*\
  !*** ./resources/sass/terminal/normalize.sass ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/terminal/main": 0,
/******/ 			"css/terminal/normalize": 0,
/******/ 			"css/terminal/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/terminal/normalize","css/terminal/main","css/main"], () => (__webpack_require__("./resources/js/terminal/main.js")))
/******/ 	__webpack_require__.O(undefined, ["css/terminal/normalize","css/terminal/main","css/main"], () => (__webpack_require__("./resources/sass/main.sass")))
/******/ 	__webpack_require__.O(undefined, ["css/terminal/normalize","css/terminal/main","css/main"], () => (__webpack_require__("./resources/sass/terminal/main.sass")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/terminal/normalize","css/terminal/main","css/main"], () => (__webpack_require__("./resources/sass/terminal/normalize.sass")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;