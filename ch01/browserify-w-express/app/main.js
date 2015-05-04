
// Browserify will import Backbone from node_modules folder and assign it to
// variable 'bb'.

    var bb = require('backbone');

// To require myModule, you need to specified its location in file system
// with path reative to folder 'node_module'. This is because
// root folder for browserify is 'node_modules', while 'app' folder
// is outside 'node_modules':

    var myModule = require('../app/myModule');
    console.log(myModule());

// The content of this file is require-able by other file as
// a module by exporting it:

    module.exports = function() {
        return {
            note:'this string is exported by app/main.js',
            myModule : myModule,
            backbone: bb
        }
    };

// To get browserify to bundle (or package) your modules into one file,
// you type the following in terminal:
//
//      $ browserify -r ./app/main > static/bundle.js
//
// Browserfy will save the bundle of your modules in 'static/bundle
// js', which can be loaded into browser in 'index.html' via:
//
//      <script src="static/bundle.js"></script>
//
// With bundle.js loaded, the export of this module can be required
// with:
//
//       var main = require('/app/main');
//
// You can alias the path '/app/main' used to requiring main.js
// via:
//
//      $ browserify -r ./app/main:myApp > static/bundle.js
//
// now you can load main.js via
//
//      var main = require('myApp');
//

