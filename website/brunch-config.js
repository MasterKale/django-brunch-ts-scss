/* Customize these */
var watchDirectory = "frontend";

// This'll help us remove the app name from require() statements
var regex = new RegExp('^' + watchDirectory + '\/');

module.exports = {
    files: {
        javascripts: { joinTo: 'app.js' },
        stylesheets: { joinTo: 'app.css' }
    },
    paths: {
        watched: [watchDirectory],
        public: './static'
    },
    modules: {
    	nameCleaner: function(path) { return path.replace(regex, ''); }
    }
}
