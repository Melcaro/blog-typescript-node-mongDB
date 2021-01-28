
function routes(app) {
    app.use('/api/v1/posts')
    app.use('/api/v1/categoriesAndTags')
}

module.exports = routes