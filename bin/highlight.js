#!/usr/bin/env node

'use strict';

const split = require('split');
const program = require('commander');
const HighlightExpression = require('../lib/expression');

program
	.version(require('../package.json').version)
	.usage('[options] <search_string>')
	.option('-p, --plain-text', 'Switch off RegExp matching')
	.parse(process.argv);
	
if (!program.args.length) {
	return program.help();
}

var search_string = program.args[0];

process.stdin.setEncoding("utf8");

process.stdin
	.pipe(split(null, null, { trailing: false }))
	.pipe(new HighlightExpression({ expression: search_string, plain: program.plainText }))
	.pipe(process.stdout);

