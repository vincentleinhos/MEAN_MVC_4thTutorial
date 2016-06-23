module.exports = function(app) {
    var index = require('../controllers/index.server.controller');

	// `pageType` should always exist, otherwise EJS will throw an ReferenceError
	// http://expressjs.com/en/4x/api.html#app.locals
	app.locals.pageType = 'index'; // use the 'index.ejs' header as default

    app.get('*', index.render);
};