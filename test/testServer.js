const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/flower';
let flower = {path:'', title:''}; 

describe('test GET api', function(){
    it('returns statusCode of 200', function(done){
        request(url, function(error, response, body){
            if (error) {
                done(error);
            } else {
                expect(response.statusCode).to.equal(200);
                done();
            }
        });
    });
});


describe('test POST api', function() {
    it('returns statusCode of 200', function(done) {
        const data = {
            path:'images/flower-1.jpeg',
            title:'flower for testing'
        };
        const options = {
            url: url,
            method: 'POST',
            json: true,
            body: data
        };
        request(options, function(error, response, body) {
            if (error) {
                done(error);
            } else {
                expect(response.statusCode).to.equal(200);
                done();
            }
        });
    });
});


