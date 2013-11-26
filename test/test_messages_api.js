'use strict';

var should = require('chai').should(),
    supertest = require('supertest'),
    config = require('../env');

describe('/message', function() {

    var api = supertest('http://localhost:'+config.port); 

  it('returns message for given id as JSON', function(done) {
    api.get('/api/v1/message/121')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.have.property('message').and.be.instanceof(Array);
      done();
    });
  });

});