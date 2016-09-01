// Get the name of the Django app containing the TS and SCSS files from package.json
var djangoAppName = require('./package.json').djangoAppName;
var regex = new RegExp('^' + djangoAppName + '\/');

module.exports = {
    files: {
        javascripts: { joinTo: 'app.js' },
        stylesheets: { joinTo: 'app.css' }
    },
    paths: {
        watched: [djangoAppName],
        public: djangoAppName + '/static'
    },
    modules: {
    	nameCleaner: function(path) { return path.replace(regex, ''); }
    }
}
