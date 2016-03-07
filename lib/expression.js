const Transform = require('stream').Transform;
const util = require('util');
const chalk = require('chalk');

util.inherits(HighlightExpression, Transform);

function HighlightExpression(options) {
	Transform.call(this, { "objectMode": true });
	
	this._regex = options.plain ? options.expression : new RegExp(options.expression, "g");	
}

HighlightExpression.prototype._transform = function (line, encoding, callback) {
  if (this._regex) {
	line = line.replace(this._regex, m => chalk.green.inverse.bold(m));
  }
  callback(null, line + "\n");
};

module.exports = HighlightExpression;