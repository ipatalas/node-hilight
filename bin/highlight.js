const util = require('util');
const color = require('colors');
const split = require("split");
const Transform = require('stream').Transform;

util.inherits(HighlightWords, Transform);

var regex = process.argv[2] || null;

process.stdin.setEncoding("utf8");

process.stdin
	.pipe(split())
	.pipe(new HighlightWords({ regex: regex }))
	.pipe(process.stdout);

function HighlightWords(options) {
	Transform.call(this, { "objectMode": true });
	
	this._regex = options.regex;
}

HighlightWords.prototype._transform = function (line, encoding, callback) {
  if (this._regex) {
	line = line.replace(this._regex, m => m.yellow);
  }
  callback(null, line + "\n");
};