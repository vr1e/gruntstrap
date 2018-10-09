'use-strict';
module.exports = function (grunt) {
	require('jit-grunt')(grunt);
	grunt.initConfig({
		clean: {
			dest: ['dest/**']},
		watch: {
			styles: {
				files: ['src/styles/sass/*.scss', 'src/js/*.js', 'src/*.html', 'src/img/**'],
				tasks: ['sass', 'copy:track']
			}
		},
		browserSync: {
			bsFiles: {
				src: [
					'dest/*.html',
					'dest/styles/styles.css',
					'dest/js/scripts.js'
				]
			},
			options: {
				watchTask: true,
				server: {
					baseDir: './dest'
				}
			}
		},
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'bower_components/jquery/dist/',
					src: 'jquery.min.js',
					dest: 'dest/lib/js/',
				}, {
					expand: true,
					cwd: 'bower_components/bootstrap-sass/assets/javascripts/',
					src: 'bootstrap.min.js',
					dest: 'dest/lib/js/',
				}, {
					expand: true,
					cwd: 'bower_components/bootstrap-sass/assets/stylesheets/',
					src: '**',
					dest: 'src/styles/sass/bootstrap/',
				}, {
					expand: true,
					cwd: 'bower_components/bootstrap-sass/assets/fonts/bootstrap/',
					src: '**',
					dest: 'dest/lib/fonts/',
				}, {
					expand: true,
					cwd: 'bower_components/components-font-awesome/css',
					src: 'font-awesome.min.css',
					dest: 'dest/lib/css/',
				}, {
					expand: true,
					cwd: 'bower_components/components-font-awesome/fonts',
					src: '**',
					dest: 'dest/lib/fonts/',
				}, {
					expand: true,
					cwd: 'src/js/lib/',
					src: '*.js',
					dest: 'dest/lib/js/',
				}, {
					expand: true,
					cwd: 'src/',
					src: '*.html',
					dest: 'dest/',
				}, {
					expand: true,
					cwd: 'src/img/',
					src: '**',
					dest: 'dest/img/',
				}, {
					expand: true,
					cwd: 'src/js/',
					src: '*.js',
					dest: 'dest/js/',
				}, {
					expand: true,
					cwd: 'src/img/',
					src: 'favicon.ico',
					dest: 'dest/',
				}]
			},
			track: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: '*.html',
					dest: 'dest/',
				}, {
					expand: true,
					cwd: 'src/js/',
					src: '*.js',
					dest: 'dest/js/',
				}, {
					expand: true,
					cwd: 'src/img/',
					src: '**',
					dest: 'dest/img/',
				}]
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: { // Dictionary of files
					'dest/styles/_bootstrap.css': 'src/styles/sass/bootstrap/_bootstrap.scss',
					'dest/styles/styles.css': 'src/styles/sass/styles.scss'
				}
			}
		}
	});
	grunt.registerTask('default', ['clean:dest', 'copy:main', 'sass', 'browserSync', 'watch']);
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
};