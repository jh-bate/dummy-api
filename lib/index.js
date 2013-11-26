/*
 * == TIDEPOOL LICENSE ==
 * Copyright (C) 2013 Tidepool Project
 * 
 * This source code is subject to the terms of the Tidepool Open Data License, v. 1.0.
 * If a copy of the license was not provided with this file, you can obtain one at:
 *     http://tidepool.org/license/
 * 
 * == TIDEPOOL LICENSE ==
 */
 
(function() {
  'use strict';

  var messages, config, restify, server;

  config = require('../env');
  restify = require('restify');
  messages = require('./routes/messages');

  server = restify.createServer({
    name: 'TidepoolMessages'
  });

  // Two standard restify handler plugins:
  //server.use(restify.bodyParser());

  server.put('/api/v1/message', messages.add);
  server.get('/api/v1/message/:msgid', messages.findById);

  console.log('messages API server serving on port', config.port);
  server.listen(config.port);

}).call(this);
