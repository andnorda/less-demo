module.exports = function(grunt) {
	'use strict';

	require('matchdep').filterDev('grunt-!(cli)').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		less: {
			dev: {
				options: {
					sourceMap: true,
					sourceMapFilename: 'main.map'
				},
				files: {
					'main.css': 'main.less'
				}
			}
		},
		watch: {
			all: {
				files: ['*.less'],
				tasks: ['less'],
			}
		}
	});

	grunt.registerTask('default', ['less', 'watch']);
};
