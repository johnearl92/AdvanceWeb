module.exports = function (grunt) {

	grunt.initConfig({
		/* --------------------------------------------------------------------------------
		 * Cleans javascript output directories
		 * -------------------------------------------------------------------------------- */
		clean: {
			build: {
				src: ['src/main/webapp/scripts/main.js',
                      'src/main/webapp/scripts/controller.js',
                      'src/main/webapp/scripts/model.js',
                      'src/main/webapp/scripts/service.js',
                      'src/main/webapp/scripts/controller/*',
                      'src/main/webapp/scripts/service/*',
                      'src/main/webapp/scripts/model/*']
			},
			test: {
				src: ['src/test/javascript']
			}
		},

		/* --------------------------------------------------------------------------------
		 * Typescript Compilation
		 * -------------------------------------------------------------------------------- */
		typescript: {
			base: {
				src    : ['src/main/typescript/main/main.ts'],
				dest   : ['src/main/webapp/scripts'],
				options: {
					target          : 'es5',
					base_path       : 'src/main/typescript/main',
					sourcemap       : false,
					declaration_file: false
				}
			},
			test: {
				src    : ['src/test/typescript/test-spec.ts'],
				dest   : 'src/test/javascript/main-spec.js',
				options: {
					target          : 'es5',
					sourcemap       : false,
					declaration_file: false
				}
			}
		},

		/* --------------------------------------------------------------------------------
		 * Karma Testing
		 * -------------------------------------------------------------------------------- */
		karma: {
			unit: {
				options: {
					configFile : 'src/test/resources/karma.conf.js',
					autoWatch  : false,
					browsers   : ['PhantomJS'],
					reporters  : ['progress', 'junit', 'coverage'],
					singleRun  : true,
					keepalive  : true
				}
			}
		},

		/* --------------------------------------------------------------------------------
		 * Execute Command Line Shells
		 * -------------------------------------------------------------------------------- */
		exec: {
			bower: {
				cmd: function() {
					return 'bower install';
				}
			}
		},

		/* --------------------------------------------------------------------------------
		 * Uglify sources
		 * -------------------------------------------------------------------------------- */
		uglify: {
			dev: {
				options: {
					report           : 'min',
					mangle           : false,
					preserveComments : 'some',
					sourceMap        : 'src/main/webapp/scripts/source.js.map',
					sourceMapRoot    : '',
					sourceMappingURL : 'source.js.map'
				},
				files: {
					'src/main/webapp/scripts/main.min.js': [
						'src/main/webapp/scripts/controller/**/*.js',
						'src/main/webapp/scripts/model/**/*.js',
						'src/main/webapp/scripts/service/**/*.js',
						'src/main/webapp/scripts/controller.js',
						'src/main/webapp/scripts/service.js',
						'src/main/webapp/scripts/model.js',
						'src/main/webapp/scripts/main.js'
						]
				}
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask(
		'setup',
			"Cleans all previously generated JS scripts from typescript",
			['clean:build']);

	grunt.registerTask(
		'setupTest',
			"Cleans all previously generated JS scripts from typescript for unit testing",
			['clean:test']);

	grunt.registerTask(
		'compile',
			"Compiles all typescript scripts",
			['typescript:base', 'uglify:dev']);

	grunt.registerTask(
		'bower',
			"Installs all dependencies of the application via bower package manager",
			['exec:bower']);

	grunt.registerTask(
		'build',
			"Default task to run if no task name is specified",
			['setup', 'compile']);

	grunt.registerTask(
		'buildTest',
			'Compiles ony test scripts',
			['setup', 'setupTest', 'typescript:base', 'typescript:test']);

	grunt.registerTask(
		'default',
			'Compile and Run unit test scripts',
			['setup', 'setupTest', 'typescript:base', 'typescript:test', 'uglify:dev', 'karma']);

	grunt.registerTask(
		'noTest',
			'Compile and Run unit test scripts',
			['setup', 'setupTest', 'typescript:base', 'typescript:test', 'uglify:dev']);

};