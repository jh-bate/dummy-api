'use strict';

exports.findById = function(req, res, next) {
	console.log('request', req.params, req.url, req.method);
	return next();
};

exports.add = function(req, res, next) {
	console.log('request', req.params, req.url, req.method);
	return next();
};