// Testacular configuration
// Generated on Wed Jan 23 2013 13:03:48 GMT+0900 (JST)

module.exports = function (config) {

	// base path, that will be used to resolve files and exclude
	basePath = '../../';

	frameworks = ["qunit"];

	// list of files / patterns to load in the browser
	files = [
	    QUNIT,
	    QUNIT_ADAPTER,
		'http://www.google.com/jsapi',
		'main/webapp/scripts/libs/jquery/jquery.js',
		'main/webapp/scripts/libs/angular/angular.js',
		'main/webapp/scripts/libs/angular-mocks/angular-mocks.js',
		'main/webapp/scripts/libs/sinonjs/sinon.js',
		'main/webapp/scripts/libs/sinon-qunit/pkg/sinon-qunit-1.0.0.js',
		'main/webapp/scripts/libs/pubsubjs/pubsub.js',
		'main/webapp/scripts/controller/**/*.js',
		'main/webapp/scripts/model/**/*.js',
		'main/webapp/scripts/service/**/*.js',
		'main/webapp/scripts/*.js',
		'test/javascript/*-spec.js'
	];

	// list of files to exclude
	exclude = [
		'main/webapp/scripts/main.min.js'
	];

	preprocessors = {
		'**/webapp/scripts/**/*.js' : 'coverage'
	};


	// test results reporter to use
	// possible values: 'dots', 'progress', 'junit'
	reporters = ['progress', 'junit', 'coverage'];

	junitReporter = {
	  outputFile: '../target-js/results/test-results.xml'
	};

	coverageReporter = {
	  type : 'html',
	  dir  : '../target-js/results/coverage/',
	  file : 'coverage.html'
	};


	// web server port
	port = 8081;


	// cli runner port
	runnerPort = 9100;


	// enable / disable colors in the output (reporters and logs)
	colors = true;


	// level of logging
	// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
	logLevel = LOG_DEBUG;


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch = true;


	// Start these browsers, currently available:
	// - Chrome
	// - ChromeCanary
	// - Firefox
	// - Opera
	// - Safari (only Mac)
	// - PhantomJS
	// - IE (only Windows)
	browsers = ['Chrome', 'PhantomJS'];


	// If browser does not capture in given timeout [ms], kill it
	captureTimeout = 5000;


	// Continuous Integration mode
	// if true, it capture browsers, run tests and exit
	singleRun = false;

}