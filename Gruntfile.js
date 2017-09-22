'use-strict';
module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },
                files: {
                    "site/styles/css/styles.css": "site/styles/less/styles.less"
                }
            }
        },
        watch: {
            styles: {
                files: ['site/styles/less/**/*.less', 'site/js/custom.js'],
                tasks: ['less', 'cssmin', 'uglify']
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
		        'site/js/scripts.min.js':
				[
					'bower_components/bootstrap/js/transition.js',
					'bower_components/bootstrap/js/alert.js',
					'bower_components/bootstrap/js/button.js',
					'bower_components/bootstrap/js/carousel.js',
					'bower_components/bootstrap/js/collapse.js',
					'bower_components/bootstrap/js/dropdown.js',
					'bower_components/bootstrap/js/modal.js',
					'bower_components/bootstrap/js/tooltip.js',
					'bower_components/bootstrap/js/popover.js',
					'bower_components/bootstrap/js/scrollspy.js',
					'bower_components/bootstrap/js/tab.js',
					'bower_components/bootstrap/js/affix.js',
					'site/js/custom.js'
				]
		      }
		    }
		},
		browserSync: {
		    bsFiles: {
		        src : [
					'site/index.html',
					'site/styles/css/styles.min.css'
				]
		    },
		    options: {
				watchTask: true,
		        server: {
		            baseDir: "site/"
		        }
		    }
		},
		copy: {
		  main: {
			  files: [
				  {
					expand: true,
		  			cwd: 'bower_components/jquery/dist/',
		  		    src: 'jquery.min.js',
		  		    dest: 'site/js/',
				},
				{
				  expand: true,
				  cwd: 'bower_components/bootstrap/dist/fonts/',
				  src: '**',
				  dest: 'site/styles/fonts/',
			  	},
				{
				  expand: true,
				  cwd: 'bower_components/components-font-awesome/css',
				  src: 'font-awesome.min.css',
				  dest: 'site/styles/css/',
			  	},
				{
				  expand: true,
				  cwd: 'bower_components/components-font-awesome/fonts',
				  src: '**',
				  dest: 'site/styles/fonts/',
			  	}
			  ],

		  }
		}
		// Css Linter
        // csslint: {
        //     strict: {
        //         options: {
        //             import: 2
        //         },
        //         src: ['site/styles/css/**/*.css']
        //     },
        //     lax: {
        //         options: {
        //             import: false
        //         },
        //         src: ['site/styles/css/**/*.css']
        //     }
        // }
    });
    grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'copy', 'browserSync', 'watch']);
    //grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-browser-sync');
};
