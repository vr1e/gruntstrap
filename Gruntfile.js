'use-strict';
module.exports = function(grunt) {
	require('jit-grunt')(grunt);
	grunt.initConfig({
		// less: {
		// 	development: {
		// 		options: {
		// 			compress: false,
		// 			yuicompress: false,
		// 			optimization: 2
		// 		},
		// 		files: {
		// 			'site/styles/css/styles.css': 'site/styles/less/styles.less'
		// 		}
		// 	}
		// },
		watch: {
			styles: {
				files: ['site/styles/sass/**/*.scss', 'site/js/custom.js'],
				tasks: ['sass', 'cssmin', 'uglify']
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'site/styles/css',
					src: ['*.css', '!*.min.css'],
					dest: 'site/styles/css',
					ext: '.min.css'
				}]
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'site/js/scripts.min.js': ['site/js/custom.js']
				}
			}
		},
		browserSync: {
			bsFiles: {
				src: [
					'site/index.html',
					'site/styles/css/styles.min.css',
					'site/js/scripts.min.js'
				]
			},
			options: {
				watchTask: true,
				server: {
					baseDir: 'site/'
				}
			}
		},
		copy: {
			main: {
				files: [{
						expand: true,
						cwd: 'bower_components/jquery/dist/',
						src: 'jquery.min.js',
						dest: 'site/lib/js/',
					},
					{
						expand: true,
						cwd: 'bower_components/bootstrap-sass/assets/javascripts/',
						src: 'bootstrap.min.js',
						dest: 'site/lib/js/',
					}, {
						expand: true,
						cwd: 'bower_components/bootstrap-sass/assets/stylesheets/',
						src: '**',
						dest: 'site/styles/sass/bootstrap/',
					},
					{
						expand: true,
						cwd: 'bower_components/bootstrap-sass/assets/fonts/bootstrap/',
						src: '**',
						dest: 'site/lib/fonts/',
					},
					{
						expand: true,
						cwd: 'bower_components/components-font-awesome/css',
						src: 'font-awesome.min.css',
						dest: 'site/lib/css/',
					},
					{
						expand: true,
						cwd: 'bower_components/components-font-awesome/fonts',
						src: '**',
						dest: 'site/lib/fonts/',
					}
				],
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: { // Dictionary of files
					'site/styles/sass/_bootstrap.css': 'site/styles/sass/bootstrap/_bootstrap.scss',
					'site/styles/css/styles.css': 'site/styles/sass/styles.scss'
				}
			}
		}
	});
	grunt.registerTask('default', ['cssmin', 'uglify', 'copy', 'sass', 'browserSync', 'watch']);
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-sass');
};
