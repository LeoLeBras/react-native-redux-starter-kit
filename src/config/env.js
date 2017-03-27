const env = "development"; // I've just hardcoded here, so if I wish to change to production, I'd just change this value
var _Environments = {
    production:  {BASE_URL: '', API_KEY: ''},
    staging:     {BASE_URL: '', API_KEY: ''},
    development: {BASE_URL: 'http://localhost:8080/', API_KEY: '<api key here>', OTHER_VARS_HERE: ""},
}

function getEnvironment() {
    // ...now return the correct environment
    return _Environments[env]
}

var Environment = getEnvironment()
module.exports = Environment
