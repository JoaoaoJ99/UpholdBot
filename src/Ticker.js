const request = require("request")
const https = require('https');

const getTicker = function (pair) {
    url = "https://api.uphold.com/v0/ticker/"+pair
    console.log(url)
    request( { url: url}, (err, res, body) => {
        if(err) { 
            return console.log(err) 
        }
        
        console.log(body)
    })
}

module.exports = getTicker