'use strict';

var should = require('chai').should(),
    supertest = require('supertest'),
    api = supertest('http://localhost:5000');

describe('/message', function() {

  it('returns message for given id as JSON', function(done) {
    api.get('/message')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.have.property('message').and.be.instanceof(Array);
      done();
    });
  });

});