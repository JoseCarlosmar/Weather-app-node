const argv = require('yargs').options({
    city: {
        alias: 'c',
        demand: true,
        desc: 'City that get weather'
    }
}).argv

module.exports = {
    argv
}