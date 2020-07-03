module.exports = function (options) {
    return function (req, res, next) {
        console.log(JSON.stringify(options))
        next()
    }
}